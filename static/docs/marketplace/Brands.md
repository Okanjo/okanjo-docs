
# Brands

Individual instances of Okanjo Marketplace are bound to a brand. [Okanjo.com](https://okanjo.com), is in effect, a brand, no different than
say [OnMilwaukee's ShopLocal](https://shoplocal.onmilwaukee.com) marketplace. The only thing that is different between
the two are the brands associated with the API and client implementation.

# Objects

* [`Brand`](Objects.html#Brand) – Brand configuration


# Routes

Here are the list of API routes to interact with brands.

## GET /brands

Collection. Gets all brands accessible by the API key or user token.

### Query Parameters

None.

### Returns

Associative set of [`Brand`](Objects.html#Brand) configurations. For example:

```js
{

   "1": {
        "template_prefix": "ok",
        ...
    } ...

}
```

Where `1` is the ID of the brand, and it's value is an associative set of key-value pairs.

### Errors

**401 Unauthorized**
:   `Insufficient privileges for this operation.`  Occurs when the request requires different privileges.
**500 Internal Server Error**
:   `Unable to handle request.`  Occurs when the request failed to be fulfilled.



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
