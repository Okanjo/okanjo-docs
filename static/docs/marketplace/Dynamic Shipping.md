
# Dynamic Shipping (BETA)

Okanjo offers the ability to get real-time shipping rates for an item at checkout time. We call this feature Dynamic Shipping.


## Prerequisites

In order to take advantage of dynamic shipping rates, you must satisfy the following requirements.

 * Your store must have an active subscription or free trial.
 * Your store must have at least one `shipping` type [`Address`](Objects.html#Address).
 * Your product(s) must have `use_dynamic_shipping` set to `1` (enabled) and have parcel information set.

## Checkout Process

To utilize dynamic shipping during checkout, you must use the [`POST /checkout/rates`](Checkout.html#POST /checkout/rates) route to
quote shipping rates for the cart items. The route takes the same request as the [`POST /checkout`](Checkout.html#POST /checkout) route,
so client-side implementation is easily integrated.

The biggest difference in flow to the checkout process, is that the buyer shipping address must be known prior to quoting shipping. The order of operations is:

1. Get buyer shipping address
2. Quote shipping and sales tax ([`POST /checkout/rates`](Checkout.html#POST /checkout/rates))
3. Present the buyer with the quoted shipping options and allow them to select which one they want. The UI can show the total cost of the order since tax information is available as well.
4. Create the order ([`POST /checkout`](Checkout.html#POST /checkout))
5. Choose a payment method and confirm the order ([`POST /checkout/confirm`](Checkout.html#POST /checkout/confirm))

## Transactions

The dynamic shipping cost of the item will be credited to your store account separately, and as a result will not be affected by donations or commissions.

## Shipping Providers

Okanjo offers stores and marketplaces the ability to build their own shipping quoting service, called a Shipping Provider.

We have open-sourced our basic shipping provider on GitHub, called [Okanjo ShipIt](https://github.com/okanjo/okanjo-shipit). You are free to use this as a basis to build your own shipping provider that's unique to your business.

Okanjo ShipIt integrates with [EasyPost](https://easypost.com) to generate dynamic shipping rates. You may use your own EasyPost API key for your own shipping provider.

### Security

Okanjo API communicates with shipping providers using a custom AES-128-CBC encryption algorithm, signed using SHA-256 HMAC. Okanjo elected to use this methodology instead of simply using SSL for two reasons.

Firstly, the shipping provider service is very much a background service, and as such, it's a service that can easily be forgotten about. Due to the nature of SSL, certificates are renewed regularly. Organizations
and stores that do not have proactive maintenance plans could easily forget to update the service, silently disabling checkout transactions.

Secondly, simply using SSL would still enable public requests to a shipping provider. By design, we only want to allow traffic to the shipping provider from trusted sources. The AES/SHA-HMAC keys essentially act as API keys.

### Routes

The shipping provider must implement two routes:

#### `GET /`

The primary purpose of this route is to verify that the encryption keys are valid. When decrypted, the response should be a human-readable service version description.

For example:

```
5C/a8TAYiPmR+1MfPuJ7Hw36c5W8LRQo/2tHfGqAXDAGPrp6orn+Y8prn4WVNX4F2D3kAB1qze7qFZJvqbeftgQacFi8UWJN5Fx9nfjMvSdj6A1s25tEhAZ9Sb5Xly5e$srEWwiFyEDBdhwrWJn7gUA==$ogwAuMG0a6+5ACrSH090QtHYMzhqOD/pd7oJP0R6Icc=
```

Using the encryption key `C9TMDUOmeg+l65rJP/91nQ==` and HMAC key `+oH65mIBPAAibxzddZ6P9w==`, the decrypted response reads:

```
Okanjo Shipping Calculation Service version 0.1.0. Ask your doctor. Use as directed.
```


#### POST /calculate/rates

This route takes order information and returns shipping rates for each item.

> Note: By default, Okanjo ShipIt quotes per product, and as a result, the Okanjo API multiplies shipping * quantity, essentially quoting what it would cost to ship each item by itself.
> In the real world, for example, a customer who buys two t-shirts from a store who has both on hand, the store would likely aggregate the items into the same parcel and ship it, barely increasing the cost
> of shipping over one t-shirt. The buyer, unfortunately, pays the penalty. When building your own shipping provider, you can account for this by calculating the total aggregated cost of shipping and
> dividing it evenly per item, so shipping * quantity results in the total aggregated cost of shipping.

##### Request

The when executing a [`POST /checkout/rates`](Checkout.html#POST /checkout/rates) request, cart items are aggregated per store. A shipping provider request is executed per store.

`shipping_destination`
:   [`ShippingProviderAddress`](Dynamic Shipping.html#shippingprovideraddress) The address in which the items are being sent to.
`shipping_origins`
:   [`ShippingProviderAddress []`](Dynamic Shipping.html#shippingprovideraddress) An array of `shipping` type addresses the items could be shipped from. These are the store's `shipping` addresses.
`items`
:   [`CheckoutQuote []`](Objects.html#CheckoutQuote) An array of items to quote shipping for.


###### ShippingProviderAddress

A physical mailing address.

`street1`
:   `string` Street address.
`street2`
:   `string` Optional. Only include if there is a secondary street address line, such as building, suite, or apartment.
`city`
:   `string` City name.
`state`
:   `string` Two-letter state abbreviation.
`zip`
:   `string` Postal code.
`country`
:   `string` Two-letter country code.


##### Response

Returns an array of shipping quote objects:

###### ShippingProviderItemQuote

`product_id`
:   `string` Unique ID of the quoted product.
`origin_address`
:   [`ShippingProviderAddress`](Dynamic Shipping.html#shippingprovideraddress) The address in which the package will originate.
`destination_address`
:   [`ShippingProviderAddress`](Dynamic Shipping.html#shippingprovideraddress) The address in which the package will be shipped to.
`parcel`
:   [`ProductParcel`](Objects.html#ProductParcel) The parcel the item will be shipped in.
`rates`
:   [`ShippingRate []`](Objects.html#ShippingRate) Array of options in which the package can be shipped.


> Note: You may choose to include more than the minimum shipping rate fields. That's entirely up to your implementation.

