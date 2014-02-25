
# Regions

Regions represent standardized [DMA](https://developers.google.com/adwords/api/docs/appendix/cities-DMAregions) codes.

Regions are used for localized experiences on the okanjo platform.

Okanjo uses region id `0` to represent the Everywhere region, referring to all possible regions. It may also be used when no region can be derived.

# Objects

* [`Region`](Objects.html#Region) – Region information


# Routes

## GET /regions

Resource. Returns all known and *active* Regions by default.

### Query Parameters

*Filtering*
`id`
:   `int csv` Gets region information for the given DMA code.
`postal_code`
:   `string` Gets region information for the DMA that contains the given postal code.
`status`
:   `int` Gets regions by the given status. See [`RegionStatus`](Constants.html#RegionStatus).
*Fields & Includes*
`fields`
:   `csv` Future. Not Implemented.
`embed`
:   `csv` When given, includes the additional linked resources. Accepts: `postal_codes`



### Returns

[`Region`](Objects.html#Region) object, or empty array if nothing matches search criteria. If no criteria are given, the Everywhere (`0`) region may appear.

### Errors

**500 Internal Server Error**
:   `Failed to retrieve region.` Occurs when the API could not complete the request.


## GET /regions/{id}

Resource. Currently returns the regional information of the querying client by default.

### Query Parameters

*Fields & Includes*
`fields`
:   `csv` Future. Not Implemented.
`embed`
:   `csv` When given, includes the additional linked resources. Accepts: `postal_codes`


### Returns

[`Region`](Objects.html#Region) object.

### Errors

**404 Not Found**
:   `Region not found.` Occurs when the given region code was not found.
**500 Internal Server Error**
:   `Failed to retrieve region.` Occurs when the API could not complete the request.


