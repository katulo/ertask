
Feature('Login');


Scenario('email and password are required', (I) => {        
    I.amOnPage('https://www.everreal.co/accounts/en-US/login');
    I.click('Login');
    I.see('Field is required')
});
