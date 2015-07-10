var fs       = require('fs'),
    spawn    = require('child_process').spawn,
	path     = require('path');

var paths = {
	'docs' : path.normalize(process.cwd() + '/static/docs/marketplace'),
    'mdoc_root': path.normalize(process.cwd() + '/mdoc'),
	'node_modules' : path.normalize(process.cwd() + '/mdoc/node_modules'),
	"path_to_docs" : path.normalize(process.cwd() + '/static/marketplace'),
	'mdoc' : path.normalize(process.cwd() + '/mdoc/bin/mdoc')
};

// Because things aren't easy in Windows
var npmCommand = 'npm' + ((path.sep == '\\') ? '.cmd' : '');

// Check if we're in the right spot
fs.exists(paths.docs, function (codeExists) {
	if (!codeExists) {
        console.error("Couldn't find code directory. Set working directory to docs/api please!");
    } else {
        // Check for node modules
        fs.exists(paths.node_modules, function(modulesExist) {
            if (!modulesExist) {
                // DO NPM INSTALL
                var npmProc = spawn(npmCommand, ['install', 'commander','handlebars','wrench'], { cwd: paths.mdoc_root, env: process.env });

                // Show NPM status
                npmProc.stdout.on('data', function (data) {
                    console.log(data.toString().replace("\n", ''));
                });

                // Show NPM troubles
                npmProc.stderr.on('data', function (data) {
                    console.error(data.toString().replace("\n", ''));
                });

                // When NPM is done, generate docs!
                npmProc.on('close', function(code, signal) {
                    if (code == 0) {
                        runMdoc();
                    } else {
                        console.error('Failed to fetch node modules. Is npm reachable via PATH?', code, signal);
                    }
                });
            } else {
                // RUN THE DOCS!
                runMdoc();
            }
        });
    }
});

var deleteFolderRecursive = function(curPath) {
    var files = [];
    var ccp = curPath;
    if( fs.existsSync(curPath) ) {
        files = fs.readdirSync(curPath);
        files.forEach(function(file, index) {
            var curPath = ccp + path.sep + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(curPath);
    }
};

function runMdoc() {

    // Synchronous :(
    console.log('Purging old docs...', paths.path_to_docs);
    deleteFolderRecursive(paths.path_to_docs);

    console.log('Generating new docs...');
    var mdocProc = spawn('node', [paths.mdoc, '-i', paths.docs, '-o', paths.path_to_docs, '--title', 'Okanjo API Core Specification', '--exclude', 'combined.md,MyHiddenDoc2.md']);
    mdocProc.stdout.on('data', function (data) {
        console.log(data.toString().replace("\n", ''));
    });

    mdocProc.stderr.on('data', function (data) {
        console.error(data.toString().replace("\n", ''));
    });

    mdocProc.on('close', function (code) {
        console.log('DONE!');
    });
}
