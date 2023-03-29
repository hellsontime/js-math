import { updateInput } from './updateInput';
import { setPreviousResult } from '../storage/result';
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
    const result = operations[operation](currentValue);

    updateInput(result, 0);
    setPreviousResult(result);
};
