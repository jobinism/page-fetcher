const request = require("request");
const process = require("process")
const fs = require("fs");
const localPath = process.argv[3];
const url = process.argv[2];


const fetcher = function(url, localPath) {
  request(url,(err, response, body) => {
    if (err) {
      console.log(`There's an error!`, err)
      return;
    } else if (!err) {
      fs.writeFile(localPath, body, (err) => {
        if (err) {
          console.log(`Error saving to local path`, localPath);
          return;
        } else {
          console.log(`Downloaded/Saved to ${localPath}`)
        };
      });
    };
  });
};

if (url && localPath) {
  fetcher(url, localPath)
} else {
  console.log(`Incorrect input!`)
};