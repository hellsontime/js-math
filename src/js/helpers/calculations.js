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

const actions = {
    plus,
    minus,
    multiply,
    division
};

export default actions;
