var OR = require('../json/objectRepository.json');

var HomePage = function() {
        this.loggedInLabel =element(by.css(OR.home.loggedInLabel));

this.validateLoggedInLabel = function(expectedText) {
        this.loggedInLabel.getText().then(function(text) {
        console.log(text);
        expect(text).toBe(expectedText);
        });
};
};
module.exports = new HomePage();
