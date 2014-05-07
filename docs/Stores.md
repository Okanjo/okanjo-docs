
# Stores

The base organizational unit which sells products and receives funds.

Stores own products, and may inherit products as well, e.g. cross-listing for items pledging to a cause.

# Objects

* [`Store`](Objects.html#Store) – A seller's store.
* [`Plan`](Objects.html#Plan) – A plan the store is subscribed to.
* [`Subscription`](Objects.html#Subscription) – The store's plan subscription state.
* [`PlanPromotion`](Objects.html#PlanPromotion) – A plan-promotion applied to the store's subscription.


# Routes


## GET /stores

Collection. By default, it returns all stores alphabetically. This collection accepts search filters and pagination
options. In order to return private fields, user-level authentication must be provided, and the user must be an admin of
the store.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
`id`
:   `int csv` Returns stores with the given store id or list of store id’s. e.g. `id=1` or `id=1,2,3,4,5`
`search`
:   `string` Returns stores that match the search query. Use this for user-given search strings.
`seller_id`
:   `int` Returns stores that are managed by the given user id.
`cause_id`
:   `int` Returns the store that belong to the given cause id.
`has_products`
:   `int` Returns stores that have at least this number of products listed or products donating to them. When `0`, find stores without any products. Affected by the `product_types` filter.
`product_types`
:   `int enum csv` Specify the association of products used for the `product_count` property on the store and the `has_products` filter. Defaults to `OWNED` and `INHERITED`. See [ProductStoreType](Constants.html#ProductStoreType).
`local_to`
:   `int` DMA region code that the cause must be registered in. See [Regions](Regions.html).
`current_plan_id`
:   `int csv` Returns stores that have an active subscription to the given plan id(s).
`has_permission`
:   `int flags` Returns stores that have the given bitwise set of flags. May take multiple flags. e.g. `IS_VENDOR` bitwise-or `STOREFRONT_ENABLED` = `3`. See [StoreFlag](Constants.html#StoreFlag).
`has_banner`
:   `bit` Returns stores that have a banner set when `1`, or returns stores that do not have a banner set when `0`.
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `media`, `addresses`, `products:n`, `causes`, `cards`, `bank_accounts`, `return_policies`, `subscription`.

### Returns

Array of [`Store`](Objects.html#Store) objects.

### Errors

**500 Internal Server Error**
:   `Unable to retrieve stores.` Occurs when the request failed to be fulfilled.



## GET /stores/{id}

Resource. Gets a specific store resource by its unique identifier. In order to return private fields, user-level
authentication must be provided, and the user must be an admin of the store.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `media`, `addresses`, `products:n`, `causes`, `cards`, `bank_accounts`, `return_policies`, `subscription`.

### Returns

[`Store`](Objects.html#Store) object.

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
`contact_email`
:   `string` The email address in which to contact the store.
`about`
:   `string (512)` Information about the seller’s store. Can contain no more than 3 line breaks before they’re stripped.
`avatar_media_id`
:   `int` Media image ID to use for the store logo/avatar. Target media image must belong to the seller.
`banner_media_id`
:   `int` Media image ID to use for the store banner image. Target media image must belong to the seller.
`zip`
:   `string (10)` The zip code the store is located in.
`okanjo_url`
:   `string (20)` The requested Okanjo vanity URL.
`website_url`
:   `string (255)` The URL of the store’s web presence. Protocol scheme must be included and be either HTTP or HTTPS. E.g. https://okanjo.com
`facebook_url`
:   `string (255)` The URL of the store’s Facebook presence. E.g. facebook.com/userorpagename
`twitter_url`
:   `string (255)` The URL of the store’s twitter presence. E.g. twitter.com/handlename
`payout_preference`
:   `string enum` Nullable. The store’s payout preference. See [PayoutPreference](Constants.html#PayoutPreference).
`balanced_account_uri`
:   `string` The URI of the tokenized Balanced Payments bank account URI to use as the default payout method. Used when adding or switching bank accounts.
`payout_type`
:   `string enum` Used when adding a new bank account. The type of bank account information being attached. One of `bank_business` or `bank_personal`. Used with `balanced_account_uri`.
`payout_business_name`
:   `string (255)` Used when adding a new bank account. The name of the business associated with the bank account. Required for `bank_business` type. Used with `balanced_account_uri`.
`payout_business_ein`
:   `string (32)` Used when adding a new bank account. The IRS EIN number of the business associated with the bank account. Required for `bank_business` type. Used with `balanced_account_uri`.
`payout_first_name`
:   `string (255)` Used when adding a new bank account. The first name of the person associated with the bank account. Used with `balanced_account_uri`.
`payout_last_name`
:   `string (255)` Used when adding a new bank account. The last name of the person associated with the bank account. Used with `balanced_account_uri`.
`payout_address1`
:   `string (255)` Used when adding a new bank account. The street address of the business or person associated with the bank account. Used with `balanced_account_uri`.
`payout_address2`
:   `string (255)` Used when adding a new bank account. Optional building, unit, apartment number or secondary address component. Used with `balanced_account_uri`.
`payout_city`
:   `string (255)` Used when adding a new bank account. The city of the business or person associated with the bank account. Used with `balanced_account_uri`.
`payout_state`
:   `string (2)` Used when adding a new bank account. The state code of the business or person associated with the bank account. Used with `balanced_account_uri`.
`payout_postal`
:   `string (10)` Used when adding a new bank account. The postal code of the business or person associated with the bank account. Used with `balanced_account_uri`.
`payout_country`
:   `string (2)` Used when adding a new bank account. The country code of the business or person associated with the bank account. Used with `balanced_account_uri`.
`payout_phone`
:   `string (20)` Used when adding a new bank account. The phone number of the business or person associated with the bank account. Used with `balanced_account_uri`.
`balanced_card_uri`
:   `string` **†** The URI of the tokenized Balanced Payments payment card URI to use as the default payment method. Used when adding or switching payment cards.
`promo_code`
:   `string` Adds a promotion code to the store's active subscription. Must be a valid promotional code for the plan or the request will be rejected.
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.

> ** † Note: Providing the `balanced_card_uri` field will cause the subscription to be renewed immediately, if the subscription is past-due or requires payment to activate.**


### Returns

Updated [`Store`](Objects.html#Store) object.

### Errors

**400 Bad Request**
:   `Invalid {field}` Occurs when the given field was invalid.
:   `Invalid field: {field}` Occurs when the given field was invalid.
:   `{field} too long.` Occurs when the given field was too long.
**404 Not Found**
:   `Store not found.` Occurs when the given store was not found.
**500 Internal Server Error**
:   `Unable to update store.` Occurs when the request failed to be fulfilled.

