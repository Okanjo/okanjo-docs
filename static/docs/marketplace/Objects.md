# Objects

The following are objects returned by API.


## Address

A physical location for various purposes, such as shipping, billing, store locations, sales tax nexus, etc.

`id`
:   `int`  The unique ID of the address.
`type`
:   `string (enum)`  The type of the address. See [`AddressType`](Constants.html#AddressType].
`first_name`
:   `string (255)`  Addressee’s first name.
`last_name`
:   `string (255)`  Addressee’s last name.
`address_1`
:   `string (255)`  Street address.
`address_2`
:   `string (255)` Nullable. Optional, Apt, Bldg, Unit, etc.
`city`
:   `string (255)`  Locality (e.g. Milwaukee.)
`state`
:   `string (2)`  State code (e.g. WI.)
`zip`
:   `string (10)`  Postal code. (e.g. 53202.)
`country`
:   `string (2)`  Country code (e.g. US.)
`phone`
:   `string (20)`  Addressee’s phone number.


## BankAccount

Represents a tokenized [Balanced Payments™](http://balancedpayments.com) bank account.

`uri`
:   `int`  Unique Balanced URI of the bank account.
`nickname`
:   `string`  The nickname of the bank account.
`info`
:   [`BankAccountInfo`](Objects.html#BankAccountInfo) Nullable. The underwriting information used for compliance with US financial laws. Required if to be used for payouts.


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


## Bid

A bid placed on an auction-type product.

`id`
:   `int`  The unique ID of the bid.
`status`
:   `int`  The status of the bid. One of: See [`BidStatus`](Constants.html#BidStatus).
`bidder_name`
:   `string (32)`  The name of the bidder. Anonymous except if the logged-in user matches bidder.
`placed`
:   `date time`  When the bid was placed.
`bid`
:   `decimal`  The amount the bid was placed for.


## Brand

Brands are currently a key-value store of configuration properties that apply to the brand.

> *Note: The format of this object may change in the future, as we will be implementing public/private key sets*

`{name}`
:   `string` Key-value pairs


## Card

Represents a tokenized [Balanced Payments™](http://balancedpayments.com) payment card.

`uri`
:   `string`  The unique Balanced URI for the card.
`nickname`
:   `string`  The display name for the card. E.g. Visa x4002.
`brand`
:   `string`  The brand of the card issuer. E.g. Visa, MasterCard, Discover, etc...
`last_four`
:   `string`  The last four digits of the card number.


## Category

Categories are used to create a hierarchical structure (taxonomy) for organizing products.

`name`
:   `string (255)` Name of the category.
`id`
:   `int` The unique ID of the category.
`parent_id`
:   `int` The unique ID of the category’s parent.
`ancestor_ids`
:   `int csv` The unique IDs of the category's ancestors.
`tag_id`
:   `int` The associated category’s original Tag id.
`okanjo_url`
:   `string (255)` Nullable. An optional landing page URL (e.g. vanity url)
`children`
:   [`Category []`](Objects.html#Category) Embeddable. Array of sub-categories.
`parent`
:   [`Category`](Objects.html#Category) Nullable. Embeddable. The parent category object.
`relationship`
:   [`ProductCategoryRelationship`](Objects.html#ProductCategoryRelationship) Available on embedded categories on [`Product`](Objects.html#Product) objects.


## Cause

A cause represents a non-profit, 501(c)-class organization.

`id`
:   `int`  The unique ID of the cause.
`status`
:   `int enum`  The status of the cause. See [`CauseStatus`](Constants.html#CauseStatus).
`name`
:   `string (255)`  The display name of the cause.
`local_name`
:   `string (530)`  The display name of the cause appended with its location.
`city`
:   `string (255)` Nullable. The city in which the cause is located.
`state`
:   `string (2)`  The state in which the cause is located.
`created`
:   `datetime`  When the cause was added to Okanjo.
`product_count`
:   `int`  The number of products pledged to the cause.
`store_id`
:   `int` The ID of the cause's store.
`group_id`
:   `int` Nullable. The ID of the cause grouping, if applicable.
`group_name`
:   `string (255)` Nullable. The name of the cause group, if applicable.
`store`
:   [`Store`](Objects.html#Store) Embeddable. The associated store for the cause.
`meta`
:   `string[]`  Array of key/value properties attached to the object. Metadata is per-API key.


## CheckoutConfirmation

CheckoutConfirmation objects are returned after an order was processed and completed. They contain sufficient data that
may be used for Google Analytics to track e-commerce traffic.

`city`
:   `string`  Buyer’s city / locality.
`country`
:   `string`  Buyer’s country.
`items[]`
:   `Array`  Array of items that was purchased.
`items[n][price]`
:   `int`  Item’s price.
`items[n][qty]`
:   `int`  How many of the item was purchased.
`items[n][sellerId]`
:   `int`  The store's ID number
`items[n][sku]`
:   `int`  Order item id number.
`items[n][title]`
:   `string`  Item’s title.
`items[n][txnId]`
:   `int`  Order id number.
`shipping`
:   `decimal`  Total shipping.
`state`
:   `string (2)`  Buyer’s state.
`storeName`
:   `string`  Affiliation / store name (currently only returns Okanjo).
`tax`
:   `decimal` Total tax. 
`total`
:   `string`  Order item total.
`txnId`
:   `int`  Order id number.


## CheckoutOrder

A CheckoutOrder object is returned as the response to initially creating the order. Contains the information needed
for your application to to allow the buyer to complete the transaction.

`order_id`
:   `string` The unique order object ID that was started.
`token`
:   `string`  The paypal token associated with the order.
`paypal_url`
:   `string`  The PayPal URL to redirect the client to complete the transaction using PayPal.
`cards`
:   `Card []`  Array of stored cards. Always returns empty on guest checkout sessions.
`subscriptions`
:   [`Success KVP`](Globals.html#Default Response Object)  Associative set of subscription results, where the key is the store id being subscribed to and the value is the result of the subscription attempt.
`meta`
:   `string[]`  Array of key/value properties attached to the object upon creation of the order. Metadata is per-API key.


## CheckoutQuote

A CheckoutQuote object is returned as the response to [`POST /checkout/rates`](Checkout.html#POST /checkout/rates).
Contains the information needed to provide an accurate order total summary with tax and dynamic shipping quotes.

`product_id`
:   `int` The unique product identifier of the item in the cart
`shipping_methods`
:   [`ShippingOption []`](Objects.html#ShippingOption) Associative array of shipping options, where the key is the ID of the option.
`get_rates`
:   `bit` Whether the item was submitted for dynamic shipping rates.
`tax`
:   [`CheckoutQuoteTaxData`](Objects.html#CheckoutQuoteTaxData) Nullable. The sales tax information about the item.
`quantity`
:   `int` The quantity of the item being purchased.
`variant`
:   `string` The variant of the product selected by the buyer.
`product_type`
:   `int enum`   The original type of the product. See [`ProductType`](Constants.html#ProductType).
`product_donation_perc`
:   `int (0-100)` Nullable. The original percentage of the sale of the item that will be donated to the associated cause.
`product_seller_store_id`
:   `int`  The original unique ID of the store selling the product.
`product_brand_id`
:   `int`  The unique ID of the brand the product was listed originally under.
`product_cause_id`
:   `int` Nullable. The original unique ID of the cause the the product was being pledged to.
`product_location_zip`
:   `string (10)`  The original location of the product.
`product_is_local_pickup`
:   `bit`  Whether the original product offered local pickup.
`product_is_free_shipping`
:   `bit`  Whether the original product offered free shipping.
`product_use_dynamic_shipping`
:   `bit`  Whether the original product offered dynamic shipping.
`product_thumbnail_media_id`
:   `int`  The original thumbnail media ID of the product.
`product_media_id_csv`
:   `int csv`  All of the original media image ID’s associated with the product.
`product_price`
:   `decimal`  The original cost of the product.
`product_title`
:   `string`  The original title of the product.
`product_description`
:   `string`  The original description of the product.
`product_condition`
:   `string enum`  The original condition of the product. See [`ProductCondition`](Constants.html#ProductCondition).
`product_parcel`
:   [`ProductParcel`](Objects.html#ProductParcel) Nullable. The parcel information that the product gets shipped in.
`product_variants`
:   [`ProductDimensions`](Objects.html#ProductDimensions) Nullable. The various option dimensions a product may contain.
`product_dimensions`
:   [`ProductVariants`](Objects.html#ProductVariants) Nullable. The purchasable options of a product.
`product_deal_start`
:   `date time` Nullable. When the deal/offer can start being purchased.
`product_deal_end`
:   `date time` Nullable. When the deal/offer can no longer be purchased.
`product_promo_start`
:   `date time` Nullable. When the deal/offer can start being redeemed for its promotional value.
`product_promo_end`
:   `date time` Nullable. When the deal/offer can no longer be redeemed for its promotional value.
`product_deal_value`
:   `decimal` Nullable. The promotional value of the deal/offer.
`product_meta`
:   Array of key/value attributes attached to the purchased item. Metadata is per-API key.


## CheckoutQuoteTaxData

Sales tax information pertaining to the sale of the item.

`rate`
:   `decimal` The percent of the sale that is taxable.
`freight_taxable`
:   `bit` Whether the shipping costs are also taxable.
`tax_source`
:   `string enum` Whether the tax is collected at the `origin` or `destination` of the sale.
`location`
:   `string` The locality that is collecting the sales tax. e.g. `Milwaukee, WI`


## Default Response Object

Basic response object for many controller routes. See [`Default Response Object`](Globals.html#Default Response Object).


## Event

An Event object is generated and sent to any URL that's been registered for that particular type.

`id`
:   `string`  The unique event identifier.
`occurred`
:   `datetime`  The date and time that the event occurred.
`type`
:   `string`  The type of event that occurred.
`data`
:   `array`  The data associated with the event
`notifications`
:   `array`  [`Notification []`](Objects.html#Notification) Embeddable. Array of notification records created during this event.


## EventSubscription

An EventSubscription object is returned when polling the platform for event subscriptions made by a client.

`type`
:   `string`  The type of event that was subscribed to.
`webhook_url`
:   `string`  The URL that event data will be posted to.

## Feedback

Review of a purchase experience.

`id`
:   `int`  The unique ID of the user feedback.
`created`
:   `date time`  When the feedback was received.
`reviewee_id`
:   `int`  The unique ID of the store who received the feedback.
`reviewer_id`
:   `int`  The unique ID of the user who left the feedback.
`order_item_id`
:   `int`  The order item the feedback is in regards to.
`value`
:   `int (1-5)`  The rating the buyer gave the seller between 1 and 5 where 1 is worst and 5 is best.
`feedback`
:   `string` Nullable. Optional. A message the user included about the transaction.
`reviewer`
:   [`FeedbackEntity`](Objects.html#FeedbackEntity)  Embedded information about the user who left the feedback.
`reviewee`
:   [`FeedbackEntity`](Objects.html#FeedbackEntity)  Embedded information about the store who received the feedback.


## FeedbackEntity

Embedded information about a user who participated in feedback giving or receiving. Only one of the following fields will return.

`name`
:   `string`  Nullable. The name of the store to who received the feedback.
`user_name`
:   `string`  Nullable. The username of the user to who left the feedback.


## LoginContext

The basic data structure received when starting a session.

`user_token`
:   `string`  The user’s API session token.
`user`
:   [`User`](Objects.html#User)  The associated private user object. Includes embedded `media`, `stores`, `causes`, and `addresses`. `Stores` also include `subscriptions`.
`notifications`
:   [`Notification []`](Objects.html#Notification) Array of recent event notifications.


## Media

Media image object. Currently, the only way to obtain this object is after a successful upload.

`created`
:   `date time`  When the image was created.
`id`
:   `int`  The unique ID of the media image.
`is_vertical`
:   `bit`  Whether the image uploaded is more vertical in proportion than it is wide.
`original`
:   `string url`  The URI of the original image as uploaded by the owner. The image may be scaled down.
`status`
:   `int`  The status of the media image. Options are 0. It’s meaningless, for right now.
`uploader_id`
:   `int`  The ID of the user who uploaded the image.
`size_format`
:   `string url` One or more The relevant size / format URLs. See below for more information on sizes and formats.


## Media Embeds

Embedded media image references. See [`Media Embeds`](Media.html#Media Embeds).


## Notification

Notification of an event.

`id`
:   `int`  The unique ID of the notification.
`created`
:   `date time`  When the notification was created.
`updated`
:   `date time`  When the notification was last updated (e.g. flags changed to mark as read)
`flags`
:   `bitwise flags`  Bitwise flags. Handles storing flagged events. See [`NotificationFlags`](Constants.html#NotificationFlags).
`type`
:   `string enum`  Type of event notification. See [`NotificationType`](Constants.html#NotificationType).
`recipient_id`
:   `int`  Nullable. The user ID who is the primary recipient of the notification.
`recipient_store_id`
:   `int`  Nullable. The store ID who received the message.
`data`
:   `mixed` Nullable. The embedded event data at the time of the event.


## Order

Complete buyer purchase transaction. Contains buyer information and purchased items.

`id`
:   `int`  The unique ID of the order.
`buyer_id`
:   `int`  The unique ID of the user who made the order.
`created`
:   `date time`  When the order was started (not necessarily completed)
`shipping_first_name`
:   `string (255)`  The buyer’s first name.
`shipping_last_name`
:   `string (255)`  The buyer’s last name.
`shipping_address_1`
:   `string (255)`  The buyer’s shipping street address.
`shipping_address_2`
:   `string (255)`  The buyer’s apartment, building, condo number, etc.
`shipping_city`
:   `string (255)`  The buyer’s city / locality.
`shipping_state`
:   `string (2)`  The buyer’s state code. (e.g. WI)
`shipping_zip`
:   `string (10)`  The buyer’s zip code.
`shipping_country`
:   `string (2)`  The buyer’s country code. (e.g. US)
`shipping_phone`
:   `string (20)`  The buyer’s contact phone number.
`shipping_email`
:   `string (255)`  The buyer’s contact email address.
`is_tax_exempt`
:   `bit`  Whether the purchase was exempt from collecting sales tax.
`status`
:   `int enum`  The status of the order. See [`OrderStatus`](Constants.html#OrderStatus).
`type`
:   `int enum`  The type of the order. See [`OrderType`](Constants.html#OrderType).
`items`
:   [`OrderItem []`](Objects.html#OrderItem)  Embeddable. Array of items being purchased on the order.
`meta`
:   `string[]`  Array of key/value properties attached to the object. Metadata is per-API key.


## OrderItem

Represents a snapshot of a product that was purchased.

`id`
:   `int`  The unique ID of the item.
`created`
:   `date time`  When the item was created.
`updated`
:   `date time`  When the item was last updated.
`order_id`
:   `int`  The unique ID of the order the item was purchased through.
`product_id`
:   `int`  The original unique product ID the item was listed as.
`quantity`
:   `int`  How many of this item was purchased.
`status`
:   `int enum`  The status of the item. See [`OrderStatus`](Constants.html#OrderStatus).
`variant`
:   `string` The variant of the product selected by the buyer.
`product_type`
:   `int enum`   The original type of the product. See [`ProductType`](Constants.html#ProductType).
`product_brand_id`
:   `int`  The unique ID of the brand the product was listed originally under.
`product_donation_perc`
:   `int (0-100)` Nullable. The original percentage of the sale of the item that will be donated to the associated cause.
`product_seller_store_id`
:   `int`  The original unique ID of the store selling the product.
`product_cause_id`
:   `int` Nullable. The original unique ID of the cause the the product was being pledged to.
`product_location_zip`
:   `string (10)`  The original location of the product.
`product_is_local_pickup`
:   `bit`  Whether the original product offered local pickup.
`product_is_free_shipping`
:   `bit`  Whether the original product offered free shipping
`product_use_dynamic_shipping`
:   `bit`  Whether the original product offered dynamic shipping.
`product_thumbnail_media_id`
:   `int`  The original thumbnail media ID of the product.
`product_media_id_csv`
:   `int csv`  All of the original media image ID’s associated with the product.
`product_price`
:   `decimal`  The original cost of the product.
`product_title`
:   `string (255)`  The original title of the product.
`product_description`
:   `string (64K)`  The original description of the product.
`product_condition`
:   `string enum`  The original condition of the product. See [`ProductCondition`](Constants.html#ProductCondition).
`shipping_description`
:   `string (32)` Nullable. The original selected shipping description.
`shipping_price`
:   `decimal` Nullable. The original cost of shipping per item.
`tax_price`
:   `decimal` The sales tax applicable per item.
`tracking_carrier`
:   `string (64)` Nullable. The shipping provider, provided by the seller.
`tracking_number`
:   `string (64)` Nullable. The shipping tracking number, provided by the seller.
`product_deal_start`
:   `date time` Nullable. When the deal/offer can start being purchased.
`product_deal_end`
:   `date time` Nullable. When the deal/offer can no longer be purchased.
`product_promo_start`
:   `date time` Nullable. When the deal/offer can start being redeemed for its promotional value.
`product_promo_end`
:   `date time` Nullable. When the deal/offer can no longer be redeemed for its promotional value.
`product_deal_value`
:   `decimal` Nullable. The promotional value of the deal/offer.
`product_deal_vendor_ack`
:   `string (255)` Nullable. Seller-only. For vendors to indicate which employee marked a deal/offer as redeemed.
`product_parcel`
:   [`ProductParcel`](Objects.html#ProductParcel) Nullable. The parcel information that the product gets shipped in.
`product_variants`
:   [`ProductDimensions`](Objects.html#ProductDimensions) Nullable. The various option dimensions a product may contain.
`product_dimensions`
:   [`ProductVariants`](Objects.html#ProductVariants) Nullable. The purchasable options of a product.
`product_meta`
:   Array of key/value attributes attached to the purchased item. Metadata is per-API key.
`deal_number`
:   `int` Nullable. The unique deal number identifier of the deal/offer used on the voucher.
`order`
:   [`Order`](Objects.html#Order)  Embeddable. The order the item was purchased through.
`store`
:   [`Store`](Objects.html#Store)  Embeddable. The store which sold the item.
`buyer`
:   [`UserProfile`](Objects.html#UserProfile)  Embeddable. The user who bought the item.
`cause`
:   [`Cause`](Objects.html#Cause)  Embeddable. The cause the item was pledged to.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. The associated media for the associated product, store, buyer, and cause.
`meta`
:   `string[]`  Array of key/value properties attached to the object. Metadata is per-API key.
`feedback`
:   [`UserFeedback`](Objects.html#UserFeedback)  Embeddable. The feedback received from the buyer about the seller.
`history`
:   [`OrderItemStatus[]`](Objects.html#OrderItemStatus)  Embeddable. The history of status dates. Informs on when the order item hit various milestones.
`transactions`
:   [`Transaction[]`](Objects.html#Transaction)  Embeddable. The transactions associated with the item and the current user_token. For stores, can be used to get a breakdown.
`shipping_rate`
:   [`ShippingRate`](Objects.html#ShippingRate)  Embeddable. The selected dynamically-quoted shipping rate.


## OrderItemStatus

Record when an item changed state.

`id`
:   `bigint`  The unique ID of the history record.
`order_item_id`
:   `bigint`  The unique ID of the associated order item.
`status`
:   `int enum`  The status of the item. See [`OrderStatus`](Constants.html#OrderStatus).
`updated`
:   `int`  When the status was set.


## PlaceBidResult

The result of placing a bid on an action-type product.

`type`
:   `string`  "Success"
`is_new_high_bid`
:   `bool`  `true` if the bidder is current highest bidder or `false` if they do not.
`bid_id`
:   `int`  The ID of the bid that was placed, which can be used to derive which bidder number the user is.


## Plan

A feature set a store may subscribe to.

`id`
:   `int` The unique ID of the plan.
`name`
:   `string` The unique name of the plan.
`display_name`
:   `string` The public display name of the plan.
`status`
:   `int` The plan's status code. See [`PlanStatus`](Constants.html#PlanStatus).
`brand_id`
:   `int` The ID of the brand that the plan belongs to.
`billing_cycle_days`
:   `int` The frequency in which the plan is renewed.
`permissions`
:   `int flags` The permissions granted to the store when active.
`has_free_trial`
:   `bit` Whether the plan offers a free trial.
`free_trial_days`
:   `int` Nullable. How long the free trial lasts before requiring a renewal.
`price`
:   `decimal` The cost of a renewal in USD.


## PlanPromotion

A promotional modifier to the plan used to reduce the plan's cost.

`id`
:   `int` Unique ID of the subscription plan promotion.
`code`
:   `string` Promotion code name.
`description`
:   `string` Description of the promotion.
`valid_through`
:   `date time` Nullable. When the promotion expires.
`billing_cycles`
:   `int` Nullable. How many billing cycles are left on the promotion.
`discount_perc`
:   `int (0-100)` Percentage of the plan billing price to reduce.


## Product

An item that can be purchased on Okanjo.

`id`
:   `int`  The unique ID of the product.
`curated`
:   `date time / null`  Whether (and when) the product has been hand-picked by Okanjo staff.
`donation_perc`
:   `int (0-100)` Nullable. The percent of the sale price that will be donated to the cause by the seller.
`status`
:   `int (enum)`  The status of the product. See [`ProductStatus`](Constants.html#ProductStatus).
`seller_store_id`
:   `int`  The ID of the store selling the product.
`brand_id`
:   `int`  The ID of the Brand that the product was posted under.
`location_zip`
:   `string (10)`  The zip code of where the product is located.
`location_name`
:   `string (180)`  The city/locality where the product is located.
`location_state`
:   `string (2)`  The state where the product is located.
`stock`
:   `null` | `int` How many instances of the product are for sale. Null or empty values denote that the product has infinite stock, and is made "on demand"
`cause_id`
:   `int` Nullable. The ID of the cause the product is being pledged to.
`is_local_pickup`
:   `bit`  Whether the product is available for pickup.
`is_free_shipping`
:   `bit`  Whether the product can be shipped for no cost to the buyer.
`use_dynamic_shipping`
:   `bit`  Whether the product can be quoted for dynamic shipping rates at checkout time. Requires a parcel to be defined.
`is_taxable`
:   `bit` Whether sales tax is applicable to the product. Default `1` (enabled). Only applicable if the store has sales tax enabled and configured.
`thumbnail_media_id`
:   `int`  The ID of the media image that is used as the product’s thumbnail.
`created`
:   `date time`  When the product was added to Okanjo.
`published`
:   `date time` Nullable. When the product was released for sale.
`updated`
:   `date time`  When the product was last modified.
`price`
:   `decimal (1-9000)`  The sale price of the product. For auctions, this is the Buy Now price.
`slug`
:   `string (255)`  The unique URL component of the product. e.g. `okanjo.com/item/slug`
`title`
:   `string (255)`  The title of the product.
`description`
:   `string (~64K)`  The description of the product.
`condition`
:   `string enum`  The condition of the product. Options are: `New, Used`.
`is_vertical`
:   `bit`  Whether the product should be displayed vertically or horizontally.
`current_bid`
:   `decimal` Nullable. The current bid price of an auction item.
`auction_start`
:   `date time` Nullable. When the auction is set to end.
`auction_end`
:   `date time` Nullable. When the auction is set to end.
`auction_min_bid`
:   `decimal` Nullable. The minimum opening bid for the auction
`type`
:   `int`  The type of product. See [`ProductType`](Constants.html#ProductType).
`return_policy_id`
:   `int` Nullable. The associated return policy applicable to the sale of this item.
`is_available`
:   `bit`  Whether the item is currently available for sale.
`deal_start`
:   `date time` Nullable. When the deal/Giving Reward may start being purchased.
`deal_end`
:   `date time` Nullable. When the deal/Giving Reward may no longer be purchased.
`promo_start`
:   `date time` Nullable. When the deal/Giving Reward may be redeemed for its promotional value.
`promo_end`
:   `date time` Nullable. When the deal/Giving Reward may no longer be redeemed for its promotional value.
`deal_value`
:   `decimal` Nullable. The promotional value of the deal/Giving Reward.
`dma_code`
:   `int` Nullable. The DMA region code the product belongs to. See [`Regions`](Regions.html#Regions).
`dimensions`
:   [`ProductVariants`](Objects.html#ProductVariants) Nullable. The purchasable options of a product.
`variants`
:   [`ProductDimensions`](Objects.html#ProductDimensions) Nullable. The various option dimensions a product may contain.
`parcel`
:   [`ProductParcel`](Objects.html#ProductParcel) Nullable. The parcel information that the product gets shipped in.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. All referenced media for the product and embedded objects.
`meta`
:   Array of key/value attributes attached to the object. Metadata is per-API key.
`categories`
:   [`Category []`](Objects.html#Category)  Embeddable. The categories the product is assigned to.
`cause`
:   [`Cause`](Objects.html#Cause)  Embeddable. The cause the product is being pledged to.
`store`
:   [`Store`](Objects.html#Store)  Embeddable. The seller’s store.
`shipping`
:   [`ShippingOption []`](Objects.html#ShippingOption)  Embeddable. The available list of shipping options.
`tags`
:   [`Tag []`](Objects.html#Tag)  Embeddable. The tags related to the product.
`bids`
:   [`Bid []`](Objects.html#Bid)  Embeddable. The bidding history of the product.
`return_policy`
:   [`ReturnPolicy`](Objects.html#ReturnPolicy)  Embeddable. The return policy associated with the sale of this item.


## ProductCategoryRelationship

Relationship of a product to a category.

`type`
:   `int enum` How the product relates to the category. See [`ProductCategoryRelationshipType`](Constants.html#ProductCategoryRelationshipType)
`root_category_id`
:   `int` The unique id of the root id of the taxonomy the category belongs to.


## ProductDimensions

A multidimensional array of product attributes and price modifiers. For example:

```js
"dimensions": {
    "Size": {
        "Small": {
            "price_modifier" : 0
        },
        ...
    },
    "Color": {
        "Green with Sparkles" : {
            "price_modifier" : 0
        },
        ...
    }
    ...
}
```


## ProductVariants

A multidimensional array of variant information, keyed by alphabetically sorted query strings comprised of dimension->attribute pairs for all permutations of dimensions. Variants store the stock and optional parcel information about the option.

For example:

```js
"variants": {
    "Color=Green+with+Sparkles&Size=Small": {
        "parcel": null, // Optional. Could also be a Parcel object.
        "stock" : 12    // This could also be null or an empty string, to denote that this product is made "on demand"
    },
    ...
}
```


## ProductParcel

The information about the package that will contain the product during shipping.

Either `predefined_package` will be defined, or `length`, `width` and `height`. `weight` must always be defined. Sizes are defined in inches and weight in ounces.

`predefined_package`
:   `string enum` Nullable. A carrier-specific parcel type. For example, see EasyPost's [list of parcels](https://www.easypost.com/service-levels-and-parcels).
`length`
:   `decimal` Nullable. The length of the parcel, in inches.
`width`
:   `decimal` Nullable. The width of the parcel, in inches.
`height`
:   `decimal` Nullable. The height of the parcel, in inches.
`weight`
:   `decimal` The weight of the parcel including the product, in ounces.

For example, both of the following are valid parcels:

```js
{
  "length": 10.2,
  "width": 7.8,
  "height": 4.3,
  "weight": 21.2
}
```

```js
{
  "predefined_package": "Tube",
  "weight": 16.2
}
```


## ProductSenseResult

The response for a ProductSense API call.

`products`
:   [`Product []`](Objects.html#Product) Array of products, including `store`, `tags`, `media` and `score` embeds.


## Promotion

Sales-based coupon/promotion that affects the earnings of as sale.

`code`
:   `string (32)`  The original promo code.
`description`
:   `string (256)`  Information about the promotion.


## Region

DMA-based region information.

`id`
:   `int`  The DMA code this locality belongs to.
`name`
:   `string`  City/locality name and state.
`status`
:   `string`  Status code. See [`RegionStatus`](Constants.html#RegionStatus).
`postal_codes`
:   `string []`  Embeddable. Array of postal codes in the region.


## ReturnPolicy

Represents the return policy of the sale of an item, issued by the seller.

`id`
:   `int`  The unique ID of the return policy.
`user_id`
:   `int`  The unique ID of the seller who created the return policy. ID of `0` is a default/global Okanjo policy (no returns).
`name`
:   `string`  The name of the return policy, given by the seller.
`policy`
:   `string`  The terms and conditions of the return policy, given by the seller.


## ShippingOption

A method the seller offers the buyer to acquire a product.

`id`
:   `int`  The unique ID of the shipping option.
`description`
:   `string (32)`  Information about the shipping option.
`price`
:   `decimal (0-1000)`  How much it costs the buyer to use this shipping option.


## ShippingRate

A quoted shipping rate for an order item. Resembles a [`ShippingOption`](Objects.html#ShippingOption). Contains a minimum of the following fields:

`id`
:   `string` Unique ID of the shipping method.
`description`
:   `string` The brief description of the shipping method.
`price`
:   `decimal` The cost of shipping using this method.
`carrier`
:   `string` The name of the carrier company handling the package. E.g. `UPS`.
`service`
:   `string` The name of the service level the package is shipped as. E.g. `Ground`.

> Note: Custom shipping providers may chose to include more details about the shipping rate. These fields should not be assumed to be always present. For example:

```js
"shipping_rate": {
    "id": "rate_jYXg00Lk",
    "description": "UPS Ground",
    "price": "18.81",
    "carrier": "UPS",
    "service": "Ground",
    "object": "Rate",
    "created_at": "2015-01-06T19:27:22Z",
    "updated_at": "2015-01-06T19:27:22Z",
    "mode": "test",
    "rate": "18.81",
    "currency": "USD",
    "retail_rate": "18.81",
    "retail_currency": "USD",
    "delivery_days": null,
    "delivery_date": null,
    "delivery_date_guaranteed": false,
    "est_delivery_days": null,
    "shipment_id": "shp_Zl5MU1gP",
    "carrier_account_id": "ca_K705XRwb"
}
```


## Store

A storefront which offers items for sale on Okanjo.

`id`
:   `int`  The unique ID of the store.
`status`
:   `int enum`  Status of the store. See [`StoreStatus`](Constants.html#StoreStatus)
`created`
:   `date time`  When the store was created.
`updated`
:   `date time`  When the store was last modified.
`type`
:   `int enum`  Type of the store.  See [`StoreType`](Constants.html#StoreType)
`name`
:   `string`  The display name of the store. By default is the name of the user who owns the store.
`about`
:   `string (512)` Nullable. Store description.
`location`
:   `string (10)` Nullable. Store zip code location.
`location_name`
:   `string (180)` Nullable. Store city/locality name.
`location_state`
:   `string (2)` Nullable. Store state code abbreviation.
`website_url`
:   `string (255)` Nullable. Store website URL.
`facebook_url`
:   `string (255)` Nullable. Store facebook URL.
`twitter_url`
:   `string (255)` Nullable. Store twitter URL.
`avatar_media_id`
:   `int` Nullable. The media image ID to display as the store logo/avatar.
`banner_media_id`
:   `int` Nullable. The media image ID to display as the store banner.
`rating_avg`
:   `decimal (1,2)` Nullable. The store's average rating, from 1 to 5.
`review_count`
:   `int` Nullable. The number of reviews the store received.
`product_count`
:   `int`  Number of products available for sale in the store.
`okanjo_url`
:   `string (20)` Nullable. Okanjo URL associated with the store.
`dma_code`
:   `int` Nullable. The DMA region code the store belongs to. See [`Regions`](Regions.html#Regions).
`brand_id`
:   `int` The ID of the brand the store was registered under.
`brand_name`
:   `string` The name of the brand the store was registered under.
`brand_web_home`
:   `string` The URI of the brand's website root.
`contact_email`
:   `string` Private. Nullable. The contact email address store notifications should be sent to.
`payout_preference`
:   `string enum` Private. Nullable. The preferred method for payouts. See [`PayoutPreference`](Constants.html#PayoutPreference).
`okanjo_account_id`
:   `string` Unique id of the associated Okanjo account that handles the store's transactions.
`balance_pending`
:   `decimal` Current sum of funds pending completion.
`balance_available`
:   `decimal` Current sum of funds available for use or withdrawal.
`bank_account_uri`
:   `string` Private. Nullable. The Balanced Payments tokenized bank account URI associated with the store in which to send payouts.
`bank_account_nickname`
:   `string` Private. Nullable. The associated display label of the bank account. Only present if `bank_account_uri` is set.
`card_uri`
:   `string` Private. Nullable. The Balanced Payments tokenized payment card URI associated with the store in which to use for debits.
`card_nickname`
:   `string` Private. Nullable. The associated display label of the payment card. Only present if `card_uri` is set.
`shipping_carriers`
:   `string csv` Private. Nullable. When defined, limits dynamic shipping rates to the given carriers. e.g. ups,usps,fedex
`media`
:   `MediaEmbeds`  Embeddable. Media associated with the store and other related objects.
`meta`
:   `string[]`  Array of key/value properties attached to the object. Metadata is per-API key.
`addresses`
:   [`Address[]`](Objects.html#Address) Embeddable. Array of physical store locations (type `store` only.)
`products`
:   `Product[]`  Embeddable. Array of `n` number between 1 and 10 of products from the store. Used for a quick glance of the store’s items.
`causes`
:   [`Cause[]`](Objects.html#Cause) Embeddable. Array of associated causes with the store.
`cards`
:   [`Card []`](Objects.html#Card) Embeddable. Private. Tokenized payment cards used for debits.
`bank_accounts`
:   [`BankAccount []`](Objects.html#BankAccount) Embeddable. Private. Tokenized bank accounts used for payouts.
`return_policies`
:   [`ReturnPolicy []`](Objects.html#ReturnPolicy) Embeddable. Private. Return policies managed by the store.
`subscription`
:   [`Subscription`](Objects.html#Subscription) Embeddable. Private. The active plan subscription on the store.

> ** Note: Private fields are only accessible to users who have access to manage the given store**


## Subscription

The subscription state of a store which has subscribed to a plan.

`id`
:   `int` The unique ID of subscription.
`created`
:   `date time` When the subscription was created.
`updated`
:   `date time` When the subscription was last updated.
`status`
:   `int enum` The current state of the subscription. See [`SubscriptionStatus`](Constants.html#SubscriptionStatus).
`next_action`
:   `date time` When the subscription will next take action.
`next_status`
:   `int enum` The next action the subscription will take. See [`SubscriptionStatus`](Constants.html#SubscriptionStatus).
`plan`
:   [`Plan`](Objects.html#Plan) The plan the store subscribed to.
`promotion`
:   [`PlanPromotion`](Objects.html#PlanPromotion) Nullable. The active promotion affecting the subscription.


## Tag

A non-contextual product descriptor.

`id`
:   `int`  The unique ID of the tag.
`auth_level`
:   `int`  The authentication level of the tag. For internal use only, or client-side filtering. See [`AuthLevel`](Constants.html#AuthLevel).
`name`
:   `string (64)`  The tag name.


## Transaction

A credit or debit on an Okanjo account. Represents the transfer of funds.

`id`
:   `string` The unique ID of the transaction.
`account_id`
:   `string` The unique ID of the transacting account.
`parent_transaction_id`
:   `string` The unique ID of the parent transaction.
`type`
:   `int enum` The type of transaction. See [`TransactionType`](Constants.html#TransactionType).
`status`
:   `int enum` The status of the transaction. See [`TransactionStatus`](Constants.html#TransactionStatus).
`created`
:   `date time` When the transaction occurred.
`updated`
:   `date time` When the transaction was updated.
`amount`
:   `decimal` The amount of USD affected.
`description`
:   `string` The generic description of the transaction
`associations`
:   `object` The related objects associated with the transaction.

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
:   `string enum`  The user’s gender. One of: `Male`, `Female`, `Other`.
`contact_email`
:   `string (255)`  The user’s email address.
`current_zip`
:   `int`  Where the user is geographically located.
`birthday`
:   `date time`  When the user was born.
`twitter_handle`
:   `string` Nullable. The user’s Twitter handle. Not currently implemented.
`facebook_id`
:   `int` Nullable. The user’s Facebook numeric ID. (if account is associated)
`avatar_media_id`
:   `int` Nullable. The user’s avatar media image id.
`auth_level`
:   `bitwise flags`  The user’s bitwise authentication flags. See [`AuthLevel`](Constants.html#AuthLevel).
`card_uri`
:   `string` Nullable. The tokenized URI of the default credit card in which to use for purchases.
`card_nickname`
:   `string` Nullable. The nickname of the default credit card used for purchases.
`okanjo_account_id`
:   `string` Unique id of the associated Okanjo account that handles the user's transactions.
`balance_pending`
:   `decimal` Current sum of funds pending completion.
`balance_available`
:   `decimal` Current sum of funds available for use or withdrawal.
`addresses`
:   [`Address []`](Objects.html#Address) Embeddable. Addresses associated with the user.
`cards`
:   [`Card []`](Objects.html#Card) Embeddable. Payment cards associated with the user.
`stores`
:   [`Store []`](Objects.html#Store) Embeddable. Stores managed by the user.
`causes`
:   [`Cause []`](Objects.html#Cause) Embeddable. Causes managed by the user.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. Associated avatar media image.
`meta`
:   `string[]`  Array of key/value properties attached to the object. Metadata is per-API key.


## UserProfile

Public information about a user.

`id`
:   `int`  The unique ID of the user.
`user_name`
:   `string`  The login name or public display name of the user.
`avatar_media_id`
:   `int` Nullable The user’s profile image id.
`media`
:   [`Media Embeds`](Media.html#Media Embeds)  Embeddable. Associated avatar media image.