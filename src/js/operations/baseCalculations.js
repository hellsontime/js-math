import { updateInput, updateInputValue } from './updateInput';
import calculations from '../helpers/calculations';
import calculator from '../Calculator';

const input = document.querySelector('#input');

// eslint-disable-next-line consistent-return
export const equals = () => {
    const previosResult = calculator.getPreviousResult();
    const currentAction = calculator.getCurrentAction();
    const currentValue = input.getAttribute('value');
    if (previosResult && currentAction && currentValue) {
        const result = calculations[currentAction](previosResult, currentValue);

        updateInput(result, 0);
        calculator.setPreviousResult(result);
        calculator.clearCurrentAction();

        return result;
    }
};

export const callCalculation = (calculation) => {
    if (calculator.getCurrentAction()) {
        equals();
    }

    if (!calculator.getPreviousResult() || calculator.getPreviousResult() === '0') {
        calculator.setPreviousResult();
    }
    calculator.setCurrentAction(calculation);
    updateInputValue(0);
};
