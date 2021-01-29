describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza/')
    })

    it('check', () => {

    })

    const nameInput = () => cy.get('input[id="nameBox"]')
    const checkBoxes = () => cy.get('input[className="check"]')
    const submitBtn = () => cy.get('input[id="check"]')

    it('can type inside the text input', () => {
        nameInput()
            .should('have.value', '')
            .type("Declan")
            .should('have.value', "Declan")
    })

    it("checks that the check boxes can be checked", () => {
        checkBoxes()
            .check()
    })

})