const fs = require("fs");

fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
  console.log(ipsum);
  if(err){
    console.log(err);
  }
});

console.log("reading the file...");
