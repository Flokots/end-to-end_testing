# End-to-End Testing

### Objective

To create a few tests for a popular end-to-end testing framework known as [Cypress](https://www.cypress.io/).

The tests run on the [Butopêa website](https://butopea.com).

The tests should load the website, perform some actions, check for existence of certain elements, and extract data from the page. This also showcases the ability of Cypress to be used as a scraping tool for automating business processes. The extracted data should be logged.

### Test Cases

1. Confirm if the middle square contains some text and a button. If it does, extract both the text and the button label individually. If it doesn't, fail the test.
2. Confirm if the square to the right contains an image. If it does, extract the image url. If it doesn't, fail the test.
3. Click on the new products tab, let the tab load, and check if it contains a list of products. If it does, extract each product's link, title, image URL, and price. If it doesn't, fail the test.

### Development process

Before each test:
* Load the website.
* Fail the test if element not found.

NOTE: Screenshots are taken automatically for failed tests. 
#### The Homepage section

1.  Find the middle square by its `banner-square-overlay-container` class.
2.  Find the paragraph element and _individually_ extact the text.
3.  Find the button by the button tag and home button class and extract only the button label.
4.  Find the square on the right that's supposed to have an image by the `(//div[class='banner-square-image'])[2]` xpath.
5.  Find image by the `img` tag and `block` class and extract the url.

#### New Products Section

_Finding the links, titles, imageURLs and prices separately_

**Product Links**

- Click on the new product's tab
- Get each product's column which are `div` elements with the class `col-sm-6 col-xs-6 flex col-md-3`
- Extract the product links. Product links have the `data-testid=productLink` attribute.
- Log the extracted data.

**Product Titles**

- Click on the new product's tab
- Get each product's column which are `div` elements with the class `col-sm-6 col-xs-6 flex col-md-3`
- Extract the product titles. Product titles have the `p` tag and `product-name` class.
- Log the extracted data.

**Image URLs**

- Click on the new product's tab
- Get each product's column which are `div` elements with the class `col-sm-6 col-xs-6 flex col-md-3`
- Extract the product titles. Product titles have the `img` tag and `preview-img-item product-image__thumb` class.
- Log the extracted data.

**Product Prices**

- Click on the new product's tab
- Get each product's column which are `div` elements with the class `col-sm-6 col-xs-6 flex col-md-3`
- Extract the product prices. Product prices are in the `div` element with `lh30 cl-dark weight-300 fs-medium-small` class. 
- Log the extracted prices.

### Project Setup
1. Clone this repository.
2. `cd` into the cloned repository.
3. Run `npm i`
4. Run `npx cypress run`
5. Have fun exploring!

### Author

[Florence Kotohoyoh](https://github.com/Flokots)

### Contact

florencekotohoyoh@gmail.com
