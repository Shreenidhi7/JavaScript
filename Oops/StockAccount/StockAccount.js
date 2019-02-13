/*

var read=require('readline-sync')
var file=require('fs')
var M=require('../../Utility/UtilityDS')
var linkedlist=new M.LinkedList
var s=0
class StockAccount{
    constructor(){
        
    }
    stockCreate(data){
        var name1=read.question("enter name :")
        var id1=Math.floor(Math.random()*100)
        data.customer.push(
            {
                name:name1,
                id:id1

            }
        )
        var d = file.writeFileSync('customer.json', JSON.stringify(data))



    }
   

    buy(data,data1)
    { 
        console.log(data)
        var object=data.customer
        var id1=read.question("Enter your ID:")
        for(let i in object)
        {
            
            if(object[i].id==id1)
            {
                var index = data.customer.indexOf(data.customer[i]);
                var customername=object[i].name
                console.log("company information :")
                console.log(data1)
                var name1=read.question("Enter name of company share you want buy:")
                var object1=data1.company
                for(let i in object1)
                {
                    if(object1[i].name==name1)
                    {
                        console.log("company number of shares and price for each share is:")
                        console.log(object1[i])
                        var name10=object1[i].name
                        var number=read.questionInt("enter how many shares you want buy:")
                        var s="customer name :"+customername+", & name of company:"+name10+", buy number of share"+number
                        this.stackps(s)
                        var time=new Date()
                        var time1=" Time of buy the share is:"+time
                        this.queuetime(time1)
                        var n=parseInt(data.customer[index].share)
                        var n11=parseInt(data1.company[i].share)
                        var num=parseInt(number)
                        var n1=n+num
                        var n2=n11-num
                        if(n11>num){
                       data.customer[index].share=n1
                       data1.company[i].share=n2
                       var d = file.writeFileSync('customer.json', JSON.stringify(data))
                       var d1 = file.writeFileSync('Company.json', JSON.stringify(data1))
                        }
                    }
                }

            }
            
        }

    }
    sell(data,data1){
        console.log(data)
        var object=data.customer
        var id1=read.question("Enter your ID:")
        for(let i in object)
        {
            
            if(object[i].id==id1)
            {
                var index = data.customer.indexOf(data.customer[i]);
                var customername1=object[i].name
                console.log("company information :")
                console.log(data1)
                var name1=read.question("Enter name of company you want sell :")
                
                var object1=data1.company
                for(let i in object1)
                {
                    if(object1[i].name==name1)
                    {
                        console.log("company number of shares and price for each share is:")
                        console.log(object1[i])
                        var name11=object1[i].name
                         
                        var number=read.question("enter how many shares you want sell:")
                        var s="customer name :"+customername1+", & nameof company:"+name11+" ,sell number of share :"+number
                        this.stackps(s)
                        var time=new Date()
                        var time1=" Time of sell the share is:"+time
                        this.queuetime(time1)
                        var n=parseInt(data.customer[index].share)
                       var n11=parseInt(data1.company[i].share)
                        var num=parseInt(number)
                        var n1=n-num
                        var n2=n11+num
                        
                       data.customer[index].share=n1
                       data1.company[i].share=n2
                       var d = file.writeFileSync('customer.json', JSON.stringify(data))
                       var d1 = file.writeFileSync('Company.json', JSON.stringify(data1))
                       

                    }
                }

            }
           
            
        }


    }
   stackps(s){
       
       var stack=new M.Stack
       stack.push(s);
        stack.print();

   }
   queuetime(time){
       var queue=new M.Queue2
       queue.enqueue(time)
      queue.print()

   }
    print(data,data1){
        console.log("customer shares information:")
        console.log(data)
        console.log("company shares information:")
        console.log(data1)

    }
}
class Stock {
    constructor(name, numberofshare, shareprice) {

        this.name = name,
            this.numberofshare = numberofshare,
            this.shareprice = shareprice
    }
}
class Companyshares{
    create(data){
        var name1=read.question("Enter name of company:")
        var share1=read.questionInt("Enter shares of company:")
        var price1=read.questionInt("Enter price for each shares:")
       data.company.push(
            {
                name:name1,
                share:share1,
                price:price1
            }
        )
        var d1 = file.writeFileSync('Company.json', JSON.stringify(data))
        //var linkedlist=new M.LinkedList
        var companys=data.company

        for(let i in companys)
        {
          
            linkedlist.add(data.company[i])
           
        }
        console.log(linkedlist)
        /*var s=new Stock(name1,share1,price1)
        
        var linkedlist=new M.LinkedList
        linkedlist.add(s)
        console.log(linkedlist)
        

    }
    
    print(data)
    {
        console.log(data)
    }
    remove(data)
    {
        var name1=read.question("Enter name of company:")
        console.log(linkedlist)

    }
    
    
}
module.exports={StockAccount,Companyshares}

*/


var read = require("readline-sync");
var file = require("fs");
//var  M = require('../../Utility/utilityDataStructure');
//var linkedList = new M.LinkedList();
class StockAccount {
  
  constructor(customerDataJson, companyDataJson) 
  {
    this.customerDataJson = customerDataJson;
    this.companyDataJson = companyDataJson;
  }
  stockCreate()
   {
    var name1 = read.question("enter the name : ");
    var id1 = Math.floor(Math.random() * 100);
    console.log(id1);
    var share1 = Math.floor(Math.random() * 100);
    this.customerDataJson.customer.push({
      name: name1,
      id: id1,
      share: share1
    });
    console.log(this.customerDataJson.customer);

    var d = file.writeFileSync(
      "customer.json",
      JSON.stringify(this.customerDataJson)
    );
  }


  buy()
   {
    console.log(this.customerDataJson);
    var customerObject = this.customerDataJson.customer;
    var idNumber = read.question("enter the id :");
    for (let key in customerObject) {
      if (customerObject[key].id == idNumber) 
      {
        var index = this.customerDataJson.customer.indexOf(
          this.customerDataJson.customer[key]
        );
        var customername = customerObject[key].name;
        console.log("company information");
        console.log(this.companyDataJson);
        var name1 = read.question(
          "enter name of company share you want to buy "
        );
        var companyDetails = this.companyDataJson.company;
        for (let i in companyDetails) 
        {
          if (companyDetails[i].name == name1) 
          {
            console.log("company number of shares price of each share");
            console.log(companyDetails[i]);
            var companyName = companyDetails[i].name;
            var share = companyDetails[i].share;
            var flag = false;
            do
            {
            var numberOfShares = read.questionInt(
              "enter the number of shares you want to buy"
            );
            if(numberOfShares> share){
              console.log("Enter no of shares less than company shares ")
            }
            else
            {
              flag = true;
            }
          }
          while(!flag)
            var output =
              "customer name : " +
              customername +
              " and name of company " +
              companyName +
              " buy number of shares " +
              numberOfShares;
            console.log(output);

            //this.stackps(s);
            var date = Date(Date.now());

            // Converting the number of millisecond in date string
            var time = date.toString();
            //this.queuetime(time1);
            var n = parseInt(this.customerDataJson.customer[index].share);
            var n11 = parseInt(this.companyDataJson.company[i].share);
            var num = parseInt(numberOfShares);
            var n1 = n + num;
            var n2 = n11 - num;
            if (n11 > num) 
            {
              this.customerDataJson.customer[index].share = n1;
              this.companyDataJson.company[i].share = n2;
              this.customerDataJson.customer[index].LastTransaction = time;
              var date = file.writeFileSync(
                "customer.json",
                JSON.stringify(this.customerDataJson)
              );
              //console.log(d)

              var d1 = file.writeFileSync(
                "Company.json",
                JSON.stringify(this.companyDataJson)
              );
            }
          }
        }
      }
    }
  }
  sell() 
  {
    console.log(this.customerDataJson);
    var customerObject = this.customerDataJson.customer;
    var id1 = read.question("enter the id :");
    for (let key in customerObject) {
      if (customerObject[key].id == id1) 
      {
        var index = this.customerDataJson.customer.indexOf(
          this.customerDataJson.customer[key]
        );
        var customername1 = customerObject[key].name;
        console.log("company information");
        console.log(this.companyDataJson);
        var name1 = read.question("enter name of company you want to sell ");
        var companyObject = this.companyDataJson.company;
        for (let key in companyObject) {
          if (companyObject[key].name == name1) 
          {
            console.log("company number of shares and price of each share ");
            console.log(companyObject[key]);
            var companyName = companyObject[key].name;
            var share = customerObject[key].share; 
            var flag = false;
            do
            {
              var number = read.questionInt(
                "enter how many shares you want to sell ")
            if(number> share)
            {
              console.log("Enter no of shares greater than the current shares ")
            }
            else
            {
              flag = true;
            }
          }while(!flag)
            
            var output =
              "customer name :" +
              customername1 +
              "and name of company " +
              companyName +
              "sell number of shares " +
              number;
            console.log(output);

            //this.stackps(s);
            var date = Date(Date.now());

            // Converting the number of millisecond in date string
            var time = date.toString();
            //this.queuetime(time1);
            var n = parseInt(this.customerDataJson.customer[index].share);
            var n11 = parseInt(this.companyDataJson.company[key].share);
            var num = parseInt(number);
            var n1 = n - num;
            var n2 = n11 + num;
            this.customerDataJson.customer[index].share = n1;
            this.companyDataJson.company[key].share = n2;
            this.customerDataJson.customer[index].LastTransaction = time;
            var date = file.writeFileSync(
              "customer.json",
              JSON.stringify(this.customerDataJson)
            );
            var d1 = file.writeFileSync(
              "Company.json",
              JSON.stringify(this.companyDataJson)
            );
          }
        }
      }
    }
  }
  /**  stackps(s)
    {
        var stack = M.StackLinkedList;
        stack.push(s);
        stack.print();
    }*/
  /**  queuetime(time)
    {
        var queue = M.LinkListQ
        queue.enQueue(time);
        queue.print();
    }*/
  print(customerDataJson, companyDataJson) {
    console.log("customer shares information :");
    console.log(this.customerDataJson);
    console.log("company shares information :");
    console.log(this.companyDataJson);
  }
}
module.exports = { StockAccount };