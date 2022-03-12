class TestcafePage {
    navigate() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    enterName(name)
    {
        cy.get('[data-testid="name-input"]')
        .type('Test')

    }

    submit()
    {
        cy.get('[data-testid="populate-button"]')
        .click()
    }

    Check()
    {
        cy.get('[data-testid="reusing-js-code-checkbox"]')
        .check()
        cy.get('[data-testid="parallel-testing-checkbox"]')
        .check()
    }

    RadioBtnCheck()
    {
        cy.get('[data-testid="windows-radio"]')
        .first()
        .check()

    }

    DropDownSelect()
    {
        cy.get('[data-testid="preferred-interface-select"]')
        .select('JavaScript API')
    }
    
    clickCheckbox()
    {
        cy.get('[data-testid="tried-testcafe-checkbox"]').check()
    }

    Slider()
    {
       
        

        cy.get('.ui-slider-handle')
        .type("{rightarrow}{rightarrow}{rightarrow}{rightarrow}")

        
        
    }

    EnterComment()
    {
        cy.get('[data-testid="comments-area"]')
        .type('Testcafe Example page test', {force: true})
    }

    submitbtnClick()
    {
        cy.get('[data-testid="submit-button"]')
        .click()
    }


    
 
 
}
export default TestcafePage