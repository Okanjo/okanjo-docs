# Sales

Routes that stores can use to interact with sold [`OrderItem`s](Objects.html#OrderItem).


# Routes

## GET /stores/{store_id}/sales

Collection. By default, it returns all sold items, most recent first, sold by the given store. This collection accepts search filters and pagination options. **Requires user level authentication.**


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
:   `string csv` When given, includes additional related data. Accepts: `order`, `media`, `store`, `buyer`, `cause`, `feedback`, `history`, `transactions`, `holds`.

### Returns

* Array of [`OrderItem`](Objects.html#OrderItem) objects.
* `X-COLLECTION-COUNT` header set to the total number of order items that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve sale items.` Occurs when the request failed to be fulfilled.



## GET /stores/{store_id}/sales/{item_id}

Resource. Returns a specific sold item given its unique identifier sold by the given store. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order`, `media`, `store`, `buyer`, `cause`, `feedback`, `history`, `transactions`, `holds`.

### Returns

[`OrderItem`](Objects.html#OrderItem) object.

### Errors

**404 Not Found**
:   `Sale item not found.` Occurs when the given sale item was not found.
**500 Internal Server Error**
:   `Failed to retrieve sale item.` Occurs when the request failed to be fulfilled.



## PUT /stores/{store_id}/sales/{item_id}

Resource. Updates the status of the order item. Used by sellers to indicate an item was shipped. **Requires user level authentication.**


### Entity NVP Parameters

`status`
:   `int enum` The status to set the order item to. See [OrderStatus](Constants.html#OrderStatus).
`tracking_carrier`
:   `string (64)` Name of the shipping carrier for the order item.
`tracking_number`
:   `string (64)` Tracking number for order item.
`product_deal_vendor_ack`
:   `string (255)` Note to indicate who at an organization redeemed a Deal. Applies to Deals items.
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.

> Note: The status can only be changed in the following situations:
> * Can change to status `3` (Pending acquisition) when item status is currently `2` (Pending fulfilment)
> * Can change to status `9` (Completed by seller) when the item is a [local-pickup](Constants.html#ShippingDescription) and the status is currently `3` (Pending acquisition)
> * Can change to status `4` (Complete) when item type is `2` (Deal) and the status is currently `8` (Pending redemption)

### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Order status change prohibited.` Occurs when the status cannot be changed to the given value due to the current state of the order item.
:   `Invalid status.` Occurs when the given status is not a valid status code that can be applied.
:   `Invalid field: {field}` Occurs when the given field was invalid.
**403 Forbidden**
:   `Insufficient privileges for this operation.` Occurs when the current user does not have access to the given order item.
**404 Not Found**
:   `Order item not found.` Occurs when the given order item was not found or is invalid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.


