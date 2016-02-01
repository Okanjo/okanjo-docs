# Ads API

[Okanjo](http://okanjo.com)'s Ad Platform.

# Introduction

TODO

# Authentication

The scope of authentication required changes based on the resource you are accessing. Some resources require multiple Parameters, while some require just one.

TODO

# Errors

TODO

# Pagination

skip ((optional))((default is `0`))
:   ToDo
take ((optional))((default is `25`))
:   ToDo

# JSONP

TODO

# Accounts

## The Account object

This object is your Ads platform account. This allows the user to manage different resources found in the ads API.

To enable an account in the Ads API, simply provide an email address and a password.

#### Attributes

id ((string))
:   Unique identifier.

email ((string))
:   Valid email address.


created ((string))
:   The date on which the account was created.

updated ((string))
:   The date on which the account was updated.

## Create an account
When a user successfully creates an account, the user will have access to other resources needed to use the Okanjo Ads platform.

#### Route
>`POST /accounts`

#### Payload

email ((required))
:   The user's email address, this will be used to login.

password ((required))
:   User chosen password.

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"email":"email@example.com", "password":"password"}' \
'http://ads-api.okanjo.com/accounts'

```

```js

{
  "statusCode": 201,
  "error": null,
  "data": {
    "id": "AC2dBQMkWNy3Cwsjmik",
    "email": "email@example.com",
    "created": "2015-09-30T16:20:15.844Z",
    "updated": "2015-09-30T16:20:15.844Z"
  }
}

```

## Retrieve an account
Retrieves the users account associated with the account id provided.

#### Route
>`GET /accounts/{account_id}`

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC..?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "AC2dBPkqSykC9XYxTwg",
    "email": "matt@okanjo.com",
    "created": "2015-09-30T15:34:32.989Z",
    "updated": "2015-09-30T15:34:32.990Z"
  }
}

```
## Update an account

Updates a users account.

#### Route
>`PUT /accounts/{account_id}`

#### Payload

email ((optional))
:   The user's email address, this will be used to login.

password ((optional))
:   User chosen password.

```sh

curl -X PUT \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"email":"newEmail@okanjo.com"}' \
'http://ads-api.okanjo.com/accounts/AC...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "AC2dBPkqSykC9XYxTwg",
    "email": "newEmail@okanjo.com",
    "created": "2015-09-30T15:34:32.989Z",
    "updated": "2015-09-30T16:59:00.084Z"
  }
}

```

## Delete an account

Deletes the users account

#### Route
>`DELETE /accounts/{account_id}`

# Pools

## The Pool object
TODO Description
#### Attributes

id ((string))
:   Unique identifier
 
name ((string))
:   The name of the pool.

description ((string))
:   The description of the pool.

acl ((array))
:   ????? a thing in your knee that gets torn.

created ((string))
:   The date on which the account was created.

updated ((string))
:   The date on which the account was updated.

## Create a pool

#### Route

>`POST /accounts/{account_id}/pools`

#### Payload

name ((required))
:   The name of the pool being created.

description ((optional))
:   The description of the pool being created.

acl ((optional))
:   ????? a thing in your knee that gets torn.

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{ \
    "name": "SMG", \
    "description": "Small Media Group", \1
    "acl": [ \
        "MP..." \
    ] \
}' \
'http://ads-api.okanjo.com/accounts/AC.../pools?session_token=ST...'

```
```js

{
  "statusCode": 201,
  "error": null,
  "data": {
    "id": "PL...",
    "name": "SMG",
    "description": "Small Media Group",
    "acl": [
      "MP..."
    ],
    "created": "2015-09-30T18:18:57.855Z",
    "updated": "2015-09-30T18:18:57.855Z"
  }
}

```

## Retrieve a pool

Retrieve a desired account pool by providing the required parameters.

#### Route

>`GET /accounts/{account_id}/pools/{pool_id}`

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../pools/PL...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "PL...",
    "name": "SMG",
    "description": "Small Media Group",
    "acl": [
      "MP..."
    ],
    "created": "2015-09-30T18:18:57.855Z",
    "updated": "2015-09-30T18:18:57.855Z"
  }
}

```

## Update a pool

#### Route

>`PUT /accounts/{account_id}/pools/{pool_id}`

```sh

curl -X PUT \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"description": "Small Media Group LLC", \
"acl": ["MP...","AC..."]}' \
'http://ads-api.okanjo.com/accounts/AC.../pools/PL...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "PL...",
    "name": "SMG",
    "description": "Small Media Group LLC",
    "acl": [
      "MP...",
      "AC..."
    ],
    "created": "2015-09-30T18:18:57.855Z",
    "updated": "2015-09-30T18:47:00.116Z"
  }
}

```
#### Payload

description ((optional))
:   The description of the pool being created.

acl ((optional))
:   ????? a thing in your knee that gets torn.

## Delete a pool

#### Route

>`GET /accounts/{account_id}/pools/{pool_id}`

```sh

curl -X DELETE \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../pools/PL...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": null
}

```
## List pools

#### Route

>`GET /accounts/{account_id}/pools/`

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../pools?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": [
    {
      "id": "PL...",
      "name": "BMG",
      "description": "Big Media Group",
      "acl": [
        "MP..."
      ],
      "created": "2015-09-30T19:06:33.693Z",
      "updated": "2015-09-30T19:06:33.693Z"
    },
    {
      "id": "PL...",
      "name": "MMG",
      "description": "Medium Media Group",
      "acl": [
        "MP..."
      ],
      "created": "2015-09-30T19:07:27.972Z",
      "updated": "2015-09-30T19:07:27.972Z"
    }
  ]
}

```
# Sessions

## The Session object
TODO Description

#### Attributes 

id ((string))
:   Unique identifier.

token ((string))
:   Unique token used to verify the session.

is_valid ((boolean))
:   Determines if session is valid.

host ((string))
:   TODO

created ((string))
:   The date on which the account was created.

updated ((string))
:   The date on which the account was updated.

## The SessionStart object

#### Attributes

session ((object))
:   [`Session`](#sessions-the-session-object)

account ((object))
:   [`Account`](#accounts-the-account-object)

## Create a session
This logs the user in and starts a session.

#### Route

>`POST /accounts/sessions`

#### Payload

email ((required))
:   user's email.

password ((required))
:   user's password.

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"email":"matt@okanjo.com", "password":"password"}' \
'http://ads-api.okanjo.com/accounts/sessions'

```

```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "account": {
      "id": "AC2dBPkqSykC9XYxTwg",
      "email": "matt@okanjo.com",
      "created": "2015-09-30T15:34:32.989Z",
      "updated": "2015-09-30T15:34:32.990Z"
    },
    "session": {
      "id": "SN2dBQcXdcUVk6uHEVB",
      "token": "ST...",
      "is_valid": true,
      "host": "127.0.0.1",
      "created": "2015-09-30T16:39:36.652Z",
      "updated": "2015-09-30T16:39:36.652Z"
    }
  }
}

```

## Retrieve a session
Retrieves the users session.

#### Route

>`GET /accounts/{account_id}/sessions/{session_id}`

```sh

curl -X GET \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../sessions/SN...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "SN...",
    "token": "ST...",
    "is_valid": true,
    "host": "127.0.0.1",
    "created": "2015-09-30T18:27:35.293Z",
    "updated": "2015-09-30T18:27:35.293Z"
  }
}

```

## Delete a session

Ends the session and logs the user out.

#### Route

>`DELETE /accounts/{account_id}/sessions/{session_id}`

```sh

curl -X DELETE \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../sessions/SN...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "SN...",
    "token": "ST...",
    "is_valid": false,
    "host": "127.0.0.1",
    "created": "2015-09-30T18:27:35.293Z",
    "updated": "2015-09-30T18:27:35.293Z"
  }
}

```

## List sessions

Retrieves all account sessions associated with the account id provided.

#### Route

>`GET /accounts/{account_id}/sessions`

```sh

curl -X GET \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/accounts/AC.../sessions?session_token=ST...'

```

```js

{
  "statusCode": 200,
  "error": null,
  "data": [
    {
      "id": "SN...",
      "token": "ST...",
      "is_valid": true,
      "host": "127.0.0.1",
      "created": "2015-09-30T15:50:20.468Z",
      "updated": "2015-09-30T18:01:47.798Z"
    },
    {
      "id": "SN...",
      "token": "ST...",
      "is_valid": true,
      "host": "127.0.0.1",
      "created": "2015-09-30T16:39:36.652Z",
      "updated": "2015-09-30T16:39:36.652Z"
    }
  ]
}

```

#### Query

is_valid ((optional))
:   TODO

# Marketplaces

## The Marketplace object

TODO Description

#### Attributes

id ((string))
:   A unique identifier.

name ((string))
:   Desired name of the marketplace.

status ((string))
:   A marketplace can have a status of 'live' or 'testing'.

created ((string))
:   The date the account was created.

updated ((string))
:   The date the account was updated


## Create a marketplace

#### Route

>`POST /marketplaces`

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"name": "Example Company","status": "live"}' \
'http://ads-api.okanjo.com/marketplaces?session_token=ST...'

```
```js

{
  "statusCode": 201,
  "error": null,
  "data": {
    "id": "MP...",
    "name": "Example Company",
    "status": "live",
    "created": "2015-09-30T19:44:49.788Z",
    "updated": "2015-09-30T19:44:49.788Z"
  }
}

```

#### Payload

name ((required))
:   Desired name of the marketplace.

status ((optional))
:   A marketplace can have a status of 'live' or 'testing' in order to delegate what the use case is for the marketplace.

## Retrieve a marketplace

#### Route

>`GET /marketplaces/{marketplace_id}`

```sh

curl -X GET \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/marketplaces/MP...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "MP...",
    "name": "Example Company",
    "status": "live",
    "created": "2015-09-30T19:44:49.788Z",
    "updated": "2015-09-30T19:44:49.788Z"
  }
}

```
## Update a marketplace

#### Route

>`PUT /marketplaces/{marketplace_id}`

```sh

curl -X PUT \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{"name": "Example Company LLC"}' \
'http://ads-api.okanjo.com/marketplaces/MP...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "MP...",
    "name": "Example Company LLC",
    "status": "live",
    "created": "2015-09-30T19:44:49.788Z",
    "updated": "2015-09-30T20:00:32.878Z"
  }
}

```

#### Payload

name ((optional))
:   Desired name of the marketplace.

status ((optional))
:   A marketplace can have a status of 'live' or 'testing' in order to delegate what the use case is for the marketplace.

## Delete a marketplace

#### Route

>`DELETE /marketplaces/{marketplace_id}`

```sh

curl -X DELETE \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '' 'http://ads-api.okanjo.com/marketplaces/MP...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": null
}

```

# Keys

## The Key object

TODO Description

#### Attributes

id ((string))
:   TODO

name ((string))
:   TODO

key ((string))
:   TODO

secret ((string))
:   TODO

created ((string))
:   The date the account was created.

updated ((string))
:   The date the account was updated

## Create a key

#### Route
>`POST /marketplaces/{marketplace_id}/keys`

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{ "name": "Digital Demo Key" }' \
'http://ads-api.okanjo.com/marketplaces/MP.../keys?session_token=ST...'

```
```js

{
  "statusCode": 201,
  "error": null,
  "data": {
    "id": "KY...",
    "name": "Digital Demo Key",
    "key": "AK...",
    "secret": "KS...",
    "created": "2015-09-30T20:34:01.858Z",
    "updated": "2015-09-30T20:34:01.858Z"
  }
}

```

#### Payload

name ((optional))
:   TODO

## Retrieve a key

#### Route

>`GET /marketplaces/{marketplace_id}/keys/{key_id}`

```sh

curl -X GET \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/marketplaces/MP.../keys/KY...?session_token=ST...'

```

```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "KY...",
    "name": "Digital Demo Key",
    "key": "AK...",
    "secret": "KS...",
    "created": "2015-09-30T20:34:01.858Z",
    "updated": "2015-09-30T20:34:01.858Z"
  }
}

```
## Update a key

#### Route

>`PUT /marketplaces/{marketplace_id}/keys/{key_id}`

```sh

curl -X PUT \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{ "name": "New Name Demo Key" }' \
'http://ads-api.okanjo.com/marketplaces/MP.../keys/KY...?session_token=ST...'

```

```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "KY...",
    "name": "New Name Demo Key",
    "key": "AK...",
    "secret": "KS...",
    "created": "2015-09-30T20:34:01.858Z",
    "updated": "2015-09-30T20:43:24.178Z"
  }
}

```
#### Payload

name ((optional))
:   TODO
## Delete a key

#### Route

>`DELETE /marketplaces/{marketplace_id}/keys/{key_id}`

```sh

curl -X DELETE \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '' 'http://ads-api.okanjo.com/marketplaces/MP.../keys/KY...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": null
}

```

## List keys

#### Route

>`GET /marketplaces/{marketplace_id}/keys`

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/marketplaces/MP.../keys?session_token=ST...'

```

```js

{
  "statusCode": 200,
  "error": null,
  "data": [
    {
      "id": "KY...",
      "name": "Demo Key",
      "key": "AK...",
      "secret": "KS...",
      "created": "2015-09-30T21:27:46.754Z",
      "updated": "2015-09-30T21:27:46.754Z"
    },
    {
      "id": "KY...",
      "name": "Demo Key two",
      "key": "AK...",
      "secret": "KS...",
      "created": "2015-09-30T21:27:52.990Z",
      "updated": "2015-09-30T21:27:52.990Z"
    }
  ]
}

```

# Product

## The Product object

TODO Description

#### Attributes

id ((string))
:   Unique Identifier.

marketplace_id ((string))
:   Unique identifier of the desired marketplace.

marketplace_status ((string))
:   Current status of the marketplace.

pools ((array))
:   An array of pools that will have access to the product.

status ((string))
:   TODO

state ((string))
:   TODO

external_id ((string))
:   TODO

sku ((string))
:   TODO

name ((string))
:   TODO

description ((string))
:   Description of the product.
image_urls ((array))
:   TODO

currency ((string))
:   Type of currency, e.g. USD , refer to ISO 4217 standards for more.

price ((number))
:   Price of the product

buy_url ((string))
:   TODO

condition ((string))
:   TODO

buy_url ((string))
:   TODO

inline_buy_url ((string))
:   TODO

impression_url ((string))
:   TODO

tags ((array))
:   TODO

category ((array))
:   TODO

manufacturer ((string))
:   TODO

upc ((string))
:   TODO

isbn ((string))
:   TODO

sold_by ((string))
:   TODO

donation_percent ((number))
:   TODO

donation_to ((string))
:   TODO

meta ((object))
:   TODO

## Create a product

#### Route

>`POST /marketplaces/{marketplace_id}/products`

```sh

curl -X POST \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{\
  "name":"The Walking Dead 14: No Way Out (Paperback)", \
  "status": "live",\
  "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.", \
  "price": "11.47", \
  "manufacturer": "The Walking Dead", \
  "isbn": "9781607063926", \
  "sku": "7797735", \
  "condition": "new", \
  "external_id" : "13482339-000-000", \
  "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF", \
  "impression_url": "http://www.awltovhc.com/image-7666355-10906445", \
  "image_urls": "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-14-No-Way-Out-Paperback-P13482339.jpg", \
  "category": [ "Books & Media", "Books", "Fiction Books", "Comics and Graphic Novels" ], \
  "tags": ["Walking Dead", "Paperback"], \
  "meta": { \
    "script": "", \
    "num": 43, \
    "dte": "2015-03-24T00:11:22Z" \
  }, \
  "pools": "DemoPool" \
}' 'http://ads-api.okanjo.com/marketplaces/MP.../products?session_token=ST...' \

```
```js

{
  "statusCode": 201,
  "error": null,
  "data": {
    "id": "PR...",
    "marketplace_id": "MP...",
    "marketplace_status": "live",
    "pools": [
      "DemoPool"
    ],
    "status": "live",
    "state": "needs_analysis",
    "external_id": "13482339-000-000",
    "sku": "7797735",
    "name": "The Walking Dead 14: No Way Out (Paperback)",
    "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.",
    "image_urls": [
      "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-14-No-Way-Out-Paperback-P13482339.jpg"
    ],
    "currency": "USD",
    "price": 11.47,
    "condition": "new",
    "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
    "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
    "tags": [
      "Walking Dead",
      "Paperback"
    ],
    "category": [
      "Books & Media",
      "Books",
      "Fiction Books",
      "Comics and Graphic Novels"
    ],
    "manufacturer": "The Walking Dead",
    "isbn": "9781607063926",
    "meta": {
      "script": "",
      "num": 43,
      "dte": "2015-03-24T00:11:22Z"
    },
    "created": "2015-09-30T21:40:40.111Z",
    "updated": "2015-09-30T21:40:40.111Z"
  }
}

```

#### Payload

status ((optional, default is live))
:   Allows the vendor to hide or show a product.

name ((required))
:   the name of the product being created.

description ((required))
:   A description of the product being created.

image_urls ((required))
:   URL pointing to an image related to the product.

price ((required))
:   Price of the product.

buy_url ((required))
:   Link to the page containing details on the product.
  
external_id ((optional))
:   Vendor can add an id in which they identify the product by.

sku ((optional, string))
:   Vendor can add a SKU number associated with the product.

currency ((optional, default is `USD`))
:   Vendor can change the currency type to reflect price of product appropriately.

condition ((optional, default is `condition unspecified`))
:   Condition of the product.

inline_buy_url ((optional))
:   TODO

impression_url ((optional))
:   TODO

tags ((optional))
:   Tags are an integral part of the ads platform, by using tags, the product sense logic will be able to better match the vendors product with appropriate content.

category ((optional))
:   Categories your product can be apart of, this aids in product sense's ability to pair your product with the correct content.

manufacturer ((optional))
:   Name of the entity that fabricated the product.

upc ((optional))
:   UPC code.

isbn ((optional))
:   ISBN number.

sold_by ((optional))
:   Name of the seller.

donation_percent ((optional))
:   This delegates the percentage of proceeds that will go to a selected charity. The values are like so, 0 = 0 percent, 1 = 100 percent.

donation_to ((optional))
:   The organization the proceeds go to.

meta ((optional, default is `{}`))
:   Meta data can be utilised by attaching a key/value pair to the marketplace product object.

pools ((optional, default is `global`))
:   Product pools that the product will be available in.

## Retrieve a product

#### Route

>`GET /marketplaces/{marketplace_id}/products/{product_id}`

```sh

curl -X GET \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/marketplaces/MP.../products/PR...?session_token=ST...' \

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "PR...",
    "marketplace_id": "MP...",
    "marketplace_status": "live",
    "pools": [
      "BMG"
    ],
    "status": "live",
    "state": "needs_analysis",
    "external_id": "13898339-000-000",
    "sku": "9997735",
    "name": "The Walking Dead 13: No Way Out (Paperback)",
    "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.",
    "image_urls": [
      "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-13-No-Way-Out-Paperback-P13482339.jpg"
    ],
    "currency": "USD",
    "price": 11.47,
    "condition": "new",
    "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
    "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
    "tags": [
      "Walking Dead",
      "Paperback"
    ],
    "category": [
      "Books & Media",
      "Books",
      "Fiction Books",
      "Comics and Graphic Novels"
    ],
    "manufacturer": "The Walking Dead",
    "isbn": "9766607063926",
    "meta": {
      "dte": "2015-03-24T00:11:22Z",
      "num": 43,
      "script": ""
    },
    "created": "2015-10-01T20:16:14.305Z",
    "updated": "2015-10-01T20:16:14.305Z"
  }
}

```

## Update a product

#### Route

>`PUT /marketplaces/{marketplace_id}/products/{product_id}`

```sh

curl -X PUT \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '{
  "name":"The Walking Dead 14: No Way Out (HardCover)",
  "status": "live",
  "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.",
  "price": "11.47",
  "manufacturer": "The Walking Dead",
  "isbn": "9781607063926",
  "sku": "7797736",
  "condition": "new",
  "external_id" : "13482340-000-000",
  "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
  "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
  "image_urls": "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-14-No-Way-Out-Paperback-P13482339.jpg",
  "category": [ "Books & Media", "Books", "Fiction Books", "Comics and Graphic Novels" ],
  "tags": ["Walking Dead", "Hardcover"],
  "meta": {
    "script": "",
    "num": 43,
    "dte": "2015-03-24T00:11:22Z"
  },
  "pools": "BMG"
}' 'http://ads-api.okanjo.com/marketplaces/MP.../products/PR...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "PR...",
    "marketplace_id": "MP...",
    "marketplace_status": "live",
    "pools": [
      "BMG"
    ],
    "status": "live",
    "state": "needs_analysis",
    "external_id": "13482340-000-000",
    "sku": "7797736",
    "name": "The Walking Dead 14: No Way Out (HardCover)",
    "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.",
    "image_urls": [
      "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-14-No-Way-Out-Paperback-P13482339.jpg"
    ],
    "currency": "USD",
    "price": 11.47,
    "condition": "new",
    "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
    "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
    "tags": [
      "Walking Dead",
      "Hardcover"
    ],
    "category": [
      "Books & Media",
      "Books",
      "Fiction Books",
      "Comics and Graphic Novels"
    ],
    "manufacturer": "The Walking Dead",
    "isbn": "9781607063926",
    "meta": {
      "dte": "2015-03-24T00:11:22Z",
      "num": 43,
      "script": ""
    },
    "created": "2015-09-30T21:40:40.111Z",
    "updated": "2015-10-01T15:40:37.473Z"
  }
}

```

#### Payload

status ((optional, default is live))
:   Allows the vendor to hide or show a product.

name ((optional))
:   the name of the product being created.

description ((optional))
:   A description of the product being created.

image_urls ((optional))
:   URL pointing to an image related to the product.

price ((optional))
:   Price of the product.

buy_url ((optional))
:   Link to the page containing details on the product.
  
external_id ((optional))
:   Vendor can add an id in which they identify the product by.

sku ((optional, string))
:   Vendor can add a SKU number associated with the product.

currency ((optional, default is `USD`))
:   Vendor can change the currency type to reflect price of product appropriately.

condition ((optional, default is `condition unspecified`))
:   Condition of the product.

inline_buy_url ((optional))
:   TODO

impression_url ((optional))
:   TODO

tags ((optional))
:   Tags are an integral part of the ads platform, by using tags, the product sense logic will be able to better match the vendors product with appropriate content.

category ((optional))
:   Categories your product can be apart of, this aids in product sense's ability to pair your product with the correct content.

manufacturer ((optional))
:   Name of the entity that fabricated the product.

upc ((optional))
:   UPC code.

isbn ((optional))
:   ISBN number.

sold_by ((optional))
:   Name of the seller.

donation_percent ((optional))
:   This delegates the percentage of proceeds that will go to a selected charity. The values are like so, 0 = 0 percent, 1 = 100 percent.

donation_to ((optional))
:   The organization the proceeds go to.

meta ((optional, default is `{}`))
:   Meta data can be utilised by attaching a key/value pair to the marketplace product object.

pools ((optional, default is `global`))
:   Product pools that the product will be available in.

## Delete a product

#### Route

>`DELETE /marketplaces/{marketplace_id}/products/{product_id}`

```sh

curl -X DELETE \
-H "Content-Type: application/json" \
-H "Cache-Control: no-cache" \
-d '' 'http://ads-api.okanjo.com/marketplaces/MP.../products/PR...?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": null
}

```
## List all products

#### Route

>`GET /marketplaces/{marketplace_id}/products`

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/marketplaces/MP.../products?session_token=ST...'

```
```js

{
  "statusCode": 200,
  "error": null,
  "data": [
    {
      "id": "PR...",
      "marketplace_id": "MP...",
      "marketplace_status": "live",
      "pools": [
        "DemoPool"
      ],
      "status": "live",
      "state": "needs_analysis",
      "external_id": "13482339-000-000",
      "sku": "7797735",
      "name": "The Walking Dead 14: No Way Out (Paperback)",
      "description": "The group&apos;s temporary respite from violence threatens to be shattered when a horde of zombies discovers their community.",
      "image_urls": [
        "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-14-No-Way-Out-Paperback-P13482339.jpg"
      ],
      "currency": "USD",
      "price": 11.47,
      "condition": "new",
      "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
      "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
      "tags": [
        "Walking Dead",
        "Paperback"
      ],
      "category": [
        "Books & Media",
        "Books",
        "Fiction Books",
        "Comics and Graphic Novels"
      ],
      "manufacturer": "The Walking Dead",
      "isbn": "9781607063926",
      "meta": {
        "dte": "2015-03-24T00:11:22Z",
        "num": 43,
        "script": ""
      },
      "created": "2015-09-30T21:40:40.111Z",
      "updated": "2015-09-30T21:40:40.111Z"
    }
  ]
}

```

#### Query

status ((optional))
:   TODO
external_id ((optional))
:   TODO
sku ((optional))
:   TODO

## Contextual products

Similar to filtering product, this feature takes in a URL and then goes to that page and scans its content. Once scanned, keywords are generated and products are searched based on that criteria. It can retrieve multiple products the same way filtering through products can.


#### Route

>`GET /products/sense`

#### Query 

pools ((optional))((default is `global`))
:   Pools are a grouping system in order to store products and pull them, you can pull from multiple pools or just a single one in order to better refine your search.

url ((optional))
:   Url That product match should access and scan content.

selectors ((optional, default is `p,title,meta[name="description"],meta[name="keywords"]`))
:   TODO

text ((optional, default is `false`))
:   If no url, product match can scan a block of text and generate keywords.

sold_by ((optional))
:   Vendor of the product

marketing_status ((optional, default is `live`))
:   TODO

marketplace_id ((optional))
:   marketplace id.

suboptimal ((optional, default is `false`))((boolean))
:   TODO



#### cUrl
Find products by contextual match using the cURL.

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/products/sense?key=YOUR_API_KEY&url=http://www.ew.com/article/2015/10/01/walking-dead-steven-yeun-glenn-maggie-season-6&take=1&pools[]=BMG'

```

#### Okanjo Nodejs SDK

Find products by contextual match using the Node.js SDK.

```js

// Okanjo namespace
var okanjo = require('okanjo');

// Create the client api instance
var adsAPI = new okanjo.clients.AdsClient({
    key: 'YOUR_API_KEY'
});

var contentToSense = {
    url: 'http://www.ew.com/article/2015/10/01/walking-dead-steven-yeun-glenn-maggie-season-6',
    pools: ['BMG']
};

//Pass in the id of the product you want to retrieve.
adsAPI.performProductSense().where(contentToSense).take(1).execute( function (err, res) {
  
    //Check if there is an error object present.
    if(err){
        throw err;
    }
    
    //this is where your product data resides.
    var product = res.data;
    
});


```

#### Okanjo PHP SDK

Find products by contextual match using the PHP SDK.

```php

require_once 'vendor/autoload.php';

//This grants you access and creates an instance of the Ads API needed to access routes.
$adsAPI = new Okanjo\Clients\Ads\Client(['key' => 'YOUR_API_KEY']);


$contentToSense = [
    'url' => 'http://www.ew.com/article/2015/10/01/walking-dead-steven-yeun-glenn-maggie-season-6',
    'pools' => ['BMG']
];

//$res will contain the response object based on the product id provided.
$res = $adsAPI->productSense()->where($contentToSense)->take(1)->execute();

//Check if there is an error object present.
if($res->error){
    throw new Exception($res->error);
}

//set a variable to the data object which contains your product.
$product = $res->data;
```

#### Example response

```js

{
  "statusCode": 200,
  "error": null,
  "data": [
    {
      "id": "PR2dBjA9ubuFnw8dgQm",
      "marketplace_id": "MP2dBThLmSy7VDm7kWL",
      "marketplace_status": "live",
      "pools": [
        "BMG"
      ],
      "external_id": "13482739-000-000",
      "sku": "7797745",
      "name": "The Walking Dead 15: A Way Out (Paperback)",
      "description": "The group&apos;s discovers a way out.",
      "image_urls": [
        "http://cdn.overstock.com/images/products/5752153/The-Walking-Dead-15-A-Way-Out-Paperback-P13482339.jpg"
      ],
      "currency": "USD",
      "price": 11.47,
      "condition": "new",
      "buy_url": "http://www.anrdoezrs.net/click-7666355-10906445?url=http%3A%2F%2Fwww.overstock.com%2F5752153%2Fproduct.html%3FTRACK%3Daffcjfeed%26CID%3D207442%26fp%3DF",
      "impression_url": "http://www.awltovhc.com/image-7666355-10906445",
      "tags": [
        "Walking Dead",
        "Paperback"
      ],
      "category": [
        "Books & Media",
        "Books",
        "Fiction Books",
        "Comics and Graphic Novels"
      ],
      "manufacturer": "The Walking Dead",
      "isbn": "9781612063926",
      "meta": {
        "dte": "2015-03-24T00:11:22Z",
        "num": 43,
        "script": ""
      },
      "created": "2015-10-01T16:08:00.621Z",
      "updated": "2015-10-02T15:45:06.59Z"
    }
  ],
  "numFound": 3
}

```

