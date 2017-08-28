var OR = require('../json/objectRepository.json');

var RegistrationLoginPage = function() {
    this.userName =element(by.id(OR.registrationLogin.userName));
    this.password =element(by.id(OR.registrationLogin.password));
    this.userName2ndField=element(by.model(OR.registrationLogin.userName2ndField));
    this.loginButton=element(by.css(OR.registrationLogin.loginButton));

    this.enterUserName = function(userNameText) {
        this.userName.sendKeys(userNameText);
    };

    this.enterPassword = function(passwordText) {
        this.password.sendKeys(passwordText);
    };
    this.enterUserName2ndField =function(userNameText) {
        this.userName2ndField.sendKeys(userNameText);
    };
    this.clickLoginButton=function() {
        this.loginButton.click();
    };
    };

    module.exports = new RegistrationLoginPage();
