var helper = require('../helper');
var faker = require('faker');
var HomePage = require('../pages/home.js');
var CartPage = require('../pages/cart.js');

describe('Register User', function () {

    var homepage = new HomePage();
    var cartpage = new CartPage();

    beforeEach(function () {
        browser.get(browser.params.url);
        // browser.manage().window().maximize();
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
    });

    var CartIcon = element(by.id('gnav-account-cart-description'));
    var CartMessage = element(by.css('div.empty-header > h2'));


    it('should register new user', function (done) {
        // helper.waitUntilReady(Cart);
        // Cart.click();
        // helper.waitUntilReady(CartMessage);
        // expect(CartMessage.getText()).toContain("Your cart is empty.");
        helper.waitUntilReady(CartIcon)
            .then(function () {
                homepage.clickCartIcon();
            })
            .then(function () {
                helper.waitUntilReady(CartMessage);
            })
            .then(function () {
                cartpage.verifyCartMessage();
            })
            .then(done);
    });
});