const { By } = require('selenium-webdriver');

class CalculatorPage {
    constructor(driver) {
        this.driver = driver;
        this.resultLocator = By.id('input');
    }

    async clickAllClearButton() {
        const allClear = await this.driver.findElement(By.css('[value="allClear"]'));
        await allClear.click();
    }

    async clickChangeSignButton() {
        const changeSign = await this.driver.findElement(By.css('[value="changeSign"]'));
        await changeSign.click();
    }

    async clickPercentButton() {
        const percentButton = await this.driver.findElement(By.css('[value="percent"]'));
        await percentButton.click();
    }

    async clickNumberButton(number) {
        const numberButtonLocator = `[value="${number}"]`;
        const numberButton = await this.driver.findElement(By.css(numberButtonLocator));
        await numberButton.click();
    }

    async clickPlusButton() {
        const plus = await this.driver.findElement(By.css('[value="plus"]'));
        await plus.click();
    }

    async clickMinusButton() {
        const minus = await this.driver.findElement(By.css('[value="minus"]'));
        await minus.click();
    }

    async clickMultiplyButton() {
        const multiply = await this.driver.findElement(By.css('[value="multiply"]'));
        await multiply.click();
    }

    async clickDivisionButton() {
        const division = await this.driver.findElement(By.css('[value="division"]'));
        await division.click();
    }

    async clickDotButton() {
        const dot = await this.driver.findElement(By.css('[value="dot"]'));
        await dot.click();
    }

    async clickFactorialButton() {
        const factorial = await this.driver.findElement(By.css('[value="factorial"]'));
        await factorial.click();
    }

    async clickEqualsButton() {
        const equals = await this.driver.findElement(By.css('[value="equals"]'));
        await equals.click();
    }

    async getResult() {
        const result = await this.driver.findElement(this.resultLocator);
        return result.getText();
    }
}

module.exports = CalculatorPage;
