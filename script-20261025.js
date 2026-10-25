const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.open-dialog').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.dialog);
    if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
  });
});

document.querySelectorAll('.writing-dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    const box = dialog.getBoundingClientRect();
    const outside = e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom;
    if (outside) dialog.close();
  });
});

const instagramButton = document.querySelector('.load-instagram');
if (instagramButton) {
  instagramButton.addEventListener('click', () => {
    const slot = document.querySelector('.instagram-slot');
    if (!slot) return;
    if (!slot.dataset.loaded) {
      const iframe = document.createElement('iframe');
      iframe.src = instagramButton.dataset.instagramUrl;
      iframe.title = 'Publicación de Instagram de la Convivencia LGTBIQ+ en el Parque Moret';
      iframe.loading = 'lazy';
      iframe.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
      slot.appendChild(iframe);
      slot.dataset.loaded = 'true';
      slot.hidden = false;
      instagramButton.textContent = 'Ocultar publicación';
    } else {
      slot.hidden = !slot.hidden;
      instagramButton.textContent = slot.hidden ? 'Ver aquí' : 'Ocultar publicación';
    }
  });
}
