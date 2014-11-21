
# Checkout

The checkout system facilitates purchasing products listed Okanjo.

Checkout currently supports payments using PayPal or Balanced Payments for credit-card processing.

> **Credit card information must never pass through or be collected by your application.** [Balanced Payments™](http://balancedpayments.com) enables PCI
> compliance by routing user payment card data directly to Balanced's API, who then returns a tokenized card URI, which
> is used by Okanjo for checkout transactions.


# Objects

* [`Card`](Objects.html#Card) – Tokenized payment card
* [`CheckoutOrder`](Objects.html#CheckoutOrder) – Unconfirmed order
* [`CheckoutConfirmation`](Objects.html#CheckoutConfirmation) – Order confirmation


# Routes

## POST /checkout

Controller. Initializes the checkout process. Creates the order. For use with orders containing physical items (regular items, auctions, and offers) only. **Requires authentication at user or guest levels.**

### Entity NVP Parameters

`cart`
:   `json string` JSON-encoded cart string in the format of `{ "20": { "quantity: 1, "shipping_type": "xxx" }, ...}`, where `20` = product id and shipping type is, `"free"`, `“local”` or the ID number of the shipping option attached to the product. If selecting a product variant, include the corresponding `variants` key from the [`Product`](Objects.html#Product) with the cart item, e.g. `{ variant : "Color=Green+with+Sparkles&Size=Small" }`
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
:   `int csv`  Optional. CSV of store ID's in which to subscribe to. (e.g. For future use for mailing list, updates, etc)
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key.



### Returns

[`CheckoutOrder`](Objects.html#CheckoutOrder) object.

### Errors

**400 Bad Request**
:   `Invalid cart.` Occurs when the cart that was given was invalid.
:   `Invalid url.` Occurs when one of the return URL’s are invalid.
:   `Invalid cart item: {id}` Occurs when there was a problem with a specific product in the cart.
:   `Invalid cart total.` Occurs when the cart total is outside of the valid range of $1 and $10,000.
:   `Invalid shipping address.` Occurs when one or more of the shipping fields were missing or invalid.
:   `Invalid address - city, state, zip mismatch.` Occurs when PayPal failed to validate the given shipping address.
:   `Invalid field: {field}` Occurs when the given field was not valid.
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

[`CheckoutConfirmation`](Objects.html#CheckoutConfirmation) object.

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
:   `Payment card could not be authorized.` Occurs when the payment card given could not be authorized by Balanced, usually due to the card issuer declining the transaction. For example, credit limit exceeded.
:   `PayPal could not authorize the order due to error code: {id}` Occurs when PayPal could not authorize the transaction, usually due to insufficient funding or a problem with the buyer's funding source. `id` is the error number PayPal returned.


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
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key.



### Returns

[`CheckoutOrder`](Objects.html#CheckoutOrder) object.

### Errors

**400 Bad Request**
:   `Invalid cart.` Occurs when the cart that was given was invalid.
:   `Invalid url.` Occurs when one of the return URL’s are invalid.
:   `Invalid cart item: {id}` Occurs when there was a problem with a specific product in the cart.
:   `Invalid cart total.` Occurs when the cart total is outside of the valid range of $1 and $10,000.
:   `Invalid shipping address.` Occurs when one or more of the shipping fields were missing or invalid.
:   `Invalid address - city, state, zip mismatch.` Occurs when PayPal failed to validate the given shipping address.
:   `Invalid field: {field}` Occurs when the given field was not valid.
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

[`CheckoutConfirmation`](Objects.html#CheckoutConfirmation) object.

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
:   `Payment card could not be authorized.` Occurs when the payment card given could not be authorized by Balanced, usually due to the card issuer declining the transaction. For example, credit limit exceeded.
:   `PayPal could not authorize the order due to error code: {id}` Occurs when PayPal could not authorize the transaction, usually due to insufficient funding or a problem with the buyer's funding source. `id` is the error number PayPal returned.


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