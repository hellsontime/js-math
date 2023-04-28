import actions from './constants/actions';
import updateNumber from './operations/updateNumber';
import { resetAllDynamicButtons, setActiveButton } from './helpers/buttonManager';
import calculations from './helpers/calculations';
import { callCalculation } from './operations/baseCalculations';
import operations from './helpers/operations';
import { callOperation } from './operations/baseOperations';

export default function catchAction(button) {
    const key = button.getAttribute('key');
    const value = button.getAttribute('value');

    resetAllDynamicButtons();

    if (button.hasAttribute('dynamic')) {
        setActiveButton(button);
    }

    if (key === 'digit') {
        updateNumber(value);
        return;
    }

    if (value in calculations) {
        callCalculation(value);
        return;
    }

    if (value in operations) {
        callOperation(value);
        return;
    }

    actions[value]();
}
