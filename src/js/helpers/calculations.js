const plus = (x, y) => {
    return parseFloat(x) + parseFloat(y);
};

const minus = (x, y) => {
    return parseFloat(x) - parseFloat(y);
};

const multiply = (x, y) => {
    return parseFloat(x) * parseFloat(y);
};

const division = (x, y) => {
    return parseFloat(x) / parseFloat(y);
};

const powerY = (x, y) => {
    return parseFloat(x) ** parseFloat(y);
};

const rootY = (x, y) => {
    return parseFloat(x) ** (1 / parseFloat(y));
};

const calculations = { plus, minus, multiply, division, powerY, rootY };

export default calculations;
