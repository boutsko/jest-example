jest.dontMock('../../../app/components/CartItem.js');

var TestUtils = require('react-addons-test-utils');
var React = require('react');

describe("the cart item module", function(){
    describe("the name display of the item",function(){
        it("should display the name of the item", function(){

            var CartItem = require('../../../app/components/CartItem.js');

            var item = {
                id:3,
                name: "Instant Noodles",
                descrioption: "NOt bad",
                priceUSD: 20,
            };

            var item1 = {
                id:3,
                name: "not Instant Noodles",
                descrioption: "NOt bad",
                priceUSD: 20,
            };

            var cartItem = TestUtils.renderIntoDocument(
                    <CartItem item={item} />
            );
            var label = TestUtils.findRenderedDOMComponentWithTag(cartItem, 'h4');

            expect(label.textContent).toEqual(item.name);
            
        });
    });
});
