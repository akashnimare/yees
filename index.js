#!/usr/bin/env node
var screenshot = require('url-to-screenshot');
var fs = require('fs');
var argv = require('yargs')
    .usage('Usage: $0 -u [url] -w [width] -h [height] -n [Screenshotname]')
    .demand(['u','w','h','n'])
    .argv; 

screenshot(argv.u)
  .width(argv.w)
  .height(argv.h)
  .clip()
  .capture(function(err, img) {
    if (err) throw err;
    fs.writeFile(argv.n + ".png" , img)
    console.log(argv.n + '.png' + ' captured succesfully');
  });




