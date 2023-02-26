import './style.css';
import Icon from './icon.png';

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}
  
getComponent().then((component) => {
  document.body.appendChild(component);
});
  