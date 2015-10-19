# Okanjo-JS

Okanjo-JS is [Okanjo](http://okanjo.com)'s extensible widget framework that enables you to engage in native commerce by embedding customizable product listings or ads on a web page.

# Introduction

Okanjo’s Marketplace and Ad-Tech platforms transform content into commerce for publishers. These products enable 
publishers and advertisers to sell anywhere on the web. Okanjo’s contextual targeting technology delivers relevant 
shopping options to readers at the moment of interest and engagement. Then, transactions take place without ever 
leaving the publisher’s site. 

Okanjo-JS is the code used to embed this technology in a website or application. The JavaScript framework combines simplicity
with flexibility to meet almost every imaginable use-case.

## Prerequisites

#### Widget Key
In order to use Okanjo-JS, you'll need a widget key. Please [contact Okanjo](http://okanjo.com/en/contact/) to get your key.

#### CSS
Having a basic understanding of [Cascading Style Sheets](https://developer.mozilla.org/en-US/docs/Web/CSS) (CSS) will help you customize how widgets appear on your web page.

Additionally, in order to display contextual product matches using ProductMatch, you will need to tell the product widget how to extract content from the page or given URL. You will need
a basic understanding of CSS element selectors.

## Quick Start

### ProductMatch

Here's a really simple, usable example to give you an basic idea on how to use the product widget and [ProductMatch](#product-widget-productmatch) to show relevant products to an article.
When this block of HTML is loaded, three products related to the given URL will appear. It’s just that simple!

```html
<div class="product-widget-dropzone" 
   data-mode="sense" 
   data-take="3" 
   data-url="http://host.madison.com/sports/columnists/tom_oates/tom-oates-rise-of-five-veterans-critical-for-upcoming-season/article_24ca1584-03b8-5962-87d1-aa78fabe25b1.html" 
   data-selectors="h1,h3,div.entry-content,div.asset-description,div.asset-desc"
   data-pools="global">
</div>
<script src="https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js" crossorigin="anonymous"></script>
<script>

    // You can set the global key on the okanjo namespace, or you can set it as an option on the widget constructor
    okanjo.key = 'PUT_YOUR_WIDGET_KEY_HERE';

    // Create a product widget on the elements with given class
    var targets = okanjo.qwery('.product-widget-dropzone'), i = 0, p = [];
    for ( ; i < targets.length; i++) {
        p.push(new okanjo.Product(targets[i]));
    }

</script>
```

The product widget can be customized to suit virtually any scenario. See the [product widget section]() and [customization section]() for more details.

See the [examples section](#product-widget-examples-sense) to see what this looks like below.

### Ad Widget

Here's a usable example showing how you can display a simple creative image in the ad widget. 
 
```html
<div class="ad-widget-dropzone"
    data-size="medium_rectangle" 
    data-type="product" 
    data-id="PR2cKR3AitaHebMAe6g"
    style="outline:solid 1px #ccc;">
    <img style="margin:0;height:100%;width:auto;cursor:pointer;" 
         async="true" 
         src="//developer.okanjo.com/img/example-creative.jpg"/>    
</div>
<script src="https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js" crossorigin="anonymous"></script>
<script>

    // You can set the global key on the okanjo namespace, or you can set it as an option on the widget constructor
    okanjo.key = 'PUT_YOUR_WIDGET_KEY_HERE';

    // Create an ad widget on the elements with given class
    var targets = okanjo.qwery('.ad-widget-dropzone'), i = 0, a = [];
    for ( ; i < targets.length; i++) {
        a.push(new okanjo.Ad(targets[i]));
    }

</script>
```


### Ad Server

Here's an example of how you can leverage ProductMatch through a programmatic ad server such as Google's DFP. This snippet will attempt to 
bust out of the iFrame to provide expandable functionality if desired. If unable to do so, the ad units will fall back to non-expandable functionality.

> Both the Ad and Product widgets can be used in any mode.  **Provide either the `ad` or `match` configuration section, but not both.**
 
```html
<div id="okanjo-dropzone">
    <!-- Image only used in ad-creative mode --> 
    <img style="margin:0;height:100%;width:auto;cursor:pointer;" 
    async="true" 
    src="//developer.okanjo.com/img/example-creative.jpg"/>
</div>
<script>

    !function(a){var b=document,c=window,d=b.getElementById("okanjo-dropzone");try{if(c.top!==c.self)for(var e=c.top.document.getElementsByTagName("iframe"),f=0;f<e.length;f++){var g=e[f],h=g.contentDocument||e.contentWindow.document;if(h===document){d.removeAttribute("id"),g.parentNode.appendChild(d),g.style.display="none",b=c.top.document,c=c.top;break}}}catch(i){console.warn("[Okanjo]","Failed to bust out of the iframe to access native content. Falling back to non-expandable functionality!",i),a.ad&&(a.ad.expandable=!1),a.match&&(a.match.expandable=!1)}!function(b){var c=this,d=c.document,e=d.getElementsByTagName("body")[0],f=d.createElement("script"),g=!1;f.type="text/javascript",f.async=!0,f.setAttribute("crossorigin","anonymous"),f.onload=f.onreadystatechange=function(){g||this.readyState&&"complete"!=this.readyState&&"loaded"!=this.readyState||(g=!0,b.call(c))},f.src=a.src,e.parentNode.insertBefore(f,e)}.call(c,function(){var b=this;b.okanjo._widgets||(b.okanjo._widgets=[]),a.ad?b.okanjo._widgets.push(new b.okanjo.Ad(d,a.ad)):a.match?b.okanjo._widgets.push(new b.okanjo.Product(d,a.match)):console.warn("[Okanjo]","No ad or match configuration given, no widgets to load!")})}({
        src: "//cdn.okanjo.com/js/latest/okanjo-bundle.min.js",
        
        // INCLUDE EITHER THE ad OR match SECTION, BUT NOT BOTH!
        
        ad: {
            key: "PUT_YOUR_WIDGET_KEY_HERE",
            id: 'PR2cKR3AitaHebMAe6g',
            size: 'medium_rectangle',
            type: 'product',
            expandable: false
        }
        
        match: {
            key: "PUT_YOUR_WIDGET_KEY_HERE",
            mode: 'browse',
            take: 2,
            q: 'brew city',
            template_product_main: 'product.sidebar',
            expandable: false
        }
    });

</script>
```

See the [product widget configuration](#product-widget-configuration) or [ad widget configuration](#ad-widget-configuration) for more configuration options.


## Framework

Here's a visual overview of the components that make up the Okanjo-JS widget framework.

<img src="img/Okanjo-JS%20Overview.png" alt="">

Okanjo-JS is composed of two separate script builds, one containing the core logic and functionality (okanjo.js), and the other which
controls the visual appearance, or templates, of the widgets (okanjo-templates.js). Both scripts are combined together to make up the 
okanjo-bundle.js. When used on a page, you will need to include either `okanjo-bundle.js` or both 
`okanjo.js` and `okanjo-templates.js` scripts separately.

Architecturally, Okanjo-JS is designed to be lightweight, unobtrusive and customizable. By default, the widgets will include their
own base stylesheets. Since widgets load directly on the Document Object Model (DOM) of the page they are embedded on (e.g. no iFrames) they will 
inherit the page's applicable styles, generally making it easier to integrate and customize.


## CDN

For best results, we suggest using Okanjo's Content Distribution Network (CDN) to load Okanjo-JS.

Okanjo's CDN offers both the latest and past Okanjo-JS versions. We recommend using the latest version, though should the 
need arise, you may lock your application at a specific version of Okanjo-JS.

```
https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js
https://cdn.okanjo.com/js/v0.2.11/okanjo-bundle.min.js
```

Additionally, non-minified versions of Okanjo-JS are hosted on the CDN to help facilitate debugging and 
development. Simply remove replace the `.min.js` with `.js` to load the non-minified version.

For most applications, the bundle script will be the only include required to load Okanjo-JS. The bundle includes both the core 
and default template scripts.

```
https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js
```

You may also load the core and templates separately, in which case you would include both scripts.
 
```
https://cdn.okanjo.com/js/latest/okanjo.min.js
https://cdn.okanjo.com/js/latest/okanjo-templates.min.js
```

> Note: If loading asynchronously, the templates script must be loaded after the core (okanjo.js) has executed.  


## Embedding

Okanjo-JS can be embedded on a page in a ton of different ways. The more traditional method is to include the script
synchrounously and instantiate widgets on DOM or page load. Alternatively, Okanjo-JS can be included asynchronously, allowing for custom
loaders and integration in ad servers.

Using either method, the overall process goes like this:

1. Load and execute the Okanjo-JS script(s)
2. Create widget instances.

When the Okanjo-JS script(s) are executed (step 1), they will not automatically initialize widgets on the page. That must be done manually (step 2).

### Synchronously

This is the most basic and simplest method for loading widgets on a page. The premise is that the Okanjo scripts are 
embedded as a script tag, and the widget initialization is done later down on the page or on DOM ready / page load.

This method is best for sites that wish to include Okanjo-JS on every page of the site, and have a generic load function
to create widget instances on the page, if found. For example, find elements with a specific class name and create a widget instance. 

Take a look at the following example. The `div` with id `drop-zone` has a data attribute `data-take` with a value of `6` 
which specifies that six products should be rendered. The `script` tag loads the latest widget bundle from the Okanjo CDN, 
specifying the `crossorigin` attribute to ensure that 
[Cross-Origin Resource Sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), or CORS, does not pose a 
problem when communicating with the Okanjo platform. The second `script` tag sets the given widget key globally and 
creates a new instance of the [`Product`](#product-widget) widget.

```html
<div id="drop-zone" data-take="6"></div>
<script src="https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js" crossorigin="anonymous"></script>
<script>

    // You can set the global key on the okanjo namespace, or you can set it as an option on the widget constructor
    okanjo.key = 'PUT_YOUR_WIDGET_KEY_HERE';
    
    // Load a product widget an element of your choice
    var p = new okanjo.Product(document.getElementById('drop-zone'), { /* options, if any */ });
    
</script>
```

If you would like to load the core and templates separately, simply include both scripts separately, like so.

```html
<div id="drop-zone" data-take="6"></div>
<script src="https://cdn.okanjo.com/js/latest/okanjo.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.okanjo.com/js/latest/okanjo-template.min.js" crossorigin="anonymous"></script>
<script>
    // same initialization as before
</script>
```

> Remember: When loading synchronously, do not include an `async` attribute on the script tags, or the widgets will fail to load.


In most cases, you should use a class on a container element to indicate where you would like a product widget to load. 
This provides the most versatility and simplicity when including on multiple pages or across a website. In the following example, 
any element with class `okanjo-product` will receive a new product widget instance. Also, we use the included Qwery library
to find DOM elements for cross-browser compatibility. Lastly, the global `window.p` will receive all the live instances of
the product widgets.

```html
<div class="okanjo-product" data-max-price="5.00" data-take="2"></div>
<script src="https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js" crossorigin="anonymous"></script>
<script>

    // You can set the global key on the okanjo namespace, or you can set it as an option on the widget constructor
    okanjo.key = 'PUT_YOUR_WIDGET_KEY_HERE';
    
    // Create a product widget on the elements with given class
    var targets = okanjo.qwery('.okanjo-product'), i = 0, p = [];
    for ( ; i < targets.length; i++) {
        p.push(new okanjo.Product(targets[i]));
    }
    
</script>
```


### Asynchronously

Loading the widget asynchronously enables you to embed a widget on a page after the page has already loaded or programmatically
control the entire loading process.

The premise of asynchronous loading is the only one script tag is needed to load Okanjo-JS and create the widget instances.

> You'll need a basic understanding of JavaScript and the DOM to understand and customize these examples. 
 
Take a look at the following example. At the top, there is a `div` container that will receive the product widget we will 
dynamically create later in the script. This `div` could any any element on the page that you choose, but in this example, we
gave it an `id` so we can easily find it. Then, in the body of the script there are two parts, first part of the `function`
creates a new `script` element to load the Okanjo-JS bundle script asynchronously and attaches the script to the DOM. 
When the Okanjo-JS script loads, the second part of the script will execute as a callback. Here, the widget key is set
globally and a new DOM element is created to receive the product widget. The product widget is instantiated with the
given configuration options and attached to the `div` container.  


```html
<div id="my-container"></div>
<script>

    (function(callback) {

        // Create a new Okanjo-JS script tag and fire the callback when completed
        var es = document.getElementsByTagName('script')[0],
            o = document.createElement('script'),
            loaded = false;

        o.type = 'text/javascript';
        o.async = true;
        o.setAttribute('crossorigin', "anonymous");
        o.onload = o.onreadystatechange = function() {
            if (!loaded && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) { 
                loaded = true; 
                callback && callback(); 
            }
        };
        
        o.src = 'https://cdn.okanjo.com/js/latest/okanjo-bundle.min.js';
        es.parentNode.insertBefore(o, es);

    }).call(window, function() {

        // Set global widget key
        okanjo.key = "PUT_YOUR_WIDGET_KEY_HERE";

        // Create a new element to stick the widget in, and find the desired container
        var element = document.createElement("div"),
            container = document.getElementById('my-container');

        // Stick our element on the given container
        container.appendChild(element);

        // Create a new instance of the product widget with the given configuration
        window.myWidget = new okanjo.Product(element, { mode: 'browse', take: 6 });
        
        // ^ You can access the widget instance on the window or just throw it away

    });

</script>
```

If you would like to asynchronously load the core and templates separately, then take a look at the following example.
Only the script loading section differs from the previous example. Here, we asynchronously load the `okanjo.js` script.
When it completes, then we asynchronously load the `okanjo-templates.js` script. Once the template script is loaded, then
the initialization callback is fired.

```js

(function(callback) {

    // Create a new Okanjo-JS script tag and fire the callback when completed
    var es = document.getElementsByTagName('script')[0],
        o = document.createElement('script'),
        t = document.createElement('script'),
        oLoaded = false,
        tLoaded = false;

    o.type = t.type = 'text/javascript'; 
    o.async = t.async = true;
    o.setAttribute('crossorigin', "anonymous");
    t.setAttribute('crossorigin', "anonymous");
    o.onload = o.onreadystatechange = function() {
        if (!oLoaded && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) { 
            oLoaded = true; 
            
            t.onload = t.onreadystatechange = function() {
                if (!tLoaded && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) { 
                    tLoaded = true;
                    callback && callback();
                }
            };
            
            t.src = 'https://cdn.okanjo.com/js/latest/okanjo-templates.min.js';
            es.parentNode.insertBefore(t, es);
        }
    };
    
    o.src = 'https://cdn.okanjo.com/js/latest/okanjo.min.js';
    es.parentNode.insertBefore(o, es);

}).call(window, function() {

    // Set global widget key
    okanjo.key = "PUT_YOUR_WIDGET_KEY_HERE";

    // Create a new element to stick the widget in, and find the desired container
    var element = document.createElement("div"),
        container = document.getElementById('my-container');

    // Stick our element on the given container
    container.appendChild(element);

    // Create a new instance of the product widget with the given configuration
    window.myWidget = new okanjo.Product(element, { mode: 'browse', take: 6 });
    
    // ^ You can access the widget instance on the window or just throw it away

});

```


# Product Widget    

The product widget displays product tiles on a page. It can display products in several different modes:
 
Browse
:   Products that match the given filter criteria will be returned. You can use browse mode to display as many products as you would like.
Single
:   Given a unique product identifier, only that product tile will be displayed. 
Sense
:   Products that match the context of the current page content, given URL or text will be returned. You may use the filter criteria to further refine the products returned. 


## Native / Inline Buy 

The product widget hosts the native inline-buy experience for products that support it by having the `inline_buy_url` property set. 
By default, when a product supports an inline-buy experience, an interaction with the product will result in either a modal or expandable buy experience instead of a new window or page redirect.

For some implementations, the operator may wish to drive traffic to the `buy_url` even if a product supports an inline buy experience. This can be achieved by setting the `disable_inline_buy` parameter to `true`. See the [configuration](#product-widget-configuration) section. 

## ProductMatch

Okanjo's ProductMatch technology can be used to show products that are related to the content on the current page, given URL or text.

> To use ProductMatch, use the `sense` mode on the product widget.

### Optimizing Results

Okanjo strives to ensure that the products returned are relevant to the content received. 
To ensure the best results are returned, Okanjo must have the best page and product content in order to make accurate pairings.  
 
#### Page Content

By default, the product widget does its best to find the content on the current page. However, every website and page can be vastly different,
and as such as one-size-fits-all approach would be extremely difficult to achieve.

For Okanjo to really understand the content on a page, we ask that you:

##### Content Selectors
Please examine your page structure and set the `selectors` parameter to suit your page, and include the article title, article copy, keywords, tags, and any other relevant data.
This will ensure that Okanjo receives all the best information about the page.

> If we cannot receive good page content, then we cannot provide accurate product matches. 

#### Canonical URL
If no `url` parameter is given the product widget will attempt to derive the current page URL. By default, the page's query string and hash components are ignored. 

> Please make sure to specify the canonical URL to the page so that Okanjo can reliably crawl the page content.
 
This is especially important for sites that have multiple ways to view an article (such as an alternate mobile site), sites 
that utilize a pay-wall, or heavily dynamic sites where content is loaded programmatically (e.g. hash-bang / ajax sites.)

Additionally, sites that re-brand an article across many domains should specify a single unique canonical url across all of the domains.
   
> We must be able to access the content given the page URL. If we cannot access the URL, we cannot provide products.

If your system implements robot or crawler prevention methods, please make sure to whitelist our user agent.

Okanjo's ProductMatch crawler identifies itself as `OkanjoProductSense/<version>`. If needed, please contact Okanjo support
for information on whitelisting IP addresses, if needed. For example, our `User-Agent` header might like this.

```
OkanjoProductSense/0.1.0 (+https://okanjo.com/en/advertisers)
```

#### Product Content

Another factor that can cause wild results is the product content itself. Products with weak titles, descriptions and other information 
are inherently difficult to match to content. This may result in false positive or negative matches.
  
Okanjo attempts to weed-out products with weak content from ProductMatch results. You can opt-in to these results by setting `suboptimal` to `true`.

You may also consider using additional filter criteria to show products that you trust or help massage the results.


#### Troubleshooting

If you are experiencing problems, please contact the Okanjo support team for assistance. 

## Configuration

The product widget supports a large amount of configuration parameters to help you get the products you want to show.
 
The widget accepts the configuration parameters either in the constructor when instantiating a new widget or on the target element as data attributes. 
Take a look at the following example. The target element with `id=dropzone` uses data attributes to set configuration parameters. 

> Data attributes: For parameters that contain an underscore (`_`), substitute a dash (`-`). Additionally, parameter that accept an array of values, you can provide a CSV instead.

```html
<div id="dropzone" data-mode="browse" data-take="3" data-q="skyline print" data-min-price="10"></div>
```

The following example shows the same configuration as the previous data attribute example, but instead sends the configuration as an object in the widget constructor.

```js
var widget = new okanjo.Product(element, {
      mode: 'browse',
      take: 3,
      q: 'skyline print',
      min_price: 10
   };
```

> If both a data attribute and configuration parameter are given, the data attribute will take precedence.

### Common Parameters

These options are available in any product widget mode.

mode ((optional, default is `browse`))
:   How to obtain product listings. Use `browse` to return products that the given filter criteria, `single` to return a specific product given its `id`, or `sense` to return products related to the content on a web page.  
key ((optional, default is `null`))
:   API widget key. If not set, then it is assumed that the key is set globally via `okanjo.key`.
skip ((optional, default is `0`))
:   Exclude the given number of products from the result set. Used for pagination. 
take ((optional, default is `5`))
:   Return the given number of products from the result set. Used for pagination.
disable_inline_buy ((data-disable-inline-buy)) ((optional, default is `false`))
:   When `true`, disables the native inline-buy experience and forces a pop-up or redirect.
expandable ((optional, default is `true`))
:   When `false`, the inline-buy experience will only be allowed to fit in the ad widget that contains the product widget. When `true`, the inline-buy experience may expand and overlap page content. This is mainly a pass-through parameter from the Ad widget configuration, and is a placeholder for future IAB-expandable functionality. 


### Sense Parameters

These options are available when the product widget is set to `sense` mode.

url ((optional, default is `null`))
:   The URL that is analyzed to find contextual product matches. If not given, the current page URL is implied (unless `text` is set) and a warning will show in the console.
selectors ((optional, default is `p, title, meta[name="description"], meta[name="keywords"]`))
:   The CSS selector set of page elements to consider for contextual analysis. Using standard CSS selectors, you can specify multiple selectors, separated by commas. Used only with `url`.
text ((optional, default is `null`))
:   The arbitrary text to consider for contextual analysis, used instead of `url`.

### Filter Parameters

These options set the criteria of products that are to be returned.

id ((optional, default is `null`, required in `single` mode))
:   The unique id of the product to retrieve. Generally only used in `single` mode.
q ((optional, default is `null`))
:   Limit products to match the given search string. E.g. `skyline print`.
marketplace_status ((data-marketplace-status)) ((optional, default is `live`))
:   Either `live` or `testing`, shows live or test products. 
marketplace_id ((data-marketplace-id)) ((optional, default is `null`))
:   Limit products to the given marketplace id.
pools ((optional, default is `['global']`))
:   Limit products to the given array of product pool names. By default, will return products listed in the `global` pool. Accepts an array or CSV string.
external_id ((data-external-id)) ((optional, default is `null`))
:   Limit products that match the given vendor-specific id.
sku ((optional, default is `null`))
:   Limit products that match the given vendor-specific sku.
sold_by ((data-sold-by)) ((optional, default is `null`))
:   Limit products that match the given store name.
min_price ((data-min-price)) ((optional, default is `null`))
:   Limit products to be at least the given amount.
max_price ((data-max-price)) ((optional, default is `null`))
:   Limit products to be no more than the given amount.
condition ((optional, default is `null`))
:   One of `new`, `used`, `refurbished`, or `unspecified`. Limit products to be of the given condition.
manufacturer ((optional, default is `null`))
:   Limit products to the given manufacturer name.
upc ((optional, default is `null`))
:   Limit products that match the given UPC/EAN.
isbn ((optional, default is `null`))
:   Limit products that match the given ISBN.
tags ((optional, default is `[]`))
:   Limit products that include all of the given array of tag names. E.g. `['decor','stone']`. Accepts an array or CSV string.
category ((optional, default is `[]`))
:   Limit products of the given category path. The order of the categories matter. E.g. `['Home', 'Office', 'Furniture']`. Accepts an array or CSV string.
min_donation_percent ((optional, default is `0`))
:   Require products to donate at least the given percent of the sale to a non-profit. Value must be a decimal between `0` and `1`. E.g. 50% = `0.5`.
max_donation_percent ((optional, default is `1`))
:   Require products to donate no more than the given percent of the sale to a non-profit. Value must be a decimal between `0` and `1`. E.g. 50% = `0.5`.
donation_to ((data-donation-to)) ((optional, default is `null`))
:   Require the products to donate to the non-profit with the given name. 
suboptimal ((optional, default is `false`))
:   When `true`, allows products with substandard content, which could cause seemingly random product results in `sense` mode.


## Examples

Here are a few live examples showing the three modes of operation.

### Single

<p class="product-widget-dropzone" data-mode="single" data-id="PR2cdjTqsX8FbF9FtXb"></p>

```html
<p class="product-widget-dropzone" 
   data-mode="single" 
   data-id="PR2cdjTqsX8FbF9FtXb">
</p>
```

Shows a single product product. Useful for a specific reference or embedding directly in an article.

### Browse

<p class="product-widget-dropzone" data-mode="browse" data-take="3" data-q="skyline print"></p>

```html
<p class="product-widget-dropzone" 
   data-mode="browse" 
   data-take="3" 
   data-q="skyline print">
</p>
```
Shows three products that match the search query `skyline print`.

### Sense

<p class="product-widget-dropzone" data-mode="sense" data-take="3" data-url="http://host.madison.com/sports/columnists/tom_oates/tom-oates-rise-of-five-veterans-critical-for-upcoming-season/article_24ca1584-03b8-5962-87d1-aa78fabe25b1.html" data-selectors="h1,h3,div.entry-content,div.asset-description,div.asset-desc"></p>

```html
<p class="product-widget-dropzone" 
   data-mode="sense" 
   data-take="3" 
   data-url="http://host.madison.com/sports/columnists/tom_oates/tom-oates-rise-of-five-veterans-critical-for-upcoming-season/article_24ca1584-03b8-5962-87d1-aa78fabe25b1.html" 
   data-selectors="h1,h3,div.entry-content,div.asset-description,div.asset-desc">
</p>
```

Shows three products that are related to the content specified in the `url` and `selectors` attributes.

Article URL: [http://host.madison.com/sports/columnists/tom_oates/tom-oates-rise-of-five-veterans-critical-for-upcoming-season/article_24ca1584-03b8-5962-87d1-aa78fabe25b1.html](http://host.madison.com/sports/columnists/tom_oates/tom-oates-rise-of-five-veterans-critical-for-upcoming-season/article_24ca1584-03b8-5962-87d1-aa78fabe25b1.html)


# Ad Widget

The ad widget enables product to be shown in an ad unit. It easily takes custom marketing creative, such as an image or video, 
or shows a product widget tile if no creative is given.

When a user interacts with the ad widget, the interaction is funneled to the embedded (or hidden) product widget. This 
allows the inline-buy and expandable functionality to pass-through to the ad widget. 

## Custom Creative

By default, the ad widget will show a generic product tile via a product widget. You can provide custom markup if you would like
to show custom marking creative.

To use custom creative, just put your desired markup inside the target ad unit element. In the following example, an `img` tag is 
placed within the `div` ad unit element. The markup given will be shown instead of the default product widget tile.  

```html
<div class="okanjo-ad-unit" 
    data-content="creative" 
    data-size="medium_rectangle" 
    data-type="product" 
    data-id="PRyourProductIdHere">
    <img style="margin:0;height:100%;width:auto;cursor:pointer;" async="true" src="https://path/to/your/image/here"/>
</div>
```

> Note: Links to off-site assets should be served via HTTPS. Failure to do so may result in the browser prohibiting unsecured assets when initialized on a page using the HTTPS protocol. 

## Configuration
 
The ad widget accepts the configuration parameters either in the constructor when instantiating or on the target element as data attributes.
 
> Data attributes: For parameters that contain an underscore (`_`), substitute a dash (`-`). Additionally, parameter that accept an array of values, you can provide a CSV instead.

key ((optional, default is `null`))
:   API widget key. If not set, then it is assumed that the key is set globally via `okanjo.key`.
content ((optional, default is `creative` if content is provided or `dynamic` if not))
:   Either `creative` or `dynamic`. How the content of the ad should be displayed. In `creative` mode, the provided content is used as the display ad. In `dynamic` mode, the product widget is shown as the display ad.
size ((optional, default is `medium_rectangle`))
:   One of available [Ad Sizes](#ad-widget-configuration-ad-sizes). The IAB or standardized ad size the ad widget is intended to be displayed within. 
expandable ((optional, default is `true`))
:   When `false`, the inline-buy experience will restricted to fit in the ad widget space. When `true`, the inline-buy experience may expand and overlap page content. This is a placeholder for future IAB-expandable functionality.
type ((optional, default is `product`))
:   Specifies type of ad to display. Currently, only `product` is supported, but serves as a placeholder for future ad types. 
id ((optional, default is `null`))
:   Depending on the ad `type`, this indicates what should be displayed in the ad. Currently, only a product id is supported in conjunction with the `product` type.  
disable_inline_buy ((data-disable-inline-buy)) ((optional, default is `false`))
:   When `true`, disables the native inline-buy experience and forces a pop-up or redirect.

> Any additional parameters are passed through to the underlying product widget.

### Ad Types

In the future, Okanjo may implement more types of ads, such as the ability to showcase multiple products in rotation, paginate products or similar scenarios.  

#### Product

Currently, the only implemented ad type is `product`, which represents a single known product given its unique id. 

> When `type` is set to `product`, the `id` parameter is required.

### Ad Sizes

The following are the default ad sizes available for use.

#### IAB Sizes

billboard
:   970x250px, may also be known as: sidekick
button_2
:   120x60px
half_page
:   300x600px, may also be known as: filmstrip, sidekick
leaderboard
:   728x90px
medium_rectangle
:   300x250px, may also be known as: sidekick
micro_bar
:    88x31px
portrait
:   300x1050px
rectangle
:   180x150px
super_leaderboard
:   970x90px, may also be known as: pushdown, slider, large_leaderboard
wide_skyscraper
:   160x600px

#### Google Sizes

large_mobile_banner
:   320x100px
mobile_leaderboard
:   320x50px
small_square
:   200x200px

#### Retired & Deprecated Sizes

button_1
:   120x90px
full_banner
:   468x60px
half_banner
:   234x60px
large_rectangle
:   336x280px
pop_under
:   720x300px
three_to_one_rectangle
:   300x100px
skyscraper
:   120x600px
square
:   250x250px
square_button
:   125x125px
vertical_banner
:   120x240px
vertical_rectangle
:   240x400px

## Examples

Here are examples of using the ad widget in dynamic and creative modes. 

### Dynamic

```html
<div class="ad-widget-dropzone"
    data-size="medium_rectangle" 
    data-type="product" 
    data-id="PR2cKR3AitaHebMAe6g">
</div>
```

<div class="padded" style="height: 300px;">
    <div class="ad-widget-dropzone"
        data-size="medium_rectangle" 
        data-type="product" 
        data-id="PR2cKR3AitaHebMAe6g">
    </div>
</div>

Shows a very basic usage, letting the product widget generate the ad tile.

### Creative

```html
<div class="ad-widget-dropzone"
    data-size="medium_rectangle" 
    data-type="product" 
    data-id="PR2cKR3AitaHebMAe6g"
    style="outline:solid 1px #ccc;">
    <img style="margin:0;height:100%;width:auto;cursor:pointer;" async="true" src="img/example-creative.jpg"/>    
</div>
```

<div class="padded" style="height: 300px;">
    <div class="ad-widget-dropzone"
        data-size="medium_rectangle" 
        data-type="product" 
        data-id="PR2cKR3AitaHebMAe6g"
        style="outline:solid 1px #ccc;">
        <img style="margin:0;height:100%;width:auto;cursor:pointer;" async="true" src="img/example-creative.jpg"/>    
    </div>
</div>

Shows the same product as before, but shows an image in place of the default product widget tile. This example also shows 
how very basic inline styles may be applied to customize your creative experience per-ad. 


# Customization

Okanjo-JS is designed with the intent to be easily customizable to suit the needs of each website and application.

This section is intended for those interested in making changes to or customizing parts of Okanjo-JS.

## Templates

Each widget uses a set of templates to render content on the DOM. To do so, there are two types of templates employed, 
CSS for defining widget styling and markup templates, for rendering blocks of content.
  
### Overview

Template `.js` files may include both CSS and markup templates. [Check out the live templates on GitHub](https://github.com/Okanjo/okanjo-js/tree/master/templates).

For example, examine the [`product.block.js`](https://github.com/Okanjo/okanjo-js/blob/master/templates/product.block.js) file. 

First, the CSS template with name `product.block` is defined with the `okanjo.mvc.registerCss` function. When Okanjo-JS
is built, the content of the file `build/templates/product.block.css` (the compiled stylesheet) will get inserted into the string literal.
The option passed to the `registerCss` function, `{ id: 'okanjo-product-block' }`, sets the `id` of
the `style` element to check for before inserting on the DOM.

```js
okanjo.mvc.registerCss("product.block", 
    "@@include(jsStringEscape('product.block.css'))", 
    { id: 'okanjo-product-block' }
);
```


Then, the markup template with name `product.block` is defined with the `okanjo.mvc.registerTemplate` function. When Okanjo-JS
is built, the content of the file `build/templates/product.block.mustache` (the Mustache template) will get inserted into the string literal.
The second sets an optional callback that can be used to manipulate the view data prior to being rendered. 
The last options parameter, is used to define the names of the required CSS templates needed for the markup. 

```js
okanjo.mvc.registerTemplate("product.block", 
    "@@include(jsStringEscape('product.block.mustache'))", 
    function(data, options) {
        // Ensure params
        data = data || { products: [], config: {} };
        options = okanjo.util.clone(options);
    
        // Copy, format and return the config and products
        options.config = data.config;
        options.products = okanjo.mvc.formats.product(data.products);
        return options;
    }, 
    {
        css: [ 'product.block', 'okanjo.modal' ]
    }
);
```

### CSS

A CSS template consists of a less-css file, and a `.js` template file that defines the css template. For example:

 * [`product.block.less`](https://github.com/Okanjo/okanjo-js/blob/master/templates/product.block.less) – Less/CSS content
 * [`product.block.js`](https://github.com/Okanjo/okanjo-js/blob/master/templates/product.block.js) – CSS template registration
 
#### Less

Okanjo-JS uses Less to simplify maintenance of the Widget CSS. For more information on Less, see [lesscss.org](http://lesscss.org).

When Okanjo-JS is built, the `.less` file is run through the Less compiler and the output is dropped into the `build/templates` directory.
All the Less language features are available. Happy styling!

#### Registration
 
In the `.js` file, the CSS template must be defined in order to be used. This is done by calling the `okanjo.mvc.registerCss` function. For example:
                                                                                                                                                        
```js
okanjo.mvc.registerCss("product.block", 
    "@@include(jsStringEscape('product.block.css'))", 
    { id: 'okanjo-product-block' }
);
```

> Note: When registering, if the `name` has already been defined, the last call to `registerCss` will define the template. This functionality can be used to override an already defined template, if desired.
 
##### `okanjo.mvc.registerCss(name, css, options)`

name ((required))
:   The unique name of the template. E.g. `product.block`
css ((required))
:   The raw CSS content. During the build process, the `@@include(...)` placeholders are replaced with the compiled CSS markup.  
options ((optional, default is `{}`))
:   Any additional configuration settings for the template.

###### Options

The following options are recognised by `okanjo.mvc.registerCss`.

id
:   Sets the DOM element `id` of the style element. When initializing, the DOM will be checked for the presence of the element with the given `id` before appending it. If not defined, the `id` will be in the format `okanjo-css-{name}`, by default. 

>   Because the `id` is checked prior to inserting the CSS element on the page, you have the ability to create your own style element with the `id` to prevent Okanjo-JS from injecting the default CSS element. 


### Markup

A markup template consists of a `.mustache` template file and a `.js` template file that defines the template. For example:

 * [`product.block.mustache`](https://github.com/Okanjo/okanjo-js/blob/master/templates/product.block.mustache) – Markup template
 * [`product.block.js`](https://github.com/Okanjo/okanjo-js/blob/master/templates/product.block.js) – Markup template registration
 
#### Mustache

Okanjo-JS uses [Mustache](https://mustache.github.io/), a cross-language, logic-less template engine, to render widget markup. Since each widget uses 
templates, you have the power to customize the templates, be it a minor tweak to a drastic makeover.
 
Mustache was chosen because of its power to weight ratio. Mustache offers a substantial feature set while remaining relatively lightweight (~10kB.)

See the [Mustache docs](http://mustache.github.io/mustache.5.html) for more information on usage.

#### Registration

In the `.js` file, the markup template must be defined in order to be used. This is done by calling the `okanjo.mvc.registerTemplate` function. For example:
                                                                                                                                                        
```js
okanjo.mvc.registerTemplate("product.block", 
    "@@include(jsStringEscape('product.block.mustache'))", 
    function(data, options) {
        // Ensure params
        data = data || { products: [], config: {} };
        options = okanjo.util.clone(options);

        // Copy, format and return the config and products
        options.config = data.config;
        options.products = okanjo.mvc.formats.product(data.products);
        return options;
    }, 
    {
        css: [ /*'okanjo.core',*/ 'product.block', 'okanjo.modal']
    }
);
```

> Note: When registering, if the `name` has already been defined, the last call to `registerCss` will define the template. This functionality can be used to override an already defined template, if desired.
 
##### `okanjo.mvc.registerTemplate(name, markup, viewClosure, options)`

name ((required))
:   The unique name of the template. E.g. `product.block`
template ((required))
:   The raw Mustache template markup or [DOM element](https://github.com/janl/mustache.js#include-templates) containing the markup.
viewClosure ((optional, default is `null`))
:   A function `function(data, options)` that can manipulate the view data before being rendered. The function must return the new view object.
options ((optional, default is `{}`))
:   Any additional configuration settings for the template.

###### Options

The following options are recognised by `okanjo.mvc.registerTemplate`.

blockClasses ((optional, default is `''`))
:   CSS classes to append to the `classDetects` view property, used on the container element in the widget templates.
css ((optional, default is `[]`))
:   Array of CSS template names that are required when this template is rendered. 


## Building

Building Okanjo-JS requires [Node.js](http://nodejs.org/), and optionally [Git](https://git-scm.com/). 

To get started, download and extract the latest release or use Git to clone Okanjo-JS.
 
 * [Download a release](https://github.com/Okanjo/okanjo-js/releases)
 * Clone via Git (Hint: You should fork Okanjo-JS on Github and push your changes there!)
  
> `git clone https://github.com/Okanjo/okanjo-js.git` 
 
Once downloaded, open a terminal in the `okanjo-js` directory and install the Node.js dependencies:

> `npm install`

After installing all of the required dependencies, you should be able to run the build process.

> `gulp`

This (builds Okanjo-JS and starts a file watcher. When a file is changed, the components affected will be automatically rebuilt. Use `Control+C` to exit.

Okanjo-JS [Gulp.js, the streaming build system](http://gulpjs.com/) to build and assemble the distribution files. 
With Gulp, tasks are defined to do a specific set of things against a set of files. Here's a list of available build tasks in `gulpfile.js`.
  
Execute like so: `gulp <task_name>`

### Common Tasks

full-build
:   Builds both `okanjo.js`, `okanjo-templates.js` and the minified versions, from scratch.
default
:   Same as running `gulp` without a task. Does a `full-build` and watches for changes to the core and templates.

### Template Tasks

min-mustache-templates
:   Minifies the markup in the Mustache files and drops the files in `build/templates`.
min-css-templates
:   Compiles the Less-CSS template files, minifies and drops the files in `build/templates`.
join-templates
:   Inserts the Mustache and CSS files into the `.js` templates that reference them, and drops the resulting template files in `build/templates`.
templatesjs
:   Wraps and minifies the `.js` templates in `build/templates` and drops the result into `dist/okanjo-templates.js` and `dist/okanjo-templates.min.js`.

### Core Tasks

deps
:   Installs Bower dependencies.
modal
:   Wraps and builds the modal library to `build/modal.js`.
vendor
:   Wraps and builds the external dependencies to `build/vendor.js`.
lint
:   Performs code quality assessment and suggests corrections.
min
:   Builds the core `okanjo.js` and minifies the result to `okanjo.min.js`. Will push a system notification with file size.
bundle
:   Builds the bundle files `okanjo-bundle.js` and minifies the result to `okanjo-bundle.min.js`. Will push a system notification with file size.
fix-maps
:   Corrects the source map files to use relative paths.
watch
:   Watches for changes to the core files and triggers a rebuild if something applicable changes.
watch-templates
:   Watches for changes to the template files and triggers a rebuild if something applicable changes.

### Deployment Tasks

pre-deploy-bump
:   Increments the Okanjo-JS version in `package.json` and `bower.json`.
pre-deploy-release
:   Bumps the release version, does a full build, commits the changes in Git, tags the release, and pushes everything back up to the remote git repository.
deploy-s3-latest
:   Pushes the `dist/*` files to the AWS S3 bucket's `/js/latest` directory.
deploy-s3-latest-gz
:   Pushes gzipped versions of the `dist/*` files to the AWS S3 bucket's `/js/latest` directory.
deploy-s3-version
:   Pushes the `dist/*` files to the respective AWS S3 bucket's `/js/<version>` directory.
deploy-s3-version-gz
:   Pushes gzipped versions of the `dist/*` files to the respective AWS S3 bucket's `/js/<version>` directory.
deploy-s3
:   Pushes the latest and versioned release, including gzipped files, to AWS S3. 


## Deploying

If you already have an Amazon AWS S3 bucket, you can easily push your own builds of Okanjo-JS right to your CDN.

> In order to push to your AWS S3 bucket, you'll need to copy the file `aws-credentials.default.json` to `aws-credentials.json` and set your credentials and bucket name.

1. Make any customizations you would like to Okanjo-JS
2. Optionally, run `gulp pre-deploy-release` to bump the version number and commit the changes to the Git. If you're not working with Git, you can run `pre-deploy-bump` to just bump the version number.
3. Run `gulp deploy-s3` to push everything to `/js` on in your CDN.

## Base Widget

All Okanjo widgets inherit from the [base widget](https://github.com/Okanjo/okanjo-js/blob/master/src/widget.js), allowing 
for core functionality to be reused for current and future widgets. By itself, it contains no content functionality. 

> The base widget is intended only to be extended. You should not create instances of the base widget. 

When making customizations to widgets, understanding the properties and functions of the base widget will be very helpful. 
If you're feeling ambitious, you can use the base widget to create your own widget.

### Properties

The following are common properties that can be configured on a widget. Widgets can use these properties, but depending on the widget, may not make use of them.

config ((default is `{}`))
:   The widget configuration object.
configMap ((default is `{}`))
:   A key-value object that maps configuration/data-attribute parameters to the the widget `config` object. The key name is the target `config` object key name, and the value is the name of the source parameter key(s), which can either be a string or an array of strings. 
use_cache ((default is `false`))
:   Specifies whether the widget should cache content where available.
cache_key_prefix ((default is `ok_widget_`))
:   The prefix prepended to a generated cache key.
cache_ttl ((default is `60000`))
:   The time to live (in milliseconds) for a cache key to live.
cacheKeyAttributes ((default is `id`))
:   The name of the `config` keys that should be used to generate the widget instance's cache key.
element ((default is `null`))
:   The DOM element the widget should be appended to.
templates ((default is `{ error: 'okanjo.error' }`))
:   The required templates for the widget. The key is the name the widget refers to the template as and the value is the name of the template. 
css ((default is `{}`))
:   The required CSS templates for the widget. The key is the name the widget refers to the CSS template as and the value is the name of the CSS template.

### Functions

Widget (element, config)
:   _Constructor_. Takes the destination DOM element and widget configuration options as parameters.
init ()
:   Performs the main widget flow / initialization logic: `ensureTemplates()`, `parseConfiguration()`, `findWidgetKey()`, `load()`, `trackLoad()`, `autoCleanCache()`.
findWidgetKey () ((returns `true` or `false`))
:   Attempts to gracefully locate the widget key to use to communicate with the API. Will check the provided configuration parameters or the global `okanjo.key` and will return `true` if a key is located or `false` if not. 
ensureTemplates ()
:   Validates that all required CSS and templates have been loaded. If not, an `Error` will be thrown.
parseConfiguration ()
:   Applies the widget's `configMap` against the provided `config` and the `element`'s data attributes.
load ()
:   Core widget load logic unique to a widget. Assumed to be overridden.
trackLoad ()
:   Tracks the widget load in the [metrics helper](https://github.com/Okanjo/okanjo-js/blob/master/src/metrics.js), e.g. Google Analytics.
trackMoat ()
:   Tracks the widget load with [Moat](http://www.moat.com/) analytics.
autoCleanCache ()
:   If `use_cache` is enabled, then the `cleanCache` function will be called on a delay to prevent loading holdups.
getCurrentPageUrl () ((returns a `string`))
:   Obtains a simplified version of the current page URL. By default, only the URL's protocol, domain, and path are used. __The query and hash are ignored__. 
getCacheKey () ((returns a `string`))
:   Generates the cache key (used for caching widget content) using the `cacheKeyAttributes` list to define what configuration parameters affect the cache key.
cleanCache ()
:   Purges expired cache keys.
loadFromCache (cacheKey) ((returns an `object` or `null`))
:   Loads an object stored in the cache given its cache key. If the key has expired, it will be purged instead of being returned. Returns `null` if not found or if the value could not be parsed. 
saveInCache (cacheKey, obj)
:   Saves an object in the cache using the given cache key. Saving items in the cache is done asynchronously to prevent possible holdups.



<script>

    var exampleProductWidgets = [], exampleAdWidgets = [], callbacks = [];

    /**
     * Load the Okanjo bundle and fire off things that need to happen once that's done
     */
    (function(callback) {

        // Create a new Okanjo-JS script tag and fire the callback when completed
        var es = document.getElementsByTagName('script')[0],
            o = document.createElement('script'),
            loaded = false;

        o.type = 'text/javascript';
        o.async = true;
        o.setAttribute('crossorigin', "anonymous");
        o.onload = o.onreadystatechange = function() {
            if (!loaded && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) { 
                loaded = true; 
                callback && callback(); 
            }
        };
        
        o.src = '//cdn.okanjo.com/js/latest/okanjo-bundle.min.js';
        // o.src = '/okanjo-js/dist/okanjo-bundle.js'; // TESTING
        es.parentNode.insertBefore(o, es);

    }).call(window, function() {

        // Use the okanjo docs demo key
        okanjo.key = "AKtwhbD7TcYFL0DMQs2TmnzaNtJeVE2IM";
        
        // Fire the callbacks!
        for(var i = 0; i < callbacks.length; i++) {
            callbacks[i]();
        }

    });
    
    // Product Widget Examples 
    callbacks.push(function() {
        // Create a product widget on the elements with given class
        var targets = okanjo.qwery('.product-widget-dropzone'), i = 0, p = [];
        for ( ; i < targets.length; i++) {
            exampleProductWidgets.push(new okanjo.Product(targets[i]));
        }
        
        try {
            $(window).trigger('resize');
        } catch(e) { }
    });
        
    // Ad Widget Examples 
    callbacks.push(function() {
        // Create a ad widget on the elements with given class
        var targets = okanjo.qwery('.ad-widget-dropzone'), i = 0, p = [];
        for ( ; i < targets.length; i++) {
            exampleAdWidgets.push(new okanjo.Ad(targets[i]));
        }
        
        try {
            $(window).trigger('resize');
        } catch(e) { }
    });
    
    
</script>