
# Events (BETA)

An Event resource is generated when something occurs on the Okanjo platform. Events can pass along greatly differing data
sets, but all will be centered around the event that took place. For example, an order that was updated will be sent when
an `order.updated` event occurs). Data about these events are transmitted by webhook to a third party URL at their request.

> Note: Events and Webhooks are currently in beta. Design may change in the future and not all events are available for webhooks. Please let us know your experience using Okanjo Events.

> Note: Webhooks are only available to marketplaces. In the future, we will make webhooks available to users and stores.

# Objects

* [`Event`](Objects.html#Event) – Event object (transmitted to client)
* [`Event Subscription`](Objects.html#EventSubscription) - A subscription record for an event type to a URL

# Event Types

For a list of available event types, see [`Event Types`](Constants.html#EventType).


## Workflow Example

For this example, we're going to subscribe to the event that is triggered whenever a user uploads a product to Okanjo.

First, make sure you have your destination endpoint and URL in place. For this example we're using
[Request Bin](http://requestb.in), so we can see the POST data we're sent. This is important because
Okanjo will test the URL you give it before letting you subscribe to an event. Now that you're ready to
subscribe to an event, send a POST request to `/events/subscribe` with the `type` and `webhook_url` entity data:

```
type=product.created
webhook_url=http://requestb.in/u2nxcmu2
```

If this was done properly, you will receive the default [`Success`](Globals.html#Default Response Object) object:

```js
{
  "type": "success"
}
```

Now, whenever a product is added to your marketplace, the Okanjo will send information about the event to
your webhook URL. The contents will look something like this, which will include the product information in the `data` section:

```js
{
  "id": "EV3KtarTnr6R1hJ6jjoq",
  "occurred": "2014-11-06 14:39:43",
  "type": "product.created",
  "data": {
    "id": "141751",
    "curated": null,
    "donation_perc": "15",
    "status": "1",
    "seller_store_id": "5164",
    "brand_id": "1",
    "location_zip": "53022",
    "location_name": "Germantown",
    "location_state": "WI",
    "stock": null,
    "category_id": "265",
    "cause_id": "35882",
    "is_local_pickup": "0",
    "is_free_shipping": "1",
    "thumbnail_media_id": "281789",
    "created": "2014-11-06 14:39:43",
    "published": "2014-11-06 14:39:43",
    "updated": "2014-11-06 14:39:43",
    "price": "5.00",
    "slug": "141751-half-life-2-supply-crate",
    "title": "Half-Life 2 Supply Crate",
    "description": "This is a supply crate from Half-Life. Break it open to see what's inside!",
    "condition": "New",
    "is_vertical": "0",
    "current_bid": null,
    "auction_start": null,
    "auction_end": null,
    "auction_min_bid": null,
    "type": "0",
    "return_policy_id": "1",
    "is_available": "1",
    "deal_start": null,
    "deal_end": null,
    "promo_start": null,
    "promo_end": null,
    "deal_value": null,
    "dma_code": "617",
    "dimensions": {
      "Contents": {
        "Health": {
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
      "Contents=Health": {
        "stock": ""
      },
      "Contents=Ammo": {
        "stock": ""
      },
      "Contents=Energy": {
        "stock": ""
      }
    },
    "category": {
      "id": "265",
      "parent_id": "238",
      "port": "300",
      "starboard": "301",
      "depth": "3",
      "name": "Games",
      "parents": "5,238"
    },
    "cause": {
      "id": "35882",
      "status": "2",
      "name": "The Breast Cancer Society Inc",
      "local_name": "The Breast Cancer Society Inc (Mesa)",
      "city": "Mesa",
      "state": "AZ",
      "created": "2014-08-01 08:56:47",
      "updated": "2014-08-01 08:56:47",
      "store_id": "5200",
      "store_about": "The guiding mission of The Breast Cancer Society, Inc. (The BCS) is to provide relief to those who suffer from the effects of breast cancer now, as well as to work cooperatively with and give support to other personnel, individuals and organizations that share in the goal of helping cancer patients, the critically ill, and the impoverished. This is done through such means as education, direct assistance, financial aid, and the providing of supplies and care-giving products, and referral services. Additionally, The BCS assist in the eradication of breast cancer through education and the support of breast cancer research.",
      "store_website_url": null,
      "store_facebook_url": null,
      "store_twitter_url": null,
      "store_avatar_media_id": null,
      "store_banner_media_id": null,
      "store_okanjo_uri": null
    },
    "store": {
      "id": "5164",
      "status": "1",
      "created": "2014-05-12 16:38:15",
      "updated": "2014-05-12 16:38:15",
      "type": "1",
      "name": "waynefsmith",
      "about": null,
      "website_url": null,
      "facebook_url": null,
      "twitter_url": null,
      "avatar_media_id": null,
      "banner_media_id": null,
      "rating_avg": null,
      "okanjo_uri": null
    },
    "shipping": null,
    "tags": {
      "5": {
        "id": "5",
        "name": "Entertainment"
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
      "id": "1",
      "store_id": "0",
      "name": "No Returns",
      "policy": "Returns not accepted"
    },
    "media": {
      "281789": {
        "original": "https:\/\/dj01gpsbn30ii.cloudfront.net\/sandbox_9ii4h_281789_desktop_original.jpg",
        "cart_desktop": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=desktop&amp;size=cart",
        "cart_desktop_width": null,
        "cart_desktop_height": null,
        "cart_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=cart",
        "cart_mobile_retina_width": null,
        "cart_mobile_retina_height": null,
        "detail_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/sandbox_l7j1q_281789_desktop_detail.jpg",
        "detail_desktop_width": "1074",
        "detail_desktop_height": "808",
        "detail_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=detail",
        "detail_mobile_retina_width": null,
        "detail_mobile_retina_height": null,
        "gallery_desktop": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=desktop&amp;size=gallery",
        "gallery_desktop_width": null,
        "gallery_desktop_height": null,
        "gallery_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=gallery",
        "gallery_mobile_retina_width": null,
        "gallery_mobile_retina_height": null,
        "listing_desktop": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=desktop&amp;size=listing",
        "listing_desktop_width": null,
        "listing_desktop_height": null,
        "listing_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=listing",
        "listing_mobile_retina_width": null,
        "listing_mobile_retina_height": null,
        "listing_fixed_desktop": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=desktop&amp;size=listing_fixed",
        "listing_fixed_desktop_width": null,
        "listing_fixed_desktop_height": null,
        "listing_fixed_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=listing_fixed",
        "listing_fixed_mobile_retina_width": null,
        "listing_fixed_mobile_retina_height": null,
        "thumbnail_desktop": "https:\/\/dj01gpsbn30ii.cloudfront.net\/sandbox_b67g0_281789_desktop_thumbnail.jpg",
        "thumbnail_desktop_width": "130",
        "thumbnail_desktop_height": "130",
        "thumbnail_mobile_retina": "https:\/\/sandbox-api.okanjo.com\/media\/generate?id=281789&amp;format=mobile_retina&amp;size=thumbnail",
        "thumbnail_mobile_retina_width": null,
        "thumbnail_mobile_retina_height": null
      }
    },
    "meta": [

    ]
  }
}
```

## Security Considerations

While you can process the event as-is, our security conscientious folks will want to verify
that the event was really sent from Okanjo. To do so, send a GET request to `events/<event_id>`, where `<event_id>`
in this case is the ID from above, `EV3KtarTnr6R1hJ6jjoq`. If done properly, the response you get will exactly match
the data you received via webhook.

Webhook requests should originate from one of following IP addresses:

 * `96.30.254.41`
 * `96.30.254.43`

These addresses should not change, but if they do they will be reported here.

## Node.js Example Listener

We've created a couple of Node.js webhook listeners that you may use as a starting point for implementing webhooks on your platform.

 * [Basic Example](https://github.com/Okanjo/okanjo-nodejs/blob/master/examples/webhooks.js)
 * [Trust but Verify Example](https://github.com/Okanjo/okanjo-nodejs/blob/master/examples/webhooks-verify.js)

# Routes

Here are the list of API routes to interact with events.

## GET /events/{id}

Resource. Gets the event and associated data. A duplicate of what is sent by webhook.

### Query Parameters

`embed`
:   `csv` When given, includes the additional linked resources. Accepts: `notifications`.

### Returns

[`Event`](Objects.html#Event) Objects.

#### Errors

**404 Not Found**
:   `Event not found.`  Occurs when the event cannot be found.


## GET /events/subscriptions

Collection. Gets all active subscriptions.

### Query Parameters

None.

### Returns

Array of [`Event Subscription`](Objects.html#EventSubscription) objects.

#### Errors

None.


## POST /events/subscribe

Controller. Subscribes a given event type to a supplied webhook URL.

### Entity NVP Parameters

Both of these parameters are mandatory.

`type`
:   `string` The type of event to subscribe to.
`webhook_url`
:   `string` The URL (including scheme).

> Note:  You may use `*` to subscribe to all available events. This functionality may be changed or expanded in the future.

### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

#### Errors

**400 Bad Request**
:   `Require {field}.`  Occurs when you're missing a necessary NVP parameter.
:   `Invalid field {field}.`  Occurs when you have an invalid `type` field or Okanjo failed to POST to the supplied `webhook_url`, or if it was malformed.
**409 Conflict**
:   `Conflict with Event Subscription`  Occurs when trying to subscribe to an event `type` with the same `webhook_url`.
**500 Internal Server Error**
:   `Unable to handle request.`  Occurs when there's a system failure while attempting to subscribe to an event.


## POST /events/unsubscribe

Resource. Subscribes a given event type to a supplied webhook URL.

### Entity NVP Parameters

Both of these parameters are mandatory.

`type`
:   `string` The type of event to subscribe to.
`webhook_url`
:   `string` The URL (including scheme).

### Returns

Generic [`Success`](Globals.html#Default Response Object) object.

#### Errors

**400 Bad Request**
:   `Require {field}.`  Occurs when you're missing a necessary NVP parameter.
:   `Invalid field {field}.`  Occurs when you have an invalid `type` field or malformed `webhook_url`.
**404 Not Found**
:   `Event Subscription not found.`  Occurs when the event cannot be found.
**500 Internal Server Error**
:   `Unable to handle request.`  Occurs when there's a system failure while attempting to subscribe to an event.
