
# Events

An Event resource is generated when something occurs on the Okanjo platform. Events can pass along greatly differing data
sets, but all will be centered around the event that took place (E.g. Data about a product being updated will be sent when
a `updated_product` event occurs. Data about these events are transmitted by webhook to a third party URL at their request.

# Objects

* [`Event`](Objects.html#Event) – Event object (transmitted to client)
* [`Event Subscription`](Objects.html#EventSubscription) - A subscription record for an event type to a URL

# Important Notes

If you have configured events, they will come from one of two IP addresses: `96.30.254.41` and `96.30.254.43`. These
addresses should not change, but if they do they will be reported here.

# Workflow Example

For this example, we're going to subscribe to the event that is triggered whenever a user uploads a product to Okanjo.

First, make sure you have your destination endpoint and URL in place. For this example I'm using
[Request Bin](http://requestb.in). This is important because Okanjo will test the URL you give it before letting you
subscribe to an event. Now that you're ready to subscribe to an event, send a POST request to `/events/subscribe` with the
`type` and `webhook_url` entity data:

```
type=added_product

webhook_url=http://requestb.in/1230vpw1
```


Okanjo will attempt to send a JSON-encoded POST request to the supplied `webhook_url` to test the validity:

```js
["This was a triumph","I'm making a note here:","HUGE SUCCESS"]
```


If that POST request returns a successful response code of 200, you will receive a "success" JSON response:

```js
{"type": "success"}
```


Now, whenever somebody adds a product to your marketplace, the system will send information about the event to
your webhook URL. The contents will look something like this, which will include the product information in the `data` section:

```js
{
  "id": "EVJyCMRfV7AEEg4zVMbA"
  "occurred": "2014-11-05 12:45:35",
  "type": "added_product",
  "data": {
    "id": "120553",
    "curated": null,
    "donation_perc": "15",
    "status": "1",
    "seller_store_id": "14",
    "brand_id": "1",
    "location_zip": "53202",
    "location_name": "Milwaukee",
    "location_state": "WI",
    "stock": "105",
    "category_id": "176",
    "cause_id": "35607",
    "is_local_pickup": "0",
    "is_free_shipping": "1",
    "thumbnail_media_id": "241021",
    "created": "2014-11-05 12:45:34",
    "published": "2014-11-05 12:45:34",
    "updated": "2014-11-05 12:45:34",
    "price": "50.00",
    "slug": "120553-half-life-2-supply-crate",
    "title": "Half-Life 2 Supply Crate",
    "description": "Break it open to see what's inside! Well, don't break it open, because then you can't return it.",
    "condition": "New",
    "is_vertical": "0",
    "current_bid": null,
    "auction_start": null,
    "auction_end": null,
    "auction_min_bid": null,
    "type": "0",
    "return_policy_id": "593",
    "is_available": "1",
    "deal_start": null,
    "deal_end": null,
    "promo_start": null,
    "promo_end": null,
    "deal_value": null,
    "dma_code": "617",
    "dimensions": {
      "Contents": {
        "Healthkit": {
          "price_modifier": "0"
        },
        "Ammo": {
          "price_modifier": "0"
        },
        "Energy": {
          "price_modifier": "0"
        }
      }
    },
    "variants": {
      "Contents=Healthkit": {
        "stock": "50"
      },
      "Contents=Ammo": {
        "stock": "35"
      },
      "Contents=Energy": {
        "stock": "20"
      }
    },
    "category": {
      "id": "176",
      "parent_id": "155",
      "port": "246",
      "starboard": "247",
      "depth": "3",
      "name": "Games",
      "parents": "4,155"
    },
    "cause": {
      "id": "35607",
      "status": "2",
      "name": "Mesa Community Action Network Incorporated",
      "local_name": "Mesa Community Action Network Incorporated (Mesa)",
      "city": "Mesa",
      "state": "AZ",
      "created": "2014-11-04 17:57:46",
      "updated": "2014-11-04 17:57:46",
      "store_id": "4940",
      "store_about": "MesaCAN serves, or facilitates services for, economically disadvantaged individuals and families and helps clients devise strategies for increased self sufficiency and reduced reliance on government services.",
      "store_website_url": null,
      "store_facebook_url": null,
      "store_twitter_url": null,
      "store_avatar_media_id": null,
      "store_banner_media_id": null,
      "store_okanjo_uri": null
    },
    "store": {
      "id": "14",
      "status": "1",
      "created": "2013-07-10 17:10:16",
      "updated": "2014-08-07 11:49:04",
      "type": "1",
      "name": "Edited Store Name",
      "about": "",
      "website_url": null,
      "facebook_url": "",
      "twitter_url": "",
      "avatar_media_id": "1420",
      "banner_media_id": "240914",
      "rating_avg": "4.40",
      "okanjo_uri": "bigwayne"
    },
    "shipping": null,
    "tags": {
      "4": {
        "id": "4",
        "name": "Electronics"
      },
      "54": {
        "id": "54",
        "name": "Games"
      },
      "63": {
        "id": "63",
        "name": "Videogames"
      }
    },
    "return_policy": {
      "id": "593",
      "store_id": "14",
      "name": "No tag backs",
      "policy": "You break it, you bought it."
    },
    "media": {
      "1420": {
        "original": "https:\/\/dj01gpsbn30ii.cloudfront.net\/prod_1420_desktop_original.jpg_gmxl.jpg",
        "avatar_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/prod_1420_desktop_avatar.jpg_uz3p.jpg",
        "avatar_desktop_width": null,
        "avatar_desktop_height": null,
        "avatar_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=1420&amp;format=mobile_retina&amp;size=avatar",
        "avatar_mobile_retina_width": null,
        "avatar_mobile_retina_height": null
      },
      "240914": {
        "original": "https:\/\/dj01gpsbn30ii.cloudfront.net\/dev_s4zws_240914_desktop_original.png",
        "banner_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/dev_ro1wl_240914_desktop_banner.png",
        "banner_desktop_width": "1280",
        "banner_desktop_height": "400",
        "banner_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=240914&amp;format=mobile_retina&amp;size=banner",
        "banner_mobile_retina_width": null,
        "banner_mobile_retina_height": null
      },
      "241021": {
        "original": "https:\/\/dj01gpsbn30ii.cloudfront.net\/dev_8glko_241021_desktop_original.jpg",
        "listing_desktop": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=desktop&amp;size=listing",
        "listing_desktop_width": null,
        "listing_desktop_height": null,
        "detail_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/dev_11p9bp_241021_desktop_detail.jpg",
        "detail_desktop_width": "1074",
        "detail_desktop_height": "808",
        "thumbnail_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/dev_5jz5c_241021_desktop_thumbnail.jpg",
        "thumbnail_desktop_width": "130",
        "thumbnail_desktop_height": "130",
        "cart_desktop": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=desktop&amp;size=cart",
        "cart_desktop_width": null,
        "cart_desktop_height": null,
        "gallery_desktop": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=desktop&amp;size=gallery",
        "gallery_desktop_width": null,
        "gallery_desktop_height": null,
        "listing_fixed_desktop": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=desktop&amp;size=listing_fixed",
        "listing_fixed_desktop_width": null,
        "listing_fixed_desktop_height": null,
        "listing_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=listing",
        "listing_mobile_retina_width": null,
        "listing_mobile_retina_height": null,
        "detail_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=detail",
        "detail_mobile_retina_width": null,
        "detail_mobile_retina_height": null,
        "thumbnail_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=thumbnail",
        "thumbnail_mobile_retina_width": null,
        "thumbnail_mobile_retina_height": null,
        "cart_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=cart",
        "cart_mobile_retina_width": null,
        "cart_mobile_retina_height": null,
        "gallery_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=gallery",
        "gallery_mobile_retina_width": null,
        "gallery_mobile_retina_height": null,
        "listing_fixed_mobile_retina": "https:\/\/dev-api.okanjo.com\/media\/generate?id=241021&amp;format=mobile_retina&amp;size=listing_fixed",
        "listing_fixed_mobile_retina_width": null,
        "listing_fixed_mobile_retina_height": null
      }
    },
    "meta": [

    ]
  }
}
```

If you did it right, well done. Now, while you trust Okanjo, you want to verify it as well.
If you send a GET request to `events/<event_id>`, where `<event_id>` in this case is the ID from above, "EVJyCMRfV7AEEg4zVMbA".
If done properly, the response you get will exactly match the data you received.


# Event Types

This list will expand regularly. Use these for values of `type` when subscribing to events. The data that will be returned
is listed under each event type.

`added_product`
:   [`Product`](Objects.html#Product) - When a product is added.
`confirmed_order`
:   [`Order`](Objects.html#Order) - When an order is made/confirmed.
`disbursement_sent`
:   Occurs when Okanjo debits money into an account.
`updated_order`
:   [`Order`](Objects.html#Order) - When an order is updated (E.g. Buyer's payment came through).
`updated_order_item`
:   [`Order Item`](Objects.html#OrderItem) - When an item on an order is updated (E.g. Seller marks item as shipped).

# Routes

Here are the list of API routes to interact with events.

## POST /events/subscribe

Resource. Subscribes a given event type to a supplied webhook URL.

### Entity NVP Parameters

`type`
:   `string` The type of event to subscribe to.
`webhook_url`
:   `string` The URL (including scheme)

## GET /events/{id}

Collection. Gets the event and its details that was triggered at that

### Query Parameters

None.

### Returns

[`Event`](Objects.html#Event) Objects.

### Errors

**404 Not Found**
:   `Event not found.`  Occurs when the event cannot be found.


## GET /brands/{key or id}

Resource. Gets an individual brand given its associated API key or unique identifier. **May require administrative privileges**.

Only brands associated with the current request key or user token are accessible.

When using an api key, The response will return 302 Found to the canonical /brands/{id} URI, fully signed and ready to go.

### Query Parameters

None.

### Returns

[`Brand`](Objects.html#Brand) configuration. e.g.

```js
{
    "template_prefix": "ok",
    ...
}
```


#### Errors

**302 Found**
:   `See canonical URI.` Occurs on API key lookup, redirects to permanent uri.
**401 Unauthorized**
:   `Insufficient privileges for this operation.` Occurs when the request requires different privileges.
**404 Not Found**
:   `Brand not found.` Occurs when the given brand query was not found.
**500 Internal Server Error**
:   `Unable to handle request.`  Occurs when the request failed to be fulfilled.
