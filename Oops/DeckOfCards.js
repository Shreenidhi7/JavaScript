var Util=require('util');
var suit= ["\u2663", "\u2666", "\u2665", "\u2660"];
var rank=['2','3','4','5','6','7','8','9','10',"jack","queen","king","ace"];
var cards=suit.length * rank.length;
var cardarr=[];
console.log("\u2663");
console.log("\u2666");
console.log("\u2665");
console.log("\u2660")
for(let i=0;i<suit.length;i++)
{
    for(let j=0;j<rank.length;j++)
    {
        var temp=" ";
        cardarr.push(temp+rank[j]+suit[i]);
    }
}

for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i]+" ";
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
}

var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(j=0;j<9;j++)
    {
        arr[i][j]=cardarr[j+a]
    }
    a=a+9;
}

for(let i=0;i<arr.length;i++)
{
   console.log("Deck of Cards["+i+"]= "+"["+""+arr[i]+"]");  
}


