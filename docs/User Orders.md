# Orders

Buyer order created during checkout. Contains one or more [`OrderItem`s](Objects.html#OrderItem).

# Objects

* [`Order`](Objects.html#Order) – Grouping of products that have been or could have been purchased.


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
:   `int csv` Return only orders in the given status(es). [`OrderStatus`](Constants.html#OrderStatus)
`!status`
:   `int csv` Return orders not in the given status(es). [`OrderStatus`](Constants.html#OrderStatus)
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `items`, `media`, `seller`, `buyer`, `cause`, `feedback`, `history`, `stores`.



### Returns

* Array of [`Order`](Objects.html#Order) objects.
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
:   `string csv` When given, includes additional related data. Accepts: `items`, `media`, `seller`, `buyer`, `cause`, `feedback`, `history`, `stores`.


### Returns

[`Order`](Objects.html#Order) object.

### Errors

**404 Not Found**
:   `Order not found.` Occurs when the given order was not found.
**500 Internal Server Error**
:   `Failed to retrieve order.` Occurs when the request failed to be fulfilled.

