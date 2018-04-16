# Okanjo Platform Documentation

This builds the Okanjo platform documentation site.

View the documentation at [developer.okanjo.com](http://developer.okanjo.com)

# Contributing

We would love all the help and support you're willing to provide. Find a bug, spelling mistake or grammatical nightmare,
fork away, submit an issue, and top it off with a pull request!

# Setup

To build the Okanjo docs, you'll need:

* Node.js

After cloning this repository, in your favorite shell/terminal, get into the okanjo-docs project directory.

Install the required dependencies using Yarn:
```bash
yarn
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
