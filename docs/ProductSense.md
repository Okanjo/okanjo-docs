# ProductSense Beta

Piloted in early 2014, ProductSense is Okanjo's technology solution to unify the marketplace with content.

Simply stated, ProductSense analyses the content of a web page or article and returns related products from the marketplace.

ProductSense can be utilized either directly through the API or through the ProductSense Widget.

# API

## POST /products/sense

Controller. Retrieve products based on the content of a URL or the given text.

### Entity NVP Parameters

`url`
:   `string` The URL of HTML content to analyse. Required if `text` is not given.
`text`
:   `string` The given text to analyse. Required if `url` is not given.
`selectors`
:   `string csv` Optional. A CSV list of [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), used to extract content from the given `url`. Defaults to `p,title,meta[name="description"],meta[name="keywords"]`.
`scan_for`
:   `string csv` Optional. A CSV of types of things to extract from the content. Allowed: `entities`, `keywords`, and `concepts`. Defaults to all enabled.
`local_to`
:   `int` Optional. Limits products returned to a specific region DMA. See [Regions](Regions.html#Regions). Default is all regions.
`store_id`
:   `int` Optional. Limits products returned to a specific store. Default is all stores.
`brand_id`
:   `int` Optional. Limits products returned to stores belonging to the given brand. Default is all brands.
`page_size`
:   `int` Optional. Specific to collections and stores, specifies how many products to return.
`page_start_index`
:   `int` Optional. Specific to collections and stores, specifies the starting point in the result set.
`sentiment`
:   `string csv` Optional. A CSV list of sentiment flags. Allowed: `ignore`, `positive`, `mixed`, `negative`, `neutral`. Default: `ignore`. ***This field is temporarily enabled during the beta testing period.***
`max_keywords`
:   `int` Optional. Specifies the maximum number of keywords derived from the content to use. This helps to drop outlying keywords. Defaults to `10`. ***This field is temporarily enabled during the beta testing period.***
`relevancy_filter`
:   `int` Optional. Filters keyword relevancy score below a given percentage. Defaults to `40`. ***This field is temporarily enabled during the beta testing period.***

> Note: Please be aware that some fields are currently enabled during the beta program and may not continue to be available when the beta testing period expires.


### Returns

[`ProductSenseResult`](Objects.html#ProductSenseResult) object.

### Errors

**400 Bad Request**
:   `Require: url or text` Occurs when the user is winning the auction, but provided a lower max bid than their previously given bid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.
**503 Service Unavailable**
:   `Service unavailable.` Occurs when the ProductSense service is temporarily


# ProductSense Widget

The ProductSense widget is a Okanjo-hosted JavaScript widget that directly inserts related products on a web page.


## Prerequisites

### Marketplace

To fully customize the ProductSense experience, you may need your own Okanjo Marketplace to configure your brand's display template.

### Widget Key

In order to use the ProductSense widget, you will need to obtain a widget key from [Okanjo Support](https://help.okanjo.com/customer/portal/emails/new).

Widget keys are unique per customer application. When requesting a widget key, please be sure to include the domain name(s) in which widgets will be used.


## Configuration

### Embedding The Widget

There are two ways to utilize the ProductSense widget, automatically and asynchronously.

#### Automatic Loading

This method is the most basic option, that takes specified elements on a page and loads the ProductSense widget into those elements.


To utilize this method:

1. Create an element on the page that ProductSense should load into. For example:

```html
<div class="ok-product-sense" data-url="http://example.com/canonical/url" data-page-size="4"></div>
```

2. Make sure to include any configuration parameters necessary to your implementation.
3. Load the ProductSense widget JavaScript file. You can put this near the bottom of the page.

```html
<script src="https://shop.okanjo.com/widgets/okanjo.productsense.min.js?key=AKyourWidgetKeyHere"></script>
```

4. Save and load the page. You should now see products on your website! If you do not, open the developer console of your browser and look for error messages given by ProductSense.

#### Asynchronous Loading

This method is the more advanced option, that allows for some programmatic loading of the widget. Use this method when no predefined locations on the page exist on DOM load.


To utilize this method, you'll need to be somewhat familiar with JavaScript. For example:

```js
(function( container, key, config ) {
    var d = document,
        widget = d.createElement('div'),
        container = d.nodeType ? container : d.getElementById(container),
        script = d.createElement("script");

    // Setup the widget target
    widget.className = 'ok-product-sense';
    config = config || {};
    for(var i in config) { if (config.hasOwnProperty(i)) { widget.setAttribute('data-' + i.replace(/_/, '-') , config[i]); } }
    container.appendChild(widget);

    // Add the script on the page
    script.id = 'ok-product-sense-js';
    script.type = "text/javascript";
    script.async = true;
    script.src = d.location.protocol+"//shop.okanjo.com/widgets/okanjo.productsense.js?key="+key;
    d.body.appendChild(script);

})(document.body /* or string id of the element */, 'WK-your-widget-key', { /*

    // Requires one of these, either-or not both. If none given, then the current page url is used.
    url: 'http://example.com/canonical/url',  // The URL to digest
    text: null,  // The given text to digest

    // Url Params
    selectors: 'p,title,meta[name="description"],meta[name="keywords"]',  // CSV of page element selectors, default: p,title,meta[name="description"],meta[name="keywords"]

    // Experimental / Invisible Knobs - Pre-Processor Settings
    scan_for: 'entities,keywords,concepts',  // CSV of types of things to try to pull out of the body, default (all): entities,keywords,concepts
    sentiment: 'ignore',  // CSV of sentiment flags. Options: ignore,positive,mixed,negative,neutral ; Default: ignore
    max_keywords: 10,  // Maximum number of keywords to use to help drop outliers, default: 10
    relevancy_filter: 40,  // Filter product scores below a certain percentage, default: 40

    // Product Filter Criteria
    local_to: null,  // Limit products that belong to a certain region (dma), e.g. 617. default: null
    store_id: null,  // Limit products to a certain store, default: null
    brand_id: null,  // Limit products to a certain brand, default: null

    // Pagination
    page_start_index: 0,  // The index of the result set to start at, starting from 0. default: 0
    page_size: 5  // The number of products to return, default: 5

*/ } );
```


### Product Template

Okanjo uses Twig templates to render the product data into markup on your website. Here is the base template Okanjo offers maketplaces to customize.

```html
<div class="ok-product-sense-container">
    <ul class="ok-product-container">
        {% for product in products %}
            <li class="ok-product">
                <a href="{{ app.brand.web_home|default('https://okanjo.com') }}/item/{{ product.slug }}?ref=PS">
                    <div class="ok-product-image-container"><img class="ok-product-image" src="{{ product.media[product.thumbnail_media_id].thumbnail_desktop|raw }}" title="{{ product.title }}"></div>
                    <div class="ok-product-title-container"><span class="ok-product-title">{{ product.title }} {#{% if app.brand.display_name %}<span class="ok-brand-name"> ({{ app.brand.display_name }})</span>{% endif %}#}</span></div>
                </a>
            </li>
        {% endfor %}
    </ul>
</div>
```



