import { updateInput } from './updateInput';
import { clearPreviousResult } from '../storage/result';

export const allClear = () => {
    updateInput(0);
    clearPreviousResult();
};

export const changeSign = () => {
    const input = document.querySelector('#input');
    const inputValue = input.getAttribute('value');
    const currentValue = parseFloat(inputValue, 10);
    const newValue = currentValue * -1;

    updateInput(newValue);
};

export const percent = () => {
    const input = document.querySelector('#input');
    const inputValue = input.getAttribute('value');
    const currentValue = parseFloat(inputValue, 10);
    const newValue = currentValue / 100;

    updateInput(newValue);
};
