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


var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    twig = require('gulp-twig'),
    run = require('gulp-run'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),

    // Auto add vendor prefixes in CSS
    autoprefix= new LessPluginAutoPrefix({ browsers: ["> 5%"] }),

    docsJsSources = [
        'static/js/jquery.min.js',
        'static/js/legacy.js',
        'static/js/prism.js',
        'mdoc/src/js/lib/showdown.js',
        'static/js/flatdoc.js',
        'mdoc/src/js/lib/extensions/github.js',
        'mdoc/src/js/lib/extensions/table.js',
        'mdoc/src/js/lib/extensions/definition.js',
        'mdoc/src/js/lib/extensions/badges.js',
        'static/js/theme.js',
        'static/js/eventemitter2.js'
    ],

    nav = [

        { name: 'Marketplace API', href: 'mp' },
        //{ name: 'Ads API', href: 'ads' },
        { name: 'Product API', href: 'product-api' },
        { name: 'Okanjo-JS', href: 'okanjo-js' },
        { name: 'Node.js SDK', href: 'node-sdk' },
        { name: 'PHP SDK', href: 'php-sdk' },
        { name: 'Ship-It', href: 'shipit' }

    ]

;

gulp.task('docs-js', function() {
    //noinspection JSUnusedGlobalSymbols
    return gulp.src(docsJsSources)
        .pipe(sourcemaps.init())
        .pipe(concat('docs-build.js'))
        .pipe(gulp.dest('static/js'))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename('docs-build.min.js'))
        .pipe(sourcemaps.write('../../static/js', { sourceRoot: './' }))
        .pipe(gulp.dest('static/js'))
});

gulp.task('docs-css', function() {
    return gulp.src('static/css/theme.less')
        .pipe(less({
            plugins: [autoprefix],
            paths: [ path.join(__dirname, 'static', 'css' ) ]
        }))
        //.pipe(minifyCSS())
        .pipe(gulp.dest('./static/css/'))
});


//gulp.task('mp-merge', function() {
//    //noinspection JSUnusedGlobalSymbols
//    return gulp.src('static/docs/marketplace/*.md')
//        .pipe(concat('combined.md'))
//        .pipe(gulp.dest('static/docs/marketplace'))
//});

gulp.task('mp-docs', function() {
    return run('node gen-docs.js')
        .exec();
});


gulp.task('website', function() {

    // Build a header list
    //var nav = [];

    //docs.forEach(function(doc, i) {
    //    //nav.push({
    //    //    href: doc.path,
    //    //    name: docs.name
    //    //})
    //
    //    // Add circular per doc
    //    docs[i].docs = docs;
    //});

    return gulp.src('templates/pages/*.twig')
        .pipe(twig({
            data: {
                nav: nav
            },
            errorLogToConsole: true
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest('static'));
});


gulp.task('watch-css', function() {
    gulp.watch(['static/css/*.less'], ['docs-css']);
});

gulp.task('watch-js', function() {
    gulp.watch(docsJsSources, ['docs-js']);
});

gulp.task('watch-website', function() {
    gulp.watch(['templates/**/*.twig'], ['website']);
});

gulp.task('watch-mp-docs', function() {
    gulp.watch(['static/docs/marketplace/*.md'], ['mp-docs']);
});

gulp.task('default', ['docs-css', 'docs-js', 'website', 'mp-docs', 'watch-css', 'watch-js','watch-website','watch-mp-docs']);
