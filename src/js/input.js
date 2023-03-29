import actions from './constants/actions';
import updateNumber from './operations/updateNumber';
import { resetAllDynamicButtons, setActiveButton } from './helpers/buttonManager';

export default function catchAction(button) {
    const key = button.getAttribute('key');
    const value = button.getAttribute('value');

    resetAllDynamicButtons();

    if (key === 'digit') {
        updateNumber(value);
        return;
    }

    if (button.hasAttribute('dynamic')) {
        setActiveButton(button);
    }

    actions[value]();
}
