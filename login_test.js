/// <reference path="./steps.d.ts" />

Feature('Login');


Scenario('email and password are required', (I) => {        
    I.amOnPage('https://www.everreal.co/accounts/en-US/login');
    I.click('Login');
    I.see('Field is required')
});

Scenario('required correct email format', (I) => {
});

Scenario('password is required', (I) => {
});

Scenario('email is required', (I) => {
});

Scenario('wrong credentials', (I) => {
});