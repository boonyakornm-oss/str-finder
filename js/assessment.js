import { QUESTIONS } from './data/questions.js';
import { THEME_IDS } from './data/themes.js';
import { getSession, saveSession, createSession } from './utils.js';

const TIMER_DURATION = 20000; // 20 seconds
const URGENT_THRESHOLD = 5000; // turn red at 5 seconds

class QuestionTimer {
  constructor(durationMs, onTick, onExpire) {
    this.duration = durationMs;
    this.remaining = durationMs;
    this._onTick = onTick;
    this._onExpire = onExpire;
    this._startTime = null;
    this._raf = null;
  }

  start() {
    this._startTime = performance.now();
    this._tick();
  }

  _tick() {
    const elapsed = performance.now() - this._startTime;
    this.remaining = Math.max(0, this.duration - elapsed);
    this._onTick(this.remaining / this.duration, this.remaining);
    if (this.remaining <= 0) {
      this._onExpire();
    } else {
      this._raf = requestAnimationFrame(() => this._tick());
    }
  }

  stop() {
    if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = null;
    }
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
    this._startTime = null;
  }
}

function computeScores(responses) {
  const raw = {};
  const appearances = {};
  THEME_IDS.forEach(id => { raw[id] = 0; appearances[id] = 0; });

  responses.forEach(({ questionId, response }) => {
    const q = QUESTIONS.find(q => q.id === questionId);
    if (!q) return;

    const aPoints = response === 1 ? 4 : response === 2 ? 2 : 0;
    const bPoints = response === 5 ? 4 : response === 4 ? 2 : 0;

    q.statementA.themes.forEach(t => {
      raw[t] = (raw[t] || 0) + aPoints;
      appearances[t] = (appearances[t] || 0) + 1;
    });
    q.statementB.themes.forEach(t => {
      raw[t] = (raw[t] || 0) + bPoints;
      appearances[t] = (appearances[t] || 0) + 1;
    });
  });

  const normalized = {};
  THEME_IDS.forEach(id => {
    normalized[id] = appearances[id] > 0 ? raw[id] / (appearances[id] * 4) : 0;
  });
  return normalized;
}

function getTopFive(scores) {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([themeId]) => themeId);
}

// ── DOM refs ──────────────────────────────────────────────────────────────────
const progressBar       = document.getElementById('progress-bar');
const progressLabel     = document.getElementById('progress-label');
const timerBar          = document.getElementById('timer-bar');
const timerLabel        = document.getElementById('timer-label');
const stmtA             = document.getElementById('stmt-a');
const stmtB             = document.getElementById('stmt-b');
const scaleButtons      = document.querySelectorAll('.scale-btn');
const questionCard      = document.getElementById('question-card');
const scaleGroup        = document.querySelector('.scale-group');
const instructionsHint  = document.getElementById('instructions-hint');

// ── State ─────────────────────────────────────────────────────────────────────
let session       = null;
let currentIndex  = 0;
let selectedValue = null;

// ── Timer ─────────────────────────────────────────────────────────────────────
const timer = new QuestionTimer(
  TIMER_DURATION,
  (fraction, remaining) => {
    timerBar.style.width = `${fraction * 100}%`;
    const secs = Math.ceil(remaining / 1000);
    timerLabel.textContent = `${secs}s`;

    if (remaining <= URGENT_THRESHOLD) {
      timerBar.classList.add('urgent');
    } else {
      timerBar.classList.remove('urgent');
    }
  },
  () => {
    // Auto-advance with neutral response
    submitResponse(3, true);
  }
);

// ── Core logic ────────────────────────────────────────────────────────────────
function showQuestion(index) {
  const q = QUESTIONS[index];
  selectedValue = null;

  // Hide instructions hint after first question
  if (index > 0 && instructionsHint) {
    instructionsHint.style.display = 'none';
  }

  // Reset button states
  scaleGroup.classList.remove('has-selection');
  scaleButtons.forEach(btn => {
    btn.classList.remove('selected');
    btn.setAttribute('aria-pressed', 'false');
  });

  // Fade out → update → fade in
  questionCard.style.opacity = '0';
  questionCard.style.transform = 'translateY(8px)';

  requestAnimationFrame(() => {
    stmtA.textContent = q.statementA.text;
    stmtB.textContent = q.statementB.text;

    updateProgress(index);

    requestAnimationFrame(() => {
      questionCard.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      questionCard.style.opacity = '1';
      questionCard.style.transform = 'translateY(0)';
    });
  });

  timer.reset();
  timer.start();
}

function updateProgress(index) {
  const pct = ((index) / QUESTIONS.length) * 100;
  progressBar.style.width = `${pct}%`;
  progressLabel.textContent = `${index} / ${QUESTIONS.length}`;
}

function submitResponse(value, timedOut = false) {
  timer.stop();

  const q = QUESTIONS[currentIndex];
  session.responses.push({ questionId: q.id, response: value, timedOut });
  saveSession(session);

  currentIndex++;

  if (currentIndex >= QUESTIONS.length) {
    finishAssessment();
  } else {
    showQuestion(currentIndex);
  }
}

function finishAssessment() {
  session.completedAt = new Date().toISOString();
  session.scores = computeScores(session.responses);
  session.topFive = getTopFive(session.scores);
  saveSession(session);
  window.location.href = 'results.html';
}

// ── Scale button interactions ─────────────────────────────────────────────────
scaleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = parseInt(btn.dataset.value, 10);
    selectedValue = value;

    scaleGroup.classList.add('has-selection');
    scaleButtons.forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('selected');
    btn.setAttribute('aria-pressed', 'true');

    // Small delay for visual feedback, then advance
    setTimeout(() => submitResponse(value), 220);
  });
});

// ── Keyboard navigation ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const keyMap = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 };
  if (keyMap[e.key] !== undefined) {
    const btn = document.querySelector(`.scale-btn[data-value="${keyMap[e.key]}"]`);
    if (btn) btn.click();
    return;
  }

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const vals = [1, 2, 3, 4, 5];
    const cur = selectedValue || 3;
    const idx = vals.indexOf(cur);
    let next = cur;
    if (e.key === 'ArrowLeft' && idx > 0) next = vals[idx - 1];
    if (e.key === 'ArrowRight' && idx < vals.length - 1) next = vals[idx + 1];

    scaleGroup.classList.add('has-selection');
    scaleButtons.forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-pressed', 'false');
    });
    const target = document.querySelector(`.scale-btn[data-value="${next}"]`);
    if (target) {
      target.classList.add('selected');
      target.setAttribute('aria-pressed', 'true');
      selectedValue = next;
    }
  }

  if (e.key === 'Enter' && selectedValue !== null) {
    submitResponse(selectedValue);
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
  session = getSession();
  if (!session) {
    // No session — redirect to welcome
    window.location.href = 'index.html';
    return;
  }

  if (session.completedAt) {
    window.location.href = 'results.html';
    return;
  }

  // Resume from last answered question
  currentIndex = session.responses.length;

  if (currentIndex >= QUESTIONS.length) {
    finishAssessment();
    return;
  }

  showQuestion(currentIndex);
}

init();
