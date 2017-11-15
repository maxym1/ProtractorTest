// var helper = require('../helper');
// var faker = require('faker');
// var HomePage = require('../pages/home.js');
// var SigninPage = require('../pages/signin.js');
//
// describe('Login User', function () {
//
//     var homepage = new HomePage();
//     var signinpage = new SigninPage();
//
//     beforeEach(function () {
//         browser.get(browser.params.url);
//         // browser.manage().window().maximize();
//     });
//
//     afterEach(function () {
//         browser.manage().deleteAllCookies();
//     });
//
//     var SignIn = element(by.id('sign-in'));
//     var Username = element(by.id('username-existing'));
//     var Password = element(by.id('password-existing'));
//     var LoginBtn = element(by.id('signin-button'));
//     var ExpectedMessage =  element(by.id('password-existing-error'));
//
//     it('should display error message for incorrect user', function () {
//         helper.waitUntilReady(SignIn);
//         homepage.clickSignIn();
//         helper.waitUntilReady(Username);
//         signinpage.typeUsername('jamey0011@gmail.com');
//         signinpage.typeUserPassword('Today');
//         signinpage.clickLoginBtn();
//         helper.waitElementToBeVisisble(ExpectedMessage);
//         expect(ExpectedMessage.getText()).toContain("Password was incorrect.");
//     });
//
//     it('should sign in user successfully', function () {
//         helper.waitUntilReady(SignIn);
//         homepage.clickSignIn();
//         helper.waitUntilReady(Username);
//         signinpage.typeUsername('jamey0011@gmail.com');
//         signinpage.typeUserPassword('Today01');
//         //signinpage.clickLoginBtn();
//     });
//
// });