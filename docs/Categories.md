
# Categories

Categories make up the hierarchical system for organizing products on the Okanjo.

Categories are an extension of the tagging system and are used to hierarchically organize tags. Since tags can be used
in multiple contexts, Categories provide contextual meaning of tags.

For example, the `"Other"` tag has no particular context, unless it’s organized under the category path, `“Art > Print > Other”`.

All categories refer to a tag, however, not all tags refer to a category.

Categories may only have a one parent. They may have zero or more children. A tag referenced by a category may also be
referenced by a different category.

## Caching
Okanjo internally taxonomies for 15 minutes. For most browse-clients, we suggest application-caching the taxonomy tree for the same amount of time.

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
*Fields & Includes*
`fields`
:   `csv` When given, only returns the given fields. Field `id` will be included even if not specified.
`embed`
:   `csv` When given, includes the additional resources. Accepts: `children`, `parent`.


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
:   `csv` When given, includes the additional resources. Accepts: `children`, `parent`, `all_parents`. The `all_parents` embed will embed all ancestor categories.


### Returns

[Category](Objects.html#Category) object.

### Errors

**404 Not Found**
:   `Category not found.` Occurs when the given category was not found.
**500 Internal Server Error**
:   `Failed to retrieve category.` Occurs when the request failed to be fulfilled.


## GET /categories/tree

Resource. Gets the complete category taxonomy for the current marketplace.

### Query Parameters

None.

### Returns

[Category](Objects.html#Category) tree object, starting from the root category.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve category.` Occurs when the request failed to be fulfilled.