import { handleSwitcherClick } from '@src/utils/handleSwitcherClick.utils';
import '@src/utils/slider.utils';
import '@src/assets/styles/global/index.scss';

window.addEventListener('load', () => {
  const handleClick = (e) => {
    handleSwitcherClick(e);
  };
  document.addEventListener('click', handleClick);
});
