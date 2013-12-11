
# Globals

The following globals are commonly used and accepted by Okanjo API routes.

## Global Query Parameters

**Authorization**

These parameters are required by virtually all API routes.

`key`
:   `string` Required. API key token.
`signature`
:   `string` Required. API request signature.

**User Context**

`user_token`
:   `string` Optional. The user token identifier that represents the user session state. Required for some API calls.


**Filtering & Embedding**

These parameters are used by most resource and collection routes.

`fields`
:   `CSV` Optional. CSV list of fields to return.
`embed`
:   `CSV` Optional. CSV list of additional fields to embed. Not all resources may have embeddable fields.


**Pagination**

These parameters are used by many collection routes. Not all collection routes fully implement or use theses parameters.

`page_size`
:   `string` Optional. Specific to collections and stores, specifies how many records to return.
`page_start_index`
:   `string` Optional. Specific to collections and stores, specifies the starting point in the resultset.



## Global Error Responses

Here is a list of errors that may occur on any API request.

**404 Not Found**
:   `Don’t use trailing slashes. Try instead: {path}` Occurs when a trailing slash was appended to the resource path.
**400 Bad Request**
:   `Valid API key and signature required.` Occurs when the API key or signature were missing or invalid.
**401 Unauthorized**
:   `Invalid or expired user token.` Occurs when the user_token parameter was invalid or has expired.
:   `Insufficient privileges for this operation.` Occurs when the given user (via user_token) does not have enough access to perform the requested operation.
:   `User token required for this operation.` Occurs when no user_token was given on a request that requires authorization.
**500 Internal Server Error**
:   `There was a problem with your request.` Occurs when something went wrong on the server side.


## Default Response Object

This is standard response object for generic success and error responses.

`type`
:   `enum` Type of response. Options are: error, success.
`description`
:   `string` The resulting message or description of the operation.
`data`
:   `string` Nullable. Optional. Data associated with the success result type.


