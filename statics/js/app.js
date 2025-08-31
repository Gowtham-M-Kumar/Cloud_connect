document.addEventListener('DOMContentLoaded', () => {
  const commentInputs = document.querySelectorAll('.card__add-comment input');
  commentInputs.forEach((input) => {
    const btn = input.parentElement?.querySelector('.post-btn');
    const update = () => {
      const enabled = input.value.trim().length > 0;
      if (!btn) return;
      btn.disabled = !enabled;
      btn.classList.toggle('enabled', enabled);
    };
    input.addEventListener('input', update);
    update();
  });

  // Simple like toggle
  document.querySelectorAll('.js-like').forEach((btn) => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (!icon) return;
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('liked');
      icon.style.color = icon.classList.contains('liked') ? '#ef4444' : '';
    });
  });
});


