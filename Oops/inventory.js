var fileStream=require('fs');
var UtilityOops=require('../Utility/UtilityOops');

var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);

var sum=0;
var sum1=0;
var sum2=0;
var d=object.Rice;
var e=object.Wheat;
var f=object.Pulses;


for(let i in d )
{
  
    var name=d[i].name;
    var weight=d[i].weight;
    var price=d[i].price;
    var total=weight * price;

    console.log("the total value of",d[i].name,"is",d[i].weight * d[i].price );
    sum=sum+total;
    i=new UtilityOops.Rice(name,weight,price)
   

}
console.log(sum);
console.log();


for(let j in e)
{
    var name=e[j].name;
    var weight=e[j].weight;
    var price=e[j].price;
    var total=weight * price;
    console.log("the total value of",e[j].name,"is",e[j].weight * e[j].price );

    sum1=sum1+total;

    j=new UtilityOops.Wheat(name,weight,price)
    
    
}
console.log(sum1);
console.log();

    
for(let k in f)
{
    var name=f[k].name;
    var weight=f[k].weight;
    var price=f[k].price;
    var total=weight * price;
    console.log("the total value of",f[k].name,"is",f[k].weight * f[k].price );
    sum2=sum2+total;
    k=new UtilityOops.Pulses(name,weight,price)
    
}

console.log(sum2+"\n");
var result=sum+sum1+sum2;
console.log("the total amount is=",result);







