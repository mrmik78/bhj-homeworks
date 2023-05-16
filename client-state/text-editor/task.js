const editor = document.getElementById('editor');
editor.value = localStorage.getItem('text');

editor.addEventListener('keyup', () => {
  localStorage.text = editor.value;;
});