class Calculator {
    constructor() {
        this.currentAction = null;
        this.previousResult = 0;
    }

    setCurrentAction(action) {
        this.currentAction = action;
        return this;
    }

    getCurrentAction() {
        return this.currentAction;
    }

    clearCurrentAction() {
        this.currentAction = null;
        return this;
    }

    setPreviousResult(result = null) {
        const input = document.querySelector('#input');
        const inputValue = input.getAttribute('value');

        this.previousResult = result || inputValue;
        return this;
    }

    getPreviousResult() {
        return this.previousResult;
    }

    clearPreviousResult() {
        this.previousResult = 0;
        return this;
    }
}

const calculator = new Calculator();
export default calculator;
