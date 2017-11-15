var CartPage = function () {

    this.Cart = element(by.css('.inline-svg.nav-icon.etsy-icon-cart'));
    this.CartMessage = element(by.css('div.empty-header > h2'));


    this.verifyCartMessage = function () {
        // expect(ExpectedMessage.getText()).toContain("Password was incorrect.");
        expect(this.CartMessage.getText()).toContain("Your cart is empty.");
    }


};

module.exports = CartPage;