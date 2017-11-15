var HomePage = function () {

    this.Register = element(by.id('register'));
    this.SignIn = element(by.id('sign-in'));
    this.CartIcon = element(by.id('gnav-account-cart-description'));


    this.clickRegister = function () {
        this.Register.click();
    }


    this.clickSignIn = function () {
        this.SignIn.click();
    }

    this.clickCartIcon = function () {
        this.CartIcon.click();
    }


};

module.exports = HomePage;