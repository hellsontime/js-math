export const setCurrentAction = (action) => {
    localStorage.setItem('currentAction', action);
};

export const getCurrentAction = () => {
    return localStorage.getItem('currentAction');
};

export const clearCurrentAction = () => {
    localStorage.removeItem('currentAction');
};
