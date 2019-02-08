/*module.exports={

    inventory(object)
    {
        var rice=object.Rice;
        var wheat=object.Wheat;
        var pulses=object.Pulses;


        for(var key in rice)
        {
            console.log("the total price of "+rice[key].ricename,"is ",rice[key].weight * rice[key].price);

        }
        console.log("\n");

        for(var key in wheat)
        {
            console.log("the total price of "+wheat[key].wheatName,"is ",wheat[key].weight * wheat[key].price);
        }
        console.log("\n");

        for(var key in pulses)
        {
            console.log("the total price of "+pulses[key].pulseName,"is ",pulses[key].weight * pulses[key].price);
        }
    },


*/
var read = require('readline-sync');
var file = require('fs');

class Rice
{
    constructor(name, weight, price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }

    totalValue()
    {
        return this.weight * this.price;
    }
}

class Wheat
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight * this.price;
    }
}

class Pulses
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight * this.price;
    }
}


/***************************STOCK******************************************************** */

class Stock
{
    constructor(name, numberofshare, shareprice)
    {
        this.name=name;
        this.numberOfShare=numberofshare;
        this.sharePrice=shareprice;
    }

    sharePrice()
    {
        return this.numberOfShare * this.sharePrice;
    }

    
}
/********************************INVENTORY MANAGER******************************************************* */

class inventoryManage {

    constructor() {

    }
    add(data) {
        var name = read.question("Enter the name of the stock to add :");
        var shares = read.questionInt("Enter number of shares :");
        var quantity = read.questionInt("Enter the price of the shares :");
        data.Stock.push(
            {
                stockname: name,
                numberofshare: shares,
                shareprice: quantity
            })
        var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
    }

    remove(data) {
        var name = read.question("Enter the name of the stock want to remove :")
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].stockname == name) {
                var index = data.Stock.indexOf(data.Stock[i])
                data.Stock.splice(index, 1)
            }
            var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
        }
    }

    print(data) {
        var stock = data.Stock;
        for (const key in stock) 
        {
            console.log(stock[key]);

        }
    }
    edit(data) {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :")
        var shr = read.question("Enter noofShares to edit : ")
        var money = read.question("Enter the shares price :")
        for (let key in stock) {
            if (stock[key].stockname == name)
                var value = key;
            if (stock[key].numberofshare == shr)
                var value1 = key;
            if (stock[key].shareprice == money)
                var value2 = key;
        }
        var name1 = read.question("Enter the new name of the share :");
        stock[value].stockname= name1;
        var name2 = read.question("Enter the new noofShares :");
        stock[value1].numberofshare = name2;
        var name3 = read.question("Enter  the new price of the shares :")
        stock[value2].shareprice = name3;
        var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
    }
}



/**********************************String Replace**************************************** */
module.exports={
    Stock,Rice,Wheat,Pulses,inventoryManage,



        regex(name,fullName,phoneNum,day)
        {
            var fileread=require('fs');
            var line=fileread.readFileSync("regex.txt",'utf8')
            //console.log(line)
            line=line.replace(/<<name>>/g,name);
            line=line.replace(/<<full name>>/g,fullName);
            line=line.replace(/91-xxxxxxxxxx/g,phoneNum);
            line=line.replace(/01-01-2016/g,day);
            //console.log();
            //console.log();
            //console.log(line);
            return line
            
        },

    //} 
/******************************************************************************************* */
    
/*

stockReport(object)
{
    var stock=object.Stock;
    var totalstock=0;

    for(var key in stock)
    {
        console.log();
        console.log("the total value of ",stock[key].stockname, "share is", stock[key].numberOfShare * stock[key].sharePrice);
        var num=stock[key].numberOfShare * stock[key].sharePrice;
        console.log(num);
        totalstock=totalstock+num;
    }
    console.log();
    console.log("value of total stocks: "+totalstock); 
},

*/

/*
inventory(object)
{
var invent=object.Inventory;
var totalprice=0;

for(var key in invent)
{
    console.log();
    console.log("the total value of",invent[key].name,"is ",invent[key].weight * invent[key].price);
    var num=invent[key].weight * invent[key].price;
    console.log(num);
    totalprice=totalprice+num;
    
}
console.log();
console.log("value of totalprice: "+totalprice);
}



*/





}









    











