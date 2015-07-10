# Store Return Policies

An agreement stores create for buyers regarding item returns.

# Objects

* [`ReturnPolicy`](Objects.html#ReturnPolicy) – A store's return policy governing the sale of an item.


# Routes

## GET /stores/{id}/return-policies

Collection. Gets all return policies managed by the given store. **Requires no authentication.**

### Query Parameters

None.

### Response

Array of [`ReturnPolicy`](Objects.html#ReturnPolicy).

### Errors

**500 Internal Server Error**
:   `Failed to get return policies.` Occurs when the API could not complete the request.



## GET /stores/{id}/return-policies/{return_policy_id}

Collection. Gets a specific return policy managed by the given store. **Requires no authentication.**

### Query Parameters

None.

### Response

[`ReturnPolicy`](Objects.html#ReturnPolicy).

### Errors

**500 Internal Server Error**
:   `Failed to get return policies.` Occurs when the API could not complete the request.



## POST /stores/{id}/return-policies/validate

Controller. Checks whether the given return policy is valid to post. **Requires user level authentication.**

### Entity NVP Parameters

`name`
:   `string (64)` Name to give the new return policy.
`policy`
:   `string` Terms and conditions of the sale the return policy is applied to.


### Response

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid value for return policy id.` Occurs when the ID parameter is invalid.
:   `Invalid value for user id.` Occurs when the User Id is invalid.
:   `Return policy user id is required.` Occurs when the User Id is not given.
:   `Invalid value for return policy name.` Occurs when the return policy name is invalid.
:   `Return policy name already exists.` Occurs when a return policy with the same name already exists.
:   `Return policy name is required.` Occurs when the policy name is not given.
:   `Invalid value for return policy.` Occurs when the policy text is invalid.
:   `Return policy field is required.` Occurs when the policy text is not given.
**500 Internal Server Error**
:   `Failed to validate return policy.` Occurs when the API could not complete the request.



## POST /stores/{id}/return-policies

Resource. Creates a new return policy. **Requires user level authentication.**

### Entity NVP Parameters

`name`
:   `string (64)` Name to give the new return policy.
`policy`
:   `string` Terms and conditions of the sale the return policy is applied to.


### Response

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Invalid value for return policy id.` Occurs when the ID parameter is invalid.
:   `Invalid value for user id.` Occurs when the User Id is invalid.
:   `Return policy user id is required.` Occurs when the User Id is not given.
:   `Invalid value for return policy name.` Occurs when the return policy name is invalid.
:   `Return policy name already exists.` Occurs when a return policy with the same name already exists.
:   `Return policy name is required.` Occurs when the policy name is not given.
:   `Invalid value for return policy.` Occurs when the policy text is invalid.
:   `Return policy field is required.` Occurs when the policy text is not given.
**403 Forbidden**
:   `Access denied.` Occurs when the requesting user does not have permission to post return policies to the target user’s collection.
**500 Internal Server Error**
:   `Failed to create return policy.` Occurs when the API could not complete the request.

