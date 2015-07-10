# User Transactions

Routes that users can use to interact with [`Transaction`s](Objects.html#Transaction) on their account.


# Routes

## GET /users/{user_id}/transactions

Collection. Returns transactions on the user's Okanjo account, ordered most recent first. This collection accepts search filters and pagination options. **Requires user level authentication.**


### Query Parameters

*Filtering*
`id`
:   `string csv` Return only transactions with the given ID or ID’s.
`status`
:   `int enum` Return only transactions with the given status. See [`TransactionStatus`](Constants.html#TransactionStatus).
`type`
:   `int enum csv` Return only transactions of the given type or types. See [`TransactionType`](Constants.html#TransactionType).
`associated_with[type]`
:   `string` Return only transactions associated with the given type of object. Requires `associated_with[id]`. See [`TransactionAssociation`](Constants.html#TransactionAssociation).
`associated_with[id]`
:   `string` Return only transactions associated with the given object id. Requires `associated_with[type]`. 
*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` Accepts: `holds`.

### Returns

* Array of [`Transaction`](Objects.html#Transaction) objects.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve transactions.` Occurs when the request failed to be fulfilled.



## GET /users/{id}/transactions/{txn_id}

Resource. Returns a specific transaction on the user's Okanjo account given its unique identifier. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` Accepts: `holds`.

### Returns

[`Transaction`](Objects.html#Transaction) object.

### Errors

**404 Not Found**
:   `Transaction not found.` Occurs when the given transaction was not found.
**500 Internal Server Error**
:   `Failed to retrieve transaction.` Occurs when the request failed to be fulfilled.


## GET /users/{id}/transactions/{txn_id}/holds

Collection. Returns the holds on the given transaction. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` None available.

### Returns

Array of [`Hold`](Objects.html#Hold) objects.

### Errors

**404 Not Found**
:   `Holds not found.` Occurs when the given transaction was not found.
**500 Internal Server Error**
:   `Failed to retrieve holds.` Occurs when the request failed to be fulfilled.


## GET /users/{id}/transactions/{txn_id}/holds/{hold_id}

Resource. Returns a specific hold on the given transaction. **Requires user level authentication.**

### Query Parameters

*Fields & Includes*
`fields`
:   `string csv` When given, only returns the given fields.
`embed`
:   `string csv` None available.

### Returns

[`Hold`](Objects.html#Hold) object.

### Errors

**404 Not Found**
:   `Hold not found.` Occurs when the given hold or transaction was not found.
**500 Internal Server Error**
:   `Failed to retrieve hold.` Occurs when the request failed to be fulfilled.

