# Product API

# Introduction

TODO

# Authentication

The scope of authentication required changes based on the resource you are accessing. Some resources require multiple Parameters, while some require just one.

TODO

# Pagination

skip ((optional))((default is `0`))
:   ToDo
take ((optional))((default is `25`))
:   ToDo


## Retrieve products

Products are retrieved by using optional query parameters to filter by specific criteria. Each parameter will narrow the scope of products returned. By default, if no parameters are given, all products will be returned.

#### Route

>`GET /products`

#### Query Parameters


q ((optional))
:   TODO

marketplace_status ((optional, default is `live`))
:   TODO

marketplace_id ((optional))
:   Unique identifier of desired marketplace.

external_id ((optional))
:   An external id relating to the product on the vendors end.

sku ((optional))
:   Sku number of the product.

sold_by ((optional))
:   Company name selling the product.

min_price ((optional))
:   Minimum price.

max_price ((optional))
:   Maximum price

condition ((optional))
:   Condition of the product

manufacturer ((optional))
:   The manufacturer name of on the product.

upc ((optional))
:   UPC code.

isbn ((optional))
:   ISBN number if applicable.

tags ((optional))
:   TODO

category ((optional))
:   Category the product belongs too.

donation_to ((optional))
:   TODO

min_donation_percent ((optional))
:   Minimum donation percentage.

max_dontation_percent ((optional))
:   Maximum donation percentage.

suboptimal ((optional, default is `false`))((boolean))
:   TODO

pools ((optional, default is `global`))
:   Pools that the product will be able to be found in.


#### cURL

Filter through products using cURL.

```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'http://ads-api.okanjo.com/products?key=YOUR_API_KEY&take=1&pools[]=PUBLISHER_POOL_HERE'

```

#### Okanjo Nodejs SDK
Filter through products using the Node.js SDK.

```js

// Okanjo namespace
var okanjo = require('okanjo');

// Create the client api instance
var adsAPI = new okanjo.clients.AdsClient({
    key: 'YOUR_API_KEY'
});

//Pass in the id of the product you want to retrieve.
adsAPI.searchProducts().where({pools:['PUBLISHER_POOL_HERE']}).take(1).execute( function (err, res) {
  
    //Check if there is an error object present.
    if(err){
        throw err;
    }
    
    //this is where your product data resides.
    var product = res.data;

});

```

#### Okanjo PHP SDK

Filter through products using the PHP SDK.

```php

require_once 'vendor/autoload.php';

//This grants you access and creates an instance of the Ads API needed to access routes.
$adsAPI = new Okanjo\Clients\Ads\Client(['key' => 'YOUR_API_KEY']);

//$res will contain the response object filled with products that match your query
$res = $adsAPI->searchProducts()->where(['pools' => ['PUBLISHER_POOL_HERE']])->take(1)->execute();

//Check if there is an error object present.
if($res->error){
    throw new Exception($res->error);
}

//set a variable to the data object which contains your product.
$product = $res->data;
```

#### Example response

This response can return multiple products matching your query. In this case "take" was set to 1, if you look at the object attribute called "numFound", it shows that a total of 3 could have been retrieved.

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
        "num": 43,
        "script": ""
      },
      "created": "2015-10-01T16:08:00.621Z",
      "updated": "2015-10-02T15:45:06.59Z"
  }
  
  "numFound": 3
}

```



## Retrieve a product

A valid product id is required in order to use this feature, once the product id is sent, the API will return a matching product object.

#### Route

>`GET /products/{product_id}`

#### cURL
Retrieve a product by id using cURL.
```sh

curl -X GET \
-H "Cache-Control: no-cache" \
'https://ads-api.okanjo.com/products/PRODUCT_ID?key=YOUR_API_KEY'

```
#### Okanjo Nodejs SDK
Retrieve a product by id using the Node.js SDK.
```js
// Okanjo namespace
var okanjo = require('okanjo');

// Create the client api instance
var adsAPI = new okanjo.clients.AdsClient({
    key: 'YOUR_API_KEY'
});

//Pass in the id of the product you want to retrieve.
adsAPI.getPublicProductById('PRODUCT_ID').execute( function (err, res) {
  
    //Check if there is an error object present.
    if(err){
        throw err;
    }
    
    //this is where your product data resides.
    var product = res.data;

});
```
#### Okanjo PHP SDK
Retrieve a product by id using the PHP SDK.

```php

require_once 'vendor/autoload.php';

//This grants you access and creates an instance of the Ads API needed to access routes.
$adsAPI = new Okanjo\Clients\Ads\Client(['key' => 'YOUR_API_KEY']);

//$res will contain the response object based on the product id provided.
$res = $adsAPI->getPublicProductById('PRODUCT_ID')->execute();

//Check if there is an error object present.
if($res->error){
    throw new Exception($res->error);
}

//set a variable to the data object which contains your product.
$product = $res->data;
```
#### Example response

The response contains an object containing all the product information of the product associated with the provided id.

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
      "num": 43,
      "script": ""
    },
    "created": "2015-10-01T20:16:14.305Z",
    "updated": "2015-10-02T15:45:07.241Z"
  }
}

```

