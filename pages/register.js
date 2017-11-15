var RegisterPage = function () {


    this.FirstNameField = element(by.id('first-name'));
    this.EmailField = element(by.id('email'));
    this.PasswordField = element(by.id('password'));
    this.ConfirmPasswordField = element(by.id('password-repeat'));
    this.RegisterBtn = element(by.id('register_button'));


    this.typeFirstName = function (value) {
        this.FirstNameField.sendKeys(value)
    };

    this.typeEmail = function (value) {
        this.EmailField.sendKeys(value);
    };

    this.typePassword = function (value) {
        this.PasswordField.sendKeys(value)
    };

    this.repeatPassword = function (value) {
        this.ConfirmPasswordField.sendKeys(value);
    };

    this.clickRegisterBtn = function () {
        this.RegisterBtn.click();
    };


};

module.exports = RegisterPage;