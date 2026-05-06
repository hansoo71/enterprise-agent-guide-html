document.querySelectorAll('input[type=checkbox]').forEach((box, idx) => {
  const key = `enterprise-agent-guide-check-${idx}`;
  box.checked = localStorage.getItem(key) === '1';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked ? '1' : '0'));
});
