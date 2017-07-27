
//This is the main file where cvstoRandjxh module is called
var runModule = require('csvtorandjxh');

//Indicate the beginning of process
console.log("Started");

//Invoke function from the module which create pages and display
//random value pair of title and author on each refresh
//csv file is insert as a string input argument to the function 
runModule.createRandomDispPages("quotes.csv");