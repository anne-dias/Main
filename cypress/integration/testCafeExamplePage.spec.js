/// <reference types="cypress" />


import TestcafePage from "./testCafeExampleWebpage/testCafeExamplePage"

describe("Cypress POM Test Suite", function () {
    it("Testcafe webpage funtion check", function () {
        const tCafe = new TestcafePage();
        tCafe.navigate();
        tCafe.enterName('Test');
        tCafe.submit();
        tCafe.Check();
        tCafe.RadioBtnCheck();
        tCafe.DropDownSelect();
        tCafe.clickCheckbox();
        tCafe.Slider();
        tCafe.EnterComment();
        tCafe.submitbtnClick();
      

        
    })
})