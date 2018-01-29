
Feature('Login');


Scenario('email and password are required', (I) => {        
    pause();
    I.amOnPage('https://www.everreal.co/accounts/en-US/login');
    I.click('Login', 'button[type=submit]');
    I.see('Field is required')
});
