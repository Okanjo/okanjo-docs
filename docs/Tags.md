# Tags

Tags are used to classify non-contextual descriptors on products.

# Objects

* [`Tag`](Objects.html#Tag) – Product descriptor.


# Routes

## GET /tags

Collection. Searches for tags that match or partially match the search parameter. **Requires no authentication.**

> * Note: This route is incomplete, as it only supports searching. Future expansion of this route for pagination is pending. *

### Query Parameters

Required or it blows up.

`search`
:   `string` Required. Exact or partial tag string to search for.


### Returns

Array of [`Tag`](Objects.html#Tag) objects, or an empty array if no matches are found.

### Errors

**404 Not Found**
:   `Tag not found.` Occurs when the search parameter is not provided.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when the API failed to fulfil the request.



## GET /tags/{name}

Resource. Gets a tag by its name. **Requires no authentication.**

### Query Parameters
None.


### Returns

[`Tag`](Objects.html#Tag) object.

### Errors

**404 Not Found**
:   `Tag not found.` Occurs when the tag does not exist.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when the API failed to fulfil the request.


