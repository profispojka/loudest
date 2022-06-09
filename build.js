// https://www.npmjs.com/package/uglify-js
var UglifyJS = require('uglify-js');
var fs = require('fs');
 
let compress = async () => {
    // With Promise
    const coreUglified = UglifyJS.minify('./src/loudest.core.js').code
    fs.writeFile('./dist/loudest.core.min.js', coreUglified, () => {});
    fs.writeFile('./dist/loudest.min.js', coreUglified, () => {});

    const core = fs.readFileSync('./src/loudest.core.js')
    fs.writeFile('./dist/loudest.js', core, () => {});

    const convolver = UglifyJS.minify('./src/plugins/loudest.convolver.js').code
    fs.writeFile('./dist/loudest.convolver.min.js', convolver, () => {});

    const filter = UglifyJS.minify('./src/plugins/loudest.filter.js').code
    fs.writeFile('./dist/loudest.filter.min.js', filter, () => {});

    const spatial = UglifyJS.minify('./src/plugins/loudest.spatial.js').code
    fs.writeFile('./dist/loudest.spatial.min.js', spatial, () => {});
}

compress();