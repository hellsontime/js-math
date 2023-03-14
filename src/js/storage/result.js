export const setPreviousResult = () => {
    const input = document.querySelector('#input');
    const inputValue = input.getAttribute('value');
    localStorage.setItem('previosResult', inputValue);
};

export const getPreviousResult = () => {
    return localStorage.getItem('previosResult');
};

export const clearPreviousResult = () => {
    localStorage.removeItem('previosResult');
};
