
# Promotions

Coupons and promotional codes.

Promotions have been used to discount or entirely-remove commission rates on sold items.

> ** Stub. Promotions implementation is light and may be expanded in the future **

# Objects

* [`Promotion`](Objects.html#Promotion) – Sale-based promotion.


# Routes

## GET /promotions/{code}

Resource. Returns information about the given promotion code. **Requires user level authentication.**

### Query Parameters

None.

### Returns

[`Promotion`](Objects.html#Promotion) object when valid.

### Errors

**404 Not Found**
:   `Promotion not found.` Occurs when the given promotion is invalid, expired, etc.
**500 Internal Server Error**
:   `Failed to retrieve promotion.` Occurs when the API could not complete the request.

