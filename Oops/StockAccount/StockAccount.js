/*var read=require('readline-sync');
var file=require('fs');
var M=require('../Utility/UtilityDS');
var linkedlist=new M.LinkedList;
var s=0;

class StockAccount
{
    constructor()
    {

    }
    stockCreate(data)
    {
        var name1=read.question("enter name :")
        var id1=math.floor(Math.floor(Math.random()*100))
        data.customer.push(
            {
                name:name1,
                id:id1
            }
        )
        var d=file.writeFileSync('customer.json',JSON.stringify(data))
    }

    buy(data,data1)
    {
        console.log(data);
        var object=data.customer;
        var id1=read.question("enter your ID: ");

        for(let i in object)
        {
            if(object[i].id==id1)
            {
                var index=data.customer.indexOf(data.customer[i])
                var customername=object[i].name
                console.log("company information :");
                console.log((data1));
                var name1=read.question("enter name of company share you want to buy: ");
                var object1=data1.company;

                for(let i in object1)
                {
                    if(object1[i].name==name1)
                    {
                        console.log("company number of shares and price for each share is: ");
                        console.log(object1[i])
                        var name10=object1[i].name;
                        var number=read.questionInt("enter how many shares you want to buy: ");
                        var s="customer name :"+customername+ ",& name of company:"+ name10+ ",buy number of share" +number;
                        this.stackps(s);
                        var time=new Date();
                        var time1="Time of buy the share is:"+time;
                        this.queuetime(time1)
                        var n=parseInt(data.customer[index].share)
                        var n11=parseInt(data1.company[i].share)
                        var num=parseInt(number);
                        var n1=n+num;
                        var n2=n11-num;
                        if(n11>num)
                        {
                            data.customer[index].share=n1;
                            data1.company[i].share=n2;
                            var d=file.writeFileSync('customer.json',JSON.stringify(data))
                            var d1=file.writeFileSync('Company.json',JSON.stringify(data1))
                        }

                        
                    }
                }
                
                
            }
        }
        
    }


    sell(data,data1)
    {
        console.log(data);
        var object=data.customer;
        var id1=read.question("enter your ID");
        for(let in object)
        {
            if(object[i.id==id1])
                {
                 var index=data.customer.indexOf(data.customer[i])
                 var customername1=object[i].name;
                 console.log("company information :");
                 console.log(data1);
                 var name1=read.question("enter name of company you want to sell :");

                 var object1=data1.company;
                    for(let i in object1)
                    {
                        console.log("company number of shares and price for each share is: ");
                        console.log(object1[i]);
                        var name11=object1[i].name;

                        var number=read.question("enter how many shares you want to sell:")
                        var s="customer name :"+customername1+",& nameof company: "+name11+",sell number of share :"+number;
                        this.stackps(s);
                        var time=new Date();
                        var time1="time of sell the share is :"+time;
                        this.queuetime(time1);
                        var n=parseInt(data.customer[index].share);
                        var n11=parseInt(data1.company[i].share)
                        var num=parseInt(number);
                        var n1=n-num;
                        var n2=n11+num;

                        data.customer[index].share=n1;
                        data1.company[i].share=n2;
                        var d=file.writeFileSync('customer.json',JSON.stringify(data));
                        var d1=file.writeFileSync('Company.json',JSON.stringify(data1));

                    }
                 
                }
        }
        
    }


    stackps(s)
    {
        var stack=new M.StackLinkedList;
        stack.push(s);
        stack.print();
    }

    queuetime(time)
    {
        var queue=new M.QueueLinked;
        queue.enqueue(time)
        queue.print();
    }

    
 print(data,data1)
 {
console.log("");

 }
 */

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
        console.log(linkedlist)*/
        

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