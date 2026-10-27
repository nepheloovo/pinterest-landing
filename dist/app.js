(() => {
  'use strict';
  document.documentElement.classList.add('has-js');
  document.querySelectorAll('[data-enhance]').forEach(element => { element.hidden = false; });
  function showImageFailure(image) {
    const frame = image.closest('.idea-picture,.hero-pin,.board-pin');
    if (frame) frame.classList.add('image-failed');
  }
  document.addEventListener('error', event => { if (event.target instanceof HTMLImageElement) showImageFailure(event.target); }, true);
  document.querySelectorAll('img').forEach(image => { if (image.complete && !image.naturalWidth) showImageFailure(image); });
  const cards = [...document.querySelectorAll('[data-idea-id]')];
  const ideas = new Map(cards.map(card => [card.dataset.ideaId, { title: card.dataset.title, image: card.querySelector('img') }]));
  const storageKey = 'pinterest-inspiration-demo-v1';
  let saved = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(stored)) saved = new Set(stored.filter(id => ideas.has(id)));
  } catch { /* The demo also works with memory-only saves. */ }
  let toastTimer;
  function announce(message) {
    const status = document.getElementById('save-status');
    status.textContent = message;
    status.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => status.classList.remove('is-visible'), 2800);
  }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify([...saved])); return true; } catch { return false; }
  }
  function renderBoard() {
    const grid = document.getElementById('board-pins');
    if (!grid) return;
    const restoreFocus = grid.contains(document.activeElement);
    grid.replaceChildren();
    for (const id of saved) {
      const idea = ideas.get(id);
      const pin = document.createElement('figure');
      pin.className = 'board-pin';
      const image = idea.image.cloneNode();
      image.alt = idea.title;
      image.loading = 'lazy';
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'board-remove';
      remove.dataset.remove = id;
      remove.setAttribute('aria-label', `Remove ${idea.title} from demo board`);
      remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg>';
      pin.append(image, remove);
      grid.append(pin);
    }
    document.getElementById('board-count').textContent = saved.size ? `${saved.size} ${saved.size === 1 ? 'idea' : 'ideas'} saved` : 'No ideas saved yet';
    document.getElementById('board-empty').hidden = saved.size > 0;
    document.getElementById('clear-board').hidden = saved.size === 0;
    if (restoreFocus) (grid.querySelector('button') || document.getElementById('board-heading')).focus({ preventScroll: true });
  }
  function sync() {
    document.querySelectorAll('[data-save]').forEach(button => {
      const id = button.dataset.save, active = saved.has(id);
      button.setAttribute('aria-pressed', String(active));
      button.querySelector('span').textContent = active ? 'Saved' : 'Save';
      button.setAttribute('aria-label', `${active ? 'Remove' : 'Save'} ${ideas.get(id)?.title || id} ${active ? 'from' : 'to'} demo board`);
    });
    renderBoard();
  }
  function changeSave(id, removing) {
    if (!ideas.has(id)) return;
    if (removing) saved.delete(id); else saved.add(id);
    const persistent = persist();
    sync();
    announce(persistent ? removing ? 'Removed from your demo board.' : 'Saved to your demo board.' : 'Changes kept for this visit. Your browser could not keep them for next time.');
    document.dispatchEvent(new CustomEvent('board:changed', { detail: { id, removing } }));
  }
  document.addEventListener('click', event => {
    const save = event.target.closest('[data-save]');
    if (save) changeSave(save.dataset.save, saved.has(save.dataset.save));
    const remove = event.target.closest('[data-remove]');
    if (remove) changeSave(remove.dataset.remove, true);
  });
  document.getElementById('clear-board')?.addEventListener('click', () => {
    saved.clear(); persist(); sync();
    document.getElementById('board-heading').focus({ preventScroll: true });
    announce('Your demo board is clear. Save something new.');
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    try {
      const value = JSON.parse(event.newValue || '[]');
      saved = new Set(Array.isArray(value) ? value.filter(id => ideas.has(id)) : []);
      sync();
    } catch { /* Ignore another tab's invalid storage value. */ }
  });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    const count = cards.filter(card => !card.hidden).length;
    document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'idea' : 'ideas'}${filter === 'all' ? ' to start with' : ` in ${button.textContent}`}`;
    document.dispatchEvent(new Event('ideas:changed'));
  }));
  const toggle = document.querySelector('.menu-toggle'), menu = document.getElementById('mobile-menu');
  function closeMenu(restoreFocus = false) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
    if (restoreFocus) toggle.focus();
  }
  toggle?.addEventListener('click', event => {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    menu.hidden = !opening;
    if (opening && event.detail === 0) menu.querySelector('a').focus();
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) closeMenu(true); });
  document.addEventListener('pointerdown', event => { if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
  matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  sync();
})();
