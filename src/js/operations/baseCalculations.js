import { getPreviousResult, setPreviousResult } from '../storage/result';
import { setCurrentAction, getCurrentAction, clearCurrentAction } from '../storage/action';
import { updateInput, updateInputValue } from './updateInput';
import calculations from '../helpers/calculations';

const input = document.querySelector('#input');

// eslint-disable-next-line consistent-return
export const equals = () => {
    const previosResult = getPreviousResult();
    const currentAction = getCurrentAction();
    const currentValue = input.getAttribute('value');
    if (previosResult && currentAction && currentValue) {
        const result = calculations[currentAction](previosResult, currentValue);

        updateInput(result, 0);
        setPreviousResult(result);
        clearCurrentAction();

        return result;
    }
};

export const callCalculation = (calculation) => {
    if (getCurrentAction()) {
        equals();
    }

    if (!getPreviousResult() || getPreviousResult() === '0') {
        setPreviousResult();
    }
    setCurrentAction(calculation);
    updateInputValue(0);
};
