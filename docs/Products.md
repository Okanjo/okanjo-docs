# Products

Represents things that can be purchased on Okanjo.

# Objects

## Product

An item that can be purchased on Okanjo.

`id`
:   `int`  The unique ID of the product.
`curated`
:   `date time / null`  Whether (and when) the product has been hand-picked by Okanjo staff.
`donation_perc`
:   `int (0-100)` Nullable. The percent of the sale price that will be donated to the cause by the seller.
`status`
:   `int (enum)`  The status of the product. See [ProductStatus](Constants.html#ProductStatus).
`seller_store_id`
:   `int`  The ID of the store selling the product.
`brand_id`
:   `int`  The ID of the Brand that the product was posted under.
`location_zip`
:   `string (10)`  The zip code of where the product is located.
`location_name`
:   `string (180)`  The city/locality where the product is located.
`location_state`
:   `string (2)`  The state where the product is located.
`stock`
:   `int`  The quantity of the product available for sale.
`category_id`
:   `int`  The ID of the category the product belongs to.
`cause_id`
:   `int` Nullable. The ID of the cause the product is being pledged to.
`is_local_pickup`
:   `bit`  Whether the product is available for pickup.
`is_free_shipping`
:   `bit`  Whether the product can be shipped for no cost to the buyer.
`thumbnail_media_id`
:   `int`  The ID of the media image that is used as the product’s thumbnail.
`created`
:   `date time`  When the product was added to Okanjo.
`published`
:   `date time` Nullable. When the product was released for sale.
`updated`
:   `date time`  When the product was last modified.
`price`
:   `decimal (1-9000)`  The sale price of the product. For auctions, this is the Buy Now price.
`slug`
:   `string (255)`  The unique URL component of the product. e.g. `okanjo.com/item/slug`
`title`
:   `string (255)`  The title of the product.
`description`
:   `string (~64K)`  The description of the product.
`condition`
:   `string enum`  The condition of the product. Options are: `New, Used`.
`is_vertical`
:   `bit`  Whether the product should be displayed vertically or horizontally.
`current_bid`
:   `decimal` Nullable. The current bid price of an auction item.
`auction_start`
:   `date time` Nullable. When the auction is set to end.
`auction_end`
:   `date time` Nullable. When the auction is set to end.
`auction_min_bid`
:   `decimal` Nullable. The minimum opening bid for the auction
`type`
:   `int`  The type of product. See [ProductType](Constants.html#ProductType).
`return_policy_id`
:   `int` Nullable. The associated return policy applicable to the sale of this item.
`is_available`
:   `bit`  Whether the item is currently available for sale.
`deal_start`
:   `date time` Nullable. When the deal/Giving Reward may start being purchased.
`deal_end`
:   `date time` Nullable. When the deal/Giving Reward may no longer be purchased.
`promo_start`
:   `date time` Nullable. When the deal/Giving Reward may be redeemed for its promotional value.
`promo_end`
:   `date time` Nullable. When the deal/Giving Reward may no longer be redeemed for its promotional value.
`deal_value`
:   `decimal` Nullable. The promotional value of the deal/Giving Reward.
`seller`
:   [`UserProfile`](Users.html#UserProfile)  Embeddable. The seller’s user profile.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. All referenced media for the product and embedded objects.
`category`
:   [`Category`](Categories.html#Category)  Embeddable. The category the product is filed under.
`cause`
:   [`Cause`](Causes.html#Cause)  Embeddable. The cause the product is being pledged to.
`store`
:   [`Store`](Stores.html#Store)  Embeddable. The seller’s store.
`shipping`
:   [`ShippingOption []`](Products.html#ShippingOption)  Embeddable. The available list of shipping options.
`tags`
:   [`Tag []`](Tags.html#Tag)  Embeddable. The tags related to the product.
`bids`
:   [`Bid []`](Products.html#Bid)  Embeddable. The bidding history of the product.
`return_policy`
:   [`ReturnPolicy`](Users.html#ReturnPolicy)  Embeddable. The return policy associated with the sale of this item.



## ShippingOption

A method the seller offers the buyer to acquire a product.

`id`
:   `int`  The unique ID of the shipping option.
`description`
:   `string (32)`  Information about the shipping option.
`price`
:   `decimal (0-1000)`  How much it costs the buyer to use this shipping option.



## Bid

A bid placed on an auction-type product.

`id`
:   `int`  The unique ID of the bid.
`status`
:   `int`  The status of the bid. One of: See [BidStatus](Constants.html#BidStatus).
`bidder_name`
:   `string (32)`  The name of the bidder. Anonymous except if the logged-in user matches bidder.
`placed`
:   `date time`  When the bid was placed.
`bid`
:   `decimal`  The amount the bid was placed for.



## PlaceBidResult

The result of placing a bid on an action-type product.
`type`
:   `string`  "Success"
`is_new_high_bid`
:   `bool`  `true` if the bidder is current highest bidder or `false` if they do not.
`bid_id`
:   `int`  The ID of the bid that was placed, which can be used to derive which bidder number the user is.



# Routes

## GET /products

Collection. By default, it returns all products ordered by being curated, then by most recently published, with a default page size of 20 records per page. This collection accepts search filters and pagination options.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
`available`
:   `bit` Returns only products that are available for purchase.
`slug`
:   `string` Returns products with the given slug.
`search`
:   `string` Returns products that match the given keyword search query. This is the preferred search method.
`sub_search`
:   `string` Returns products that match both the search query and the sub_search query. Use this for "search within" functionality.
`condition`
:   `string enum` Returns products that are of a specific condition. See [ProductCondition](Constants.html#ProductCondition).
`is_local_pickup`
:   `bit` Returns products that are available for local pickup
`is_free_shipping`
:   `bit` Returns products that are available with free shipping.
`has_cause`
:   `bit` Returns products that are (or are not) being pledged to a cause.
`id`
:   `int csv` Returns products with the given id or list of id’s. e.g. `id=1` or `id=1,2,3,4,5`
`seller_id`
:   `int` Returns products that are being sold by a specific user.
`cause_id`
:   `int` Returns products that are being pledged to a specific cause.
`store_id`
:   `int` Returns products that are being sold by a specific store.
`category_id`
:   `int` Returns products that are explicitly filed under a specific category.
`between`
:   `int csv` Returns products that are categorized between the given category port range. e.g. `between=10,20 `
`price_between`
:   `int csv` Returns products that have a price between the given range. e.g. `price_between=10,20 `
`local_to`
:   `int` Returns products that are being sold (in zip codes within) the DMA code given
`not_around`
:   `int` Returns products that are being sold outside of the DMA code given.
`curated`
:   `bit` Returns products that have been curated by the Okanjo staff.
`tag_id`
:   `int csv or int psv` Returns products that have been tagged with the given tag. CSV indicates to return products that match any of the given tags. Plus-separated-values (PSV) indicates to return products that match all of the given tags.
`type`
:   `int csv` Returns products of the given type(s).
`exclude`
:   `int csv` Excludes a the given set of products from the result set.
*Fields & Includes*
`fields`
:   `csv` When a field in a set is given, only returns the specified fields per set.
`embed`
:   `csv` When given, includes the additional linked resources. Accepts: `seller, media, category, cause, store, shipping, tags, bids, return_policy`



### Returns

Array of [Product](Products.html#Product) objects

### Errors

**500 Internal Server Error**
:   `Failed to retrieve products.` Occurs when the request failed to be fulfilled.


## GET /products/{id}

Resource. Gets a specific product resource by its unique identifier.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When a field in a set is given, only returns the specified fields per set.
`embed`
:   `csv` When given, includes the additional linked resources. Accepts: seller, media, category, cause, store, shipping, tags, bids, return_policy


### Returns

[Product](Products.html#Product) object.

### Errors

**404 Not Found**
:   `Product not found.` Occurs when the given product was not found.
**500 Internal Server Error**
:   `Failed to retrieve product.` Occurs when the request failed to be fulfilled.



## POST /products

Resource. Adds a new product for sale on the current user’s store. **Requires user level authentication.**

**Note: Cannot include shipping options when free shipping is enabled.**

### Entity NVP Parameters

`store_id`
:   `int` The ID of the primary store in which to sell the item. The referenced store must be manageable by the seller.
`title`
:   `string (5-128)` The title of the product.
`description`
:   `string (5-2048)` The description of the product.
`price`
:   `int (1-9000)` The cost of the product.
`stock`
:   `int (0-max)` How many instances of the product are for sale.
`donation_perc`
:   `int (0-100)` Optional. How much of the sale will be donated to the associated cause. Only include if `cause_id` is set.
`category_id`
:   `int` The unique ID of the category to file the product under.
`cause_id`
:   `int` Optional. The ID of the cause to pledge a portion of the proceeds to. Only include if `donation_perc` is set.
`condition`
:   `string enum` The condition of the product. See [ProductCondition](Constants.html#ProductCondition).
`is_free_shipping`
:   `bit` Whether the product is available with free shipping.
`is_local_pickup`
:   `bit` Whether the product is available for local pickup.
`thumbnail_media_id`
:   `int` The ID of the media image to use for the primary thumbnail image. ID must also be included in the media array.
`promo_code`
:   `string (32)` Optional. Attaches a seller promotional code to the product.
`auction_start`
:   `date time` When bidding on the auction should begin. Formatted as an ISO 8601.
`auction_end`
:   `date time` When bidding on the auction should end. Formatted as an ISO 8601.
`auction_min_bid`
:   `decimal` The starting bid price of the auction.
`type`
:   `bit` Whether the product is for auction or regular sale.  See [ProductType](Constants.html#ProductType).
`shipping_options[n][description]`
:   `string (2-32)` Array. Description of the shipping option.
`shipping_options[n][price]`
:   `int (0-1000)` Array. Price of the shipping option.
`media[n]`
:   `int` Array. Media image IDs to attach to the product. Can only associate media owned by the seller. At least one media image is required.
`tags[n][id]`
:   `int` Optional. Array. ID of a tag being related to the the product
`tags[n][name]`
:   `string (64)` Optional. Array. Name of new tag being added to the system. Note: This field is ignored if it is accompanied by an ID.
`return_policy[id]`
:   `int` Optionally required. Value can be the ID of an existing Return Policy or 0 to indicate ‘No Returns’. Must be empty if new return policy.
`return_policy[name]`
:   `string (64)` Optionally required. Must be included if return_policy[id] is empty. The name of the return policy.
`return_policy[policy]`
:   `text` Optionally required. Must be included if return_policy[id] is empty. The terms of the return policy.



### Returns

The newly created [Product](Products.html#Product) object.

>   **Note: The product is published and available for sale immediately after being posted.**

### Errors

**400 Bad Request**
:   `Invalid product field: {field}` Occurs when the given field is invalid.
**500 Internal Server Error**
:   `Failed to create product.` Occurs when the request failed to be fulfilled.




## PUT /products/{id}

Resource. Updates a product given its unique identifier. **Requires user level authentication.**

### Entity NVP Parameters

Only send the fields that should be updated. Send them all if you’d really like.

`status`
:   `int enum` The status of the product.  See [ProductStatus](Constants.html#ProductStatus).
`title`
:   `string (5-128)` The title of the product.
`description`
:   `string (5-2048)` The description of the product.
`price`
:   `int (1-9000)` The cost of the product.
`stock`
:   `int (0-max)` How many instances of the product are for sale.
`donation_perc`
:   `int (0-100)` Optional. How much of the sale will be donated to the associated cause. Only include if `cause_id` is set.
`category_id`
:   `int` The unique ID of the category to file the product under.
`cause_id`
:   `int` Optional. The ID of the cause to pledge a portion of the proceeds to. Only include if `donation_perc` is set. Set to empty string to clear, `donation_perc` will automatically set to 0.
`condition`
:   `string enum` The condition of the product. See [ProductCondition](Constants.html#ProductCondition).
`is_free_shipping`
:   `bit` Whether the product is available with free shipping.
`is_local_pickup`
:   `bit` Whether the product is available for local pickup.
`thumbnail_media_id`
:   `int` The ID of the media image to use for the primary thumbnail image. ID must also be included in the current media list, or media array if specified.
`promo_code`
:   `string (32)` Optional. Attaches a seller promotional code to the product.
`auction_start`
:   `date time` When bidding on the auction should begin. Formatted as an ISO 8601.
`auction_end`
:   `date time` When bidding on the auction should end. Formatted as an ISO 8601.
`auction_min_bid`
:   `decimal` The starting bid price of the auction.
`shipping_options[n][description]`
:   `string (2-32)` Array. Description of the shipping option.
`shipping_options[n][price]`
:   `int (0-1000)` Array. Price of the shipping option.
`media[n]`
:   `int` Array. Media image IDs to attach to the product. Can only associate media owned by the seller. At least one media image is required.
`tags[n][id]`
:   `int` Array. This can be an id that is already related to the product or the ID of a tag being related to the the product. Note: If the ID of a tag that is already related to a product is not included in the request, that tag relationship will be deleted.
`tags[n][name]`
:   `string (64)` Array. Name of new tag being added to the system. Note: This field is ignored if it is accompanied by an ID.
`return_policy[id]`
:   `int` Optionally required. Value can be the ID of an existing Return Policy or 0 to indicate ‘No Returns’. Must be empty if new return policy.
`return_policy[name]`
:   `string (64)` Optionally required. Must be included if return_policy[id] is empty. The name of the return policy.
`return_policy[policy]`
:   `text` Optionally required. Must be included if return_policy[id] is empty. The terms of the return policy.


### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid product field: {field}` Occurs when the given field is invalid.
**404 Not Found**
:   `Product not found.` Occurs when the given product could not be found or is invalid.
**500 Internal Server Error**
:   `Failed to update product.` Occurs when the request failed to be fulfilled.



## POST /products/{id}/bids

Controller. Places a Bid on an auction-type product. **Requires user level authentication.**

Bidding on Okanjo is done only by proxy. Users provide their maximum bid amount and when new bids are placed, they are fulfilled first-in, first-out.

### Entity NVP Parameters

`max_bid`
:   `decimal` The max bid the user is willing to bid on an item.


### Returns

[PlaceBidResult](Products.html#PlaceBidResult) object.

### Errors

**400 Bad Request**
:   `Invalid max bid.` Occurs when the max bid is outside the acceptable range.
:   `Product cannot be bid on at this time.` Occurs when the given product does not exist, has expired, or is not an auction.
:   `Max bid cannot be lower than the auction starting bid.` Occurs when the max bid is less than the minimum required bid for the auction.
:   `Max bid must be higher than the current bid.` Occurs when the max bid is lower than the current bid.
:   `Max bid must be larger than your previous max bid.` Occurs when the user is winning the auction, but provided a lower max bid than their previously given bid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.


