
# Feedback

Represents feedback about a sale of an item.


## UserFeedback

Review of purchase experience.

`id`
:   `int`  The unique ID of the user feedback.
`created`
:   `date time`  When the feedback was received.
`reviewee_id`
:   `int`  The unique ID of the buyer who left the feedback.
`reviewer_id`
:   `int`  The unique ID of the seller who received the feedback.
`order_item_id`
:   `int`  The order item the feedback is in regards to.
`value`
:   `int (1-5)`  The rating the buyer gave the seller between 1 and 5 where 1 is worst and 5 is best.
`feedback`
:   `string` Nullable. Optional. A message the buyer included about the transaction.
`reviewer`
:   [`UserFeedbackEntity`](User Feedback.html#UserFeedbackEntity)  Embedded information about the user who left the feedback.
`reviewee`
:   [`UserFeedbackEntity`](User Feedback.html#UserFeedbackEntity)  Embedded information about hte user who received the feedback.


## UserFeedbackEntity

Embedded information about a user who participated in feedback giving or receiving.

`user_name`
:   `string`  The username of the user to who left/received the feedback.


# Routes

## GET /users/{id}/feedback

Collection. Returns feedback received for the given user.

### Query Parameters

*Filtering*
`type`
:   `string enum` . Required. Returns feedback of a specific to being given or received. Accepts: `got, gave` 


### Returns

Array of [`UserFeedback`](User Feedback.html#UserFeedback) messages.

### Errors

**400 Bad Request**
:   `Missing required field: type` Occurs when the type field was not given.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## GET /users/{id}/feedback/{order_item_id}

Resource. Returns a specific feedback message.

### Query Parameters

None.

### Returns

[`UserFeedback`](User Feedback.html#UserFeedback) message.

### Errors

**404 Bad Request**
:   `Feedback not found.` Occurs when the specific feedback was not found.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## PUT /users/{id}/feedback/{order_item_id}

Resource. Leaves feedback regarding a specific sale. Reviewer is the given `user_id, reviewee_id` is implicitly derived by the `order_item_id`. **Requires user level authentication.**

### Entity NVP Parameters

`rating`
:   `int` Required. The quantitative score given to the transaction. Accepts `1, 2, 3, 4` or `5`.
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
:   `{object} not found.` Occurs when the specific target order/item/product/seller was not found or valid.
**500 Internal Server Error**
:   `Failed to save Feedback. Try again later` Occurs when the request could not be fulfilled.

