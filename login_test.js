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

Scenario('password is required', (I) => {
   I.fillField('E-Mail', 'test@test.pl');
   I.click('Login');
   I.see('Field is required');
});

Scenario('email is required', (I) => {
    I.fillField('Password', 'somethingtotest');
    I.click('Login');
    I.see('Field is required');
});

Scenario('wrong credentials', (I) => {
    I.fillField('E-Mail', 'kasia@ukj.pl');
    I.fillField('Password', 'jjdjjddkd');
    I.click('Login');
    I.see('Invalid username or password.');
});