import updateInput from './updateInput';

export const allClear = () => {
    updateInput(0);
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
