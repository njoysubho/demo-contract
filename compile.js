const path = require('path');
const fs = require("fs");
const solc = require('solc');
const demoPath = path.resolve(__dirname,'contracts','demo.sol');
const source = fs.readFileSync(demoPath,'utf8');
//console.log(solc.compile(source,1).contracts[':demo']);
module.exports=solc.compile(source,1).contracts[':demo'];

