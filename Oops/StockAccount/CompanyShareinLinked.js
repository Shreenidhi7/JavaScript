var M=require('../../Utility/UtilityDS');
var D=require('../StockAccount/StockAccount');
var read=require('readline-sync');
var file=require('fs');
var data=file.readFileSync('Company.json','utf8')
var object=JSON.parse(data);
var l=new M.LinkedList;
var a=object.company;
var c=0;

for(let i in a)
{
    l.add(object.company[i])
    c++;
}
console.log(l.print())

var name1=read.question("enter the name of the company you want to remove  :")
var temp=l.head;
console.log(l.size);

for(let i=0;i<c;i++)
{
    if(temp.data.name==name1)
    {
        l.remove(temp.data)
    }
    else
    {
        temp=temp.next;
    }
}
console.log(l.print());