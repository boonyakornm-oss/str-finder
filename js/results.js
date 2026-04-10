import { THEMES, DOMAINS } from './data/themes.js';
import { getSession, clearSession } from './utils.js';

// ── DOM refs ──────────────────────────────────────────────────────────────────
const cardsContainer  = document.getElementById('strength-cards');
const domainSummary   = document.getElementById('domain-summary');
const printBtn        = document.getElementById('print-btn');
const startOverBtn    = document.getElementById('start-over-btn');

// ── Render helpers ─────────────────────────────────────────────────────────────
function renderStrengthCard(rank, themeId, score) {
  const theme  = THEMES[themeId];
  const domain = DOMAINS[theme.domain];
  const pct    = Math.round(score * 100);

  const rankColors = ['#006b62', '#2E7D32', '#4F46E5', '#865400', '#2a6868'];
  const rankColor  = rankColors[rank - 1] || '#006b62';

  return `
    <article class="relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden"
             style="box-shadow: 0px 20px 40px rgba(0,57,57,0.06);">
      <!-- Left accent bar -->
      <div class="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
           style="background-color: ${domain.color};"></div>

      <div class="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
        <!-- Rank badge -->
        <div class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-headline font-black text-lg text-white"
             style="background-color: ${rankColor};">
          ${rank}
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-3 mb-1">
            <h2 class="font-headline font-extrabold text-2xl md:text-3xl text-on-surface leading-tight">
              ${theme.name}
            </h2>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-label font-bold tracking-widest uppercase text-white"
                  style="background-color: ${domain.color};">
              ${domain.label}
            </span>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-on-surface-variant font-body leading-relaxed mb-6">
        ${theme.description}
      </p>

      <!-- Score bar -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant">Strength Score</span>
          <span class="text-sm font-bold text-on-surface">${pct}%</span>
        </div>
        <div class="h-3 rounded-full bg-primary-container overflow-hidden">
          <div class="score-fill h-full rounded-full transition-all duration-1000"
               data-width="${pct}%"
               style="width: 0%; background-color: ${domain.color};"></div>
        </div>
      </div>

      <!-- Action items -->
      <div class="border-t border-outline-variant/20 pt-5">
        <p class="text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant mb-3">How To Apply This Strength</p>
        <ul class="space-y-2">
          ${theme.actionItems.map(item => `
            <li class="flex items-start gap-3">
              <span class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style="background-color: ${domain.color}20;">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" style="color: ${domain.color};">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </span>
              <span class="text-sm text-on-surface-variant leading-relaxed">${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </article>
  `;
}

function renderDomainSummary(topFive) {
  const counts = { EXECUTING: 0, INFLUENCING: 0, RELATIONSHIP_BUILDING: 0, STRATEGIC_THINKING: 0 };
  topFive.forEach(id => {
    const domain = THEMES[id].domain;
    counts[domain]++;
  });

  return Object.entries(DOMAINS).map(([key, domain]) => {
    const count = counts[key];
    const pct   = (count / 5) * 100;
    return `
      <div class="flex items-center gap-4">
        <div class="w-32 flex-shrink-0">
          <p class="text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant truncate">${domain.label}</p>
        </div>
        <div class="flex-1 h-3 rounded-full bg-surface-container-highest overflow-hidden">
          <div class="h-full rounded-full" style="width: ${pct}%; background-color: ${domain.color};"></div>
        </div>
        <span class="flex-shrink-0 text-sm font-bold text-on-surface w-4 text-right">${count}</span>
      </div>
    `;
  }).join('');
}

// ── Init ──────────────────────────────────────────────────────────────────────
function init() {
  const session = getSession();

  if (!session || !session.topFive) {
    window.location.href = 'index.html';
    return;
  }

  // Render strength cards
  cardsContainer.innerHTML = session.topFive
    .map((id, i) => renderStrengthCard(i + 1, id, session.scores[id]))
    .join('');

  // Animate score bars after paint
  const scoreBars = cardsContainer.querySelectorAll('.score-fill');
  scoreBars.forEach(el => el.style.width = '0%');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scoreBars.forEach(el => {
        el.style.width = el.dataset.width;
      });
    });
  });

  // Render domain summary
  domainSummary.innerHTML = renderDomainSummary(session.topFive);
}

// ── Buttons ───────────────────────────────────────────────────────────────────
function startOver() {
  if (confirm('This will erase your results and start a new assessment. Are you sure?')) {
    clearSession();
    window.location.href = 'index.html';
  }
}

printBtn.addEventListener('click', () => window.print());
startOverBtn.addEventListener('click', startOver);

// Secondary buttons at bottom of page
document.getElementById('print-btn-2')?.addEventListener('click', () => window.print());
document.getElementById('start-over-btn-2')?.addEventListener('click', startOver);

init();
