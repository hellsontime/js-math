import { updateInput, updateInputValue } from './updateInput';
import operations from '../helpers/operations';
import calculator from '../Calculator';

export const allClear = () => {
    updateInput(0);
    calculator.setPreviousResult(0);
    calculator.clearCurrentAction();
};

export const callOperation = (operation) => {
    const input = document.querySelector('#input');
    const currentValue = input.getAttribute('value');
    const previosResult = calculator.getPreviousResult();
    const result = operations[operation](previosResult || currentValue);

    const notResetableActions = ['changeSign'];
    updateInput(result, 0);
    if (notResetableActions.includes(operation)) {
        updateInputValue(result);
    }

    calculator.setPreviousResult(result);
};
