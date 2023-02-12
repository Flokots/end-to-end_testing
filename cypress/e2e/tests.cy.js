describe("home page", () => {
    beforeEach(() => {
        cy.visit("https://butopea.com");
    });

    context("Banner section", () => {
        // Middle square
        it("the middle square contains some text and a button", () => {
            // Fail the test if button and text not found
            cy.on("fail", (err, runnable) => {
                console.log(err.message);
                return false;
            });

            // Find the p element and extract the text. Ensure there's text.
            cy.get(".banner-square-overlay-container")
                .find("p")
                .invoke("text")
                .as("textFunction")
                .should("have.length.gt", 0)
                .then(
                    () =>
                    function () {
                        cy.log("===== Extracted text ==== ", this.textFunction);
                    }
                );
            cy.wait(6000)
              .screenshot({capture: "viewport"});

            // Find the button and extract the label
            cy.get(".banner-square-overlay-container")
                .find("button.home-button")
                .invoke("text")
                .as("buttonFunction")
                .then(
                    () =>
                    function () {
                        cy.log("===== Button Label ==== ", this.buttonFunction);
                    }
                );
        });

        // Right square
        it("the right square contains an image", () => {
            // Fail the test if image not found
            cy.on("fail", (err, runnable) => {
                console.log(err.message);
                return false;
            });

            // Finds image and extracts the image url
            cy.xpath("(//div[@class='banner-square-image'])[2]")
                .find("img.block")
                .should("be.visible")
                .invoke("attr", "src")
                .as("urlFunction")
                .then(
                    () =>
                    function () {
                        cy.log("===== Image Url ==== ", this.srcFunction);
                    }
                );
                cy.wait(6000)
                  .screenshot({capture: "viewport"});
        });
    });

    context("New Products section", () => {
        it("extracts product links", () => {
            // Fail the tests if links not found
            cy.on("fail", (err, runnable) => {
                console.log(err.message);
                return false;
            });

            // Clicks on the new products tab, gets each product's column and extracts the link
            cy.get("button.secondary-font")
                .contains("Új termékek")
                .should("be.visible")
                .click()
                .get("div.col-sm-6.col-xs-6.flex.col-md-3")
                .each(($els, index, $list) => {
                    cy.wrap($els)
                        .find('[data-testid="productLink"]')
                        .invoke("attr", "href")
                        .as("productLink")
                        .then(
                            () =>
                            function () {
                                cy.log("Product Link", this.productLink);
                            }
                        );
                });
                cy.wait(6000)
                 .screenshot({capture: "viewport"});
        });

        // Clicks on the new products tab, gets each product's column and extracts the title
        it("extracts product titles", () => {
            cy.on("fail", (err, runnable) => {
                console.log(err.message);
                return false;
            });

            cy.get("button.secondary-font")
                .contains("Új termékek")
                .should("be.visible")
                .click()
                .get("div.col-sm-6.col-xs-6.flex.col-md-3")
                .each(($els, index, $list) => {
                    cy.wrap($els)
                        .find("p.product-name")
                        .invoke("text")
                        .as("producTitle")
                        .then(
                            () =>
                            function () {
                                cy.log("Product Title", this.productTitle);
                            }
                        );
                });
        });

        // Clicks on the new products tab, gets each product's column and extracts the imageURL
        it("extracts image URLs", () => {
            cy.on("fail", (err, runnable) => {
                cy.wait(3000).screenshot("Failed Image URLs");
                console.log(err.message);
                return false;
            });

            cy.get("button.secondary-font")
                .contains("Új termékek")
                .should("be.visible")
                .click()
                .get("div.col-sm-6.col-xs-6.flex.col-md-3")
                .each(($els, index, $list) => {
                    cy.wrap($els)
                        .find('img[class="preview-img-item product-image__thumb"]')
                        .invoke("attr", "src")
                        .as("imageURL")
                        .then(
                            () =>
                            function () {
                                cy.log("Product Image URLs", this.imageURL);
                            }
                        );
                });
        });

        // Clicks on the new products tab, gets each product's column and extracts the price
        it("extracts product prices", () => {
            cy.on("fail", (err, runnable) => {
                cy.wait(3000).screenshot("Failed Product Prices");
                console.log(err.message);
                return false;
            });

            cy.get("button.secondary-font")
                .contains("Új termékek")
                .should("be.visible")
                .click()
                .get("div.col-sm-6.col-xs-6.flex.col-md-3")
                .each(($els, index, $list) => {
                    cy.wrap($els)
                        .find('div[class="lh30 cl-dark weight-300 fs-medium-small"]')
                        .invoke("text")
                        .as("price")
                        .then(
                            () =>
                            function () {
                                cy.log("Product Prices", this.price);
                            }
                        );
                });
        });
    });
});
