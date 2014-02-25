# Store Received Feedback

Retrieves feedback left on sales.


# Objects

* [`Feedback`](Objects.html#Feedback) – A user's quantifiable order experience.
* [`FeedbackEntity`](Objects.html#FeedbackEntity) –  Additional information about the reviewer or reviewee.


# Routes

## GET /stores/{id}/feedback

Collection. Returns feedback the store received.

### Query Parameters

None.

### Returns

Array of [`Feedback`](Objects.html#Feedback) messages.

### Errors

**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.



## GET /stores/{id}/feedback/{order_item_id}

Resource. Returns a specific feedback message received by the store.

### Query Parameters

None.

### Returns

[`Feedback`](Objects.html#Feedback) message.

### Errors

**404 Bad Request**
:   `Feedback not found.` Occurs when the specific feedback was not found.
**500 Internal Server Error**
:   `System error.` Occurs when the request could not be fulfilled.
