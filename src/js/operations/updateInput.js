const updateInput = (visibleValue, invisibleValue = visibleValue) => {
    const input = document.querySelector('#input');

    input.innerHTML = visibleValue.toString().replace('.', ',');
    input.setAttribute('value', visibleValue === invisibleValue ? visibleValue : invisibleValue);
};

export default updateInput;
