/// <reference path="./steps.d.ts" />

Feature('Login');

BeforeSuite((I) => {
    I.amOnPage('/accounts/en-US/login');
});

Before((I) => {
    I.refreshPage();
});

Scenario('email and password are required', (I) => {        
    I.click('Login');
    I.see('Field is required');
});

Scenario('required correct email format', (I) => {
    I.fillField('E-Mail', 'somethingtotest');
    I.click('Login');
    I.see('Email is not correct');
});

// Scenario('password is required', (I) => {
// });

// Scenario('email is required', (I) => {
// });

// Scenario('wrong credentials', (I) => {
// });