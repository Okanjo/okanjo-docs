# Users

Represents an account on the Okanjo.

# Objects

* [`LoginContext`](Objects.html#LoginContext) – Login context given upon successfully authenticating a user.
* [`User`](Objects.html#User) – Private user object.
* [`UserProfile`](Objects.html#UserProfile) – Public user object.


# Routes

## POST /users/login

Controller. Registers a new user or authenticates an existing user.

### Entity NVP Parameters

`action`
:   `enum` Required. See [`LoginAction`](Constants.html#LoginAction).
`facebook_token`
:   `string (255)` Facebook access_token value. Required for action `loginFacebook`, `registerFacebook`
`facebook_id`
:   `string (64)` Facebook user id, usually numeric. Required for action `loginFacebook`, `registerFacebook`
`email`
:   `string (255)` User contact email address. Required for `loginEmailPassword`, `registerEmailPassword`, `checkoutAsGuest`
`password`
:   `string (6-max)` Account password, Required for `loginUsernamePassword`, `loginEmailPassword`
`username`
:   `string (2-20)` Account username, unique to Okanjo. Required for `loginUsernamePassword`, `registerEmailPassword`, `registerFacebook`
`first_name`
:   `string` User’s first name. Required for `registerEmailPassword`, `registerFacebook`, `checkoutAsGuest`
`last_name`
:   `string` User’s last name. Required for `registerEmailPassword`, `registerFacebook`, `checkoutAsGuest`
`birthday`
:   `date (18-115yrs)` User’s birthday. Required for `registerEmailPassword`, `registerFacebook`
`zip`
:   `string` Mailing zipcode. Required for `registerEmailPassword`, `registerFacebook`
`gender`
:   `string enum` User’s gender. Required for `registerEmailPassword`, `registerFacebook`. One of the following values: `male`, `female`, `other`



### Returns

[`LoginContext`](Objects.html#LoginContext) object.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs during registration when the given field was invalid.
:   `Unknown login type.` Occurs when the given action parameter is invalid.
:   `Invalid login.` Occurs when one or more required fields for Guest Checkout were not valid.
**401 Unauthorized**
:   `Invalid login.` Occurs when the login attempt failed due to invalid parameters or credentials.
:   `Facebook did not authorize the login.` Occurs when the user authorization with Facebook failed.
**409 Conflict**
:   `User already exists.` Occurs when attempting to register an account that already exists.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.
**501 Not Implemented**
:   `Twitter login not implemented yet.` NOR WILL IT EVER BE. (╯°□°）╯︵ ┻━┻



## POST /users/forgot-password

Controller. Starts the workflow for a user to recover access to their account. Shoots an email to them with a confirmation code.

### Entity NVP Parameters

Specify only one of the following. Specifying both will blow up.

`username`
:   `string` The username of the user to attempt to recover.
`email`
:   `string` The registered email address of the user to attempt to recover.



### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

### Errors

**400 Bad Request**
:   `Please supply username or email` Occurs when both or neither username or email fields are given.
**404 Not Found**
:   `User not found` Occurs when the given user is not found.
**500 Internal Server Error**
:   `System error.` Occurs when an exception occurs.


## GET /users/{id}

Resource. Gets information about a user. **Requires user level authentication.**

If the user is manageable by the requesting user, complete information is returned, otherwise public profile information is returned.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Can also can specify fields on embedded objects.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `addresses`, `cards`, `stores`, `causes`, `media`.



### Returns

[`UserProfile`](Objects.html#UserProfile) if requesting another user or [`User`](Objects.html#User) if requesting user is the same as the requesting `user_token` user.

### Errors

**404 Not Found**
:   `User not found.` Occurs when the specified user id does not exist.
**500 Internal Server Error**
:   `Unable to retrieve user.` Occurs when the request could not be fulfilled.


## PUT /users/{id}

Resource. Updates a user account. **Requires user level authentication.**

### Entity NVP Parameters

`avatar_media_id`
:   `int` ID of the media image to use for the user avatar.
`birthday`
:   `date time` The date in which the user was born.
`email`
:   `string (255)` The email address in which to contact the user.
`facebook_id`
:   `int` The user’s Facebook ID number.
`facebook_token`
:   `string (255)` The user’s Facebook OAuth token.
`gender`
:   `string enum` The user’s gender preference.
`first_name`
:   `string (255)` The user’s first name.
`last_name`
:   `string (255)` The user’s last name.
`zip`
:   `string (10)` The user’s default location (postal code).



### Returns

Generic [`Success`](Globals.html#Default Response Object) result.

### Errors

**400 Bad Request**
:   `Invalid field: {field}` Occurs when the given field was not valid.
:   `Could not confirm Balanced account URI. Invalid URI?` Occurs when the given balanced_account_uri could not be confirmed due to a third-party communication error.
:   `Cannot set payout preference to Balanced because you have not setup any bank accounts yet.` Occurs when the payout preference was set but no payout methods were configured yet.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request did not carry sufficient privileges to perform the operation. Trying with different credentials could correct the problem.
**403 Forbidden**
:   `Insufficient privileges for this operation.` Occurs when the request is attempting to attach a bank account associated with another account.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when the request could not be fulfilled.



## POST /users/{id}/set-password

Controller. Updates the user account’s password. Changing passwords do not affect active user tokens. **Requires user level authentication.**

### Entity NVP Parameters

`new_password`
:   `string` The new password to use for user name/email login requests.


### Returns

Generic [`Success`](Globals.html#Default Response Object) result.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request did not carry sufficient privileges to perform the operation. Trying with different credentials could correct the problem.
**500 Internal Server Error**
:   `Failed to update password` Occurs when the request could not be fulfilled.


