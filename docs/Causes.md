
# Causes

Causes represent non-profit, 501(c)-class organizations. They may receive charitable donations directly and through
sales of pledged products.

# Objects

* [`Cause`](Objects.html#Cause) – 501(c)-class organization.


# Routes

## GET /causes

Collection. By default, it returns all causes alphabetically.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
`search`
:   `string (255)` Returns causes that match the search query. Each keyword given is inclusive. Only keywords over three characters in length are used.
`id`
:   `int csv` Returns causes with the specific id or in the list of given ids. e.g. `id=1` or `id=1,2,3`.
`status`
:   `int enum` Returns causes that are of a specific status. See [`CauseStatus`](Constants.html#CauseStatus).
`admin_id`
:   `int` Returns causes that are managed by a specific [`User`](Objects.html#User).
`store_id`
:   `int` Returns causes that are associated with a specific [`Store`](Objects.html#Store).
`has_products`
:   `bit` Returns causes that have products listed or products donating to them. Affected by the `product_types` filter.
`fetch_external`
:   `bit` When set to 0 (default) only active Okanjo causes are found. When set to `1`, searches 3rd-party services for causes with the given search criteria and returns the results. Only use `fetch_external=1` inside Sell and Give workflows because users may want to pledge to a cause that hasn’t been activated by Okanjo. Failure to abide by this policy will result in termination of your API key, account, or worse.
`product_region`
:   `int` DMA region code that associated products must be in. Used in association with `has_products` and `product_types`. See [Regions](Regions.html).
`local_to`
:   `int` DMA region code that the cause must be registered in. See [Regions](Regions.html).
`product_types`
:   `int enum csv` Specify the association of products used for the `product_count` property on the cause and the `has_products` filter. Defaults to `OWNED` and `INHERITED`. See [ProductStoreType](Constants.html#ProductStoreType).
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields.
`embed`
:   `csv` When given, includes additional related data. Accepts: `store`.



### Returns

* Array of [`Cause`](Objects.html#Cause) objects.
* `X-COLLECTION-COUNT` header set to the total number of causes that match the given query, usable for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve causes.` Occurs when the request failed to be fulfilled.



## GET /causes/{id}

Resource. Returns a specific cause given its unique identifier.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields.
`embed`
:   `csv` When given, includes additional related data. Accepts: `store`.


### Returns

[`Cause`](Objects.html#Cause) object.

### Errors

**404 Not Found**
:   `Cause not found.` Occurs when the given cause was not found.
**500 Internal Server Error**
:   `Failed to retrieve cause.` Occurs when the request failed to be fulfilled.



## PUT /causes/{id}

Resource. Modifies a cause. Used by cause administrators to update their organization’s information. **Requires user level authentication.**

### Entity NVP Parameters

`location`
:   `string (10)` The zip code of the location. The city/state fields will be automatically populated.
`meta`
:   `string[]`  Array of key/value properties to attach to the object. Metadata is per-API key. Anything included will replace any existing properties on the object.

### Returns

The updated [`Cause`](Objects.html#Cause) object.

### Errors

**400 Bad Request**
:   `{field} too long.` Occurs when the given field was too long.
:   `Invalid {field}.` Occurs when the value for the given field is not valid.
:   `Invalid field: {field}` Occurs when the given field was invalid.
**403 Forbidden**
:   `Not authorized to manage cause.` Occurs when the current user does not have permission to manage the given cause.
**404 Not Found**
:   `Cause not found.` Occurs when the given cause was not found.
**500 Internal Server Error**
:   `Failed to update cause.` Occurs when the request failed to be fulfilled.

