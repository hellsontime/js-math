import './style.css';
import Icon from './icon.png';

function getComponent() {
    return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      // Add the image to our existing div.
      const myIcon = new Image();
      myIcon.src = Icon;

      element.appendChild(myIcon);
    
      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
  }
  
  getComponent().then((component) => {
    document.body.appendChild(component);
  });
  