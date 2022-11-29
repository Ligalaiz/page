const handleSwitcherClick = ({ target }) => {
  const parent = document.querySelector('html');

  if (target.closest('#menuSwitcher')) {
    parent.classList.toggle('show-nav');
  }
};

export { handleSwitcherClick };
