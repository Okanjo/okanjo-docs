# Okanjo API Documentation

This project houses and builds the Okanjo platform documentation.

Documentation is stored as Markdown files, and is converted to fancy html documentation using a forked copy of mdoc,
a Node.js Markdown documentation converter.

# Contributing

We would love all the help and support you're willing to provide. Find a bug, spelling mistake or grammatical nightmare,
fork away, submit an issue, and top it off with a pull request!

# Setup

To build the Okanjo docs, you'll need:

* Node.js
* Node Package Manager (npm)
* mdoc (referenced as git submodule)

In a command prompt / terminal, change into the okanjo-docs project directory:
>   `cd okanjo-docs`

Then init the git submodules:
>   `git submodule init`

>   `git submodule update`

And that should get mdoc checked out into the right spot.


# Build the Docs

In a command prompt / terminal, change into the okanjo-docs project directory:
>   `cd okanjo-docs`

Then run the build script:
>   `node gen-docs.js`

And the build directory will contain the generated html documentation.