# User Order Items

Order items represent copies of products that were purchased within an [`Order`](Objects.html#Order).


# Objects

* [`OrderItem`](Objects.html#OrderItem) – Snapshot of a product.
* [`OrderItemStatus`](Objects.html#OrderItem) – History state of an order item.
* [`Payout`](Objects.html#OrderItem) – Breakdown record of earnings, commissions, and donations.


# Routes

## GET /users/{id}/order-items

Collection. By default, it returns all order items, most recent first, belonging to the given user. This collection accepts search filters and pagination options. **Requires user level authentication.**

### Query Parameters

*Filtering*
`id`
:   `int csv` Return only order items with the given ID or ID’s.
`order_id`
:   `int csv` Return only order items that were purchased in the given order id or ids.
`status`
:   `int csv` Return only order items in the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`!status`
:   `int csv` Return order items not in the given status(es). See [`OrderStatus`](Constants.html#OrderStatus).
`product_seller_store_id`
:   `int` Return only order items sold by the given store id.
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
:   `string csv` When given, includes additional related data. Accepts: `order`, `media`, `store`, `buyer`, `cause`, `feedback`, `history`, `transactions`, `holds`.


### Returns
* Array of [`OrderItem`](Objects.html#OrderItem) objects.
* `X-COLLECTION-COUNT` header set to the total number of order items that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve order items.` Occurs when the request failed to be fulfilled.



## GET /users/{id}/order-items/{item_id}

Resource. Returns a specific order item belonging to the given user. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order`, `media`, `store`, `buyer`, `cause`, `feedback`, `history`, `transactions`.



### Returns

[`OrderItem`](Objects.html#OrderItem) object.

### Errors

**404 Not Found**
:   `Order item not found.` Occurs when the given order item was not found.
**500 Internal Server Error**
:   `Failed to retrieve order item.` Occurs when the request failed to be fulfilled.



## PUT /users/{id}/order-items/{item_id}

Resource. Updates the status of the order item. Used by buyers to indicate an item was received. **Requires user level authentication.**

### Entity NVP Parameters

`status`
:   `int enum` The status to set the order item to. See [OrderStatus](Constants.html#OrderStatus).
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.

> Note: The status can only be changed in the following situations:
> * Can change to status `4` (Complete) when item status is currently `3` (Pending acquisition).

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

