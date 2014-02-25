# Sales

Represent API routes that stores and sellers can use to interact with purchased [`OrderItem`s](User Order Items.html).

> ** Order item routes have been refactored and changes will be reflected soon **

# Routes

## GET /stores/{store_id}/sales

Collection. By default, it returns all order items, most recent first, **sold by the current user**. This collection accepts search filters and pagination options. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **

### Query Parameters

*Filtering*
`id`
:   `int csv` Return only order items with the given ID or ID’s.
`order_id`
:   `int csv` Return only order items that were purchased in the given order id or ids.
`buyer_id`
:   `int` Return only order items that were purchased by the given user id.
`status`
:   `int csv` Return only order items in the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`!status`
:   `int csv` Return order items not in the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`product_cause_id`
:   `int` Return only order items that were pledged to the given cause id.
`order_status`
:   `int csv` Return only order items that belong to an order with the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`!order_status`
:   `int csv` Return only order items that that do not belong to orders with the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`product_type`
:   `int csv` Return only order items of a specific product type or types. See [`ProductType`](Constants.html#ProductType).
`product_id`
:   `int csv` Return only order items of a specific product.
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order, media, seller, buyer, cause, feedback, history, payouts`.



### Returns

* Array of [`OrderItem`](Objects.html#OrderItem) objects.
* `X-COLLECTION-COUNT` header set to the total number of order items that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve sale items.` Occurs when the request failed to be fulfilled.


## GET /stores/{store_id}/sales/{item_id}

Resource. Returns a specific sale item given its unique identifier sold by the current user. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **


### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order, media, seller, buyer, cause, feedback, history, payouts`.



### Returns

[`OrderItem`](Objects.html#OrderItem) object.

### Errors

**404 Not Found**
:   `Sale item not found.` Occurs when the given sale item was not found.
**500 Internal Server Error**
:   `Failed to retrieve sale item.` Occurs when the request failed to be fulfilled.


## PUT /stores/{store_id}/sales/{item_id}

Resource. Updates the status of the order item. Used by sellers to indicate an item was shipped. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **


### Entity NVP Parameters

`status`
:   `int enum` The status to set the order item to. Must be 3 (Pending acquisition) when order item status is currently 2 (Pending fulfilment) or status must be 4 (Complete) when order item type is 2 (Deal/Giving Reward). See [OrderStatus](Constants.html#OrderStatus).
`tracking_carrier`
:   `string (64)` Name of the shipping carrier for the order item.
`tracking_number`
:   `string (64)` Tracking number for order item.
`product_deal_vendor_ack`
:   `string (255)` Note to indicate who at an organization redeemed a Deal/Giving Reward. Applies to Deals/Giving Rewards items and is available only to users with vendor level permissions.



### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Order status change prohibited.` Occurs when the status cannot be changed to the given value due to the current state of the order item.
:   `Invalid status.` Occurs when the given status is not a valid status code that can be applied.
**403 Forbidden**
:   `Insufficient privileges for this operation.` Occurs when the current user does not have access to the given order item.
**404 Not Found**
:   `Order item not found.` Occurs when the given order item was not found or is invalid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.


