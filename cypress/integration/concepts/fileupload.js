/// <reference types = "cypress"/>

describe('File upload', function () {

    it('file upload functionality', () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });

        cy.fixture("folder.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(

                {
                    fileContent,
                    fileName: "folder.png",
                    mimeType: "image/png"

                },
                {
                    uploadType: "input"
                }

            )
        })

        cy.wait(10000)

        cy.get('#submit-button').click()

    })


})