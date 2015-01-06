# Store Addresses

Addresses used for store locations, billing, sales tax nexus, etc. Stores can have many addresses of different types.

# Objects

* [`Address`](Objects.html#Address) – Address object.


# Routes


## GET /stores/{id}/addresses

Collection. Gets the addresses on file for the given store. **Requires store level authentication.**

### Query Parameters

All fields are optional.

*Filtering*
`type`
:   `int enum` Returns only addresses of the given type. See [`AddressType`](Constants.html#AddressType).

### Returns

Array of [`Address`](Objects.html#Address) objects.

### Errors

**403 Forbidden**
:   `Access denied.` Occurs when the given store is not manageable by the current user.
**404 Not Found**
:   `store not found.` Occurs when the given store was not found. Perhaps deleted?
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.



## GET /stores/{id}/addresses/{address_id}

Resource. Gets the specific address for the given store. **Requires store level authentication.**

### Query Parameters

None.

### Returns

[`Address`](Objects.html#Address) object.

### Errors

**400 Bad Request**
:   `Invalid address.` Occurs when the given address_id is not a valid address.
**403 Forbidden**
:   `Access denied.` Occurs when the given store does not match the currently logged-in store.
**404 Not Found**
:   `Address not found.` Occurs when the given address_id was not found.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.



## POST /stores/{id}/addresses

Resource. Adds a new address to the store's address collection. **Requires store level authentication.**

### Entity NVP Parameters

`first_name`
:   `string (255)` Addressee’s first name.
`last_name`
:   `string (255)` Addressee’s last name.
`address_1`
:   `string (255)` Street address.
`address_2`
:   `string (255)` Optional. Street address line two.
`city`
:   `string (255)` Locality.
`state`
:   `string (2)` State code.
`zip`
:   `string (10)` Postal code.
`country`
:   `string (2)` Country code.
`phone`
:   `string (20)` Contact phone number.
`type`
:   `string enum` Address type. See [`AddressType`](Constants.html#AddressType].



### Returns

[`Address`](Objects.html#Address) object.

### Errors

**400 Bad Request**
:   `Invalid address.` Occurs when a parameter is missing or invalid.
:   `{field} too long.` Occurs when the given parameter exceeded the maximum length.
:   `{field} is invalid.` Occurs when the given parameter sent an invalid value.
:   `Too many addresses.` Occurs when the store has exceeded the maximum number of addresses that may be stored on the platform.
**403 Forbidden**
:   `Access denied.` Occurs when the given store does not match the currently logged-in store.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.


## PUT /stores/{id}/addresses/{address_id}

Resource. Modifies an existing address in the store’s address collection. Provide only the fields that needed to be updated. Returns the updated address object. **Requires store level authentication.**

### Entity NVP Parameters

`first_name`
:   `string (255)` Addressee’s first name.
`last_name`
:   `string (255)` Addressee’s last name.
`address_1`
:   `string (255)` Street address.
`address_2`
:   `string (255)` Optional. Street address line two.
`city`
:   `string (255)` Locality.
`state`
:   `string (2)` State code.  (e.g. WI)
`zip`
:   `string (10)` Postal code.
`country`
:   `string (2)` Country code. (e.g. US)
`phone`
:   `string (20)` Contact phone number.


### Returns

Updated [`Address`](Objects.html#Address) object.

### Errors

**400 Bad Request**
:   `Invalid address.` Occurs when the given address_id is not a valid address.
**403 Forbidden**
:   `Access denied.` Occurs when the given store does not match the currently logged-in store.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.



## DELETE /stores/{id}/addresses/{address_id}

Resource. Deletes an existing address in the store’s address collection. **Requires store level authentication.**

### Entity NVP Parameters

None.

### Returns

[`Success`](Globals.html#Default Response Object) response when successful.

### Errors

**400 Bad Request**
:   `Invalid address.` Occurs when the given `address_id` is not a valid address.
**403 Forbidden**
:   `Access denied.` Occurs when the given store does not match the currently logged-in store.
**409 Conflict**
:   `Address is still in use.` Occurs when the address is still in use by another store or cause.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.