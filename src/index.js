/* eslint-disable import/no-extraneous-dependencies */
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import { toggleNightMode, checkNightMode } from './js/modeSwitcher';
import catchAction from './js/input';
import { setMemory } from './js/storage/memory';
import calculator from './js/Calculator';

async function getComponent() {
    window.addEventListener('load', checkNightMode());
    const modeSwitchBtn = document.querySelector('#modeSwitch');
    modeSwitchBtn.addEventListener('click', () => toggleNightMode());

    calculator.setPreviousResult(0);
    calculator.clearCurrentAction();
    setMemory(0);

    const buttons = document.querySelectorAll('.key');
    buttons.forEach((button) => {
        button.addEventListener('click', () => catchAction(button));
    });
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
