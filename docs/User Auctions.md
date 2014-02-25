
# User Auctions

Auction-type products watches. Enables users to watch auctions to receive updates when auctions start, end, cancelled or when they are outbid.

# Routes

## GET /users/{user_id}/auctions

Store Collection. Gets auction-type products being watched by the given user. Paginated. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts all [`Product`](Objects.html#Product) embeds.



### Response

Array of [`Product`](Objects.html#Product) objects.
`X-COLLECTION-COUNT` header is set to the total number of results available.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request credentials were not sufficient to perform the action. Providing different credentials could solve the issue.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.


## GET /users/{user_id}/auctions/{item_id}

Resource. Gets an auction item being watched by the given user. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects. 
`embed`
:   `csv` When given, includes the additional resources. Accepts all product embeds. 



### Response

[`Product`](Objects.html#Product) object.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request credentials were not sufficient to perform the action. Providing different credentials could solve the issue.
**404 Not Found**
:   `Auction not found.` Occurs when the target auction was not found in the user’s watch list.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## PUT /users/{user_id}/auctions/{item_id}

Resource. Adds an auction item into the given user’s watchlist. **Requires user level authentication.**

### Entity NVP Parameters

None.

### Response

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid product.` Occurs when the target product is not a valid auction that can be watched.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request credentials were not sufficient to perform the action. Providing different credentials could solve the issue.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.


## DELETE /users/{user_id}/auctions/{item_id}

Resource. Removes an auction item from the given user’s watchlist. **Requires user level authentication.**

### Query Parameters

None.

### Response

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Auction is not being watched.` Occurs when the target auction is not in the watch list.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request credentials were not sufficient to perform the action. Providing different credentials could solve the issue.
**409 Conflict**
:   `Cannot stop watching this auction.` Occurs when the target product cannot stop being watched because the user has bid on the item. The watch can be removed once the auction has ended.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.


