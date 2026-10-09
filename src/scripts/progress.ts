// Progress is stored only in this browser (localStorage). Every access is wrapped in try/catch
// because storage can be blocked (private windows, strict privacy settings).
const KEY = 'shuffle-lab:done';

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(done: string[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(done));
  } catch {
    /* storage unavailable: progress simply won't persist */
  }
}

function render(): void {
  const done = new Set(read());

  document.querySelectorAll<HTMLElement>('[data-lesson-check]').forEach((el) => {
    el.classList.toggle('is-done', done.has(el.dataset.lessonCheck!));
  });

  document.querySelectorAll<HTMLElement>('[data-progress-lessons]').forEach((el) => {
    const slugs = el.dataset.progressLessons!.split(',').filter(Boolean);
    const count = slugs.filter((s) => done.has(s)).length;
    const pct = slugs.length ? Math.round((count / slugs.length) * 100) : 0;
    const bar = el.querySelector<HTMLElement>('.js-bar');
    const text = el.querySelector<HTMLElement>('.js-text');
    if (bar) bar.style.width = `${pct}%`;
    if (text) text.textContent = `${count}/${slugs.length} done`;
    el.classList.toggle('is-complete', slugs.length > 0 && count === slugs.length);
  });

  document.querySelectorAll<HTMLButtonElement>('[data-complete-btn]').forEach((btn) => {
    const isDone = done.has(btn.dataset.completeBtn!);
    btn.setAttribute('aria-pressed', String(isDone));
    btn.classList.toggle('done', isDone);
    btn.textContent = isDone ? '✓ Completed (tap to undo)' : 'Mark as complete';
  });

  const orderEl = document.getElementById('lesson-order');
  if (orderEl) {
    const order: string[] = JSON.parse(orderEl.textContent || '[]');
    const next = order.find((s) => !done.has(s));
    document.querySelectorAll<HTMLAnchorElement>('[data-continue]').forEach((a) => {
      const base = a.dataset.continueBase || '';
      if (!next) {
        a.textContent = 'All lessons complete! Revisit any level';
        a.href = `${base}levels/`;
        return;
      }
      a.href = `${base}lessons/${next}/`;
      a.textContent = done.size > 0 ? 'Continue where you left off' : 'Start Lesson 1';
    });
  }
}

document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-complete-btn]');
  if (!btn) return;
  const slug = btn.dataset.completeBtn!;
  const done = new Set(read());
  if (done.has(slug)) done.delete(slug);
  else done.add(slug);
  write([...done]);
  render();
});

render();
