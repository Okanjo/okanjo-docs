
# Sales Tax (BETA)

Okanjo offers the ability to get real-time sales tax rates for an item at checkout time.


## Prerequisites

In order to take advantage of collecting sales tax, you must satisfy the following requirements.

 * Your store must have an active subscription or free trial.
 * Your store must have at least one `nexus` type [`Address`](Objects.html#Address).
 * Your product(s) must have `is_taxable` set to `1` (enabled).

## Checkout Process

To utilize sales tax during checkout, you **should** use the [`POST /checkout/rates`](Checkout.html#POST /checkout/rates) route to
get the applicable sales tax rates for the cart items. The route takes the same request as the [`POST /checkout`](Checkout.html#POST /checkout) route,
so client-side implementation is easily integrated.

The biggest difference in flow to the checkout process, is that the buyer shipping address must be known prior to quoting sales tax. The order of operations is:

1. Get buyer shipping address
2. Quote shipping and sales tax ([`POST /checkout/rates`](Checkout.html#POST /checkout/rates))
3. Present the buyer with the quoted shipping options and allow them to select which one they want. The UI can show the total cost of the order since tax information is available as well.
4. Create the order ([`POST /checkout`](Checkout.html#POST /checkout))
5. Choose a payment method and confirm the order ([`POST /checkout/confirm`](Checkout.html#POST /checkout/confirm))

## Transactions

The sales tax of the item will be credited to your store account separately, and as a result will not be affected by donations or commissions.

## Tax Exemption

Some customers may have tax exemption status and would not want sales tax to be collected on purchases.
These customers should contact support@okanjo.com and provide proof of their tax exemption status. Once verified,
Okanjo will mark their accounts as tax exempt, eliminating sales tax collection during checkout.