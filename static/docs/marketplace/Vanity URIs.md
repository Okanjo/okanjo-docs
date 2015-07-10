# Vanity URIs

The Vanity URI system is used to allow stores and causes to create a "reserved" uri path that can be used as a sub-domain or base path in a URI.

For example:
>   `kevin` could be used as:
>   `okanjo.com/kevin` or
>   `kevin.okanjo.com` or
>   `shoplocal.onmilwaukee.com/kevin`


# Routes

## GET /vanity-uris/{uri}

Resource. Gets the resource belonging to that URL. Could result in one of: `Category`, `Cause` or `Store`.

### Query Parameters

Anything passed to it will be transferred to the `Category`, `Cause`, or `Store` that is found.

### Returns

* [`Category`](Objects.html#Category) or
* [`Cause`](Objects.html#Cause) or
* [`Store`](Objects.html#Store)

### Errors

**404 Not Found**
:   `Vanity URI not found.` Occurs when no resource belongs to a given URI.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when an exception occurs.

