const filters = document.querySelector('.filters');
const projects = [...document.querySelectorAll('.project')];
const filterStatus = document.querySelector('#filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const selected = button.dataset.filter;
  for (const item of filters.querySelectorAll('button')) {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  }
  for (const project of projects) {
    project.hidden = selected !== 'all' && !project.dataset.category.split(' ').includes(selected);
  }
  const count = projects.filter((project) => !project.hidden).length;
  filterStatus.textContent = `${count} projects shown`;
});

const viewer = document.querySelector('#image-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerCaption = document.querySelector('#image-caption');
const viewerOriginal = document.querySelector('#viewer-original');
let imageOpener;

for (const link of document.querySelectorAll('[data-lightbox]')) {
  link.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    imageOpener = link;
    viewerImage.src = link.href;
    viewerImage.alt = link.querySelector('img').alt;
    viewerCaption.textContent = link.dataset.caption;
    viewerOriginal.href = link.href;
    viewer.showModal();
    document.body.classList.add('viewer-open');
  });
}

document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', (event) => {
  if (event.target !== viewer) return;
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  imageOpener?.focus();
});
