# Products

Represents things that can be purchased on Okanjo.

# Objects

* [`Product`](Objects.html#Product) – An purchasable item.
* [`ShippingOption`](Objects.html#ShippingOption) – A seller-specified method of item delivery.
* [`Bid`](Objects.html#Bid) – A bid placed on an auction-type item.
* [`PlaceBidResult`](Objects.html#PlaceBidResult) – The response for an attempt to place a bid.
* `Dimensions` - A multidimensional array of product attributes and price modifiers:
```js
"dimensions": {
    "Size": {
        "Small": {
            "price_modifier" : 0
        },
        ...
    },
    "Color": {
        "Green with Sparkles" : {
            "price_modifier" : 0
        },
        ...
    }
    ...
}
```
* `Variants` - A multidimensional array of variant stock information, keyed by alphabetically sorted query strings comprised of dimension->attribute pairs for all permutations of dimensions. Used by checkout:
```js
"variants": {
    "Color=Green+with+Sparkles&Size=Small": {
        "stock" : 12 // Note, this could also be null or an empty string, to denote that this product is made "on demand"
    },
    ...
}
```

# Routes

## GET /products

Collection. By default, it returns all products ordered by curated date, then by most recently published. This collection accepts search filters and pagination options.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
`available`
:   `bit` Returns only products that are available for purchase.
`slug`
:   `string` Returns products with the given slug.
`search`
:   `string` Returns products that match the given keyword search query.
`sub_search`
:   `string` Returns products that match both the search query and the sub_search query. Use this for "search within" functionality.
`meta.<key>=<value>`
:   `string` Returns products with metadata that matches `key` and `value`.
`condition`
:   `string enum` Returns products that are of a specific condition. See [`ProductCondition`](Constants.html#ProductCondition).
`is_local_pickup`
:   `bit` Returns products that are available for local pickup
`is_free_shipping`
:   `bit` Returns products that are available with free shipping.
`has_cause`
:   `bit` Returns products that are (or are not) being pledged to a cause.
`id`
:   `int csv` Returns products with the given id or list of id’s. e.g. `id=1` or `id=1,2,3,4,5`
`seller_store_id`
:   `int` Returns products that are owned and sold by the given store id.
`store_id`
:   `int` Returns products that are owned and inherited by the given store id. e.g. cause donations and cause items.
`inherited_only`
:   `bit` Returns only products that are inherited by a store. Used with `store_id` or `cause_id`.
`cause_id`
:   `int` Returns products that are being pledged to a specific cause.
`category_id`
:   `int` Returns products that are explicitly filed under a specific category.
`between`
:   `int csv` Returns products that are categorized between the given category port/starboard range. e.g. `between=10,20 `
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
:   `int csv` Returns products of the given type(s). See [`ProductType`](Constants.html#ProductType).
`exclude`
:   `int csv` Excludes products matching the given ids from the result set.
`order_by_dma`
:   `int` Biases products that belong to the given DMA, then products outside of the DMA follow. Useful to show that more products exist, but they're outside of the buyer's locality. See [Regions](Regions.html#Regions).
*Fields & Includes*
`fields`
:   `csv` When a field in a set is given, only returns the specified fields per set.
`embed`
:   `csv` When given, includes the additional linked resources. Accepts: `media`, `category`, `cause`, `store`, `shipping`, `tags`, `bids`, `return_policy`.



### Returns

Array of [`Product`](Objects.html#Product) objects

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
:   `csv` When given, includes the additional linked resources. Accepts: `media`, `category`, `cause`, `store`, `shipping`, `tags`, `bids`, `return_policy`.


### Returns

[`Product`](Objects.html#Product) object.

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
:   `int` The ID of the primary store in which to sell the item. The referenced store must be manageable by the requesting user.
`type`
:   `int enum` The type of product. See [`ProductType`](Constants.html#ProductType).
`title`
:   `string (5-128)` The title of the product.
`description`
:   `string (5-2048)` The description of the product.
`price`
:   `int (1-9000)` The cost of the product. For auctions, this is the buy-out price. For deals, this is the purchase price. See also [`PurchaseRequirements`](Constants.html#PurchaseRequirements).
`stock`
:   `null` | `int (-max)` How many instances of the product are for sale. Null or empty values denote that the product has infinite stock, and is made "on demand"
`category_id`
:   `int` The unique ID of the category to file the product under.
`condition`
:   `string enum` The condition of the product. See [`ProductCondition`](Constants.html#ProductCondition).
`is_local_pickup`
:   `bit` Whether the product is available for local pickup.
`is_free_shipping`
:   `bit` Whether the product is available with free shipping.
`shipping_options[n][description]`
:   `string (2-32)` Array. Description of the shipping option.
`shipping_options[n][price]`
:   `int (0-1000)` Array. Price of the shipping option.
`return_policy[id]`
:   `int` Optionally required. Value can be the ID of an existing Return Policy or `0` to indicate ‘No Returns’. Must be empty if new return policy.
`return_policy[name]`
:   `string (64)` Optionally required. Must be included if `return_policy[id]` is empty. The name of the return policy.
`return_policy[policy]`
:   `text` Optionally required. Must be included if `return_policy[id]` is empty. The terms of the return policy.
`auction_start`
:   `date time` When bidding on the auction should begin. Formatted as an ISO 8601.
`auction_end`
:   `date time` When bidding on the auction should end. Formatted as an ISO 8601.
`auction_min_bid`
:   `decimal` The starting bid price of the auction.
`thumbnail_media_id`
:   `int` The ID of the media image to use for the primary thumbnail image. ID must also be included in the media array.
`media[n]`
:   `int` Array. Media image IDs to attach to the product. Can only associate media owned by the seller. At least one media image is required.
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key.
`cause_id`
:   `int` Optional. The ID of the cause to pledge a portion of the proceeds to. Only include if `donation_perc` is set.
`donation_perc`
:   `int (0-100)` Optional. How much of the sale will be donated to the associated cause. Only include if `cause_id` is set.
`promo_code`
:   `string (32)` Optional. A promotional code that was used when listing the item.
`tags[n][id]`
:   `int` Optional. Array. ID of a tag being related to the the product
`tags[n][name]`
:   `string (64)` Optional. Array. Name of new tag being added to the system. Note: This field is ignored if it is accompanied by an ID.
`deal_start`
:   `date time` When the deal should be available for sale.
`deal_end`
:   `date time` When the deal should no longer available for sale.
`promo_start`
:   `date time` When the deal may begin to be redeemed by buyers for the full promotional value.
`promo_end`
:   `date time` When the deal may no longer be redeemed by buyers for the **full** promotional value, but may still be redeemed for the paid value.
`deal_value`
:   `decimal 10,2` The promotional value of the deal. e.g. $20 buys $40 worth of goods/service. $20 is the `price`, $40 is the `deal_value`.
`dimensions`
:   `array` Optional. Must be included if variants is present. Multidimensional array of product attributes and price modifiers.
`variants`
:   `array` Optional. Must be included if dimensions is present. Multidimensional array of product information keyed by query string, comprised of dimension->attribute pairs for all combinations of dimensions.


### Returns

The newly created [`Product`](Objects.html#Product) object.

>   **Note: The product is published and available for sale immediately after being posted.**

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was invalid.
**500 Internal Server Error**
:   `Failed to create product.` Occurs when the request failed to be fulfilled.



## PUT /products/{id}

Resource. Updates a product given its unique identifier. **Requires user level authentication.**

### Entity NVP Parameters

Only send the fields that should be updated. Send them all if that's your thing.

`status`
:   `int enum` The status of the product.  See [`ProductStatus`](Constants.html#ProductStatus).
`title`
:   `string (5-128)` The title of the product.
`description`
:   `string (5-2048)` The description of the product.
`price`
:   `int (1-9000)` The cost of the product.
`stock`
:   `null` | `int (-max)` How many instances of the product are for sale. Null or empty values denote that the product has infinite stock, and is made "on demand"
`category_id`
:   `int` The unique ID of the category to file the product under.
`condition`
:   `string enum` The condition of the product. See [`ProductCondition`](Constants.html#ProductCondition).
`is_local_pickup`
:   `bit` Whether the product is available for local pickup.
`is_free_shipping`
:   `bit` Whether the product is available with free shipping.
`shipping_options[n][description]`
:   `string (2-32)` Array. Description of the shipping option.
`shipping_options[n][price]`
:   `int (0-1000)` Array. Price of the shipping option.
`return_policy[id]`
:   `int` Optionally required. Value can be the ID of an existing Return Policy or 0 to indicate ‘No Returns’. Must be empty if new return policy.
`return_policy[name]`
:   `string (64)` Optionally required. Must be included if return_policy[id] is empty. The name of the return policy.
`return_policy[policy]`
:   `text` Optionally required. Must be included if return_policy[id] is empty. The terms of the return policy.
`thumbnail_media_id`
:   `int` The ID of the media image to use for the primary thumbnail image. ID must also be included in the current media list, or media array if specified.
`auction_start`
:   `date time` When bidding on the auction should begin. Formatted as an ISO 8601.
`auction_end`
:   `date time` When bidding on the auction should end. Formatted as an ISO 8601.
`auction_min_bid`
:   `decimal` The starting bid price of the auction.
`media[n]`
:   `int` Array. Media image IDs to attach to the product. Can only associate media owned by the seller. At least one media image is required.
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.
`cause_id`
:   `int` Optional. The ID of the cause to pledge a portion of the proceeds to. Only include if `donation_perc` is set. Set to empty string to clear, `donation_perc` will automatically set to 0.
`donation_perc`
:   `int (0-100)` Optional. How much of the sale will be donated to the associated cause. Only include if `cause_id` is set.
`promo_code`
:   `string (32)` Optional. Attaches a seller promotional code to the product.
`tags[n][id]`
:   `int` Array. This can be an id that is already related to the product or the ID of a tag being related to the the product. Note: If the ID of a tag that is already related to a product is not included in the request, that tag relationship will be deleted.
`tags[n][name]`
:   `string (64)` Array. Name of new tag being added to the system. Note: This field is ignored if it is accompanied by an ID.
`deal_start`
:   `date time` When the deal should be available for sale.
`deal_end`
:   `date time` When the deal should no longer available for sale.
`promo_start`
:   `date time` When the deal may begin to be redeemed by buyers for the full promotional value.
`promo_end`
:   `date time` When the deal may no longer be redeemed by buyers for the **full** promotional value, but may still be redeemed for the paid value.
`deal_value`
:   `decimal 10,2` The promotional value of the deal. e.g. $20 buys $40 worth of goods/service. $20 is the `price`, $40 is the `deal_value`.


### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was invalid.
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

[`PlaceBidResult`](Objects.html#PlaceBidResult) object.

### Errors

**400 Bad Request**
:   `Invalid max bid.` Occurs when the max bid is outside the acceptable range.
:   `Product cannot be bid on at this time.` Occurs when the given product does not exist, has expired, or is not an auction.
:   `Max bid cannot be lower than the auction starting bid.` Occurs when the max bid is less than the minimum required bid for the auction.
:   `Max bid must be higher than the current bid.` Occurs when the max bid is lower than the current bid.
:   `Max bid must be larger than your previous max bid.` Occurs when the user is winning the auction, but provided a lower max bid than their previously given bid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.


