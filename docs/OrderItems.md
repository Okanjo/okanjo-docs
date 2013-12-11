# Order Items

Order items represent copies of products that were purchased within an [`Order`](Orders.html#Order).

> ** Order item routes have been refactored and changes will be reflected soon **

## OrderItem

Represents a snapshot of a product that was purchased.

> ** Order item routes have been refactored and changes will be reflected soon **

`id`
:   `int`  The unique ID of the item.
`created`
:   `date time`  When the item was created.
`updated`
:   `date time`  When the item was last updated.
`order_id`
:   `int`  The unique ID of the order the item was purchased through.
`product_id`
:   `int`  The original unique product ID the item was listed as.
`quantity`
:   `int`  How many of this item was purchased.
`status`
:   `int enum`  The status of the item. See [OrderStatus](Constants.html#OrderStatus).
`product_donation_perc`
:   `int (0-100)` Nullable. The original percentage of the sale of the item that will be donated to the associated cause.
`product_seller_id`
:   `int`  The original unique ID of the user selling the product.
`product_cause_id`
:   `int` Nullable. The original unique ID of the cause the the product was being pledged to.
`product_location_zip`
:   `string (10)`  The original location of the product.
`product_is_local_pickup`
:   `bit`  Whether the original product offered local pickup.
`product_is_free_shipping`
:   `bit`  Whether the original product offered free shipping
`product_thumbnail_media_id`
:   `int`  The original thumbnail media ID of the product.
`product_media_id_csv`
:   `int csv`  All of the original media image ID’s assocaited with the product.
`product_price`
:   `decimal`  The original cost of the product.
`product_title`
:   `string (255)`  The original title of the product.
`product_type`
:   `int enum`   The original type of the product. See [ProductType](Constants.html#ProductType).
`product_description`
:   `string (64K)`  The original description of the product.
`product_condition`
:   `string enum`  The original condition of the product. See [ProductCondition](Constants.html#ProductCondition).
`shipping_description`
:   `string (32)` Nullable. The original selected shipping description.
`shipping_price`
:   `decimal` Nullable. The original cost of shipping.
`tracking_carrier`
:   `string (64)` Nullable. The shipping provider, provided by the seller.
`tracking_number`
:   `string (64)` Nullable. The shipping tracking number, provided by the seller.
`product_deal_start`
:   `date time` Nullable. When the deal/Giving Reward can start being purchased.
`product_deal_end`
:   `date time` Nullable. When the deal/Giving Reward can no longer be purchased.
`product_promo_start`
:   `date time` Nullable. When the deal/Giving Reward can start being redeemed for its promotional value.
`product_promo_end`
:   `date time` Nullable. When the deal/Giving Reward can no longer be redeemed for its promotional value.
`product_deal_value`
:   `decimal` Nullable. The promotional value of the deal/Giving Reward.
`deal_number`
:   `int` Nullable. The unique deal number identifier of the deal/Giving Reward used on the voucher.
`product_deal_vendor_ack`
:   `string (255)` Nullable. For vendors to indicate which employee marked a deal/Giving Reward as redeemed.
`order`
:   [`Order`](Orders.html#Order)  Embeddable. The order the item was purchased through.
`seller`
:   [`UserProfile`](Users.html#UserProfile)  Embeddable. The seller who sold the item.
`buyer`
:   [`UserProfile`](Users.html#UserProfile)  Embeddable. The buyer who bought the item.
`cause`
:   [`Cause`](Causes.html#Cause)  Embeddable. The cause the item was pledged to.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. The associated media for the associated product, seller, buyer, and cause.
`feedback`
:   [`UserFeedback`](Users.html#UserFeedback)  Embeddable. The feedback received from the buyer about the seller.
`history`
:   [`OrderItemStatus[]`](OrderItems.html#OrderItemStatus)  Embeddable. The history of status dates. Informs on when the order item hit various milestones.
`payouts`
:   [`Payout[]`](OrderItems.html#Payout)  Embeddable. The payouts associated with the item. Used for the breakdown of the item. Can only be embedded on sales.
`stores`
:   [`Store[]`](Stores.html#Store)  Embeddable. The store(s) associated with the seller.



## OrderItemStatus

> ** Order item routes have been refactored and changes will be reflected soon **

`id`
:   `bigint`  The unique ID of the history record.
`order_item_id`
:   `bigint`  The unique ID of the associated order item.
`status`
:   `int enum`  The status of the item. See [OrderStatus](Constants.html#OrderStatus).
`updated`
:   `int`  When the status was set.


## Payout

`id`
:   `int`  The unique ID of the payout.
`status`
:   `int enum`  The status of the item. Options are: See [PayoutStatus](Constants.html#PayoutStatus).
`user_id`
:   `int` Nullable. Optional. The unique ID of the seller being paid.
`cause_id`
:   `int` Nullable. Optional. The unique ID of the cause being paid.status
`is_okanjo_commission`
:   `bit`  Whether the payout is Okanjo’s commission for brokering the transaction.
`amount`
:   `decimal (10)`  The amount of the payout, after processing fees and commission, before disbursement fees.
`estimated_fee`
:   `decimal (10)`  The estimated disbursement fee. Is subject to change depending on payout groupings or payout method changes.
`fee`
:   `decimal (10)`  The final disbursement fee. May not match estimated fee due to grouping or payout method change.


# Routes

## GET /order-items

Collection. By default, it returns all order items, most recent first, **purchased by the current user**. This collection accepts search filters and pagination options. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **

### Query Parameters

*Filtering*
`id`
:   `int csv` Return only order items with the given ID or ID’s.
`order_id`
:   `int csv` Return only order items that were purchased in the given order id or ids.
`status`
:   `int csv` Return only order items in the given status(es). See [OrderStatus](Constants.html#OrderStatus).
`!status`
:   `int csv` Return order items not in the given status(es). See [OrderStatus](Constants.html#OrderStatus).
`product_seller_id`
:   `int` Return only order items sold by the given user id.
`product_cause_id`
:   `int` Return only order items that were pledged to the given cause id.
`order_status`
:   `int csv` Return only order items that belong to an order with the given status(es). See [OrderStatus](Constants.html#OrderStatus).
`!order_status`
:   `int csv` Return only order items that that do not belong to orders with the given status(es). See [OrderStatus](Constants.html#OrderStatus).
`product_type`
:   `int csv` Return only order items of a specific product type or types. See [ProductType](Constants.html#ProductType).
`product_id`
:   `int csv` Return only order items of a specific product.
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order, media, seller, buyer, cause, feedback, history, stores.`


### Returns
* Array of [OrderItem](OrderItems.html#OrderItem) objects.
* `X-COLLECTION-COUNT` header set to the total number of order items that match the given query. Used for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve order items.` Occurs when the request failed to be fulfilled.



## GET /order-items/{item_id}

Resource. Returns a specific order item given its unique identifier bought by the current user. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `string csv` When given, includes additional related data. Accepts: `order, media, seller, buyer, cause, feedback, history, stores`.



### Returns

[OrderItem](OrderItems.html#OrderItem) object.

### Errors

**404 Not Found**
:   `Order item not found.` Occurs when the given order item was not found.
**500 Internal Server Error**
:   `Failed to retrieve order item.` Occurs when the request failed to be fulfilled.



## PUT /order-items/{item_id}

Resource. Updates the status of the order item. Used by buyers to indicate an item was received. **Requires user level authentication.**

> ** Order item routes have been refactored and changes will be reflected soon **

### Entity NVP Parameters

`status`
:   `int enum` The status to set the order item to. Must be 4 (Complete) when item status is currently 3 (Pending acquisition) OR if currently 2 (Pending fulfilment and checkout option was local pickup). See [OrderStatus](Constants.html#OrderStatus).


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

