import './scss/style.scss';

// eslint-disable-next-line no-empty-function
async function getComponent() {}

getComponent().then((component) => {
  document.body.appendChild(component);
});
