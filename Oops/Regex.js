var UtilityOops=require('../Utility/UtilityOops');
var read=require('readline-sync');
var name=read.question("enter the name: ");

while(!isNaN(name))
{
    name=read.question("enter valid name");
}

var fullName=read.question("enter your fullname: ");
while(!isNaN(name))
{
    fullName=read.question("enter valid fullname")
}

var phoneNum=read.question("enter contact number: ")
while(isNaN(phoneNum) || (phoneNum.length!=10))
{
    phoneNum=read.question("enter valid contact number");
}
//console.log(phoneNum);

var date=new Date();
var day=date.toDateString();
var output=UtilityOops.regex(name,fullName,phoneNum,day);
console.log();
console.log(output);


