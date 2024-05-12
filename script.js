function playEffect(event) {
  const target = event.target;
  target.classList.add('clicked');
  setTimeout(() => {
    target.classList.remove('clicked');
  }, 500);
}
