export const setMemory = (value) => {
    localStorage.setItem('memory', value);
};

export const getMemory = () => {
    return localStorage.getItem('memory');
};

export const clearMemory = () => {
    localStorage.setItem('memory', 0);
};
