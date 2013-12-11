
# Checkout

The checkout system facilitates purchasing products listed Okanjo.

Checkout currently supports payments using PayPal or Balanced for credit-card processing.

> **Credit card information should never pass through or be collected by your application.** Balanced enables PCI compliance
> by routing user payment card data directly to Balanced's API, who then returns a tokenized card URI, which is used by
> Okanjo for checkout transactions.

# Objects

## Card

Represents a tokenized Balanced payment card.

`uri`
:   `string`  The unique Balanced URI for the card. Used for confirming the order.
`nickname`
:   `string`  The display name for the card. E.g. Visa x4002.
`brand`
:   `string`  The brand of the card issuer. E.g. Visa, MasterCard, Discover, etc...
`last_four`
:   `string`  The last four digits of the card number.


## CheckoutOrder

A CheckoutOrder object is returned as the response to initially creating the order. Contain the information needed
for your application to to allow the buyer to complete the transaction.

`token`
:   `string`  The unique order identifier.
`paypal_url`
:   `string`  The PayPal URL to redirect the client to complete the transaction using PayPal.
`cards`
:   `Card []`  Array of stored cards. Always returns empty on guest checkout sessions.
`subscriptions`
:   [`Success KVP`](Globals.html#Default Response Object)  Associative set of subscription results, where the key is the store id being subscribed to and the value is the result of the subscription attempt.


## CheckoutConfirmation

CheckoutConfirmation objects are returned after an order was processed and completed. They contain sufficient data that
may be used for Google Analytics to track e-commerce traffic.

`city`
:   `string`  Buyer’s city / locality.
`country`
:   `string`  Buyer’s country.
`items[]`
:   `Array`  Array of items that was purchased.
`items[n][price]`
:   `int`  Item’s price.
`items[n][qty]`
:   `int`  How many of the item was purchased.
`items[n][sku]`
:   `int`  Order item id number.
`items[n][title]`
:   `string`  Item’s title.
`items[n][txnId]`
:   `int`  Order id number.
`shipping`
:   `string`  Shipping total price.
`state`
:   `string (2)`  Buyer’s state.
`storeName`
:   `string`  Affiliation / store name (currently only returns Okanjo).
`total`
:   `string`  Order item total.
`txnId`
:   `int`  Order id number.


# Routes

## POST /checkout

Controller. Initializes the checkout process. Creates the order. For use with orders containing physical items (regular items, auctions, and offers) only. **Requires authentication at user or guest levels.**

### Entity NVP Parameters

`cart`
:   `json string` JSON-encoded cart string in the format of `{ "20": { "quantity: 1, "shipping_type": "xxx" }, ...}`, where `20` = product id and shipping type is, `"free"`, `“local”` or the ID number of the shipping option attached to the product.
`return_url`
:   `string (1024)` Where to tell PayPal to redirect to after the buyer confirms the payment.
`cancel_url`
:   `string (1024)` Where to tell PayPal to redirect to when the buyer cancels the payment process.
`shipping_first_name`
:   `string (16)` The buyer’s shipping first name.
`shipping_last_name`
:   `string (16)` The buyer’s shipping last name.
`shipping_address_1`
:   `string (100)` The buyer’s shipping address line 1.
`shipping_address_2`
:   `string (100)` Optional. The buyer’s shipping address line 2.
`shipping_city`
:   `string (40)` The buyer’s shipping city.
`shipping_state`
:   `string (2)` The buyer’s shipping state code. (e.g. WI)
`shipping_zip`
:   `string (10)` The buyer’s shipping zip code.
`shipping_country`
:   `string (2)` The buyer’s shipping country code. (e.g. US)
`shipping_phone`
:   `string (20)` The buyer’s phone number.
`subscribe_to`
:   `int csv`  Optional. CSV of store ID's in which to subscribe to. (e.g. mailing list, updates, etc)



### Returns

[`CheckoutOrder`](Checkout.html#CheckoutOrder) object.

### Errors

**400 Bad Request**
:   `Invalid cart.` Occurs when the cart that was given was invalid.
:   `Invalid url.` Occurs when one of the return URL’s are invalid.
:   `Invalid cart item: {id}` Occurs when there was a problem with a specific product in the cart.
:   `Invalid cart total.` Occurs when the cart total is outside of the valid range of $1 and $10,000.
:   `Invalid shipping address.` Occurs when one or more of the shipping fields were missing or invalid.
:   `Invalid address - city, state, zip mismatch.` Occurs when PayPal failed to validate the given shipping address.
**401 Unauthorized**
:   `Login required.` Occurs when the user attempted to checkout without a valid account.
**409 Conflict**
:   `Cannot buy items own item: {id}` Occurs when the user attempted to checkout their own item.
**500 Internal Server Error**
:   `Something went wrong.` Occurs when the was an unknown problem on the server.
:   `Could not checkout at this time.` Occurs when something goes wrong when talking to PayPal’s API.



## POST /checkout/confirm

Controller. Submits the order created via [POST /checkout](Checkout.html#POST /checkout) for processing. **Requires authentication at user or guest levels.**

When paying using PayPal, `payer_id` is required, otherwise when paying using a tokenized payment card via Balanced, `balanced_card_uri` is required.

### Entity NVP Parameters

`order_token`
:   `string` Required. Order transaction token.
`payer_id`
:   `string` PayPal payer id code.
`balanced_card_uri`
:   `string` Balanced tokenized card URI.


### Returns

[CheckoutConfirmation](Checkout.html#CheckoutConfirmation) object.

### Errors

**400 Bad Request**
:   `Invalid order.` Occurs when the order is invalid.
**401 Unauthorized**
:   `Login required.` Occurs when the user attempted to checkout without a valid account.
**403 Forbidden**
:   `You are not authorized to debit the given card URI.` Occurs when the given Balanced card URI that does not belong to the corresponding user’s account.
**409 Conflict**
:   `One or more products have been changed since the order was created.` Occurs when a seller modified a product while it was in someone’s cart. Cannot complete the checkout process if the item was changed since it was added to the cart.
:   `One or more products are no longer available.` Occurs when an item was sold or taken down while it was in someone’s cart. Cannot complete the checkout since the item is no longer available.
**500 Internal Server Error**
:   `Could not checkout at this time.` Occurs when something goes wrong when communicating with PayPal/Balanced or there was a problem interacting with the backend.



## POST /checkout/donations

Controller. Initializes the checkout process for donation orders. Creates the order and initializes the transaction with PayPal. May only contain donation items. Backwards compatible with [POST /checkout](Checkout.html#POST /checkout). **No authentication required.**

The main differences between [POST /checkout](Checkout.html#POST /checkout) are:
* Only donation items are allowed.
* No user token is required.
* Only a limited set of buyer information is required: name, email, and zip-code.

### Entity NVP Parameters

`cart`
:   `json string` Required. JSON-encoded cart string in the format of `{ "20": { "quantity: 1, "shipping_type": "xxx" }, ...}`, where `20` = product id and shipping type is, `"free"`, `“local”` or the ID number of the shipping option attached to the product.
`return_url`
:   `string (1024)` Required. Where to tell PayPal to redirect to after the buyer confirms the payment.
`cancel_url`
:   `string (1024)` Required. Where to tell PayPal to redirect to when the buyer cancels the payment process.
`email`
:   `string (255)` Required. The buyer’s email address.
`shipping_first_name`
:   `string (16)` Required. The buyer’s shipping first name.
`shipping_last_name`
:   `string (16)` Required. The buyer’s shipping last name.
`shipping_zip`
:   `string (10)` Required. The buyer’s shipping zip code.
`shipping_country`
:   `string (2)` Required. The buyer’s shipping country code. (e.g. US)
`shipping_address_1`
:   `string (100)` Optional. The buyer’s shipping address line 1.
`shipping_address_2`
:   `string (100)` Optional. The buyer’s shipping address line 2.
`shipping_city`
:   `string (40)` Optional. The buyer’s shipping city.
`shipping_state`
:   `string (2)` Optional. The buyer’s shipping state code. (e.g. WI)
`shipping_phone`
:   `string (20)` Optional. The buyer’s phone number.
`subscribe_to`
:   `int csv`  Optional. CSV of store ID's in which to subscribe to. (e.g. mailing list, updates, etc)



### Returns

[`CheckoutOrder`](Checkout.html#CheckoutOrder) object.

### Errors

**400 Bad Request**
:   `Invalid cart.` Occurs when the cart that was given was invalid.
:   `Invalid url.` Occurs when one of the return URL’s are invalid.
:   `Invalid cart item: {id}` Occurs when there was a problem with a specific product in the cart.
:   `Invalid cart total.` Occurs when the cart total is outside of the valid range of $1 and $10,000.
:   `Invalid shipping address.` Occurs when one or more of the shipping fields were missing or invalid.
:   `Invalid address - city, state, zip mismatch.` Occurs when PayPal failed to validate the given shipping address.
**401 Unauthorized**
:   `Login required.` Occurs when the user attempted to checkout without a valid account.
**409 Conflict**
:   `Cannot buy items own item: {id}` Occurs when the user attempted to checkout their own item.
**500 Internal Server Error**
:   `Something went wrong.` Occurs when the was an unknown problem on the server.
:   `Could not checkout at this time.` Occurs when something goes wrong when talking to PayPal’s API.


### Example

```
POST /checkout/donations?key=XXXXX&signature=YYYYY HTTP/1.1
Host: sandbox.api.okanjo.com
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Content-Length: 302

cart=%7B%2299999%22%3A%7B%22quantity%22%3A10%2C%22shipping_type%22%3A%2299999%22%7D%7D&shipping_first_name=John&shipping_last_name=Smith&email=john@example.com&shipping_zip=53202&shipping_country=US&return_url=http%3A%2F%2Fokanjo.com%2F%3Freturn&cancel_url=http%3A%2F%2Fokanjo.com%2F%3Fcancel&subscribe_to=1,2,3


HTTP 1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache`
```
```js
{
    "token": "EC%2d6YD141039D5125406",
    "paypal_url": "https://www.sandbox.paypal.com/webscr?cmd=_express-checkout&token=EC%2d6YD141039D5125406",
    "cards": [],
    "subscriptions": {
        "1": {
            "type": "success"
        },
        "2": {
            "type": "success"
        },
        "3": {
            "type": "success"
        }
    }
}
```


## POST /checkout/donations/confirm

Submits the donation order created via [POST /checkout/donation](Checkout.html#POST /checkout/donation) for processing. **No authentication required.**

When paying using PayPal, `payer_id` is required, otherwise when paying using a tokenized payment card via Balanced, `balanced_card_uri` is required.

### Entity NVP Parameters

`order_token`
:   `string` Required. Order transaction token.
`payer_id`
:   `string` PayPal payer id code.
`balanced_card_uri`
:   `string` Balanced tokenized card URI.


### Returns

[CheckoutConfirmation](Checkout.html#CheckoutConfirmation) object.

### Errors

**400 Bad Request**
:   `Invalid order.` Occurs when the order is invalid.
**401 Unauthorized**
:   `Login required.` Occurs when the user attempted to checkout without a valid account.
**403 Forbidden**
:   `You are not authorized to debit the given card URI.` Occurs when the given Balanced card URI that does not belong to the corresponding user’s account.
**409 Conflict**
:   `One or more products have been changed since the order was created.` Occurs when a seller modified a product while it was in someone’s cart. Cannot complete the checkout process if the item was changed since it was added to the cart.
:   `One or more products are no longer available.` Occurs when an item was sold or taken down while it was in someone’s cart. Cannot complete the checkout since the item is no longer available.
**500 Internal Server Error**
:   `Could not checkout at this time.` Occurs when something goes wrong when communicating with PayPal/Balanced or there was a problem interacting with the backend.


### Example

```
POST /checkout/donations/confirm?key=XXXXX&signature=YYYYY HTTP/1.1
Host: sandbox.api.okanjo.com
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Content-Length: 137

balanced_card_uri=%2Fv1%2Fmarketplaces%2FTEST-MP1wZryDQg45CPcCfJ0i0MPK%2Fcards%2FCC6beOE6cpL45DoMRNL1LIuW&order_token=EC%2d6YD141039D5125406


HTTP 1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache`
```
```js
{
    "txnId": 44444,
    "storeName": "Okanjo",
    "total": 100,
    "shipping": 0,
    "city": "",
    "state": "",
    "country": "USA",
    "items": [
        {
            "txnId": 99999,
            "sku": 999,
            "title": "Virtual Product Title",
            "price": 10,
            "qty": 10,
            "sellerId": 12345
        }
    ]
}
```