var helper = require('../helper');
var faker = require('faker');
var HomePage = require('../pages/home.js');
var RegisterPage = require('../pages/register.js');
var logger = require('../log');

describe('Register User', function () {

    var homepage = new HomePage();
    var registerpage = new RegisterPage();

    beforeEach(function () {
        browser.get(browser.params.url);
        logger.log('info', 'Navigating to URL');
        // browser.manage().window().maximize();
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
        logger.log('info', 'Clearing the Session!');
    });

    var randomFirstName = faker.name.firstName();
    var randomEmail = faker.internet.email();

    var Register = element(by.id('register'));
    var FirstNameField = element(by.id('first-name'));


    it('should register new user', function () {
        helper.waitUntilReady(Register);
        homepage.clickRegister();
        logger.log('info', 'Clicking Register button');
        helper.waitUntilReady(FirstNameField);
        registerpage.typeFirstName(randomFirstName);
        registerpage.typeEmail(randomEmail);
        registerpage.typePassword('Today01');
        registerpage.repeatPassword('Today01');
        logger.log('info', 'Entered new register details');
        registerpage.clickRegisterBtn()
        logger.log('info', 'Account created successfully');

    })
});