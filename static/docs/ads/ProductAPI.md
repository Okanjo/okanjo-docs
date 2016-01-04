# Product API

The Okanjo Product API provides RESTful API routes to access products from the Okanjo Ads platform. The Product API serves as the
point of integration with developer applications.

All Product API routes can be accessed from the following Ads API endpoint:
 
> `https://ads-api.okanjo.com`

Responses are returned in JSON (`application/json; charset=utf-8`). 


> Keep it simple! Okanjo's [PHP](/php-sdk) and [Node.js](/node-sdk) SDKs provide easy integration with the Product API. 


# Authentication

In order the use the Product API, you will need to obtain an Okanjo Ads API key. To obtain an API key, please
contact Okanjo's customer support team.

To authenticate, you can include your API key two ways. 

1. In the query, as the `key` parameter.
2. In the `Authorization` header, using basic HTTP authentication where the username is your API key and password is empty.


# Pagination

Collection routes accept pagination parameters to facilitate browse-like functionality. 

skip ((optional, default is `0`))
:   Skips the given number of resources.
take ((optional, default is `25`))
:   Returns the given number of resources. Equivalent to page size.


# JSONP

The Product API supports JSONP, useful for on-page website integrations. Provide a `callback` query parameter to
have the response returned as a JavaScript (`text/javascript; charset=utf-8`). 


For example:

> `GET /products?callback=myCallback`

```js
/**/myCallback({"statusCode":200,"error":null,"data":[ ... ]});
```

The response object will be passed as a parameter to the callback function given.


# Product Listings

## The Product object

The product object represents an product listing available for sale. The listing itself does
not contain enough information to make a full transaction, rather contains sufficient information
to represent the product.

At a minimum, all products will have: `id`, `name`, `description`, `price`, `image_urls` and `buy_url`. All other attributes are
optional.

#### Attributes

id ((string))
:   Unique Identifier. Prefixed with `PR`.
marketplace_id ((string))
:   The unique identifier of the marketplace the product belongs to. Prefixed with `MP`.
marketplace_status ((string))
:   The environment status of the product's marketplace. Either `testing` or `live`.
pools ((array of strings))
:   The list of pool names in which the product was placed.
status ((string))
:   The status of the product. Either `testing` or `live`.
state ((string))
:   The state of the product. One of `ok`, `needs_analysis`, or `needs_indexing`. The product will progressively change state when created or updated. 
external_id ((string))
:   Vendor given identifier field, useful for correlating the product listing with an external system for synchronization or other integrations.
sku ((string))
:   Vendor given stock keeping unit.
name ((required))((string))
:   The name of the product.
description ((required))((string))
:   The description of the product.
image_urls ((required))((array of strings))
:   The list of image URLs. The first image in the list will be used as the listing image.
currency ((string))
:   [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency designator. Default is `USD`.
price ((required))((number))
:   The base decimal cost to purchase the product, excluding shipping and up-charges.
condition ((string))
:   The condition of the product. One of `new`, `used`, `refurbished`, or `unspecified`.
buy_url ((required))((string))
:   The URL in which to the product can be purchased. 
inline_buy_url ((string))
:   The URL in which the ProductMatch will use to present a native-buy experience. 
impression_url ((string))
:   The vendor-given URL for an impression pixel, placed on ProductMatch listings.
impressions ((number))
:   The total number of impressions the product has received since creation.
interactions ((number))
:   The total number of interactions the product has received since creation.
tags ((array of strings))
:   The list of keywords or phrases attributions. 
category ((array of strings))
:   The hierarchical list of category names the product belongs under. For example, `Home > Office > Furniture` would be represented as `["Home", "Office", "Furniture"]`.
manufacturer ((string))
:   The name of the organization that makes the product.
upc ((string))
:   The UPC/EAN given to the product.
isbn ((string))
:   The ISBN given to the product.
sold_by ((string))
:   The name of the organization offering the product for sale.
donation_percent ((number))
:   The percentage of the earnings that will be donated to the `donation_to` organization. Represented as a decimal between `0` and `1`.
donation_to ((string))
:   The name of the organization benefiting from the sale of the product.
meta ((object))
:   Vendor given key-value metadata properties. Accepts strings, [dates](https://en.wikipedia.org/wiki/ISO_8601), numbers, and booleans.


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
:   Returns products that donate no less than the given percentage (a decimal between `0` and `1`.)
max_dontation_percent ((optional))
:   Returns products that donate no more than the given percentage (a decimal between `0` and `1`.)
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
            throw new Error(res.message || res.error);
        } else {
            // Array of returned products 
            var products = res.data;
            
            // Total number of matching records found
            var numFound = res.numFound;
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

try {
    // Search for products that match the given criteria
    $res = $api->searchProducts()
        ->where([ 'pools' => ['PUBLISHER_POOL_HERE'] ])
        ->take(1)
        ->execute();
    
    // If the API rejected the request, the error property will be defined. 
    if ($res->error) {
        // Check res.error, res.message, and res.validation for more info.
        throw new Exception($res->message ? $res->message : $res->error);
    }
    
    // Array of returned products
    $products = $res->data;
    
    // Total number of matching records found
    $numFound = $res->numFound;
} catch (Exception $e) {
    // If there was a communication error, an exception will throw.
    // E.g. internet connectivity issues
    throw $e;
}
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
              throw new Error(res.message || res.error);
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

try {
    // Get a product by its id
    $res = $api->getPublicProductById('PRODUCT_ID')->execute();
    
    // If the API rejected the request, the error property will be defined. 
    if ($res->error) {
        // Check res.error, res.message, and res.validation for more info.
        throw new Exception($res->message ? $res->message : $res->error);
    }
    
    // The returned product object 
    $product = $res->data;
} catch (Exception $e) {
    // If there was a communication error, an exception will throw.
    // E.g. internet connectivity issues
    throw $e;
}

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