/* var D=require('../../Oops/StockAccount/StockAccount');
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


*/
/**************************************************************************
 * Execution        : Default node             cmd> node Commercial.js
 * @file            : Commercial.js
 * @overview        :  The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and 
     Number of Shares as well as DateTime of the transaction. 
     When buy or sell is initiated StockAccount checks if CompanyShares are available
     and accordingly update or create an Object.

 * @author          : Shreenidhi Sharma N  <shreenidhisharma7@gmail.com>
 * @version         : 1.0.
 * @since           : 15/02/2019
 ***************************************************************************/

var D = require("../StockAccount/StockAccount");
var read = require("readline-sync");
var file = require("fs");
var customerData = file.readFileSync("customer.json", "utf8");
var companyData = file.readFileSync("Company.json", "utf8");
var customerDataJson = JSON.parse(customerData);
var companyDataJson = JSON.parse(companyData);
var stockAccount = new D.StockAccount(customerDataJson, companyDataJson);
console.log("Enter 1 to create account:");
//console.log("Enter 2 to total value of amount in account")
console.log("Enter 2 to buy shares");
console.log("Enter 3 to sell shares");
console.log("Enter 4 to information shares of company and customer");

var choice = read.questionInt("choose the number:");
while(choice>4 || choice<0)
{
    choice =read.questionInt("Enter valid choice ")
}
switch (choice) {
  case 1:
    stockAccount.stockCreate();
    break;
  case 2:
    stockAccount.buy(customerDataJson, companyDataJson);
    break;
  case 3:
    stockAccount.sell(customerDataJson, companyDataJson);
    break;
  case 4:
    stockAccount.print(customerDataJson, companyDataJson);
    break;
}






