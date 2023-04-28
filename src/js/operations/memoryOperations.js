import { clearMemory, getMemory, setMemory } from '../storage/memory';
import { setActiveButton, unsetActveButton } from '../helpers/buttonManager';
import { updateInput, updateInputValue } from './updateInput';
import calculations from '../helpers/calculations';
import calculator from '../Calculator';

const memoryRecallButton = document.querySelector('[value="memoryRecall"]');

const getValueForMemory = () => {
    const input = document.querySelector('#input');
    const currentValue = input.getAttribute('value');
    const previousResult = calculator.getPreviousResult();

    if (currentValue === '0' && previousResult) {
        return previousResult;
    }
    return currentValue;
};

export const memoryClear = () => {
    clearMemory();
    unsetActveButton(memoryRecallButton);
};

export const memoryRecall = () => {
    const memoryValue = getMemory();
    updateInput(memoryValue, 0);
    calculator.setPreviousResult(memoryValue);
};

export const memoryPlus = () => {
    const currentValue = getValueForMemory();
    const memoryValue = getMemory();
    const result = calculations.plus(memoryValue, currentValue);
    setMemory(result);
    setActiveButton(memoryRecallButton);
    updateInputValue(0);
};

export const memoryMinus = () => {
    const currentValue = getValueForMemory();
    const memoryValue = getMemory();
    const result = calculations.minus(memoryValue, currentValue);
    setMemory(result);
    setActiveButton(memoryRecallButton);
    updateInputValue(0);
};
