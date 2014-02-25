
# Messages

Facilitates platform user to store and store to user messaging.

Messages are sent via email to the buyer or store representatives. Those emails can be directly replied-to to respond.
They are also viewable through [User Notifications](UserNotifications.html) and existing messages can be replied to
via [POST /messages/reply](Messages.html#POST /messages/reply).

# Routes

## POST /messages

Controller. Sends a message in regards to a product to its seller. **Requires user level authentication.**

### Entity NVP Parameters

`product_id`
:   `int` Only necessary if context is `buyer-to-seller` - The product to talk about.
`order_item_id`
:   `int` Only necessary if context is `seller-to-buyer` - The order item (sale) to talk about.
`message`
:   `string` Message to send the seller in the context of the product.
`context`
:   `string enum` `buyer-to-seller` or `seller-to-buyer`. See [MessageContext](Constants.html#MessageContext).


### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Require product_id.` Occurs when the product_id field was not given and the context is "buyer-to-seller"
:   `Require order_item_id.` Occurs when the order_item_id field was not given and the context is “seller-to-buyer”
:   `Require message.` Occurs when the message field was not given.
:   `Invalid context.` Occurs when the context was not given, or is not handled
**404 Not Found**
:   `Product/Order Item not found.` Occurs when the product/order item at the given product_id was invalid or not found.
**500 Internal Server Error**
:   `Error sending message.` Occurs when something went wrong server-side.


## POST /messages/reply

Controller. Sends a message in response to an existing message. Can be used as an in-client alternative to reply via email. **Requires user level authentication**.

### Entity NVP Parameters

`message_id`
:   `int` Required. The id of the message to reply to. User associated with the request must be recipient of the target message.
`message`
:   `string` Required. The body of the message to send.

### Returns
Generic [`Success`](Globals.html#Default Response Object) object.

### Errors
**400 Bad Request**
:   `Require {field}.` Occurs when the given field was not supplied in the request.
:   `Invalid field: {field}` Occurs when the given field was not valid.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when the server was unable to fulfill the request.

