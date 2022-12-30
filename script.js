document.querySelectorAll('input').forEach((input) => {
  input.onclick = () => {
    document.documentElement.className = input.id;
  };
});
