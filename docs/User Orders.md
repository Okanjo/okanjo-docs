# User Orders

Order created during the checkout process. Contains one or more [`OrderItem`s](Objects.html#OrderItem).

# Objects

* [`Order`](Objects.html#Order) – Grouping of products that have been or could have been purchased.


# Routes

## GET /users/{id}/orders

Collection. By default, it returns all orders, most recent first, belonging to the given user. This collection accepts search filters and pagination options. **Requires user level authentication.**

### Query Parameters

*Filtering*
`id`
:   `int csv` Return only orders with the given ID or ID’s.
`status`
:   `int csv` Return only orders in the given status(es). [`OrderStatus`](Constants.html#OrderStatus)
`!status`
:   `int csv` Return orders not in the given status(es). [`OrderStatus`](Constants.html#OrderStatus)
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `items`, and embeds from order items: `media`, `store`, `buyer`, `cause`, `feedback`, `history`.



### Returns

* Array of [`Order`](Objects.html#Order) objects.
* `X-COLLECTION-COUNT` header set to the total number of orders that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve orders.` Occurs when the request failed to be fulfilled.



## GET /users/{user_id}/orders/{id}

Resource. Returns a specific order given its unique identifier, belonging to the given user. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `items`, and embeds from order items: `media`, `store`, `buyer`, `cause`, `feedback`, `history`.


### Returns

[`Order`](Objects.html#Order) object.

### Errors

**404 Not Found**
:   `Order not found.` Occurs when the given order was not found.
**500 Internal Server Error**
:   `Failed to retrieve order.` Occurs when the request failed to be fulfilled.



## PUT /users/{user_id}/orders/{id}

Resource. Updates the status of the order item. Used by buyers to indicate an item was received. **Requires user level authentication.**

### Entity NVP Parameters

`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.


### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was not valid.
**403 Forbidden**
:   `Insufficient privileges for this operation.` Occurs when the current user does not have access to the given order item.
**404 Not Found**
:   `Order not found.` Occurs when the given order item was not found or is invalid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.
