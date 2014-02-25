
# Media

This is where things get interesting.

Media Images are currently the only format supported by the API.

Currently, media can only be obtained as an embed on an object. In the future, we plan to allow access to all
user-uploaded media for management and re-use.

# Objects

* [`Media`](Objects.html#Media) – Media object


## Media Embeds

Embedded Media format on resources by attaching media elements as associative objects. For example:

```js
"media": {
    "ID": {
        "original": "URI",

        "{SIZE}_{FORMAT}": "URI",

        "{SIZE}_{FORMAT}_width": "URI",

        "{SIZE}_{FORMAT}_height": "URI",

 ...
    }
}
```

`id`
:   `int`  The unique ID of the media image.
`original`
:   `string`  The URI of the original image as uploaded by the owner. The image may be scaled down.
`size`
:   `string`  The platform the image is sized/cropped for. Returned options depend on purpose. See [MediaImageConstants](Constants.html#MediaImageConstants).
`format`
:   `string`  The formatting of the image. See [MediaImageConstants](Constants.html#MediaImageConstants).
`width`
:   `int` Nullable. The width of the image. Populated after the image is generated.
`height`
:   `int` Nullable. The height of the image. Populated after the image is generated.


Only the relevant size_format keys will be returned when embedded on resources. For example, on a [`Cause`](Objects.html#Cause) object, cart_desktop would not be included.

An example of media embedded on a [`Cause`](Objects.html#Cause) object:

```js
"media": {
    "922": {
        "original": "https://.../dev_922_desktop_original.png_188kr9.png",

        "banner_desktop": "https://.../dev_922_desktop_banner.png_yboug.png"
        "banner_desktop_width": "1074"
        "banner_desktop_height": "808"
    },
    "923": {
        "original": "https://.../dev_923_desktop_original.jpg_v086e.jpg",

        "avatar_desktop": "https://.../dev_923_desktop_avatar.jpg_rt6tx.jpg"
        "avatar_desktop_width": "1074"
        "avatar_desktop_height": "808"

        "detail_desktop": "https://21e982ec2b1aac0deb9...561ffb73b3904fcb.ssl.cf1.rackcdn.com/dev_ufq6r_228359_desktop_detail.jpg",
        "detail_desktop_width": "1074",
        "detail_desktop_height": "808",

        "detail_mobile_retina": "https://dev-api.okanjo.com/media/generate?id=228359&format=mobile_retina&size=detail",
        "detail_mobile_retina_width": null,
        "detail_mobile_retina_height": null,
    }
}
```

### Size Descriptions

See also [MediaImageConstants](Constants.html#MediaImageConstants).

`listing`
:   `Product` Used on product cards. Scaled to best fit and cropped from the middle to completely fill the bounds.
`detail`
:   `Product` Used in the product image viewer on the detail view. This is not the full-size image. Scaled and matted.
`thumbnail`
:   `Product` Used to show the thumbnail on file uploads and managing products (e.g. listing all image.) Scaled and matted.
`cart`
:   `Product` Used on the shopping cart view. Scaled and matted.
`avatar`
:   `User`, `Cause` Profile image. Square. Scaled to best fit and cropped from the middle to completely fill the bounds.
`banner`
:   `Store`, `Cause` Store header banner image. Scaled to best fit and cropped from the top.
`gallery`
:   `Product` Mobile full-size image.


# Routes

## POST /media

Resource. Uploads a new media image to the server. Expects multi-part message encoding. **Requires user level authentication.**

Only one media image may be uploaded per request.

>   ** Note: Entities should not included during the API signature generation. **

### Query Parameters

`purpose`
:   `string` Used to associate the upload with a specific use. Used with the id parameter. See [MediaImageConstants](Constants.html#MediaImageConstants).
`id`
:   `int` Optional. Used in conjunction with purpose to assign what object the image is to be associated with.
`filename`
:   `string` The user-given name of the file being uploaded.
`upload_checksum`
:   `string` The MD5 checksum of the file being uploaded. Used to prevent man-in-the-middle modification of the file.


### Entity Body

**Note: Send only [multi-part form data](http://tools.ietf.org/html/rfc2388) to this request.**

`file`
:   `binary` The raw binary content of the file. 8MB maximum.


### Returns

[`Media`](Objects.html#Media) object.

### Errors

**400 Bad Request**
:   `Require purpose.` Occurs when the purpose was not given as part of the upload.
:   `Unknown purpose.` Occurs when the purpose was not a valid option.
:   `Image checksum failed.` Occurs when the upload_checksum is not equal to the MD5 checksum of the uploaded file.
**500 Internal Server Error**
:   `Failed to upload image.` Occurs when the request could not be completed by the server.


## GET /media/generate

Controller. Generates and returns a 302 Found (redirect) to the image in the desired format. **Does not require an API key or signature.**

The Okanjo platform generally lazy-loads media on demand. URI's to this route may be included in media embeds.

### Query Parameters

`id`
:   `int` ID of the media image
`size`
:   `string` The size of the image to fetch. See [Size Descriptions](Media.html#sizedescriptions).
`format`
:   `string` The format of the image to fetch. See [Size Descriptions](Media.html#sizedescriptions).



### Returns

Returns 302 Found (redirect) with Location of the URL of the image on the Okanjo CDN.

### Errors

**400 Bad Request**
:   `Missing one or more parameters.` Occurs when `id`, `size`, or `format` were not given.
**404 Not Found**
:   `Media not found.` Occurs when the given media index was not found.
:   `Format not found.` Occurs when the given format was not valid.
:   `Size not found.` Occurs when the given size was not valid.
**500 Internal Server Error**
:   `Failed to generate image. Try again?` Occurs when something went wrong and the image could not be generated or located. Trying again may resolve the issue, but who knows. Anything is possible.
:   `There was a problem handling your request.` Occurs when something went wrong, and we don’t know exactly what it was.

