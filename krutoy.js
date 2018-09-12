const directory = process.argv[2];
let code = "let directory = \""+directory+"\";"+
    "let fs = require(\"fs\");" +
    "fs.readdir(directory, function(error, items){" +
    "items.forEach(function(item){" +
    "console.log(item);" +
    "});" +
    "});"+
    "fs.mkdir(directory+\"\\texts\", function (err) {"+
    "if (err)throw err;"+
    "console.log(\"Directory was created!\")"+
    "});";

let fs = require("fs");
let exist = fs.existsSync(directory);
if (exist){
    fs.writeFile(directory+"\\summary.js", code, (err)=>{
        if (err) throw err;
        console.log("Script was created by.");
    });
}
else {
    console.log("Директория не существует!");
}