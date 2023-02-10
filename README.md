# End-to-End Testing

### Objective
To create a few tests for a popular end-to-end testing framework known as [Cypress](https://www.cypress.io/). 

The tests run on the [Butopêa website](https://butopea.com). 

The tests should load the website, perform some actions, check for existence of certain elements, and extract data from the page. This also showcases the ability of Cypress to be used as a scraping tool for automating business processes. The extracted data should be logged.

### Test Cases
1. Confirm if the middle square contains some text and a button. If it does, extract both the text and the button label individually. If it doesn't, fail the test. 
2. Confirm if the square to the right contains and image. If it does, extract the image url. If it doesn't, fail the test. 
3. Click on the new products tab, let the tab load, and check if it contains a list of products. If it does, extract each product's link, title, image URL, and price. If it doesn't, fail the test.
   

### Author
[Florence Kotohoyoh](https://github.com/Flokots)

### Contact
florencekotohoyoh@gmail.com