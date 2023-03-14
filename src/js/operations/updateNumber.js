import updateInput from './updateInput';

const updateNumber = (value) => {
    const input = document.querySelector('#input');
    const inputValue = input.getAttribute('value');

    if (value === 'dot') {
        if (input.innerHTML.includes(',')) return;

        updateInput(`${inputValue},`, `${inputValue}.`);
        return;
    }

    if (inputValue === '0') {
        updateInput(value);
        return;
    }

    const newValue = inputValue + value;
    updateInput(newValue);
};

export default updateNumber;
