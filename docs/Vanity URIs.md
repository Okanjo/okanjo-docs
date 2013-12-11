# Vanity URIs

The Vanity URI system is used to allow stores and causes to create a "reserved" uri path that can be used as a sub-domain or base path in a URI.

For example:
>   `kevin` could be used as:
>   `okanjo.com/kevin` or
>   `kevin.okanjo.com` or
>   `shoplocal.onmilwaukee.com/kevin`


# Routes

## GET /vanity-url/{url}

Resource. Gets the resource belonging to that URL. Right now, can be either a Cause or a Store

### Query Parameters

Anything passed to it will be transferred to the [`Cause`](Causes.html#Cause) or [`Store`](Stores.html#Store) that is found

### Returns

* [`Cause`](Causes.html#Cause)
* [`Store`](Stores.html#Store)

### Errors

**404 Not Found**
:   `Vanity URL not found.` Occurs when no resource belongs to a given URL.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when an exception occurs.

