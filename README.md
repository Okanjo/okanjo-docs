# Okanjo Platform Documentation

This project houses and builds the Okanjo platform documentation.

View the documentation at [developer.okanjo.com](http://developer.okanjo.com)

> We've recently switched to a [flatdoc](https://github.com/rstacruz/flatdoc)-based approach for new product documentation. We're in the process of updating the old documentation to this format. Please bare with us! 

The Marketplace documentation is stored as Markdown files, and is converted to fancy html documentation using a forked copy of mdoc,
a Node.js-based Markdown documentation converter.

# Contributing

We would love all the help and support you're willing to provide. Find a bug, spelling mistake or grammatical nightmare,
fork away, submit an issue, and top it off with a pull request!

# Setup

To build the Okanjo docs, you'll need:

* Node.js
* mdoc (referenced as git submodule)

After cloning this repository, in your favorite shell/terminal, get into the okanjo-docs project directory:
```bash
cd okanjo-docs
```

Then init the git submodules:
```bash
git submodule init
git submodule update
```

Install the required dependencies to get everything building:
```bash
npm install
```

# Build the Docs

In a command prompt / terminal, change into the okanjo-docs project directory:
```bash
cd okanjo-docs
```

If you have gulp installed globally, then you can simply run:
```bash
gulp
```

Or, you can build using the gulp installed in the node_modules directory like so:
```bash
export PATH=./node_modules/.bin/:$PATH
gulp
```

Though, you should do yourself a favor and install gulp globally:

```bash
npm install -g gulp
```
