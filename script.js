document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('showModalDialog');
  const closeBtn = document.getElementById('closeModalDialog');
  const dialog = document.getElementById('modalDialog');

  openBtn.addEventListener('click', function () {
    document.startViewTransition(() => dialog.showModal());
  });

  closeBtn.addEventListener('click', function () {
    document.startViewTransition(() => dialog.close());
  });
});
