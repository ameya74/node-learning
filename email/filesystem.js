var fs = require('fs'); 

var filename = "input.txt";

var data = fs.readFileSync(filename,"utf8"); //Does this synchronously//
console.log(data);    //Prints the data inside the txt file//