# Constants

Constants and enumerations. We try not to modify these values, however we may add new values from time to time.

The constants listed below are represented in the format:

`LABEL`
:   `VALUE` Description

Where `LABEL` is the descriptive enumerated name and `VALUE` is the actual enumeration value, used in objects and API routes.


## AddressStatus

Address object status codes.

`DISABLED`
:   `0` Address is no longer available for use.
`ACTIVE`
:   `1` Address is available for use.


## AddressType

Address object types.

`BILLING`
:   `billing` Used for billing purposes.
`SHIPPING`
:   `shipping` Used for shipping purposes.
`CAUSE`
:   `cause` Used for cause organizations.
`PAYOUT`
:   `payout` Used for KYC and anti-fraud purposes.
`STORE`
:   `store` Used for physical retail/store presences.


## AuctionWatchStatus

Auction watch status codes.

`ACTIVE`
:   `0` Auction watch is enabled.


## AuctionWinnerStatus

Status codes of an auction winner object.

`ACTIVE`
:   `0` Winner is selected and item has not been purchased yet.
`REVOKED`
:   `1` Winner failed to purchase the item. Occurs when someone fails to pay for the auction.
`PURCHASED`
:   `2` Winner has purchased the item.


## AuthLevel

Bitwise user authentication level flags.

`USER`
:   `1` Standard registered user level.
`ADMIN`
:   `2` Staff administrator or site moderator.
`GUEST`
:   `4` Unregistered guest account that can be used for purchases.


## BidFlag

Bitwise auction bid flags. Metadata information for bidding history on an auction.

`STOPPING_POINT`
:   `1` Bidding war stopped at this bid.
`MAX_BID_UPDATE`
:   `2` Bidder is the high-bidder and made the max-bid higher.
`COUNTER_ATTEMPT`
:   `4` Incoming bidder is attempting to take the lead.
`INSTANT_OUTBID`
:   `8` Bid was automatically countered by the high-bidder.


## BidStatus

Auction bid status codes.

`ACTIVE`
:   `0` Bid is live.
`REVOKED`
:   `1` Bid has been annulled.


## BidType

Auction bid origin type.

`USER`
:   `0` Bid placed by a user.
`PROXY`
:   `1` Bid placed by Okanjo on-behalf of a user.


## CauseStatus

Cause object status codes.

`DISABLED`
:   `0` Cause is no longer available or has been disabled.
`UNCONFIRMED`
:   `1` Cause has been searched for or added to Okanjo, and its identity has not been verified.
`SUGGESTED`
:   `2` A seller has pledged an item to the cause and is queued for Okanjo verification.
`CONFIRMED`
:   `3` Cause has been verified by Okanjo.


## ConfirmationStatus

Confirmation object status codes.

`UNCONFIRMED`
:   `0` Confirmation code has not been redeemed.
`CONFIRMED`
:   `1` Confirmation code has been redeemed.
`REVOKED`
:   `2` Confirmation code has been revoked.


## ConfirmationType

Confirmation object types.

`ADD_CAUSE_ADMIN`
:   `add_cause_admin` Code to verify cause ownership.
`FORGOT_PASSWORD`
:   `forgot_password` Code to verify user ownership.


## EventType

Types of events that can occur.

> NOTE: This list will expand regularly. Use these for values of `type` when subscribing to events. The data that will be returned is listed under each event type.

### Disbursements

`disbursement.created`
:   Occurs when an Okanjo Account balance is withdrawn.

### Products

`product.created`
:   [`Product`](Objects.html#Product) - When a product is added.

### Orders and OrderItems

`order.confirmed`
:   [`Order`](Objects.html#Order) - When an order is confirmed.
`order.updated`
:   [`Order`](Objects.html#Order) - When an order is updated (e.g. Buyer's payment came through).
`order_item.updated`
:   [`Order Item`](Objects.html#OrderItem) - When an item on an order is updated (e.g. Store marks item as shipped).

## LoginAction

Login auctions that are handled by [POST /users/login](Users.html#POST /users/login).

`LOGIN_USERNAME_PASSWORD`
:   `loginUsernamePassword` Login using a username and password.
`LOGIN_EMAIL_PASSWORD`
:   `loginEmailPassword` Login using an email address and password.
`LOGIN_FACEBOOK`
:   `loginFacebook` Login using Facebook ID and token.
`REGISTER_EMAIL_PASSWORD`
:   `registerEmailPassword` Register for a standard user account.
`REGISTER_FACEBOOK`
:   `registerFacebook` Register for a standard user account with Facebook account association.
`GUEST_CHECKOUT`
:   `checkoutAsGuest` Register or login as a guest account to make a purchase without a standard user account.


## MediaImageConstants

Sizes define the sizing type of a media image, such as scale and cropping algorithms. See also [Size Descriptions](Media.html#Size Descriptions).

Formats define the device class formats, such as desktop, mobile, etc.

Purposes define how the media image is intended to be used.

`SIZE_ORIGINAL`
:   `original` Originally uploaded image.
`SIZE_LISTING`
:   `listing` Used for product tiles and general browse experiences.
`SIZE_THUMBNAIL`
:   `thumbnail` Used as thumbnail selectors for an item detail view.
`SIZE_DETAIL`
:   `detail` Used to show larger detail of an image on an item detail view.
`SIZE_CART`
:   `cart` Used as a thumbnail in a cart view.
`SIZE_BANNER`
:   `banner` Used by stores and causes to customize their headers
`SIZE_AVATAR`
:   `avatar` Used by users and causes to customize their profile image.
`SIZE_GALLERY`
:   `gallery` Used for mobile browse experiences.
`FORMAT_DESKTOP`
:   `desktop` Format for desktop experiences.
`FORMAT_MOBILE_RETINA`
:   `mobile_retina` Format for high-resolution mobile devices (e.g. iPhone 4+)
`PURPOSE_PRODUCT`
:   `product` Media association for products.
`PURPOSE_USER_PROFILE`
:   `user_profile` Media association for user profile images.
`PURPOSE_STORE_BANNER`
:   `store_banner` Media association for store banners.
`PURPOSE_STORE_PROFILE`
:   `store_profile` Media association for store profile images.


## MediaImageStatus

Media image object status codes.

`DISABLED`
:   `0` Media image is no longer available.
`ENABLED`
:   `1` Media image is available for use.


## MessageContext

Message object context type.

`SELLER`
:   `seller-to-buyer` Message originated from the seller (e.g. message buyer in regards to a sale)
`BUYER`
:   `buyer-to-seller` Message originated from a buyer (e.g. message seller in regards to a product)


## NotificationFlag

Bitwise notification flags.

`READ`
:   `1` Notification has been marked as read.
`EMAIL_SENT`
:   `2` Notification has been sent via email.


## NotificationType

Types of event notifications. Sellers are synonymous with stores.

`BuyerAuctionCancelled`
:   Notification to buyer that the auction they were watching was cancelled.
`BuyerAuctionEnded`
:   Notification to buyer that the auction they were watching has ended.
`BuyerAuctionHasBegun`
:   Notification to buyer that the auction they are watching has started.
`BuyerAuctionOutBid`
:   Notification to buyer that they have been outbid on the given auction.
`BuyerAuctionWinner`
:   Notification to buyer that they have won the auction they were bidding on.
`BuyerItemInsistedReceived`
:   Notification to buyer that the seller marked the item they purchased as picked-up.
`BuyerItemPurchase`
:   Notification to buyer that they successfully a purchase.
`BuyerItemShipped`
:   Notification to buyer that the item they bought has been marked as shipped by the seller.
`ForgotPassword`
:   Notification to buyer that a forgotten password request was made on their user account.
`PrivateMessageProduct`
:   Notification to a user or store in regards to a product.
`PrivateMessageFailed`
:   Notification to a user or store when delivery of a private message fails.
`SellerAuctionCancelled`
:   Notification to seller that their auction was cancelled.
`SellerAuctionCancelledBuyOut`
:   Notification to seller that their auction was cancelled because it was bought-out.
`SellerAuctionFailed`
:   Notification to seller that their auction ended and no bids were made.
`SellerAuctionHasBegun`
:   Notification to seller that their auction has started.
`SellerAuctionWon`
:   Notification to seller that their auction has ended and was won buy a bidder.
`SellerFeedback`
:   Notification to seller that a buyer left feedback on one of their sales.
`SellerFundsDisbursed`
:   Notification to seller that they Okanjo has released their funds for the sale of an item.
`SellerFundsDisbursementFailed`
:   Notification to seller that they could not be paid.
`SellerItemPosted`
:   Notification to seller that they have successfully listed an item for sale.
`SellerItemPurchase`
:   Notification to seller that they have sold an item.
`SellerSubscriptionBillingFailed`
:   Notification to seller that their subscription failed to be purchased or renewed.
`SellerSubscriptionDelinquent`
:   Notification to seller that their subscription has been suspended due to non-payment.
`SellerSubscriptionFreeTrialStart`
:   Notification to seller that their subscription free-trial has begun.
`SellerSubscriptionInvoice`
:   Notification to seller that their subscription has been purchased or renewed.
`SellerSubscriptionStart`
:   Notification to seller that their subscription has begun.
`SellerSubscriptionTrialEnd`
:   Notification to seller that their subscription free-trial has ended.
`Welcome`
:   Notification to a user welcoming them to the platform after signing up for a new account.

## OrderStatus

Order object status codes.

`NOT_SUBMITTED`
:   `0` Order has been created and is ready for confirmation.
`PENDING_PAYMENT`
:   `1` Order has been confirmed and is waiting for payment processing.
`PENDING_FULFILMENT`
:   `2` Payment has been received and order is ready for the seller to ship the item.
`PENDING_ACQUISITION`
:   `3` Seller has shipped the item and is waiting for the buyer to receive the item **-or-** the item is waiting to be picked-up by the buyer.
`COMPLETE`
:   `4` Order or item has been completed. Nothing left to do.
`REFUNDED`
:   `5` Order or item has been refunded.
`VOIDED`
:   `6` Order has been cancelled. For example, this can occur when attempting to confirm an order, and an item is no longer valid.
`EXPIRED`
:   `7` Order has been abandoned and has not been confirmed. Occurs when an order is created but neglected for too long.
`PENDING_REDEMPTION`
:   `8` Deal item is waiting for the buyer to redeem at the vendor.
`COMPLETED_BY_SELLER`
:   `9` Pickup item was marked as received by the seller. Pickup should typically be marked as received by a buyer, though many buyers forget or simply do not, leaving the seller high'n'dry.
`PENDING_REFUND`
:   `10` Item is on hold while a refund is being processed. Will move to `REFUNDED` when complete or back to `PENDING_FULFILMENT` or `PENDING_ACQUISITION` if item is not entirely refunded.
`PENDING_DISPUTE`
:   `11` Item is on hold while a dispute is being processed.


## OrderType

Order object types.

`PHYSICAL`
:   `1` - Standard order type for regular items, auctions, and deals. May not contain virtual items.
`DONATION`
:   `2` - Order type that may only include virtual items.


## PayoutPreference

Store payout preference types. Currently only Balanced is supported.

`BANK_ACCOUNT`
:   `balanced` Disburse funds via direct deposit.


## PayoutStatus

Payout object status codes.

`WAITING_ON_ORDER`
:   `0` Payout is waiting for the order / item to advance to a disburse-able state.
`WAITING_FOR_DISBURSEMENT`
:   `1` Payout is queued for disbursement.
`DISBURSED`
:   `2` Payout has been disbursed.
`RETURNED`
:   `3` Payout has been returned by the bank.
`VOIDED`
:   `4` Payout has been annulled.
`ADMIN_HELD`
:   `5` Payout has been stopped by Okanjo staff.


## PayoutType

`UNCLASSIFIED`
:   `0` Automatic Okanjo commission
`STORE_COMMISSION`
:   `1` Store earnings for a sale
`CAUSE_DONATION`
:   `2` Cause donation
`OKANJO_COMMISSION`
:   `3` Okanjo transaction fee commission


## PlanStatus

`DISABLED`
:   `0` Plan is disabled.
`ACTIVE`
:   `1` Plan is active.


## ProductCategoryRelationshipType

How a product relates to a category.

`INHERITED`
:   `0` Product is related to the category by cross-taxonomy mapping.
`PRIMARY`
:   `1` Product was directly assigned to the category by the store.
`MASTER`
:   `2` Product is related to the category by direct-taxonomy mapping.


## ProductCondition

Product object condition enumeration.

`BRAND_NEW`
:   `New` Item is brand new, mint condition.
`USED`
:   `Used` Item has been used or opened.
`OTHER`
:   `Other` Item condition is unknown or not applicable. (e.g. imported)


## ProductStatus

Product object status codes.

`DISABLED`
:   `0` Item has been de-listed.
`ACTIVE`
:   `1` Item is available for sale (provided other conditions are met).
`PENDING`
:   `2` Intermediary stage where imported items are created as stubs.
`DRAFT`
:   `4` Intermediary stage where partial items can be saved and revisited later.
`AUCTION_ENDED_AWAITING_PURCHASE`
:   `5` Auction item has been won and is waiting for the high-bidder to purchase the item.
`AUCTION_ENDED_PURCHASED`
:   `6` Auction item has been won and the high-bidder has purchased the item.
`PERMANENTLY_REMOVED`
:   `7` Item has been permanently removed and is no longer accessible.
`ON_VACATION`
:   `8` Item has been suspended until the seller is available.
`PENDING_ACTIVATION`
:   `9` Deal item is waiting for start date to become accessible.


## ProductStoreType

How a product is associated with a cause store.

`OWNED`
:   `1` Item is owned and was listed by the store.
`INHERITED`
:   `2` Item was listed by another store and donates to the associated cause store.

## ProductType

Product object type.

`REGULAR`
:   `0` Regular, fixed-price item. Supports variable quantities.
`AUCTION`
:   `1` Auction item, single quantity. One-time use.
`DEAL`
:   `2` Deal item (e.g. get $40 for $20). Reserved for use by [`Vendors`](Constants.html#StoreFlags) only.
`DONATION`
:   `3` Donation item (e.g. donation item drive). Reserved for use by [`Causes`](Constants.html#StoreType) only.


## PurchaseRequirements

Okanjo platform order requirements.

`MIN_ORDER_TOTAL`
:   `0.50` Minimum order sale total, in USD.
`MAX_ORDER_TOTAL`
:   `10000` Maximum order sale total, in USD. If order total exceeds this value, order must be completed by contacting Okanjo and arranging payment.
`MIN_ITEM_PRICE`
:   `0.01` Minimum item sale price, in USD.
`MAX_ITEM_PRICE`
:   `9000` Maximum item sale price, in USD.
`MIN_SHIPPING_PRICE`
:   `0` Minimum item sale price, in USD.
`MAX_SHIPPING_PRICE`
:   `1000` Maximum item sale price, in USD.
`MAX_AUCTION_BUY_NOW_RATIO`
:   `0.15` The maximum ratio of current-bid price to buy-out price to allow buy-out

## RegionStatus

Region object status codes.

`INACTIVE`
:   `0` Region is available, but not supported by Okanjo.
`ACTIVE`
:   `1` Region is available and supported by Okanjo.


## ResponseHeaders

Headers that may be included in the API response.

`COLLECTION_COUNT`
:   `X-COLLECTION-COUNT` Header used for pagination to indicate how many total records matched the query request.


## ShippingDescription

Reserved product shipping names.

`LocalPickup`
:   `Local Pickup` Reserved shipping description for Local Pickup item acquisition.


## StoreFlag

Store object permission bitwise flags.

`IS_VENDOR`
:   `1` The store has vendor level permissions.
`STOREFRONT_ENABLED`
:   `2` The store's storefront properties may be used on their storefront page.
`STOREFRONT_EMBED_ENABLED`
:   `4` The store may use the embedded storefront widget.
`HOMEPAGE_PROMOTION_ENABLED`
:   `8` The store may be included in the store rotation widget.


## StoreStatus

Store object status codes.

`DISABLED`
:   `0` Store has been disabled or is no longer accessible.
`ACTIVE`
:   `1` Store is available and visible.


## StoreType

Store object types.

`STORE`
:   `1` Regular store front.
`CAUSE`
:   `2` Non-profit cause store front.


## SubscriptionIntent

Used when subscribing to a plan.

`PAID`
:   `paid` Store would like to pay for the subscription now.
`TRIAL`
:   `trial` Store would like to begin a free trial.


## SubscriptionStatus

Storefront subscription object status codes.

`TRIAL`
:   `0` Subscription is active and in trial-mode.
`CREATED`
:   `1` Subscription is brand new.
`REQUIRE_PAYMENT`
:   `2` Subscription will require payment.
`PENDING_PAYMENT`
:   `3` Subscription is waiting on a payment to clear.
`ACTIVE`
:   `4` Subscription is active.
`DELINQUENT`
:   `5` Subscription is delinquent or will become delinquent because it could not be renewed.
`PENDING_CANCELLATION`
:   `6` Subscription has been cancelled and will be deactivated when the subscription expires.
`CANCELLED`
:   `7` Subscription has ended.


## TransactionAssociation

Types of associations between a transaction and another object.

`CAUSE`
:   `cause` Represents an association with a cause object.
`ORDER`
:   `order` Represents an association with an order object.
`ORDER_ITEM`
:   `order_item` Represents an association with an order item object.
`STORE`
:   `store` Represents an association with a store object.
`USER`
:   `user` Represents an association with a user object.


## TransactionStatus

The status of the transaction.

`PENDING`
:   `0` Transaction is waiting for another action to complete.
`COMPLETE`
:   `1` Transaction has been committed and funds are available.


## TransactionType

The type of action associated with a transaction. All credits are even and debits are odd.

### Buyer Activities

`BUYER_CREDIT_PAYMENT`
:   `100` Occurs when the buyer's payment source (e.g. credit card, PayPal account) is debited and credited to their Okanjo account.
`BUYER_DEBIT_PURCHASE`
:   `101` Occurs when the buyer purchases an item.
`BUYER_CREDIT_REFUND_PURCHASE`
:   `110` Occurs when the buyer receives a refund for an item purchase.
`BUYER_DEBIT_REFUND_PAYMENT`
:   `111` Occurs when the buyer's payment source (e.g. credit card, PayPal account) is credited for the refund.

### Store Activities

`STORE_CREDIT_ITEM_PAYMENT`
:   `200` Occurs when a store receives payment for the sale of an item.
`STORE_DEBIT_PAYMENT_PROCESSING_FEE`
:   `201` Third-party payment processing fee. For example, 2.9% + 30¢. Only collected when applicable.
`STORE_DEBIT_OKANJO_COMMISSION_FEE`
:   `203` Commission collected by Okanjo for facilitating the sale of an item. Only collected when applicable.
`STORE_DEBIT_DONATION`
:   `205` Donation given to a cause for the sale of an item. Only collected when applicable.
`STORE_CREDIT_DONATION`
:   `206` Occurs when the cause store receives a donation for the sale of an item.
`STORE_DEBIT_DONATION_OKANJO_COMMISSION_FEE`
:   `207` Commission collected by Okanjo for facilitating the donation of an item. Only collected when applicable.

`STORE_DEBIT_DISBURSEMENT_FEE`
:   `221` Third-party disbursement processing fee. For example, 25¢ for direct deposits, 2% up to $1 for PayPal.
`STORE_DEBIT_DISBURSEMENT`
:   `223` Withdrawal to the store's payout source, such as a bank account or PayPal.

### Store Subscription Activities

`STORE_CREDIT_PAYMENT`
:   `230` Occurs when the store's payment source (e.g. credit card) is debited and credited to their Okanjo account.
`STORE_DEBIT_PURCHASE`
:   `231` Occurs when the store purchases a subscription or renewal.
`STORE_CREDIT_REFUND_PURCHASE`
:   `240` Occurs when the store receives a refund for subscription.
`STORE_DEBIT_REFUND_PAYMENT`
:   `241` Occurs when the store's payment source (e.g. credit card) is credited for the refund.

### Store Refund Activities

`STORE_CREDIT_REVERSE_DISBURSEMENT`
:   `250` Occurs when the disbursement was reversed.
`STORE_CREDIT_REVERSE_DISBURSEMENT_FAILED`
:   `252` Occurs when the disbursement failed to be deposited.
`STORE_CREDIT_REFUND_DISBURSEMENT_FEE`
:   `254` Occurs when the disbursement fee is refunded back to the store.

`STORE_CREDIT_REFUND_DONATION_OKANJO_COMMISSION_FEE`
:   `260` Refund to the cause store for the commission taken for the donation of an item.
`STORE_DEBIT_REFUND_DONATION`
:   `261` Refund on the cause store back to the origin (donating) store.
`STORE_CREDIT_REFUND_DONATION`
:   `262` Refund to the store from a cause store.
`STORE_CREDIT_REFUND_OKANJO_COMMISSION_FEE`
:   `264` Refund to the store for the commission taken for the sale of an item.
`STORE_CREDIT_REFUND_PAYMENT_PROCESSING_FEE`
:   `266` Refund to the store for the payment processing fee taken by the third-party.
`STORE_DEBIT_REFUND_ITEM_PAYMENT`
:   `267` Refund to the buyer for the purchase of an item.

### Organizational and Marketplace Activities

`ORG_CREDIT_SALE_COMMISSION`
:   `300` Occurs when a commission is received for the sale of an item.
`ORG_DEBIT_REFUND_SALE_COMMISSION`
:   `301` Occurs when a commission is refunded for the sale of an item
`ORG_CREDIT_DONATION_COMMISSION`
:   `310` Occurs when a commission is received for the donation of an item.
`ORG_DEBIT_REFUND_DONATION_COMMISSION`
:   `311` Occurs when a commission is refunded for the donation of an item.
`ORG_CREDIT_SUBSCRIPTION_COMMISSION`
:   `320` Occurs when a subscription commission is received.
`ORG_DEBIT_REFUND_SUBSCRIPTION_COMMISSION`
:   `321` Occurs when a subscription commission is refunded.
`ORG_DEBIT_REFUNDED_PAYMENT_FEE`
:   `331` Occurs when a third-party payment fee is refunded.
`ORG_DEBIT_REVERSED_DISBURSEMENT_FEE`
:   `333` Occurs when a third-party disbursement fee is refunded.
`ORG_CREDIT_OTHER`
:   `340` Miscellaneous credit.
`ORG_DEBIT_OTHER`
:   `341` Miscellaneous debit.


## UserStatus

User object status codes.

`DISABLED`
:   `0` User has been deactivated and is no longer accessible.
`ACTIVE`
:   `1` User is active and can access Okanjo.
`GUEST`
:   `2` User is a guest and has not completed user registration.


## VanityURLType

Okanjo vanity object types.

`STORE`
:   `store` Vanity URI pointer for a store.
`CAUSE`
:   `cause` Vanity URI pointer for a cause.
`CATEGORY`
:   `category` Vanity URI pointer for a category landing page.
