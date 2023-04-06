/* eslint-disable consistent-return */

const changeSign = (x) => {
    return parseFloat(x) * -1;
};

const percent = (x) => {
    return parseFloat(x) / 100;
};

const tenX = (x) => {
    return 10 ** parseFloat(x);
};

const oneDivX = (x) => {
    return 1 / parseFloat(x);
};

const power2 = (x) => {
    return parseFloat(x) ** 2;
};

const power3 = (x) => {
    return parseFloat(x) ** 3;
};

const root2 = (x) => {
    return parseFloat(x) ** (1 / 2);
};

const root3 = (x) => {
    return parseFloat(x) ** (1 / 3);
};

const factorial = (x) => {
    if (x < 0) return NaN;
    if (x < 2) return 1;
    return x * factorial(x - 1);
};

const operations = { changeSign, percent, tenX, oneDivX, power2, power3, root2, root3, factorial };

export default operations;
