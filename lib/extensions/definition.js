/*global module:true*/
/*
 * Basic definition list support with re-entrant parsing
 *
 * Definition Lists
 * ======
 *
 * Apple
 * :   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
 * :   An american computer company.
 *
 * Orange
 * :   The fruit of an evergreen tree of the genus Citrus.
 *
 *
 * *** NOTE ****
 * My implementation is lazy so definition lines do not support multiple line breaks. SO SORRY!
 *
 *
 * ** CUSTOMIZATION **
 * Definition Lists whose first term starts with a code block (e.g. `term`) will include a class named 'inline-def',
 *  useful for inline definition  lists (e.g. float: left)
 *
 */



(function(){

    var definitionList = function(converter) {
        return [

            // @username syntax
            {
                type: 'lang',
                filter: function(text) {

                    var lastOffset = 0,
                        lastLength = 0,
                        lastIndex = 0,
                        lastDepth = 0,
                        divOpen = 0,
                        counter = 0,
                        sets = [];

                    text.replace(/([^\n]+)(\n([ ]{2,})?:[ ]{3,}[^\n]+)+/g, function(match, term, definition, prefix, offset, string) {
                        var isJoinedToLast = (lastOffset + lastLength + 1) === offset ;
                        lastOffset = offset;
                        lastLength = match.length;


                        // SPLIT IT UP
                        var parts = match.replace('\n','').split(':   '),
                            markup = '',
                            spaces =  parts[0].match(/^[ ]+/),
                            depth = spaces ? (spaces[0].length / 2) : 0;

                        if (depth > 0) {
                            parts[0] = parts[0].replace(/^[ ]+/, '');
                        }

                        if (depth > lastDepth) {
                            // we entered a child property
                            markup += '<div class="child-properties hidden"><a class="toggle" href="#" onClick="window.Showdown.extensions.definition.toggleChildren(event, this)">Show child properties</a>';
                            divOpen++;
                        } else if (depth < lastDepth && divOpen > 0) {
                            // we exited a child property
                            // markup += '</div>';
                            for (var d = (lastDepth - depth); d > 0; d--) {
                                sets[lastIndex] += '</div>';
                                divOpen--;
                            }
                        }

                        lastDepth = depth;


                        console.log({depth:depth, parts:parts, isJoinedToLast:isJoinedToLast, divOpen:divOpen});
                        // console.log({depth:depth, parts:parts});


                        for(var i = 0; i < parts.length; i++) {
                            if (i === 0) {
                                markup += '<dt class="depth-' + depth + '">'+converter.makeHtml(parts[i])+'</dt>';
                            } else {
                                markup += '<dd class="depth-' + depth + '">'+converter.makeHtml(parts[i])+'</dd>';
                            }
                        }


                        if (isJoinedToLast) {
                            sets[lastIndex] += markup;
                            sets[counter] = '';
                        } else {
                            sets[counter] = markup;
                            lastIndex = counter;
                        }

                        counter++;

                        //definition
                    });

                    // Close any open child groups
                    if (lastDepth > 0) {
                        for (var d = lastDepth; d > 0; d--) {
                            sets[lastIndex] += '</div>';
                            divOpen--;
                        }
                    }

                    var postCounter = 0;
                    if (sets.length > 0) {

                        text = text.replace(/([^\n]+)(\n([ ]{2,})?:[ ]{3,}[^\n]+)+/g, function(match, term, definition, prefix, offset, string) {

                           // console.log('replacing index ' +postCounter + ' with ' + sets[postCounter].substr(0, 13));

                            if (sets[postCounter].length > 0) {
                                return '<dl'+(sets[postCounter].substr(0, 13) == '<dt><p><code>' ? ' class="inline-def"' : '')+'>'+sets[postCounter++]+'</dl>';
                            } else {
                                postCounter++;
                                return '';
                            }

                        });
                    }

                    return text;

                }
            }
        ];
    };

    definitionList.toggleChildren = function(event, el) {
        event.preventDefault();
        var className = el.parentNode.className.replace(/ *hidden/g, '');
        if (className.length === el.parentNode.className.length) {
            // not hidden, so hide
            el.parentNode.className += ' hidden';
            el.innerHTML = 'Show child properties';
        } else {
            el.parentNode.className = className;
            el.innerHTML = 'Hide child properties';
        }
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.definition = definitionList; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = definitionList;

}());
