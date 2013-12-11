# Orders

Buyer order created during checkout. Contains one or more [OrderItems](OrderItems.html#OrderItem).

# Objects

## Order

Complete buyer purchase transaction. Contains buyer information and purchased items.

`id`
:   `int`  The unique ID of the order.
`buyer_id`
:   `int`  The unique ID of the user who made the order.
`created`
:   `date time`  When the order was started (not necessarily completed)
`shipping_first_name`
:   `string (255)`  The buyer’s first name.
`shipping_last_name`
:   `string (255)`  The buyer’s last name.
`shipping_address_1`
:   `string (255)`  The buyer’s shipping street address.
`shipping_address_2`
:   `string (255)`  The buyer’s apartment, building, condo number, etc.
`shipping_city`
:   `string (255)`  The buyer’s city / locality.
`shipping_state`
:   `string (2)`  The buyer’s state code. (e.g. WI)
`shipping_zip`
:   `string (10)`  The buyer’s zip code.
`shipping_country`
:   `string (2)`  The buyer’s country code. (e.g. US)
`shipping_phone`
:   `string (20)`  The buyer’s contact phone number.
`status`
:   `int enum`  The status of the order. See [OrderStatus](Constants.html#OrderStatus).
`type`
:   `int enum`  The type of the order. See [`OrderType`](Constants.html#OrderType).
`items`
:   [`OrderItem []`](OrderItems.html#OrderItem)  Embeddable. Array of items being purchased on the order.


# Routes

## GET /orders

Collection. By default, it returns all orders, most recent first, placed by the current user. This collection accepts search filters and pagination options. **Requires user level authentication.**

### Query Parameters

*Filtering*
`id`
:   `int csv` Return only orders with the given ID or ID’s.
`buyer_id`
:   `int` Return only orders placed by the specific user ID.
`status`
:   `int csv` Return only orders in the given status(es). [OrderStatus](Constants.html#OrderStatus)
`!status`
:   `int csv` Return orders not in the given status(es). [OrderStatus](Constants.html#OrderStatus)
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `items, media, seller, buyer, cause, feedback, history, stores`.



### Returns

* Array of [Order](Orders.html#Order) objects.
* `X-COLLECTION-COUNT` header set to the total number of orders that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve orders.` Occurs when the request failed to be fulfilled.



## GET /orders/{id}

Resource. Returns a specific order given its unique identifier. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `items, media, seller, buyer, cause, feedback, history, stores`.


### Returns

[Order](Orders.html#Order) object.

### Errors

**404 Not Found**
:   `Order not found.` Occurs when the given order was not found.
**500 Internal Server Error**
:   `Failed to retrieve order.` Occurs when the request failed to be fulfilled.

