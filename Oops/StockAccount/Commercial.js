var D=require('../../Oops/StockAccount/StockAccount');
var read=require('readline-sync');
var file=require('fs');
var data=file.readFileSync('customer.json','utf8');
var data1=file.readFileSync('Company.json','utf8');
var object=JSON.parse(data);
var object11=JSON.parse(data1);
var object1=new D.StockAccount;
console.log("enter 1 to create account");
console.log("enter 2 to buy shares");
console.log("enter 3 to sell shares");
console.log("enter 4 to information shares of company and customer");
var num=read.question("choose the number")
if(num==1)
{
    object1.stockCreate(object);
}
if(num==2)
{
    object1.buy(object,object11);
}
if(num==3)
{
    object1.sell(object,object11);
}
if(num==4)
{
    object1.print(object,object11);
}


