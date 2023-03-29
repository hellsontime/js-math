import { getPreviousResult, setPreviousResult } from '../storage/result';
import { setCurrentAction, getCurrentAction, clearCurrentAction } from '../storage/action';
import { updateInput, updateInputValue } from './updateInput';
import actions from '../helpers/calculations';

const input = document.querySelector('#input');

export const plus = () => {
    setPreviousResult();
    setCurrentAction('plus');
    updateInputValue(0);
};

export const minus = () => {
    setPreviousResult();
    setCurrentAction('minus');
    updateInputValue(0);
};

export const multiply = () => {
    setPreviousResult();
    setCurrentAction('muliply');
    updateInputValue(0);
};

export const division = () => {
    setPreviousResult();
    setCurrentAction('division');
    updateInputValue(0);
};

export const equals = () => {
    const previosResult = getPreviousResult();
    const currentAction = getCurrentAction();
    const currentValue = input.getAttribute('value');

    const result = actions[currentAction](previosResult, currentValue);
    updateInput(result);
    setPreviousResult(result);
    clearCurrentAction();
};
