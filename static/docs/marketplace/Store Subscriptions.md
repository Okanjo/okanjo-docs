# Store Subscriptions

Stores may subscribe to plans offered by a brand.

# Routes

## GET /stores/{id}/subscriptions

Collection. Returns past and present subscriptions on the given store. **Requires user level authentication.**

> ** Note: This route is not currently implemented. Use the `subscription` embed on the [`GET /stores`](Stores.html#GET /stores) route **

### Query Parameters

None.

### Returns

N/A

### Errors

**501 Not Implemented**
:   `Not Implemented.` Occurs because the route is not implemented yet.




## GET /stores/{store_id}/subscriptions/{id}

Collection. Returns a specific past or present subscription belonging to the given store. **Requires user level authentication.**

> ** Note: This route is not currently implemented. Use the `subscription` embed on the [`GET /stores/{id}`](Stores.html#GET /stores/{id}) route **

### Query Parameters

None.

### Returns

N/A

### Errors

**501 Not Implemented**
:   `Not Implemented.` Occurs because the route is not implemented yet.




## POST /stores/{id}/subscriptions/subscribe

Controller. Subscribes the store to a plan. **Requires user level authentication.**

### Entity NVP Parameters

`plan_id`
:   `int` The unique ID of the plan in which the store would like to subscribe to.
`intent`
:   `string enum` How the store would like to subscribe to the plan. Must be either one of `paid` or `trial`. See [`SubscriptionIntent`](Constants.html#SubscriptionIntent).


### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Require {field}.` Occurs when the given field was not submitted in the request.
:   `Intent needs to be 'paid' or 'trial'.` Occurs when the given intent was invalid.
:   `Plan does not have free trial.` Occurs when the target plan does not offer a free trial and the intent was `trial`.
:   `Current subscription must be cancelled before starting a new subscription.` Occurs when the store has an active subscription and they try subscribing to a different plan.
:   `Invalid field: {field}` Occurs when the given field was invalid.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when something went horribly wrong.



## POST /stores/{id}/subscriptions/change

Controller. **Requires user level authentication.**

> ** Note: This route is not currently implemented. Please contact Okanjo support to change a plan. **

### Entity NVP Parameters

None.

### Returns

N/A

### Errors

**501 Not Implemented**
:   `Not Implemented.` Occurs because the route is not implemented yet.



## POST /stores/{id}/subscriptions/cancel

Controller. **Requires user level authentication.**

> ** Note: This route is not currently implemented. Please contact Okanjo support to cancel a plan. **

### Entity NVP Parameters

None.

### Returns

N/A

### Errors

**501 Not Implemented**
:   `Not Implemented.` Occurs because the route is not implemented yet.