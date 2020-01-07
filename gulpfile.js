/**
 * Date: 6/11/15 4:24 PM
 *
 * ----
 *
 * (c) Okanjo Partners Inc
 * https://okanjo.com
 * support@okanjo.com
 *
 * https://github.com/okanjo/okanjo-docs
 *
 * ----
 *
 * TL;DR? see: http://www.tldrlegal.com/license/mit-license
 *
 * The MIT License (MIT)
 * Copyright (c) 2013 Okanjo Partners Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


const Gulp = require('gulp');
const Async = require('async');
const Path = require('path');
const Less = require('gulp-less');
const Uglify = require('gulp-uglify');
const Concat = require('gulp-concat');
const Rename = require('gulp-rename');
const Sourcemaps = require('gulp-sourcemaps');
const Twig = require('gulp-twig');
const RenderNunjucks = require('gulp-nunjucks-render');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');

// Auto add vendor prefixes in CSS
const autoprefix= new LessPluginAutoPrefix({ browsers: ["> 5%"] });

const docsJsSources = [
        'static/js/jquery.min.js',
        'static/js/legacy.js',
        'static/js/prism.js',
        'lib/showdown.js',
        'static/js/flatdoc.js',
        'lib/extensions/github.js',
        'lib/extensions/table.js',
        'lib/extensions/definition.js',
        'lib/extensions/badges.js',
        'static/js/theme.js',
        'static/js/eventemitter2.js'
    ];

const nav = [
    {
        name: 'Okanjo API',
        href: 'api',
        title: 'Okanjo API Documentation',
        description: 'Okanjo core platform API documentation.',
        file: 'https://api2.okanjo.com/docs/markdown',
        github: null,
        template: 'doc.njk'
    },
    {
        name: 'Farm API',
        href: 'farm',
        title: 'Okanjo Farm API Documentation',
        description: 'Affiliate product management AI platform.',
        file: 'https://farm.okanjo.com/docs/markdown',
        github: null,
        template: 'doc.njk'
    },
    {
        name: 'Shortcodes API',
        href: 'shortcodes',
        title: 'Okanjo Shortcodes API Documentation',
        description: 'Link shortening, tracking, and reporting service.',
        file: 'https://shortcodes.okanjo.com/docs/markdown',
        github: null,
        template: 'doc.njk'
    },
    {
        name: 'Distillery API',
        href: 'distillery',
        title: 'Okanjo Distillery API Documentation',
        description: 'Extracts disambiguated topics and things.',
        file: 'https://distillery.okanjo.com/docs/markdown',
        github: null,
        template: 'doc.njk'
    },
    {
        name: 'SmartServe SDK',
        href: 'okanjo-js',
        title: 'Okanjo SmartServe SDK Documentation',
        description: 'Dynamically matches products with content using artificial intelligence, user profiles & context algorithms.',
        // file: 'docs/js/OkanjoJS.md',
        file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-js/README.md',
        github: 'okanjo/okanjo-docs',
        template: 'doc.njk'
    },
    {
        name: 'Node.js SDK',
        href: 'node-sdk',
        title: 'Okanjo Node.js SDK Documentation',
        description: 'Integrate the Okanjo API into your application using Node.js.',
        file: null,
        github: 'okanjo/okanjo-nodejs',
        template: 'doc.njk'
    },

    // Framework section
    {
        name: 'App Framework',
        href: 'okanjo-app-framework',
        title: 'Okanjo Application Framework',
        description: `Framework for bootstrapping complex, scalable Node.js applications quickly.`,
        file: 'docs/app-framework-overview.md',
        github: null,
        template: 'doc.njk',
        hideFromNav: false,

        children: [
            {
                name: 'App',
                href: 'okanjo-app',
                title: 'Okanjo App',
                description: 'Okanjo Application Framework for Node.js.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app/README.md',
                github: 'okanjo/okanjo-app',
                template: 'doc.njk'
            },
            {
                name: 'Broker',
                href: 'okanjo-app-broker',
                title: 'Okanjo Broker',
                description: 'Service broker for managing cluster worker groups.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-broker/README.md',
                github: 'okanjo/okanjo-broker',
                template: 'doc.njk'
            },
            {
                name: 'Conductor',
                href: 'okanjo-conductor',
                title: 'Okanjo Conductor',
                description: 'Module for handing batch jobs across multiple worker processes.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-conductor/README.md',
                github: 'okanjo/okanjo-conductor',
                template: 'doc.njk'
            },
            {
                name: 'Elastic',
                href: 'okanjo-app-elastic',
                title: 'Okanjo Elastic Service',
                description: 'Service for interfacing with Elasticsearch.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-elastic/README.md',
                github: 'okanjo/okanjo-app-elastic',
                template: 'doc.njk'
            },
            {
                name: 'Mongo',
                href: 'okanjo-app-mongo',
                title: 'Okanjo Mongo Service',
                description: 'Service for interfacing with MongoDB.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-mongo/README.md',
                github: 'okanjo/okanjo-app-mongo',
                template: 'doc.njk'
            },
            {
                name: 'MySQL',
                href: 'okanjo-app-mysql',
                title: 'Okanjo MySQL Service',
                description: 'Service for interfacing with MySQL.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-mysql/README.md',
                github: 'okanjo/okanjo-app-mysql',
                template: 'doc.njk'
            },
            {
                name: 'Queue',
                href: 'okanjo-app-queue',
                title: 'Okanjo Queue Service',
                description: 'Service for interfacing with RabbitMQ.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-queue/README.md',
                github: 'okanjo/okanjo-app-queue',
                template: 'doc.njk'
            },
            {
                name: 'Redis',
                href: 'okanjo-app-redis',
                title: 'Okanjo Redis Service',
                description: 'Service for interfacing with Redis.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-redis/README.md',
                github: 'okanjo/okanjo-app-redis',
                template: 'doc.njk'
            },
            {
                name: 'Server',
                href: 'okanjo-app-server',
                title: 'Okanjo Server',
                description: 'Server framework using HAPI and friends.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-server/README.md',
                github: 'okanjo/okanjo-app-server',
                template: 'doc.njk'
            },
            {
                name: 'Server Session',
                href: 'okanjo-app-server-session',
                title: 'Okanjo Session Plugin',
                description: 'Persistent server-side session state for OkanjoServer.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-server-session/README.md',
                github: 'okanjo/okanjo-app-server-session',
                template: 'doc.njk'
            },
            {
                name: 'Server Docs',
                href: 'okanjo-app-server-docs',
                title: 'Okanjo Server Docs',
                description: 'Generate API route docs.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-server-docs/README.md',
                github: 'okanjo/okanjo-app-server-docs',
                template: 'doc.njk'
            },
            {
                name: 'TD',
                href: 'okanjo-app-td',
                title: 'Okanjo TreasureData Connector',
                description: 'Execute queries and access TD jobs.',
                file: 'https://s3.amazonaws.com/okanjo-docs/okanjo-app-td/README.md',
                github: 'okanjo/okanjo-app-td',
                template: 'doc.njk'
            },
        ]
    },

    // Special pages

    {
        name: 'Okanjo Platform Documentation',
        href: 'index',
        title: 'Okanjo Platform Documentation',
        description: 'Here you will find information on integrating with various components in Okanjo\'s platform.',
        file: 'docs/index.md',
        github: null,
        template: 'doc.njk',
        hideFromNav: true
    },
    {
        name: 'Page Not Found',
        href: '404',
        title: 'Page Not Found',
        description: 'The page you were looking for is missing or invalid. Sorry!',
        file: 'docs/404.md',
        github: null,
        template: 'doc.njk',
        hideFromNav: true
    },
];

Gulp.task('docs-js', function() {
    //noinspection JSUnusedGlobalSymbols
    return Gulp.src(docsJsSources)
        .pipe(Sourcemaps.init())
        .pipe(Concat('docs-build.js'))
        .pipe(Gulp.dest('static/js'))
        .pipe(Uglify({
            output: { comments: 'some' }
        }).on('error', (...args) => {
            console.log('Blew up!', args);
        }))
        .pipe(Rename('docs-build.min.js'))
        .pipe(Sourcemaps.write('../../static/js', { sourceRoot: './' }))
        .pipe(Gulp.dest('static/js'))
});

Gulp.task('docs-css', () => {
    return Gulp.src('static/css/theme.less')
        .pipe(Less({
            plugins: [autoprefix],
            paths: [ Path.join(__dirname, 'static', 'css' ) ]
        }))
        //.pipe(minifyCSS())
        .pipe(Gulp.dest('./static/css/'))
});


const renderPages = (pages, callback, parent) => {
    Async.eachSeries(
        pages,
        (page, nextPage) => {
            Gulp.src(`templates/${page.template}`)
                .pipe(RenderNunjucks({
                    path: 'templates',
                    data: {page, nav, parent}
                }))
                .pipe(Rename(`${page.href}.html`))
                .pipe(Gulp.dest('static'))
                .on('end', () => {

                    // Check for children
                    if (page.children) {
                        renderPages(page.children, nextPage, page);
                    } else {
                        nextPage();
                    }

                })
                .on('error', (err) => nextPage(err))
            ;
        },
        callback
    );
};

Gulp.task('website', ['index-page', 'modules-index-page'], function(done) {
    renderPages(nav, done);
});

Gulp.task('index-page', () => {
    const page = nav.find((p) => p.href === 'index');
    return Gulp.src('templates/index.njk')
        // .pipe(Twig({
        //     data: page,
        //     errorLogToConsole: true
        // }))
        .pipe(RenderNunjucks({
            path: 'templates',
            data: {page, nav}
        }))
        .pipe(Rename('index.md'))
        .pipe(Gulp.dest('static/docs'));
});

Gulp.task('modules-index-page', () => {
    const page = nav.find((p) => p.href === 'okanjo-app-framework');
    return Gulp.src('templates/index.njk')
        // .pipe(Twig({
        //     data: page,
        //     errorLogToConsole: true
        // }))
        .pipe(RenderNunjucks({
            path: 'templates',
            data: {page, nav}
        }))
        .pipe(Rename('app-framework-overview.md'))
        .pipe(Gulp.dest('static/docs'));
});


Gulp.task('watch-css', function() {
    Gulp.watch(['static/css/*.less'], ['docs-css']);
});

Gulp.task('watch-js', function() {
    Gulp.watch(docsJsSources, ['docs-js']);
});

Gulp.task('watch-website', function() {
    Gulp.watch(['templates/**/*.njk'], ['website']);
});

// gulp.task('watch-mp-docs', function() {
//     gulp.watch(['static/docs/marketplace/*.md'], ['mp-docs']);
// });

Gulp.task('default', ['docs-css', 'docs-js', 'website', 'watch-css', 'watch-js','watch-website']);
