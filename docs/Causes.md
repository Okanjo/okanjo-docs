
# Causes

Causes represent non-profit, 501(c)-class organizations. They may receive charitable donations directly and through
sales of pledged products.

# Objects

## Cause

A cause represents a non-profit, 501(c)-class organization.

> **Note: This data model has changed and documentation will be updated to reflect this shortly. **
> Causes now have stores, and the duplicate store fields have subsequently moved to the embedded store object.

`id`
:   `int`  The unique ID of the cause.
`status`
:   `int enum`  The status of the cause. See [CauseStatus](Constants.html#CauseStatus).
`name`
:   `string (255)`  The display name of the cause.
`local_name`
:   `string (530)`  The display name of the cause appended with its location.
`city`
:   `string (255)` Nullable. The city in which the cause is located.
`state`
:   `string (2)`  The state in which the cause is located.
`created`
:   `datetime`  When the cause was added to Okanjo.
`about`
:   `string (512)` Nullable. Information about the cause.
`website_url`
:   `string (255)` Nullable. The cause’s linked website or home page.
`facebook_url`
:   `string (255)` Nullable. The cause’s linked Facebook page.
`twitter_url`
:   `string (255)` Nullable. The cause’s linked Twitter page.
`product_count`
:   `int`  The number of products pledged to the cause.
`avatar_media_id`
:   `int` Nullable. The media id of the avatar image.
`banner_media_id`
:   `int` Nullable. The media if of the banner image.
`okanjo_url`
:   `string (20)` Nullable. Okanjo vanity URL.
`group_id`
:   `int` Nullable. The ID of the cause grouping, if applicable.
`group_name`
:   `string (255)` Nullable. The name of the cause group, if applicable.
`media`
:   `Media` Nullable. Embeddable. The related media images (avatar, banner). See [Media Embeds](Media.html#Media Embeds)
`stores`
:   (`Store[]`)[Stores.html#Store] Embeddable. The associated store fronts for the cause.


# Routes

## GET /causes

Collection. By default, it returns all causes alphabetically.

> **Note: This data model has changed and documentation will be updated to reflect this shortly. **
> Causes now have stores, and the duplicate store fields have subsequently moved to the embedded store object.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters as well.

*Filtering*
~~`name`~~
:   ~~`string (255)` Returns causes with the given name. Accepts wildcards, use `‘%’` like as in SQL.~~ Deprecated. Don't use this anymore.
`search`
:   `string (255)` Returns causes that match the search query. Each keyword given is inclusive. Only keywords over 3 characters in length are used.
`id`
:   `int csv` Returns causes with the specific id or in the list of given ids. e.g. `id=1` or `id=1,2,3`.
`status`
:   `int enum` Returns causes that are of a specific status. See [CauseStatus](Constants.html#CauseStatus).
`admin_id`
:   `int` Returns causes that are managed by a specific user.
`fetch_external`
:   `bit` When set to 0 (default) only active Okanjo causes are found. When set to `1`, searches 3rd-party services for causes with the given search criteria and returns the results. Only use `fetch_external=1` inside Sell and Give workflows because users may want to pledge to a cause that hasn’t been activated by Okanjo. Failure to abide by this policy will result in termination of your API key, account, or worse.
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields.
`embed`
:   `csv` When given, includes additional related data. Accepts: `media`.



### Returns

* Array of [`Cause`](Causes.html#Cause) objects.
* `X-COLLECTION-COUNT` header set to the total number of causes that match the given query, usable for pagination.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve causes.` Occurs when the request failed to be fulfilled.



## GET /causes/{id}

Resource. Returns a specific cause given its unique identifier.

> **Note: This data model has changed and documentation will be updated to reflect this shortly. **
> Causes now have stores, and the duplicate store fields have subsequently moved to the embedded store object.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields.
`embed`
:   `csv` When given, includes additional related data. Accepts: `media`.


### Returns

[`Cause`](Causes.html#Cause) object.

### Errors

**404 Not Found**
:   `Cause not found.` Occurs when the given cause was not found.
**500 Internal Server Error**
:   `Failed to retrieve cause.` Occurs when the request failed to be fulfilled.



## PUT /causes/{id}

Resource. Modifies a cause. Used by cause administrators to update their organization’s information. **Requires user level authentication.**

> **Note: This data model has changed and documentation will be updated to reflect this shortly. **
> Causes now have stores, and the duplicate store fields have subsequently moved to the embedded store object.

### Entity NVP Parameters

`about`
:   `string (255)` Brief introduction or information about the organization. Up to 3 new line breaks are permitted.
`banner_media_id`
:   `int` The ID of the media image that should be used as the banner image on the cause’s page.
`avatar_media_id`
:   `int` The ID of the media image that should be used as the logo/avatar on the causes’s page.
`location`
:   `string (10)` The zip code of the location. The city/state fields will be automatically populated.
`website_url`
:   `string (256)` The primary web presence of the organization. Only URI protocols HTTP and HTTPS are valid.
`facebook_url`
:   `string (256)` The organization’s Facebook presence. Only URI protocols HTTP and HTTPS are valid. FQDN must be derived from facebook.com.
`twitter_url`
:   `string (256)` The organization’s Twitter presence. Only URI protocols HTTP and HTTPS are valid. FQDN must be derived from twitter.com.
`okanjo_url`
:   `string (20)` The requested Okanjo URL.



### Returns

The updated [`Cause`](Causes.html#Cause) object.

### Errors

**400 Bad Request**
:   `{field} too long.` Occurs when the given field was too long.
:   `Invalid {field}.` Occurs when the value for the given field is not valid.
**403 Forbidden**
:   `Not authorized to manage cause.` Occurs when the current user does not have permission to manage the given cause.
**404 Not Found**
:   `Cause not found.` Occurs when the given cause was not found.
**500 Internal Server Error**
:   `Failed to update cause.` Occurs when the request failed to be fulfilled.

