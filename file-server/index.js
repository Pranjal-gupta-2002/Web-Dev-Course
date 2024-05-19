const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/files", (req, res) => {
  
  let filesList = [];
  fs.readdir(path.join(__dirname,"./files/"), (err, files) => {
    filesList = files.map((file) => {
      return {
        name: file,
        path: `/files/${file}`,
      };
    });
    if(filesList.length === 0){
      res.json({
        message: "No files found",
      });
    }
    else{
        res.json(filesList);
    }
  });
  console.log(filesList)
});

app.get("/files/:filename", (req, res) => {

    const filename = req.params.filename;
  
  let filesList = [];
  fs.readFile(path.join(__dirname,`./files/${filename}`),"utf-8", (err, data) => {
    
    if(err){
      res.status(404).json({
        message: "No file found",
      });
    }
    else{
        res.json({
            data
        });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
