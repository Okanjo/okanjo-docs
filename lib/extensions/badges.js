

(function(){

    var badges = function(converter) {
        return [

            // ((badge)) syntax
            { type: 'lang', regex: '\\B(\\\\)?\\(\\((([a-zA-Z]+)[^)]*)\\)\\)', replace: function(match, leadingSlash, entireThing, badgeName) {
                // Check if we matched the leading \ and return nothing changed if so
                if (leadingSlash === '\\') {
                    return match;
                } else {
                    return '<span class="badge ' + badgeName + '">'+entireThing+'</span>';
                }
            }},

        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.badges = badges; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = badges;

}());
