let directory = process.argv[2];
console.log(directory);
directory = directory.split('\\').join('\\\\');
console.log(directory);
const code =  "let fs = require('fs');\n" +
    "let path = require('path');\n" +
    " let copyright = {\"author\" : \"Bogdan Incorporated\" , \"symbol\" : \"@2018. All rights reserved.\" };\n" +
    "      \n" +
    " const directory = \""+directory+"\" ;\n" +
    " const dirname = directory+\"\\gods\" ;\n" +
    " if (!fs.existsSync(dirname)){     \n" +
    "     fs.mkdir( dirname, function (err) {     \n" +
    "         //if (err) throw err;     \n" +
    "         console.log(\"Directory was created!\");\n" +
    "     });     \n" +
    " }     \n" +
    "      \n" +
    " fs.writeFile(dirname+\"\\\\config.json\", copyright, (err) => {\n" +
    "     //if (err) throw err;     \n" +
    "     console.log(\"config.json was created!\" );\n" +
    " });     \n" +
    "      \n" +
    " let getFiles = function (dir, files_){     \n" +
    "      \n" +
    "     files_ = files_ || [];    \n" +
    "     fs.readdir(dir, (err, files) => {     \n" +
    "         for (let i in files){     \n" +
    "         let name = dir +'\\\\'+files[i];\n" +
    "         let filePath = dirname +\"\\\\\" + path.win32.basename(name);\n" +
    "         if (fs.statSync(name).isDirectory()){     \n" +
    "             if (name === dirname) continue;     \n" +
    "             getFiles(name,files_);     \n" +
    "         } else {     \n" +
    "             if (path.extname(name) === \".txt\" ){\n" +
    "                 fs.readFile(name, (err, data) => {     \n" +
    "                     fs.writeFile(filePath, copyright  +   (data == null ? \"\"  : data)  +   copyright, (err)=>{\n" +
    "                         if (err) throw err;     \n" +
    "                         fs.watch(filePath, (event, file) => {     \n" +
    "                             if (event === 'change'){     \n" +
    "                                 console.log(file + \" changed\");\n" +
    "                             }     \n" +
    "                         });     \n" +
    "                     });     \n" +
    "                 });     \n" +
    "                 console.log(path.win32.basename(name)+\" was copied in \"+directory+\"\\\\texts\" );\n" +
    "                 files_.push(name.substr(directory.length+2));\n" +
    "             }     \n" +
    "                  \n" +
    "         }     \n" +
    "         }     \n" +
    "     });     \n" +
    " return files_;    \n" +
    " };     \n" +
    "      \n" +
    " console.log(getFiles(directory));";
let fs = require("fs");
let exist = fs.existsSync(directory);
if (exist ){
    fs.writeFile(directory+ "\\summary.js", code, (err)=>{
        if (err) throw err;
        console.log( "Script was created by. ");
    });
}
else {
    console.log( "Директория не существует!");
}

