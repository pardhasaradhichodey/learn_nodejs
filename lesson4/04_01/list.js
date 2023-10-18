const fs = require("fs");

fs.readdir("../../lesson3", function (err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("reading files...");
