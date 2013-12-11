# Users

Represents an account on the Okanjo.

# Objects

## BankAccount

Tokenized bank account, stored by Balanced.

`uri`
:   `int`  The canonical URI of the tokenized bank account stored at Balanced.
`nickname`
:   `string`  The nickname of the bank account.
`info`
:   [`BankAccountInfo`](Users.html#BankAccountInfo) Nullable. The underwriting information for US financial laws and Balanced ToS compliance. Required to have in order to be used for payouts.



## BankAccountInfo

Information used for compliance with the Know Your Customer [(KYC)](http://en.wikipedia.org/wiki/Know_your_customer), and anti-money laundering laws.

`type`
:   `string enum`  The bank account owner type. Can be one of `bank_business` or `bank_personal`.
`business_name`
:   `string (255)` Nullable. The name of the business associated with the bank account. Required for `bank_business` type.
`business_ein`
:   `string (32)` Nullable. The IRS EIN number of the business associated with the bank account. Required for `bank_business` type.
`first_name`
:   `string (255)`  The first name of the person associated with the bank account.
`last_name`
:   `string (255)`  The last name of the person associated with the bank account.
`address_1`
:   `string (255)`  The street address of the business or person associated with the bank account.
`address_2`
:   `string (255)` Nullable. Optional building, unit, apartment number or secondary address component.
`city`
:   `string (255)`  The city of the business or person associated with the bank account.
`state`
:   `string (2)`  The state code of the business or person associated with the bank account.
`postal`
:   `string (10)`  The postal code of the business or person associated with the bank account.
`country`
:   `string (2)`  The country code of the business or person associated with the bank account.
`phone`
:   `string (20)`  The phone number of the business or person associated with the bank account.


## SessionUser

Login context obtained from logging in or registering an account.

`id`
:   `int`  The unique ID of the user.
`first_name`
:   `string`  The user’s first name
`last_name`
:   `string`  The user’s last name
`user_name`
:   `string (5-20)`  The login name and public display name of the user.
`gender`
:   `string enum`  The user’s gender. One of: `Male, Female, Other`.
`rating_avg`
:   `decimal` Nullable. The user’s percentage of positive feedback received.
`contact_email`
:   `string (255)`  The user’s email address.
~~`paypal_email`~~
:   ~~`string (255)` Nullable. The user’s paypal email address.~~ Deprecated
`current_zip`
:   `int`  Where the user is geographically located.
`birthday`
:   `date time`  When the user was born.
`twitter_handle`
:   `string` Nullable. The user’s Twitter handle. Not currently used.
`facebook_id`
:   `int` Nullable. The user’s Facebook numeric ID. (if account is associated)
`avatar_media_id`
:   `int` Nullable. The user’s avatar media image id.
`auth_level`
:   `bitwise flags`  The user’s bitwise authentication flags. See [`AuthLevel`](Constants.html#AuthLevel).
`bank_account_uri`
:   `string` Nullable. The tokenized Balanced URI of the default bank account in which to use for payouts.
`card_uri`
:   `string` Nullable. The tokenized Balanced URI of the default credit card in which to use for purchases.
`bank_account_nickname`
:   `string` Nullable. The nickname of the default bank account used for payouts.
`card_nickname`
:   `string` Nullable. The nickname of the default credit card used for purchases.
`notifications`
:   [`Notification []`](User Notifications.html#Notification)  Array of notifications to display to the user.


## LoginContext

The basic data structure obtained when starting a session.

`user`
:   [`SessionUser`](Users.html#SessionUser)  The associated user object.
`user_token`
:   `string`  The user’s API session token.


## User

Private user object, used for managing own user profile.

`id`
:   `int`  The unique ID of the user.
`first_name`
:   `string`  The user’s first name
`last_name`
:   `string`  The user’s last name
`user_name`
:   `string (5-20)`  The login name and public display name of the user.
`gender`
:   `string enum`  The user’s gender. One of: `Male, Female, Other`.
`rating_avg`
:   `decimal` Nullable. The user’s percentage of positive feedback received.
`contact_email`
:   `string (255)`  The user’s email address.
~~`paypal_email`~~
:   ~~`string (255)` Nullable.~~ Deprecated. ~~The user’s paypal email address. ~~
`current_zip`
:   `int`  Where the user is geographically located.
`birthday`
:   `date time`  When the user was born.
`twitter_handle`
:   `string` Nullable. The user’s Twitter handle. Not currently used.
`facebook_id`
:   `int` Nullable. The user’s Facebook numeric ID. (if account is associated)
`avatar_media_id`
:   `int` Nullable. The user’s avatar media image id.
`payout_preference`
:   `string enum` Nullable. The user’s payout preference. Currently only `balanced` is allowed, PayPal has been deprecated.
`auth_level`
:   `bitwise flags`  The user’s bitwise authentication flags. See [`AuthLevel`](Constants.html#AuthLevel).
`bank_account_uri`
:   `string` Nullable. The tokenized Balanced URI of the default bank account in which to use for payouts.
`card_uri`
:   `string` Nullable. The tokenized Balanced URI of the default credit card in which to use for purchases.
`bank_account_nickname`
:   `string` Nullable. The nickname of the default bank account used for payouts.
`card_nickname`
:   `string` Nullable. The nickname of the default credit card used for purchases.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. Associated avatar media image.
`cards`
:   [`Card []`](Checkout.html#Card)  Embeddable. Tokenized credit cards used for purchasing items.
`bank_accounts`
:   [`BankAccount []`](Users.html#BankAccount)  Embeddable. Tokenized bank accounts used for payouts.
`return_policy`
:   [`ReturnPolicy []`](User Return Policies.html#ReturnPolicy)   Embeddable. Return policies managed by the user.



## UserProfile

Public display information about a buyer or seller.

`id`
:   `int`  The unique ID of the user.
`status`
:   `int (enum)`  Deprecated. The status of the user.  See [`UserStatus`](Constants.html#UserStatus).
`user_name`
:   `string`  The login name or public display name of the user.
`rating_avg`
:   `decimal` Nullable The user’s positive feedback percentage.
`avatar_media_id`
:   `int` Nullable The user’s profile image id.



# Routes

## POST /users/login

Controller. Registers a new user or authenticates an existing user.

### Entity NVP Parameters

`action`
:   `enum` Required. See [`LoginAction`](Constants.html#LoginAction).
`facebook_token`
:   `string (255)` Facebook access_token value. Required for action `loginFacebook, registerFacebook`
`facebook_id`
:   `string (64)` Facebook user id, usually numeric. Required for action `loginFacebook, registerFacebook`
`email`
:   `string (255)` User contact email address. Required for `loginEmailPassword, registerEmailPassword, checkoutAsGuest`
`password`
:   `string (6-max)` Account password, Required for `loginUsernamePassword, loginEmailPassword`
`username`
:   `string (2-20)` Account username, unique to Okanjo. Required for `loginUsernamePassword, registerEmailPassword, registerFacebook`
`first_name`
:   `string` User’s first name. Required for `registerEmailPassword, registerFacebook, checkoutAsGuest`
`last_name`
:   `string` User’s last name. Required for `registerEmailPassword, registerFacebook, checkoutAsGuest`
`birthday`
:   `date (18-115yrs)` User’s birthday. Required for `registerEmailPassword, registerFacebook`
`zip`
:   `string` Mailing zipcode. Required for `registerEmailPassword, registerFacebook`
`gender`
:   `string enum` User’s gender. Required for `registerEmailPassword, registerFacebook`. One of the following values: `male`, `female`, `other`



### Returns

[`LoginContext`](Users.html#LoginContext) object.

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
:   `csv` When given, includes the additional resources. Accepts: `media`, `cards`, `bank_accounts`, `return_policy`



### Returns

[`UserProfile`](Users.html#UserProfile) if requesting another user or [`User`](Users.html#User) if requesting user is the same as the requesting `user_token` user.

### Errors

**404 Not Found**
:   `User not found.` Occurs when the specified user id does not exist.
**500 Internal Server Error**
:   `Unable to retrieve user.` Occurs when the request could not be fulfilled.


## PUT /users/{id}

Resource. Updates a user profile. **Requires user level authentication.**

### Entity NVP Parameters

`payout_preference`
:   `string enum` The type of payout source to use. See [`PayoutPreference`](Constants.html#PayoutPreference).
`balanced_account_uri`
:   `string` The URI of the tokenized Balanced bank account to associate with the account and use as the default payout preference.
`payout_type`
:   `string enum` The type of bank account information being attached. One of `bank_business` or `bank_personal`
`payout_business_name`
:   `string (255)` The name of the business associated with the bank account. Required for `bank_business` type.
`payout_business_ein`
:   `string (32)` The IRS EIN number of the business associated with the bank account. Required for `bank_business` type.
`payout_first_name`
:   `string (255)` The first name of the person associated with the bank account.
`payout_last_name`
:   `string (255)` The last name of the person associated with the bank account.
`payout_address1`
:   `string (255)` The street address of the business or person associated with the bank account.
`payout_address2`
:   `string (255)` Optional building, unit, apartment number or secondary address component.
`payout_city`
:   `string (255)` The city of the business or person associated with the bank account.
`payout_state`
:   `string (2)` The state code of the business or person associated with the bank account.
`payout_postal`
:   `string (10)` The postal code of the business or person associated with the bank account.
`payout_country`
:   `string (2)` The country code of the business or person associated with the bank account.
`payout_phone`
:   `string (20)` The phone number of the business or person associated with the bank account.
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


