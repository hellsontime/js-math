/* eslint-disable import/no-extraneous-dependencies */
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import { toggleNightMode, checkNightMode } from './js/modeSwitcher';
import catchAction from './js/input';

async function getComponent() {
    window.addEventListener('load', checkNightMode());
    const modeSwitchBtn = document.querySelector('#modeSwitch');
    modeSwitchBtn.addEventListener('click', () => toggleNightMode());

    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => {
        key.addEventListener('click', () =>
            catchAction(key.getAttribute('key'), key.getAttribute('value'))
        );
    });
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
