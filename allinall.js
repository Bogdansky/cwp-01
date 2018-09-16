let fs = require('fs');
let path = require('path');


const directory = process.argv[2]; //"E:\\Учёба\\ПСКП\\Первая лабораторная\\cwp-01"
console.log(directory);
const dirname = directory +"\\texts";
if (!fs.existsSync(dirname)){
    fs.mkdir( dirname, function (err) {
        if (err) throw err;
        console.log("Directory was created!" )
    });
}



let getFiles = function (dir, files_){

    files_ = files_ || [];
    fs.readdirSync(dir, function(){for (let i in files){
        let name = dir+'\\' + files[i];
        let filePath = dirname+"\\"+ path.win32.basename(name);
        if (name === dirname) continue;
        if (path.extname(name) === ".txt"){
            fs.copyFile(name,filePath, (err) => {
                //if (err) throw err;
                console.log(path.win32.basename(name)+" was copied in "+directory+"\\texts");
            });
        }
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name.substr(directory.length+2));
        }
        }
    }
    );
    return files_;
};

console.log(getFiles(directory));