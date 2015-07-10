# Confirmations

Confirmations are used for one-time-use actions. For example, when a user forgets a password, a confirmation code is
generated, emailed to the user, and can be confirmed by the API to recover access to the account, once confirmed.

> ** Stub. More routes to come in the future **

# Routes

## POST /confirmations/{code}/confirm

Controller. Confirms a given confirmation code. Can only be performed once per code.

### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `code-consumed` Occurs when the code was already confirmed or otherwise used.
:   `code-expired` Occurs when the code has expired and is no longer valid.
**500 Internal Server Error**
:   `Failed to confirm code.` Occurs when the request could not be completed by the server.

