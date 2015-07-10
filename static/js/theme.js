
function isElementInViewport (el, $sidebar) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

(function($) {
    var $window = $(window);
    var $document = $(document);
    var $sidebar = null;
    //var animating = false;
    var sidebarCatchup = null,
        sidebarCatchupEl = null;

    function putSideBarHeaderIntoView() {
        if ($sidebar && !isElementInViewport(sidebarCatchupEl, $sidebar) && $sidebar.hasClass('fixed')) {
            $sidebar.animate({scrollTop: $sidebar.scrollTop() + (sidebarCatchupEl.position().top - ($(window).height() / 2)) }, function () {
                //animating = false;
                sidebarCatchup = null;
            });
        }
    }


    /*
     * Scrollspy.
     */

    $document.on('flatdoc:ready', function() {
        $("h1, h2, h3").scrollagent(function(cid, pid, currentElement, previousElement) {
            if (pid) {
                $("[href='#"+pid+"']").removeClass('active');
            }
            if (cid) {
                sidebarCatchupEl = $("[href='#"+cid+"']").addClass('active');

                if (sidebarCatchup) {
                    clearTimeout(sidebarCatchup);
                }

                // Make sure the outline element is in view if
                sidebarCatchup = setTimeout(putSideBarHeaderIntoView, 1250);

            }
        });

        // if you're scrolling the sidebar, and move the page as result, then don't jump around all weird
        $sidebar.on('scroll', function() {
            if (sidebarCatchup) {
                clearTimeout(sidebarCatchup);
            }
            //console.log('currentTop', $sidebar.scrollTop())
        });

        // If that anchor is crap, we're not jumping
        if ($('*[id='+window.location.hash.replace(/^#/, '')+']').length === 0) {
            window.jumping = false;
        }
    });

    /*
     * Anchor jump links.
     */

    $document.on('flatdoc:ready', function() {
        $('.menu a').anchorjump();
    });

    /*
     * Title card.
     */

    $(function() {
        var $card = $('.title-card');
        if (!$card.length) return;

        var $header = $('.header');
        var headerHeight = $header.length ? $header.outerHeight() : 0;

        $window
            .on('resize.title-card', function() {
                var windowWidth = $window.width();

                if (windowWidth < 480) {
                    $card.css('height', '');
                } else {
                    var height = $window.height();
                    $card.css('height', height - headerHeight);
                }
            })
            .trigger('resize.title-card');
    });

    /*
     * Sidebar stick.
     */

    if (window.sideStick === undefined || window.sideStick === true) {
        $(function () {
            var elTop;
            $sidebar = $('.menubar');
            $window
                .on('resize.sidestick', function () {
                    $sidebar.removeClass('fixed');
                    elTop = $sidebar.offset().top;
                    $window.trigger('scroll.sidestick');
                })
                .on('scroll.sidestick', function () {
                    var scrollY = $window.scrollTop();
                    $sidebar.toggleClass('fixed', (scrollY >= elTop));
                })
                .trigger('resize.sidestick');
        });
    }

})(jQuery);
/*! jQuery.scrollagent (c) 2012, Rico Sta. Cruz. MIT License.
 *  https://github.com/rstacruz/jquery-stuff/tree/master/scrollagent */

// Call $(...).scrollagent() with a callback function.
//
// The callback will be called everytime the focus changes.
//
// Example:
//
//      $("h2").scrollagent(function(cid, pid, currentElement, previousElement) {
//        if (pid) {
//          $("[href='#"+pid+"']").removeClass('active');
//        }
//        if (cid) {
//          $("[href='#"+cid+"']").addClass('active');
//        }
//      });

(function($) {


    $body = $('html,body');

    $.fn.scrollagent = function(options, callback) {
        // Account for $.scrollspy(function)
        if (typeof callback === 'undefined') {
            callback = options;
            options = {};
        }

        var $sections = $(this);
        var $parent = options.parent || $(window);

        // Find the top offsets of each section
        var offsets = [];
        $sections.each(function(i) {
            var offset = $(this).attr('data-anchor-offset') ?
                parseInt($(this).attr('data-anchor-offset'), 10) :
                (options.offset || 0);

            offsets.push({
                id: $(this).attr('id'),
                index: i,
                el: this,
                offset: offset
            });
        });

        // State
        var current = null;
        var height = null;
        var range = null;

        // Save the height. Do this only whenever the window is resized so we don't
        // recalculate often.
        $(window).on('resize', function() {
            height = $parent.height();
            range = $(document).height();
        });

        // Find the current active section every scroll tick.
        $parent.on('scroll', function(e) {
            var y = $parent.scrollTop();
            y += height * (0.3 + 0.7 * Math.pow(y/range, 2));

            var latest = null;

            for (var i in offsets) {
                if (offsets.hasOwnProperty(i)) {
                    var offset = offsets[i];
                    if ($(offset.el).offset().top + offset.offset < y) latest = offset;
                }
            }

            if (latest && (!current || (latest.index !== current.index))) {
                callback.call($sections,
                    latest ? latest.id : null,
                    current ? current.id : null,
                    latest ? latest.el : null,
                    current ? current.el : null);
                current = latest;



                if (window.history.pushState && window.jumping === false) {
                    window.history.pushState(null,null,'#'+(current.id ? current.id : ''));
                }

            }
        });

        $(window).trigger('resize');
        $parent.trigger('scroll');

        return this;
    };

})(jQuery);
/*! Anchorjump (c) 2012, Rico Sta. Cruz. MIT License.
 *   http://github.com/rstacruz/jquery-stuff/tree/master/anchorjump */

// Makes anchor jumps happen with smooth scrolling.
//
//    $("#menu a").anchorjump();
//    $("#menu a").anchorjump({ offset: -30 });
//
//    // Via delegate:
//    $("#menu").anchorjump({ for: 'a', offset: -30 });
//
// You may specify a parent. This makes it scroll down to the parent.
// Great for tabbed views.
//
//     $('#menu a').anchorjump({ parent: '.anchor' });
//
// You can jump to a given area.
//
//     $.anchorjump('#bank-deposit', options);

(function($) {
    var defaults = {
        'speed': 500,
        'offset': 0,
        'for': null,
        'parent': null
    };

    $.fn.anchorjump = function(options) {
        options = $.extend({}, defaults, options);

        if (options['for']) {
            this.on('click', options['for'], onClick);
        } else {
            this.on('click', onClick);
        }

        function onClick(e) {
            var $a = $(e.target).closest('a');
            if (e.ctrlKey || e.metaKey || e.altKey || $a.attr('target')) return;

            e.preventDefault();
            var href = $a.attr('href');

            $.anchorjump(href, options);
        }
    };

    // Jump to a given area.
    $.anchorjump = function(href, options) {
        options = $.extend({}, defaults, options);

        var top = 0;
        if (href != '#') {
            var $area = $(href);
            // Find the parent
            if (options.parent) {
                var $parent = $area.closest(options.parent);
                if ($parent.length) { $area = $parent; }
            }
            if (!$area.length) { return; }

            // Determine the pixel offset; use the default if not available
            var offset =
                $area.attr('data-anchor-offset') ?
                    parseInt($area.attr('data-anchor-offset'), 10) :
                    options.offset;

            top = Math.max(0, $area.offset().top + offset);
        }

        window.jumping = true;
        $('html, body').animate({ scrollTop: top }, options.speed, function() {
            window.jumping = false;
        });
        $('body').trigger('anchor', href);

        // Add the location hash via pushState.
        if (window.history.pushState) {
            window.history.pushState({ href: href }, "", href);
        }
    };
})(jQuery);