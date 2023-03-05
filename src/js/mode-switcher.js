const toggleLocalStoreageValues = () => {
    const currentMode = localStorage.getItem('nightMode');
    if (currentMode === 'true') {
        localStorage.setItem('nightMode', 'false');
    }
    if (currentMode === 'false') {
        localStorage.setItem('nightMode', 'true');
    }
};

const toggleFrontEnd = () => {
    const modeSwitchBtn = document.querySelector('#modeSwitch');
    const bodyWrapper = document.querySelector('.body-wrapper');
    modeSwitchBtn.classList.toggle('switched');
    bodyWrapper.classList.toggle('switched');
};

export const checkNightMode = () => {
    const currentMode = localStorage.getItem('nightMode');
    if (currentMode === null) {
        localStorage.setItem('nightMode', 'false');
    }
    if (currentMode === 'true') {
        toggleFrontEnd();
    }
};

export const toggleNightMode = () => {
    toggleLocalStoreageValues();
    toggleFrontEnd();
};
