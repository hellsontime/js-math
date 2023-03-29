import { getPreviousResult, setPreviousResult } from '../storage/result';
import { setCurrentAction, getCurrentAction, clearCurrentAction } from '../storage/action';
import { updateInput, updateInputValue } from './updateInput';
import calculations from '../helpers/calculations';

const input = document.querySelector('#input');

export const equals = () => {
    const previosResult = getPreviousResult();
    const currentAction = getCurrentAction();
    const currentValue = input.getAttribute('value');
    const result = calculations[currentAction](previosResult, currentValue);

    updateInput(result, 0);
    setPreviousResult(result);
    clearCurrentAction();

    return result;
};

export const callCalculation = (calculation) => {
    // TODO: fix issue with broken actions and values
    // let result;

    if (getCurrentAction()) {
        equals();
    }

    // if (result) {
    //     setPreviousResult(result);
    // } else {
    //     setPreviousResult();
    // }

    setPreviousResult();
    setCurrentAction(calculation);
    updateInputValue(0);
};
