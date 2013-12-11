
# Stores

The base organizational unit which sells products and receives funds.

Stores own products, and may inherit products as well.

> ** Note: Stores are currently being refactored and will be released soon. Their direct link to users has been eliminated, and are now standalone.  **

# Objects

## Store

A storefront which offers items for sale on Okanjo.

`id`
:   `int`  The unique ID of the store.
`status`
:   `int enum`  Status of the store. See (`StoreStatus`)[Constants.html#StoreStatus]
`created`
:   `date time`  When the store was created.
`updated`
:   `date time`  When the store was last modified.
`type`
:   `int enum`  Type of the store.  See (`StoreType`)[Constants.html#StoreType]
`name`
:   `string`  The display name of the store. By default is the name of the user who owns the store.
`user_id`
:   `int`  The ID of the user who owns the store.
`about`
:   `string (512)` Nullable. Store description.
`location`
:   `string (10)` Nullable. Store zip code location.
`location_name`
:   `string (180)` Nullable. Store city/locality name.
`location_state`
:   `string (2)` Nullable. Store state code abbreviation.
`website_url`
:   `string (255)` Nullable. Store website URL.
`facebook_url`
:   `string (255)` Nullable. Store facebook URL.
`twitter_url`
:   `string (255)` Nullable. Store twitter URL.
`avatar_media_id`
:   `int` Nullable. The media image ID to display as the store logo/avatar.
`banner_media_id`
:   `int` Nullable. The media image ID to display as the store banner.
`rating_avg`
:   `decimal (1,2)` Nullable. The store's average rating, from 1 to 5.
`review_count`
:   `int` Nullable. The number of reviews the store received.
`product_count`
:   `int`  Number of products available for sale in the store.
`okanjo_url`
:   `string (20)` Nullable. Okanjo URL associated with the store.
`media`
:   `MediaEmbeds`  Embeddable. Media associated with the store and other related objects.
`addresses`
:   `Address[]`  Embeddable. Array of physical store locations.
`products:n`
:   `Product[]`  Embeddable. Array of `n` number of products from the store. Used for a quick glance of the store’s items.
`causes`
:   (`Cause[]`)[Causes.html#Cause] Embeddable. Array of associated causes with the store.


# Routes

## GET /stores

Collection. By default, it returns all stores alphabetically. This collection accepts search filters and pagination options.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
`id`
:   `int csv` Returns stores with the given store id or list of store id’s. e.g. `id=1` or `id=1,2,3,4,5`
`search`
:   `string` Returns stores that match the search query. Use this for user-given search strings.
`seller_id`
:   `int` Returns stores that belong to the given user id.
`has_products`
:   `bit` Returns stores that have products available when set to `1`.
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `causes, media, addresses, products:n`.



### Returns

Array of [`Store`](Stores.html#Store) objects.

### Errors

**500 Internal Server Error**
:   `Unable to retrieve stores.` Occurs when the request failed to be fulfilled.



## GET /stores/{id}

Resource. Gets a specific store resource by its unique identifier.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `causes, media, addresses, products:n`.



### Returns

[`Store`](Stores.html#Store) object.

### Errors

**404 Not Found**
:   `Store not found.` Occurs when the given store was not found.
**500 Internal Server Error**
:   `Unable to retrieve store.` Occurs when the request failed to be fulfilled.



## PUT /stores/{id}

Resource. Updates a store by its unique identifier. **Requires user level authentication.**

### Entity NVP Parameters

Only send the fields that should be updated. Send them all if you’d really like.

`name`
:   `string (6-32)` The pretty store name, which may contain letters, numbers and the following characters: space, apostrophe, hyphen, and ampersand.
`about`
:   `string (512)` Information about the seller’s store. Can contain no more than 3 line breaks before they’re stripped.
`avatar_media_id`
:   `int` Media image ID to use for the store logo/avatar. Target media image must belong to the seller.
`banner_media_id`
:   `int` Media image ID to use for the store banner image. Target media image must belong to the seller.
`zip`
:   `string (10)` The zip code the store is located in.
`website_url`
:   `string (255)` The URL of the store’s web presence. Protocol must be HTTP or HTTPS.
`facebook_url`
:   `string (255)` The URL of the store’s Facebook presence. Protocol must be HTTP or HTTPS and domain must end in facebook.com.
`twitter_url`
:   `string (255)` The URL of the store’s twitter presence. Protocol must be HTTP or HTTPS and domain must end in twitter.com.
`okanjo_url`
:   `string (20)` The requested Okanjo vanity URL.
`contact_email`
:   `string (255)` The email in which to send store email notifications.
`payout_preference`
:   `string enum` Nullable. The store’s payout preference. See [PayoutPreference](Constants.html#PayoutPreference).

### Returns

Updated [`Store`](Stores.html#Store) object.

### Errors

**400 Bad Request**
:   `Invalid {field}` Occurs when the given field was invalid.
:   `{field} too long.` Occurs when the given field was too long.
**404 Not Found**
:   `Store not found.` Occurs when the given store was not found.
**500 Internal Server Error**
:   `Unable to update store.` Occurs when the request failed to be fulfilled.

