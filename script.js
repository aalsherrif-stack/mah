(() => {
  const pages = [...document.querySelectorAll('.page')];
  const fill = document.getElementById('progressFill');
  const dotsHost = document.getElementById('dots');
  let current = 0;

  pages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('aria-hidden', 'true');
    dotsHost.appendChild(dot);
  });
  const dots = [...dotsHost.children];

  function showPage(index) {
    current = Math.max(0, Math.min(index, pages.length - 1));
    pages.forEach((page, i) => {
      page.classList.toggle('active', i === current);
      page.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    fill.style.width = `${(current / (pages.length - 1)) * 100}%`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener('click', (event) => {
    const next = event.target.closest('.next-btn');
    const back = event.target.closest('.back-btn');
    const restart = event.target.closest('.restart-btn');
    if (next) showPage(current + 1);
    if (back) showPage(current - 1);
    if (restart) showPage(0);
  });

  showPage(0);
})();