# Tags

Tags are used to classify non-contextual attributes on products.

# Objects

## Tag

A non-contextual product attribute.

`id`
:   `int`  The unique ID of the tag.
`auth_level`
:   `int`  The authentication level of the tag. For internal use only, or client-side filtering. See [`AuthLevel`](Constants.html#AuthLevel).
`name`
:   `string (64)`  The tag name.


# Routes

## GET /tags

Collection. Searches for tags that match or partially match the search parameter. **Requires no authentication.**

### Query Parameters

Required or it blows up.

`search`
:   `string` Required. Exact or partial tag string to search for.


### Returns

Array of [`Tag`](Tags.html#Tag) objects, or an empty array if no matches are found.

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

[`Tag`](Tags.html#Tag) object.

### Errors

**404 Not Found**
:   `Tag not found.` Occurs when the tag does not exist.
**500 Internal Server Error**
:   `Unable to handle request.` Occurs when the API failed to fulfil the request.


