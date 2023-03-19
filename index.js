var cowsay = require("cowsay");

const user = require('./information.js');

console.log(cowsay.say({
    text : `Hi, my name is ${user.name} may campus is the ${user.campus}`,
    e : "oO",
    T : "U "
}));



 
