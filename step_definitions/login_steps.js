const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let browser, page;
Given("user is on the login page",async function(){
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/login'); 
    
});