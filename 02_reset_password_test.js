/// <reference path="./steps.d.ts" />

Feature('Reset password');

BeforeSuite((I) => {
    I.amOnPage('/accounts/en-US/resetpassword');
});

Before((I) => {
    I.refreshPage();
});

Scenario('email is required', (I) => {        
    I.click('Reset password');
    I.see('Field is required');
});

AfterSuite((I) => {
    I.click('Sign up');
});
