/* eslint-disable import/no-extraneous-dependencies */
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import { toggleNightMode, checkNightMode } from './js/modeSwitcher';
import catchAction from './js/input';
import { setPreviousResult } from './js/storage/result';
import { clearCurrentAction } from './js/storage/action';

async function getComponent() {
    window.addEventListener('load', checkNightMode());
    const modeSwitchBtn = document.querySelector('#modeSwitch');
    modeSwitchBtn.addEventListener('click', () => toggleNightMode());

    setPreviousResult(0);
    clearCurrentAction();

    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
        button.addEventListener('click', () => catchAction(button));
    });
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
