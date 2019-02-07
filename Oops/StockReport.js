var UtilityOops=require('../Utility/UtilityOops');
var fileread=require('fs');
var input=fileread.readFileSync('StockReport.json','utf8');
var object=JSON.parse(input);
var sum=0;
var d=object.Stock;

for(let i in d)
{
    var name=d[i].stockname;
    var numberofshare=d[i].numberofshare;
    var shareprice=d[i].shareprice;
    var total=numberofshare * shareprice;
    console.log("The Total Value Of","[",d[i].stockname,"]","Share Is",d[i].numberofshare * d[i].shareprice);
    sum=sum+total;
    i=new UtilityOops.Stock(name,numberofshare,shareprice);
    //var d=i.shareprice();
}
console.log("Value Of Total Stocks: "+sum);

//D.stockReport(object)
//var o=new D.Stock;
//o.sharePrime;