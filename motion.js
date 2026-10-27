(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const rootStyle = getComputedStyle(document.documentElement);
  const time = name => {
    const raw = rootStyle.getPropertyValue(name).trim();
    return parseFloat(raw) * (raw.endsWith('ms') ? 1 : 1000);
  };
  const ease = rootStyle.getPropertyValue('--ease-out').trim();
  const running = new Set();
  function animate(element, frames, duration, delay = 0) {
    if (!element || reduced.matches) return null;
    const animation = element.animate(frames, { duration, delay, easing: ease, fill: 'backwards' });
    running.add(animation);
    animation.finished.catch(() => {}).finally(() => running.delete(animation));
    return animation;
  }
  document.querySelectorAll('.hero-pin').forEach((pin, index) => pin.style.setProperty('--pin-index', index));
  if (!reduced.matches) document.documentElement.classList.add('motion-ready');
  function settleEntrances() {
    const entrances = document.getAnimations().filter(animation => animation.effect?.target?.closest('.hero'));
    for (const animation of new Set([...running, ...entrances])) {
      const timing = animation.effect.getComputedTiming();
      if (!Number.isFinite(timing.endTime)) continue;
      const remaining = Math.max(0, timing.endTime - (animation.currentTime || 0));
      animation.updatePlaybackRate(Math.max(1, remaining / 350));
    }
  }
  ['pointerdown', 'wheel', 'keydown'].forEach(type => window.addEventListener(type, settleEntrances, { once: true, passive: true }));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);
      if (reduced.matches) return;
      entry.target.style.setProperty('--reveal-duration', entry.target.matches('h2') ? 'var(--duration-section-heading)' : 'var(--duration-reveal)');
      entry.target.classList.add('reveal-enter');
      entry.target.addEventListener('animationend', () => entry.target.classList.remove('reveal-enter'), { once: true });
    });
  }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(element => revealObserver.observe(element));
  document.querySelectorAll('.support-faq-item').forEach(details => details.addEventListener('toggle', () => {
    if (details.open) animate(details.querySelector('.support-faq-answer'), [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'translateY(0)' }], time('--duration-feedback'));
  }));
  const header = document.querySelector('.site-header'), hero = document.querySelector('.hero');
  let floating = false, scrollFrame = 0;
  function updateHeader() {
    scrollFrame = 0;
    const next = scrollY > Math.min(360, hero.clientHeight * .32);
    if (next === floating) return;
    floating = next;
    header.classList.toggle('is-floating', next);
    if (next) animate(header, [{ opacity: 0, transform: 'translate(-50%, -10px)' }, { opacity: 1, transform: 'translate(-50%, 0)' }], time('--duration-feedback'));
  }
  window.addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader); }, { passive: true });
  updateHeader();
  const light = document.getElementById('light-canvas');
  let pointerFrame = 0, pointerX = 0, pointerY = 0;
  hero.addEventListener('pointermove', event => {
    if (reduced.matches || event.pointerType !== 'mouse') return;
    const box = hero.getBoundingClientRect();
    pointerX = ((event.clientX - box.left) / box.width - .5) * 16;
    pointerY = ((event.clientY - box.top) / box.height - .3) * 10;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(() => { light.style.transform = `translate3d(${pointerX}px,${pointerY}px,0)`; pointerFrame = 0; });
  });
  hero.addEventListener('pointerleave', () => { light.style.transform = ''; });
  const footer = document.querySelector('.support-footer');
  const spot = document.createElement('div'); spot.className = 'footer-spotlight'; spot.setAttribute('aria-hidden', 'true'); footer?.prepend(spot);
  let spotFrame = 0, spotX = 0, spotY = 0;
  footer?.addEventListener('pointermove', event => {
    if (reduced.matches || event.pointerType !== 'mouse') return;
    const box = footer.getBoundingClientRect(); spotX = event.clientX - box.left - 240; spotY = event.clientY - box.top - 240;
    if (!spotFrame) spotFrame = requestAnimationFrame(() => { spot.style.transform = `translate3d(${spotX}px,${spotY}px,0)`; spot.style.opacity = '.6'; spotFrame = 0; });
  });
  footer?.addEventListener('pointerleave', () => { spot.style.opacity = '0'; });

  const viewport = document.getElementById('idea-viewport'), plane = document.getElementById('idea-plane'), pauseButton = document.getElementById('wall-toggle');
  if (!viewport || !plane || !pauseButton) return;
  document.documentElement.classList.add('has-wall-motion');
  const state = { x: 0, y: 0, maxX: 0, maxY: 0, dx: 1, dy: 1, paused: reduced.matches, hover: false, focus: false, visible: false, dragging: false, momentumX: 0, momentumY: 0 };
  let frame = 0, last = 0, drag = null;
  const clamp = (value, max) => Math.max(0, Math.min(max, value));
  function draw() { plane.style.transform = `translate3d(${-state.x}px,${-state.y}px,0)`; }
  function dimensions() {
    state.maxX = Math.max(0, plane.offsetWidth - viewport.clientWidth);
    state.maxY = Math.max(0, plane.offsetHeight - viewport.clientHeight);
    state.x = clamp(state.x, state.maxX); state.y = clamp(state.y, state.maxY); draw(); kick();
  }
  function autoAllowed() { return !state.paused && !state.hover && !state.focus && !state.dragging; }
  function canRun() { return !document.hidden && state.visible && (Math.abs(state.momentumX) + Math.abs(state.momentumY) > 1 || autoAllowed() && (state.maxX || state.maxY)); }
  function tick(now) {
    frame = 0;
    if (!canRun()) { last = 0; return; }
    const dt = last ? Math.min((now - last) / 1000, .05) : 0; last = now;
    if (Math.abs(state.momentumX) + Math.abs(state.momentumY) > 1) {
      state.x = clamp(state.x + state.momentumX * dt, state.maxX); state.y = clamp(state.y + state.momentumY * dt, state.maxY);
      const decay = Math.pow(.93, dt * 60); state.momentumX *= decay; state.momentumY *= decay;
      if (state.x === 0 || state.x === state.maxX) state.momentumX = 0;
      if (state.y === 0 || state.y === state.maxY) state.momentumY = 0;
    } else if (autoAllowed()) {
      state.x = clamp(state.x + 18 * state.dx * dt, state.maxX); state.y = clamp(state.y + 11 * state.dy * dt, state.maxY);
      if (state.x === 0 || state.x === state.maxX) state.dx *= -1;
      if (state.y === 0 || state.y === state.maxY) state.dy *= -1;
    }
    draw(); frame = requestAnimationFrame(tick);
  }
  function kick() { if (!frame && canRun()) { last = 0; frame = requestAnimationFrame(tick); } }
  function stopMomentum() { state.momentumX = state.momentumY = 0; }
  function updatePause() {
    pauseButton.setAttribute('aria-pressed', String(state.paused));
    pauseButton.querySelector('span').textContent = state.paused ? 'Resume wall' : 'Pause wall';
    pauseButton.querySelector('svg').innerHTML = state.paused ? '<path d="m8 5 11 7-11 7V5Z"/>' : '<path d="M9 5v14M15 5v14"/>';
  }
  pauseButton.addEventListener('click', () => { state.paused = !state.paused; stopMomentum(); updatePause(); kick(); });
  viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') state.hover = true; });
  viewport.addEventListener('pointerleave', () => { state.hover = false; kick(); });
  viewport.addEventListener('focusin', event => {
    state.focus = true; stopMomentum();
    if (event.target === viewport) return;
    const box = viewport.getBoundingClientRect(), item = event.target.getBoundingClientRect();
    if (item.left < box.left + 8) state.x -= box.left + 8 - item.left;
    if (item.right > box.right - 8) state.x += item.right - box.right + 8;
    if (item.top < box.top + 8) state.y -= box.top + 8 - item.top;
    if (item.bottom > box.bottom - 8) state.y += item.bottom - box.bottom + 8;
    state.x = clamp(state.x, state.maxX); state.y = clamp(state.y, state.maxY); draw();
  });
  viewport.addEventListener('focusout', () => { queueMicrotask(() => { state.focus = viewport.contains(document.activeElement); kick(); }); });
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport) return;
    const delta = { ArrowLeft: [-80,0], ArrowRight: [80,0], ArrowUp: [0,-80], ArrowDown: [0,80] }[event.key];
    if (!delta && !['Home','End'].includes(event.key)) return;
    event.preventDefault(); stopMomentum();
    if (delta) { state.x = clamp(state.x + delta[0], state.maxX); state.y = clamp(state.y + delta[1], state.maxY); }
    else { state.x = event.key === 'Home' ? 0 : state.maxX; state.y = event.key === 'Home' ? 0 : state.maxY; }
    draw();
  });
  viewport.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('button,a')) return;
    stopMomentum(); drag = { id: event.pointerId, x: event.clientX, y: event.clientY, baseX: state.x, baseY: state.y, lastX: event.clientX, lastY: event.clientY, lastTime: performance.now(), vx: 0, vy: 0 };
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (!state.dragging && Math.hypot(dx, dy) < 6) return;
    if (!state.dragging && event.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx)) { drag = null; return; }
    if (!state.dragging) { state.dragging = true; viewport.classList.add('is-dragging'); viewport.setPointerCapture(event.pointerId); }
    const now = performance.now(), dt = Math.max(8, now - drag.lastTime);
    drag.vx = Math.max(-1400, Math.min(1400, -(event.clientX - drag.lastX) / dt * 1000));
    drag.vy = Math.max(-1400, Math.min(1400, -(event.clientY - drag.lastY) / dt * 1000));
    drag.lastX = event.clientX; drag.lastY = event.clientY; drag.lastTime = now;
    state.x = clamp(drag.baseX - dx, state.maxX); state.y = clamp(drag.baseY - dy, state.maxY); draw();
  });
  function finishDrag(event) {
    if (!drag || drag.id !== event.pointerId) return;
    if (state.dragging && !reduced.matches && event.type !== 'pointercancel') { state.momentumX = drag.vx; state.momentumY = drag.vy; }
    drag = null; state.dragging = false; viewport.classList.remove('is-dragging');
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    kick();
  }
  viewport.addEventListener('pointerup', finishDrag); viewport.addEventListener('pointercancel', finishDrag);
  new ResizeObserver(dimensions).observe(plane); new ResizeObserver(dimensions).observe(viewport);
  new IntersectionObserver(entries => { state.visible = entries[0].isIntersecting; kick(); }, { threshold: 0 }).observe(viewport);
  document.addEventListener('visibilitychange', kick);
  document.addEventListener('ideas:changed', () => { state.x = state.y = 0; stopMomentum(); requestAnimationFrame(dimensions); });
  reduced.addEventListener('change', event => {
    document.documentElement.classList.toggle('motion-ready', !event.matches);
    if (event.matches) { running.forEach(animation => animation.cancel()); state.paused = true; stopMomentum(); light.style.transform = ''; }
    updatePause(); kick();
  });
  updatePause(); dimensions();
})();
