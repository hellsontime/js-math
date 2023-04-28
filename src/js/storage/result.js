export const setPreviousResult = (result = null) => {
    const input = document.querySelector('#input');
    const inputValue = input.getAttribute('value');
    localStorage.setItem('previosResult', result || inputValue);
};

export const getPreviousResult = () => {
    return localStorage.getItem('previosResult');
};

export const clearPreviousResult = () => {
    localStorage.removeItem('previosResult');
};
