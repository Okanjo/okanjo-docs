
The Okanjo API is a RESTful web service for the restless web.

All API calls require an API key, which identifies the application using the API. API URI's are signed using a shared
secret passphrase. This adds a layer of security between your application and Okanjo. **Never share your passphrase**.

# General Semantics

Here are a few guidelines when working with the API.

## Data Type

All of our responses are currently returned in JSON. Requests made to the API generally take name-value pairs in the
URI and the entity body, standard form encoded.

API routes currently do not accept JSON in the entity body.

## Trailing Slashes

As a general rule, do not include trailing slashes on requests. We do not honor requests to resources that include
trailing slashes.

# Security

We value security of our services as much as our customers do. We’ve taken the following steps to ensure data quality and safety.

## SSL Encryption

All API requests must be sent over an encrypted SSL connection. HTTP requests are not be honored.

## API Access

API credentials provisioned by the Okanjo consist of a API key and a API passphrase. The API passphrase is used as the
salt in the HMAC-SHA-256 algorithm to sign an API request. For example:

1. Original API URI:
>   `request = /request?key=xxxx...`

1. Append the entity body of the request to the URI (can be empty):
>   `temp = request + entityBody`

1. Calculate signature checksum using HMAC-SHA-256:
>   `signature = `[HmacSHA256](http://code.google.com/p/crypto-js/#Quick-start_Guide)`(temp, password)`

1. Append the signature to the URI:
>   `final = /request?key=xxxx...&signature=e7e075fc...7d65a3d7b`


**Notes about the key, signature and query string parameters:**

* The **`key`** parameter may occur anywhere in the original query string.
* The **`signature`** parameter must be *appended* to the final query string.
* Always append the entity body (e.g. POST/PUT data) to the request string before calculating the signature. No separator should be used.
	* When sending [multi-part form data](http://tools.ietf.org/html/rfc2388) to the API (e.g. media file uploads), do not include the entity body in the signature calculation.
* Failing to provide a valid API key, signature, or not signing the request properly, will result in a **`HTTP 400 Bad Request`** response.
* API keys are directly associated with a brand, meaning that the API will assume the branding associated with the API key.

## User Tokens

Some API routes require a user context. In order to use these routes, the user must have authenticated with the API
and have received a user_token. User tokens expire after being neglected for 45 minutes. Performing any API call with a
user token attached will reset its timeout period.

Currently, there is no operation that will destroy or expire a user token.

It is safe to attach user tokens to requests even if they do not necessarily require them. If fact, it's encouraged!

### To obtain a user token:

1. Authenticate the user to start session using /user/login:
>   `POST /users/login`

1. The login context received will contain user_token:
>   `4d03a38ce5e03f3...338ed6e15a0635a`

1. Use the token to send back to API calls that require a valid user token.

#### Example

The following shows an example of an API request that also sends a user token.

1. Build the request URI:
>   `GET **/request?key=xxxx&user_token=as..df**`
1. Sign the request URI:
>   `GET **/request?key=xxxx&user_token=as..df**&signature=b1..a3`
1. Execute the request


# Unique Identifiers

Resources identifiers generally use numeric unsigned numbers.
>   **This may change in future versions of the API.**

# Naming Conventions

As a general rule, we use underscore_cased parameters when working with the API. This applies to query parameters,
entity parameters and resource fields

# POSTing and PUTing

When POSTing or PUTing new resources, all required name-value pairs must be given.

However, when PUTing on existing resources, you can typically only send name-value pairs of the fields you wish to
update. Don issue a PATCH request, since Okanjo will ignore them.

# Global Parameters

Please see the [Globals](Globals.html) section for information on global query parameters.

# Constants and Enumerations

Please see the [Constants](Constants.html) section for information on constants and enumerations.