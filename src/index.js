/* eslint-disable import/no-extraneous-dependencies */
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import { toggleNightMode, checkNightMode } from './js/mode-switcher';

async function getComponent() {
    window.onload = () => checkNightMode();
    const modeSwitchBtn = document.querySelector('#modeSwitch');
    modeSwitchBtn.addEventListener('click', () => toggleNightMode());
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
