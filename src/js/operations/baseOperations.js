import { updateInput, updateInputValue } from './updateInput';
import { getPreviousResult, setPreviousResult } from '../storage/result';
import { clearCurrentAction } from '../storage/action';
import operations from '../helpers/operations';

export const allClear = () => {
    updateInput(0);
    setPreviousResult(0);
    clearCurrentAction();
};

export const callOperation = (operation) => {
    const input = document.querySelector('#input');
    const currentValue = input.getAttribute('value');
    const previosResult = getPreviousResult();
    const result = operations[operation](previosResult || currentValue);

    const notResetableActions = ['changeSign'];
    updateInput(result, 0);
    if (notResetableActions.includes(operation)) {
        updateInputValue(result);
    }

    setPreviousResult(result);
};
