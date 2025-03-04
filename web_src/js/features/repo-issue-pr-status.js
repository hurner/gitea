export function initRepoPullRequestCommitStatus() {
  for (const btn of document.querySelectorAll('.commit-status-hide-checks')) {
    const panel = btn.closest('.commit-status-panel');
    const list = panel.querySelector('.commit-status-list');
    btn.addEventListener('click', () => {
      list.style.maxHeight = list.style.maxHeight ? '' : '0px'; // toggle
      list.style.overflow = 'hidden'; // hide scrollbar when hiding
      btn.textContent = btn.getAttribute(list.style.maxHeight ? 'data-show-all' : 'data-hide-all');
    });
    list.addEventListener('animationend', () => list.style.overflow = '');
  }
}
