var BasePage = function() {
    this.navigateToURL =function(URL) {
        browser.get(URL);
    };
};

module.exports = new BasePage();
