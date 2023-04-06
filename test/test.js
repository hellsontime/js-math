/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const { By, Builder, Browser } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require('assert');
const CalculatorPage = require('./CalculatorPage');

const APP_URL = 'http://localhost:8080/';

suite(
    function (env) {
        describe('Utility operations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('should clear everything', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '0';

                await calculatorPage.clickNumberButton(1);
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickAllClearButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should change sign', async () => {
                const calculatorPage = new CalculatorPage(driver);

                await calculatorPage.clickNumberButton(1);
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickChangeSignButton();

                const result = await calculatorPage.getResult();
                assert.equal('-123', result);

                await calculatorPage.clickChangeSignButton();

                const result2 = await calculatorPage.getResult();
                assert.equal('123', result2);
            });
            it('should calculate percent', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '0,05';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPercentButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });

        describe('Plus calculations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('should perform addition by equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '10';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform addition by plus', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '10';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });

        describe('Minus calculations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('should perform subtraction by equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '118';

                await calculatorPage.clickNumberButton(1);
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickMinusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform subtraction by minus', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '118';

                await calculatorPage.clickNumberButton(1);
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickMinusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickMinusButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });

        describe('Multiply calculations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('should perform multiply by equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '25';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickMultiplyButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform multiply by multiply', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '25';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickMultiplyButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickMultiplyButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform float multiply', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '2,5';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickMultiplyButton();
                await calculatorPage.clickNumberButton(0);
                await calculatorPage.clickDotButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });

        describe('Division calculations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('should perform division by equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '2,5';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickDivisionButton();
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform division by division', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '2,5';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickDivisionButton();
                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickDivisionButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('should perform float division', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '10';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickDivisionButton();
                await calculatorPage.clickNumberButton(0);
                await calculatorPage.clickDotButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });

        describe('Common tests calculations', () => {
            let driver;

            beforeEach(async () => {
                driver = new Builder().forBrowser('chrome').build();
                await driver.get(APP_URL);
            });

            afterEach(async () => {
                await driver.quit();
            });

            it('does some operation then makes calculation with two new values', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '10';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickFactorialButton();
                await calculatorPage.clickNumberButton(9);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(1);
                await calculatorPage.clickEqualsButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('does sequential calculation', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '15';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('does sequential calculation with equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '20';

                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickEqualsButton();
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(5);
                await calculatorPage.clickPlusButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('does operation after equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '120';

                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickEqualsButton();
                await calculatorPage.clickFactorialButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
            it('does operation after calulational equals', async () => {
                const calculatorPage = new CalculatorPage(driver);
                const expectedResult = '120';

                await calculatorPage.clickNumberButton(2);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickNumberButton(3);
                await calculatorPage.clickPlusButton();
                await calculatorPage.clickFactorialButton();

                const result = await calculatorPage.getResult();
                assert.equal(expectedResult, result);
            });
        });
    },
    { browsers: [Browser.CHROME, Browser.FIREFOX] }
);
