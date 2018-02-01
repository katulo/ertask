/// <reference path="./steps.d.ts" />

Feature('Sign up');

BeforeSuite((I) => {
    I.amOnPage('/accounts/en-US/register');
});

Before((I) => {
    I.refreshPage();
});

Scenario('password must match', (I) => {        
    I.fillField('Create a password', '123456AA');
    I.fillField('Confirm your password', '123456A');
    I.click('Sign up');
    I.see('These passwords don\'t match. Try again?');
});
