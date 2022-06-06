// https://www.npmjs.com/package/uglify-js
var UglifyJS = require('uglify-js');
var fs = require('fs');
 
let compress = async () => {
    // With Promise
    const uglified = UglifyJS.minify('./src/howler.core.js').code
    fs.writeFile('./dist/howler.core.min.js', uglified, () => {});
    fs.writeFile('./dist/howler.min.js', uglified, () => {});

    const unuglified = fs.readFileSync('./src/howler.core.js')
    fs.writeFile('./dist/howler.js', unuglified, () => {});

    const uglified2 = UglifyJS.minify('./src/plugins/howler.convolver.js').code
    fs.writeFile('./dist/howler.convolver.min.js', uglified2, () => {});

    const uglified3 = UglifyJS.minify('./src/plugins/howler.filter.js').code
    fs.writeFile('./dist/howler.filter.min.js', uglified3, () => {});

    const uglified4 = UglifyJS.minify('./src/plugins/howler.spatial.js').code
    fs.writeFile('./dist/howler.spatial.min.js', uglified4, () => {});
}

compress();