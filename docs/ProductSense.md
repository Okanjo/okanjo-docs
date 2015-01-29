# ProductSense Beta

Piloted in early 2014, ProductSense is Okanjo's technology solution to unify the marketplace with content.

Simply stated, ProductSense analyses the content of a web page or article and returns related products from the marketplace.

ProductSense can be utilized directly through the API or through the ProductSense Widget.

# API

## POST /products/sense

Controller. Retrieve products based on the content of a URL or given text.

### Entity NVP Parameters

`url`
:   `string` The URL of an HTML document to analyse. Required if `text` is not given.
`text`
:   `string` The given text to analyse. Required if `url` is not given.
`selectors`
:   `string csv` Optional. A CSV list of [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), used to pick what content to analyse from the given `url`. Defaults to `p,title,meta[name="description"],meta[name="keywords"]`.
`local_to`
:   `int` Optional. Limits products returned to a specific region DMA. See [Regions](Regions.html#Regions). Defaults to everywhere.
`store_id`
:   `int` Optional. Limits products returned to a specific store. Defaults to all stores.
`brand_id`
:   `int` Optional. Limits products returned to stores belonging to the given brand. Defaults to all brands.
`page_size`
:   `int` Optional. Specifies how many products to return. Please note that you may not receive the full number of products you ask for.
`page_start_index`
:   `int` Optional. Specifies the zero-based starting point in the result set.
`scan_for`
:   `string csv` Optional. A CSV of types of things to extract from the content. Allowed: `entities`, `keywords`, and `concepts`. Defaults to all. ***This field is temporarily enabled during the beta testing period.***
`sentiment`
:   `string csv` Optional. A CSV list of sentiment flags. Allowed: `ignore`, `positive`, `mixed`, `negative`, `neutral`. Defaults to `ignore`. ***This field is temporarily enabled during the beta testing period.***
`max_keywords`
:   `int` Optional. Specifies the maximum number of keywords derived from the content to use. This helps to drop outlying keywords. Defaults to `10`. ***This field is temporarily enabled during the beta testing period.***
`relevancy_filter`
:   `int` Optional. Filters keyword relevancy score below a given percentage. Defaults to `40`. ***This field is temporarily enabled during the beta testing period.***

> Note: Please be aware that some fields are currently enabled during the beta program and may be removed when the beta testing period expires.


### Returns

[`ProductSenseResult`](Objects.html#ProductSenseResult) object.


### Errors

**400 Bad Request**
:   `Require: url or text` Occurs when the user is winning the auction, but provided a lower max bid than their previously given bid.
**500 Internal Server Error**
:   `System error.` Occurs when the request failed to be fulfilled.
**503 Service Unavailable**
:   `Service unavailable.` Occurs when the ProductSense service is temporarily unavailable.


# ProductSense Widget

The ProductSense widget is a Okanjo-hosted JavaScript widget that directly inserts related products onto a web page.


## Prerequisites

In order to use the ProductSense widget, you will need the following.

### Widget Key

In order to use the ProductSense widget, you will need to obtain a widget key from the [Okanjo Support](https://help.okanjo.com/customer/portal/emails/new) team.

Widget keys are unique per customer application. When requesting a widget key, please be sure to include the domain name(s) where the widget is to be used.

### Marketplace

To fully customize the ProductSense experience, you will need your own Okanjo Marketplace to configure your brand's display template.


## Configuration

### Embedding The Widget

There are several ways in which to implement the ProductSense widget, automatically, asynchronously and manually.

#### Automatic Loading

This method is the most basic option, that takes specified elements on a page (elements with the class `ok-product-sense`) and loads the ProductSense widget into those elements.


To utilize this method:

 * Create an element on the page that ProductSense should load into. For example:

```
<div class="ok-product-sense" data-url="http://example.com/canonical/url" data-page-size="4"></div>
```

 * Make sure to include any configuration parameters necessary to your implementation.

> To set the ProductSense configuration on an element, set data attributes according to the [api route specification](ProductSense.html#Entity NVP Parameters) listed above, using dashes instead of underscores.

 * Load the ProductSense widget JavaScript file. You should put this near the bottom of the page.

```
<script src="https://shop.okanjo.com/widgets/okanjo.productsense.min.js?key=AKyourWidgetKeyHere"></script>
```

> Note: you should replace shop.okanjo.com with your hosted marketplace domain name.

 * When you load the page, you should start seeing related products on your website! If you do not, open the developer console of your browser and look for error messages given by ProductSense.

> Note: The most common error for ProductSense not to work is an invalid widget key or domain origin was used.

#### Asynchronous Loading

This method is a bit more advanced, in that it allows for some programmatic loading of the widget. Use this method when
no predefined locations on the page exist on DOM load, or you wish to do some basic customization of how ProductSense gets loaded on the page.


To utilize this method, you'll need to have a basic understanding of JavaScript. For example:

```
(function( container, key, config ) {
    var d = document,
        widget = d.createElement('div'),
        container = container.nodeType ? container : d.getElementById(container),
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
    script.src = d.location.protocol+"//shop.okanjo.com/widgets/okanjo.productsense.min.js?key="+key; // Note: you should replace shop.okanjo.com with your hosted marketplace domain name.
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

This code block will dynamically add the ProductSense widget to a DOM element or ID of an element on the page,
dynamically load the JavaScript file, and allows you to specify the widget configuration programmatically.


### Manual Loading

This is the most programmatic way of implementing ProductSense on a page. In this method, a global flag is declared to stop ProductSense from initializing on DOM ready.

Here's an example of how to manually load ProductSense:

```
<script>
    // Flag okanjo widgets not to initialize on DOM ready
    // This has to be set before the okanjo.productsense.min.js script is loaded!
    window.okanjoNoAutoLoad = true;
</script>

<div class="ok-product-sense" data-url="http://example.com/canonical/url" data-page-size="4"></div>
<script src="https://shop.okanjo.com/widgets/okanjo.productsense.min.js?key=AKyourWidgetKeyHere"></script>

<script>

    // Optionally assign the widget key to the global window okanjo namespace (e.g. instead of in the script tag)
    okanjo.widgetKey = 'AKyourWidgetKeyHere';

    // Instantiate new instances of ProductSense for any element with the specified class
    var elements = document.getElementsByClassName('ok-product-sense'),
        instances = [];

    for(var i = 0; i < elements.length; i++) {

        // Create a new ProductSense instance
        var ps = new okanjo.ProductSense(element, {
            noAutoLoad: true, // Optional, you can choose to skip the initialization in the constructor and do it manually
            widgetKey: 'AKyourWidgetKeyHere' // You can have this instance use a specific widget key instead of a global one
            /*
             * Assign any configuration parameters if the target element does not have any data attributes set
             * For example, url, page_size, text, etc...
             * See the API route documentation for complete list of configuration options.
             */
        });

        // Do something with the widget if you so choose, like extend, hack or whatever you would like!
        // For example, if you find our super basic CSS to be offensive, you could override the method, like so:
        ps.ensureCss = function() { };

        // Or maybe you want to specify your own methodology for client-side caching:
        ps.getCacheKey = function() { return "i know what i want this key to be" };

        // When you're done playing, boot up the instance
        ps.init();

        // Hold on to the instance in case you want to access it again later
        instances.push(ps);
    }

</script>
```

We've abstracted the `init` function code into as many prototype methods as possible, making it easy to customize specific portions of the widget.
Have a peek in your browser's JavaScript console by inspecting `okanjo.ProductSense.prototype`.

You can take a gander at our unminified build, [here](https://shop.okanjo.com/widgets/okanjo.productsense.min.js).

### CSS

The ProductSense widget ships with its own built in base styles:

```
.ok-product-container { list-style-type:none; padding:0; }
.ok-product { float:left; width:130px; text-align:center; margin-right:25px; }
.ok-product-title { margin:0 }
```

Feel free to add overriding styles to your site's existing CSS files, or if using [manual mode](ProductSense.html#Manual Loading), you can customize the global widget styles like so:

```
okanjo.ProductSense.Css.base = '/* your css styles here */';
```

### Product Template

Okanjo uses Twig templates on the marketplace to render the product data into markup for your website. Here is the base template that can be customized:

```
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

## Getting Good Results

While Okanjo does their best to pair products with content, sometimes pairings can be unpredictable. This can be due to several factors:

### Okanjo is having trouble analysing the page content

The out-of-the-box configuration will probably not fully suit your website's needs. Nobody knows your page structure and content better than you do!

The best thing you can do to maximize content digestion, is to make sure that you provide the best content to Okanjo.

 * **Specify the page selectors that match your content**. For example, send the selectors to your article title, article copy, keywords, tags, and any other relevant data.
 * **Specify a canonical url**. Some websites utilize a pay-wall, or other asset that manipulates the DOM after answering some questions by an advertiser. If Okanjo cannot read the content of the current page, then they will need a "robot" url that can.
 * **Contact the Okanjo support team**. They will be able to help pinpoint what content is being considered, how it's being digested and offer tips to ensure the best result.

### Okanjo is returning unexpected results

Good content analysis is one thing, however good quality products is another. In order to best products to content,
Okanjo also has to understand what a product is about. Stress to your stores that better quality product titles, descriptions
and tags will dramatically improve product pairings alongside content.

Additionally, not having a large enough product base to choose from may hinder expectations. If you're using configuration settings to limiting results
(e.g. `local_to`, `store_id`, `brand_id`, etc) you're effectively limiting the product pool to choose from. The general rule is, the larger the pool, the better the results will be.

### I have no idea what's going on

No problem! Contact the [Okanjo support](https://help.okanjo.com/customer/portal/emails/new) team. They're happy to help with your implementation and will help you get the best results.