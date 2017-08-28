describe('testing the loading of the way2.automation website', function() {
	var protractorHelperFunctions = require('../nonPageFunctions/ProtractorHelperFunctions');
	var registrationLoginPage = require('../pages/RegistrationLoginPage');
	var homePage = require('../pages/HomePage');
	var testData = require('../json/testData.json');
	var basePage = require('../nonPageFunctions/BasePage');

	it('should load the website', function() {
		basePage.navigateToURL(testData.way2automation.entryURL);
		expect(browser.getCurrentUrl()).toEqual(testData.way2automation.validationURL);
		});

	it('should login if you enter a correct user name and password', function() {
		registrationLoginPage.enterUserName(testData.way2automation.userNameText);
		registrationLoginPage.enterPassword(testData.way2automation.passwordText);
		registrationLoginPage.enterUserName2ndField(testData.way2automation.userNameText);
		registrationLoginPage.clickLoginButton();
		// protractorHelperFunctions.browserWaitForURL(testData.way2automation.loginURL, 5000);
		// browser.waitForAngular();
		expect(browser.getCurrentUrl()).toBe(testData.way2automation.loginURL);
		// homePage.validateLoggedInLabel('You\'re logged in!!');
		protractorHelperFunctions.validateElementText(homePage.loggedInLabel, 'You\'re logged in!!');
	});
});
