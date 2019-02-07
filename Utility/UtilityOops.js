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


/**************************************************************************** */

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



/**********************************String Replace**************************************** */
module.exports={
    Stock,Rice,Wheat,Pulses,



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









    











