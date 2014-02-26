# User Given Feedback

Gets previously left feedback or adds feedback on purchases.


# Objects

* [`Feedback`](Objects.html#Feedback) – A user's quantifiable order experience.
* [`FeedbackEntity`](Objects.html#FeedbackEntity) –  Additional information about the reviewer or reviewee.


# Routes

## GET /users/{id}/feedback

Collection. Returns feedback given by the user.

### Query Parameters

None.

### Returns

Array of [`Feedback`](Objects.html#Feedback) messages.

### Errors

**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## GET /users/{id}/feedback/{order_item_id}

Resource. Returns a specific feedback message left by the user.

### Query Parameters

None.

### Returns

[`Feedback`](Objects.html#Feedback) message.

### Errors

**404 Bad Request**
:   `Feedback not found.` Occurs when the specific feedback was not found.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## PUT /users/{id}/feedback/{order_item_id}

Resource. Leaves feedback regarding a specific purchase. **Requires user level authentication.**

### Entity NVP Parameters

`rating`
:   `int (1-5)` Required. The quantitative score given to the transaction. Accepts `1`, `2`, `3`, `4` or `5`.
`feedback`
:   `string (140)` Optional. The message the reviewer is leaving regarding the transaction.


### Returns

Generic [`Success`](Globals.html#Default Response Object) response.

### Errors

**400 Bad Request**
:   `Require {field}.` Occurs when the field was required but was not given in the request.
:   `Cannot leave Feedback for this product again` Occurs when the user attempts to leave feedback on an item after feedback has already been left.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request credentials were not sufficient to perform the action. Providing different credentials could solve the issue.
**404 Not Found**
:   `{object} not found.` Occurs when the specific target order/item/product/store was not found or valid.
**500 Internal Server Error**
:   `Failed to save Feedback. Try again later` Occurs when the request could not be fulfilled.

