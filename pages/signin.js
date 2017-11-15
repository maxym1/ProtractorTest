var SigninPage = function () {

    this.Username = element(by.id('username-existing'));
    this.Password = element(by.id('password-existing'));
    this.LoginBtn = element(by.id('signin-button'));
    // this.ExpectedMessage =  element(by.id('password-existing-error'));


    this.typeUsername = function (value) {
        this.Username.sendKeys(value)
    };

    this.typeUserPassword = function (value) {
        this.Password.sendKeys(value);
    };

    this.clickLoginBtn = function () {
        this.LoginBtn.click();
    };


};

module.exports = SigninPage;