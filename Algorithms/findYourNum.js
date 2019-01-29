var num=require('../Utility/Utility');
var input=require('readline-sync');
var n=process.argv[2];
var res=num.toFindNumber(0,n-1,input)

console.log("the number is= "+res);