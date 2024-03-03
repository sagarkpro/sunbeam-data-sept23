var v = require('./calc');
var obj = require('./demo');
var os = require('os');
var mysql = require('mysql');

// setInterval(()=>{console.log("hi! hello!")}, 1000);
// setTimeout(()=>{console.log("hi! hello!")}, 5000);
// console.log(global);
// console.log(module);

var result1 = v.Addition(10,20);
console.log(result1);

console.log(obj.pi);

var p1 = new obj.Person(10,"mahesh", "pune");
p1.Print();

console.log(`Free memory available on m/c ` + os.freemem());

console.log(`Architecture of the m/c ` + os.arch());
