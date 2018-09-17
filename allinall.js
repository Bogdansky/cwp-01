let fs = require('fs');
let path = require('path');
let copyright = '{"author": "Bogdan Incorporated", "symbol": "©2018. All rights reserved."}';

const directory = "E:\\Учёба"; //"E:\\Учёба\\ПСКП\\Первая лабораторная\\cwp-01"
console.log(directory);
const dirname = directory +"\\texts";
if (!fs.existsSync(dirname)){
    fs.mkdir( dirname, function (err) {
        if (err) throw err;
        console.log("Directory was created!" )
    });
}

fs.writeFile(dirname+"\\config.json", copyright, (err) => {
    if (err) throw err;
    console.log("config.json was created!")
});

let getFiles = function (dir, files_){

    files_ = files_ || [];
    fs.readdir(dir, (err, files) => {
        for (let i in files){
        let name = dir+'\\' + files[i];
        let filePath = dirname+"\\"+ path.win32.basename(name);
        if (fs.statSync(name).isDirectory()){
            if (name === dirname) continue;
            getFiles(name, files_);
        } else {
            if (path.extname(name) === ".txt"){
                fs.copyFile(name,filePath, (err) => {
                        fs.writeFile(filePath, JSON.stringify(copyright), 0, (err) => {
                            if (err) throw err;
                            fs.appendFile(filePath, copyright, (err) => {
                                if (err) throw err;
                            });
                        });
                        fs.watch(filePath, (event, file) => {
                           if (event === 'change'){
                               console.log(file+" changed");
                           } 
                        });
                    });
                    console.log(path.win32.basename(name)+" was copied in "+directory+"\\texts");
            }
            files_.push(name.substr(directory.length+2));
        }
        }
    });
    return files_;
};

console.log(getFiles(directory));