
# Categories

Categories make up the hierarchical system for organizing products on the Okanjo.

Categories are an extension of the tagging system and are used to hierarchically organize tags. Since tags can be used
in multiple contexts, Categories provide contextual meaning of tags.

For example, the `"Other"` tag has no particular context, unless it’s organized under the category path, `“Art > Print > Other”`.

All categories refer to a tag, however, not all tags refer to a category.

Categories may only have a one parent. They may have zero or more children. A tag referenced by a category may also be
referenced by a different category.

# Objects

## Category

Categories are used to create a hierarchical structure (taxonomy) for organizing products.

`id`
:   `int` The unique ID of the category.
`parent_id`
:   `int` The unique ID of the category’s parent.
`tag_id`
:   `int` The associated category’s original Tag id.
`name`
:   `string (255)` Name of the category.
`port`
:   `int` The heretical left-side value of the category.
`starboard`
:   `int` The heretical right-side value of the category.
`depth`
:   `int` How deep the category is in the taxonomy.
`okanjo_url`
:   `string (255)` Nullable. An optional landing page URL (e.g. vanity url)
`children`
:   [`Category []`](Categories.html#Category) Nullable. Embeddable. Array of sub-categories.
`parent`
:   [`Category`](Categories.html#Category) Nullable. Embeddable. The parent category object.


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

> An important note is that the `all_children` embed returns the entire category taxonomy. This can be very useful and a time saver.

### Returns

Array of [`Category`](Categories.html#Category) objects. Can be an empty array if no categories match the given filtering criteria.

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

[Category](Categories.html#Category) object.

### Errors

**404 Not Found**
:   `Category not found.` Occurs when the given category was not found.
**500 Internal Server Error**
:   `Failed to retrieve category.` Occurs when the request failed to be fulfilled.