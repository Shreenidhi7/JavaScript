var fileStream=require('fs');
var UtilityOops=require('../Utility/UtilityOops');
var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);

function inventory()
{
    UtilityOops.inventory(object);
    //var st=JSON.stringify(object);
    //console.log(st);
}
inventory();















