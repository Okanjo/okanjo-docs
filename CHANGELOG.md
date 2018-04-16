# Okanjo Docs Site Change Log

When stuff changes, it's described here.

## 2018-04-16
Overhaul – Updated docs to reflect all the changes to the platform over the last few years
 * Moved showdown and extensions to this repository instead of relying on our forked mdoc
 * Updated definition list plugin to support nested objects
 * Updated showdown's overly aggressive bold/italics patterns
 * Updated styles to support sub headers and child properties
 * Removed most markdown docs stored in this app. They belong to their respective projects
 * Removed marketplace docs as that product has been deprecated
 * Removed test-tool example, as it was a marketplace api tool
 * Added lots of docs from various okanjo products and projects
 * Swapped twig-js to our platform favorite: nunjucks
 * Removed redundant page templates
 * Rewrote build process to source from an array of objects instead of twig templates
 * Updated dependencies
