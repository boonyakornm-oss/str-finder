const SESSION_KEY = 'sf_session';

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function createSession() {
  return {
    startedAt: new Date().toISOString(),
    completedAt: null,
    responses: [],
    scores: null,
    topFive: null
  };
}
