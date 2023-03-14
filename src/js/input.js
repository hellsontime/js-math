import actions from './constants/actions';
import updateNumber from './operations/updateNumber';

export default function catchAction(key, value) {
    if (key === 'digit') {
        updateNumber(value);
        return;
    }

    actions[value]();
}
