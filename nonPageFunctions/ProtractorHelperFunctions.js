var ProtractorHelperFunctions = function() {
        this.validateElementText = function(elementIdentifier, expectedText) {
            elementIdentifier.getText().then(function(text) {
                console.log(text +'ProtractorHelperFunctions');
                expect(text).toBe(expectedText);
            });
        };
        this.browserWaitForURL = function(expectedURL, timeout) {
        var EC = browser.ExpectedConditions;
        browser.wait(EC.urlContains(expectedURL), timeout); // Checks that the current URL contains the expected text
        browser.wait(EC.urlIs(expectedURL), timeout); // Checks that the current URL matches the expected text
        };
    };

    module.exports = new ProtractorHelperFunctions();
