//const name = process.argv[2];

//console.log(`Hi ${name}!`);
var i = -1;
process.argv.forEach(function(item){
  i++;
if (i>1){
  console.log(item);
}
});

