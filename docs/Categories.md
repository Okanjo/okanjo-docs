
# Categories

Categories make up the hierarchical system for organizing products on the Okanjo.

Categories are an extension of the tagging system and are used to hierarchically organize tags. Since tags can be used
in multiple contexts, Categories provide contextual meaning of tags.

For example, the `"Other"` tag has no particular context, unless it’s organized under the category path, `“Art > Print > Other”`.

All categories refer to a tag, however, not all tags refer to a category.

Categories may only have a one parent. They may have zero or more children. A tag referenced by a category may also be
referenced by a different category.

## Caching
Okanjo rarely makes changes to it's category taxonomy. We recommend caching the responses for your application.

# Objects

* [`Category`](Objects.html#Category) – Okanjo Category


# Routes

## GET /categories

Collection. By default, returns all categories at all depths, linearly.

### Query Parameters

All fields are optional. Accepts the standard pagination parameters.

*Filtering*
`id`
:   `int csv` Returns categories with the given category id or list of category id’s. e.g. `id=1` or `id=1,2,3,4,5`.
`name`
:   `string` Returns categories with the given name. Accepts wildcards, use `‘%’` like as in SQL.
`parent_id`
:   `int` Returns categories with the given parent.
`between`
:   `int csv` Returns categories that have port values between the given range. Used to get a hierarchical range. e.g. `between=10,20`.
`depth`
:   `int` Returns categories that have a specific depth.
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Field `id` will be included even if not specified.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `children`, `parent`, or `all_children`. Please note that `all_children` is not compatible with `children` or `parent` embeds, and is not compatible with the `id` filter.

> An important note is that the `all_children` embed returns the entire category taxonomy. This can be very useful, especially for caching.

### Returns

Array of [`Category`](Objects.html#Category) objects. Can be an empty array if no categories match the given filtering criteria.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve category.` Occurs when the request failed to be fulfilled.


## GET /categories/{id}

Resource. Gets a specific category by its unique identifier.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `children`, `parent`.


### Returns

[Category](Objects.html#Category) object.

### Errors

**404 Not Found**
:   `Category not found.` Occurs when the given category was not found.
**500 Internal Server Error**
:   `Failed to retrieve category.` Occurs when the request failed to be fulfilled.