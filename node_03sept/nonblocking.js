var fs = require("fs");
var multer = require('multer');

// var data = fs.readFileSync('file.txt')
fs.readFile('File.txt', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());  // Print file content

    // Code that depends on file data should be here
    let i = 1;
    while (i <= 5) {
        console.log("The number is: " + i);
        i++;
    }
});