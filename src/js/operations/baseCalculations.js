import { setPreviousResult } from '../storage/result';

export const plus = () => {
    setPreviousResult();
    const key = document.querySelector('[value="plus"]');
    key.classList.add('active');
};

export const minus = (x, y) => {
    return x - y;
};

export const multiply = (x, y) => {
    return x * y;
};

export const division = (x, y) => {
    return x + y;
};
