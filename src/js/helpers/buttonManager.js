export const resetAllDynamicButtons = () => {
    const dynamicButtons = document.querySelectorAll('[dynamic]');
    dynamicButtons.forEach((element) => {
        element.classList.remove('active');
    });
};

export const setActiveButton = (button) => {
    button.classList.add('active');
};
