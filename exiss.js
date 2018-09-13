 let directory = "E:\\Учёба\\ПСКП\\Первая лабораторная" ;
 let fs = require("fs" );
 fs.readdir(directory, function(error, items){    
 items.forEach(function(item){    
 console.log(item);    
 });    
 });
 fs.mkdir(directory +"\\texts" , function (err) {
     if (err)throw err;
     console.log("Directory was created!" )
 });