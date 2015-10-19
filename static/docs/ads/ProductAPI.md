# Product API

# Introduction

The Okanjo Product API provides RESTful API routes to access products from the Okanjo Ads platform. The Product API serves as the
point of integration with developer applications.

All Product API routes can be accessed from the following API endpoint:
 
> `https://ads-api.okanjo.com`


# Authentication

In order the use the Product API, you will need to obtain an Okanjo Ads API key. To obtain a new Okanjo API key, please
contact Okanjo's customer support team.

To authenticate, include your API key as the `key` query parameter on requests.


# Pagination

Collection routes accept pagination parameters to facilitate browse-like functionality. 

skip ((optional, default is `0`))
:   Skips the given number of resources.
take ((optional, default is `25`))
:   Returns the given number of resources. Equivalent to page size.


## Retrieve products

Products are retrieved by using optional query parameters to filter by specific criteria. 
Each parameter will narrow the scope of products returned. By default, if no parameters are given, all products will be returned.

#### Route

> `GET /products`

#### Query Parameters

q ((optional))
:   Query search string. E.g. `skyline print`
marketplace_status ((optional, default is `live`))
:   Limits products to the given environment. Either `testing` or `live`.
marketplace_id ((optional))
:   Limits products to the given marketplace id string.
external_id ((optional))
:   Returns products that have the given external id.
sku ((optional))
:   Returns products that have the given sku.
sold_by ((optional))
:   Returns products that have the given organization name.
min_price ((optional))
:   Returns products that cost at least the given decimal amount. 
max_price ((optional))
:   Returns products that cost no more than the given decimal amount.
condition ((optional))
:   Returns products with the given condition. One of `new`, `used`, `refurbished` or `unspecified`.
manufacturer ((optional))
:   Returns products that have the given manufacturer name.
upc ((optional))
:   Returns products that have the given UPC/EAN.
isbn ((optional))
:   Returns products that have the given ISBN.
tags ((optional))
:   An array of tag names. Returned products must contain all given tags. E.g. `["Blue", "Shoes"]`
category ((optional))
:   An array of hierarchical category names products must be in. E.g. `["Home", "Office", "Furniture"]` 
donation_to ((optional))
:   Returns products that donate to the given organization name.
min_donation_percent ((optional))
:   Returns products that donate no less than the given percentage (a decimal between `0` and `1`)
max_dontation_percent ((optional))
:   Returns products that donate no more than the given percentage (a decimal between `0` and `1`)
suboptimal ((optional, default is `false`))
:   Include products that do not have sufficient content, such as images, titles, descriptions or keywords.
pools ((optional, default is `global`))
:   Limits products that are contained in the given array of pool names. Each pool given will increase the amount of potential products returned.
  
> Note: When specifying pools, if a custom pool name is given, `global` pool products will no longer return. To include products from both the global pool and a custom pool, include `global` in your pool set.  

#### cURL Example

Example using the cURL on the command-line to retrieve products. 

> Array values should be given like so: `tags[]=blue&tags[]=shoes`. Remember to encode the `[` and `]` characters with `%5B` and `%5D`, respectively.

```sh

curl -X GET \
  -H "Cache-Control: no-cache" \
  'http://ads-api.okanjo.com/products?key=YOUR_API_KEY&take=1&pools[]=PUBLISHER_POOL_HERE'

```

#### Node.js Example

Here's an equivalent example using the [Okanjo Node.js SDK](/node-sdk).

```js

var okanjo = require('okanjo');

// Create the client api instance
var api = new okanjo.clients.AdsClient({
    key: 'YOUR_API_KEY'
});

// Search for products that match the given criteria
api.searchProducts()
    .where({ pools: ['PUBLISHER_POOL_HERE'] })
    .take(1)
    .execute(function (err, res) {
        if (err) {
            // If there was a communication error, err will be defined.
            // E.g. internet connectivity issues
            throw err;
        } else if (res.error) {
            // The API rejected the request. 
            // Check res.error, res.message, and res.validation for more info.
            throw new Error(res.message);
        } else {
            // Array of returned products 
            var products = res.data;
        }
    });

```

#### PHP Example

Here's an equivalent example using the [Okanjo PHP SDK](/php-sdk).

```php

// Create the client api instance
$api = new Okanjo\Clients\Ads\Client([
    'key' => 'YOUR_API_KEY'
]);

// Search for products that match the given criteria
$res = $api->searchProducts()
    ->where([ 'pools' => ['PUBLISHER_POOL_HERE'] ])
    ->take(1)
    ->execute();

// If there was an error, the error property will be set
if ($res->error) {
    throw new Exception($res->message);
}

// Array of returned products
$products = $res->data;

```

#### Example response

Here's the response to the requests in the above examples. 

> Note: when available, the `numFound` property will be included in the response to help facilitate pagination.

```js

{
  "statusCode": 200,
  "error": null,
  "data": {
      "id": "PRODUCT_ID",
      "marketplace_id": "MARKETPLACE_ID",
      "marketplace_status": "live",
      "pools": [
        "PUBLISHER_POOL_HERE"
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
      "impressions": 0,
      "interactions": 0,
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
        "num": 42,
        "str": ""
      },
      "created": "2015-10-01T16:08:00.621Z",
      "updated": "2015-10-02T15:45:06.59Z"
  }
  
  "numFound": 3
}

```


## Retrieve a product

A single product may be retrieved by its unique identifier. If the product does not exist, a `404` response code will be returned.


#### Route

> `GET /products/PRODUCT_ID`

#### cURL Example

Example using the cURL on the command-line to retrieve a single product. 

```sh

curl -X GET \
  -H "Cache-Control: no-cache" \
  'https://ads-api.okanjo.com/products/PRODUCT_ID?key=YOUR_API_KEY'

```

#### Node.js Example

Here's an equivalent example using the [Okanjo Node.js SDK](/node-sdk).

```js

var okanjo = require('okanjo');

// Create the client api instance
var api = new okanjo.clients.AdsClient({
    key: 'YOUR_API_KEY'
});

// Get a product by its id
api.getPublicProductById('PRODUCT_ID')
    .execute(function (err, res) {
        if (err) {
              // If there was a communication error, err will be defined.
              // E.g. internet connectivity issues
              throw err;
          } else if (res.error) {
              // The API rejected the request. 
              // Check res.error, res.message, and res.validation for more info.
              throw new Error(res.message);
          } else {
              // The returned product object 
              var product = res.data;
          }
    });
    
```

#### PHP Example

Here's an equivalent example using the [Okanjo PHP SDK](/php-sdk).

```php

// Create the client api instance
$api = new Okanjo\Clients\Ads\Client([
    'key' => 'YOUR_API_KEY'
]);

// Get a product by its id
$res = $api->getPublicProductById('PRODUCT_ID')->execute();

// If there was an error, the error property will be set
if ($res->error) {
    throw new Exception($res->message);
}

// The returned product object 
$product = $res->data;

```
#### Example response

Here's the response to the requests in the above examples. 

```js
    
{
  "statusCode": 200,
  "error": null,
  "data": {
    "id": "PRODUCT_ID",
    "marketplace_id": "MARKETPLACE_ID",
    "marketplace_status": "live",
    "pools": [
      "PUBLISHER_POOL_HERE"
    ],
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
    "impressions": 0,
    "interactions": 0,
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
      "num": 42,
      "str": ""
    },
    "created": "2015-10-01T20:16:14.305Z",
    "updated": "2015-10-02T15:45:07.241Z"
  }
}

```

