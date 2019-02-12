/*var s=require('../Utility/Utility');

console.log("A\u2660")
*/
var Utility=require('../Utility/Utility')
var UtilityDS=require('../Utility/UtilityDS')
var suit = ["♣️", "🔸", "❤️", "♠️"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cards = suit.length * rank.length;
var cardarr = []
for (let i = 0; i < suit.length; i++) 
{
    for (let j = 0; j < rank.length; j++) 
    {
        var temp="";
        cardarr.push(temp + rank[j] + suit[i])
    }
}
for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i];
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
}

var Player1=new UtilityDS.Queue1
var Player2=new UtilityDS.Queue1
var Player3=new UtilityDS.Queue1
var Player4=new UtilityDS.Queue1
for(let i=0;i<cardarr.length;i++)
{
    if(i>=0 && i<13)
    Player1.enQueue(cardarr[i])
    else if(i>=13 && i<26)
    Player2.enQueue(cardarr[i])
    else if(i>=26 && i<39)
    Player3.enQueue(cardarr[i])
    else 
    Player4.enQueue(cardarr[i])
}
var data=Player1.printList();
var arr=data.split(" ");
var arr10=Utility.generateInsertsort(arr);
//console.log("llllllllllllllllllll")
//console.log("\n");

var data1=Player2.printList();
var arr1=data1.split(" ");
var arr11=Utility.generateInsertsort(arr1);

//console.log("\n");

//console.log("llllllllllllllllllll")
var data2=Player3.printList();
var arr2=data2.split(" ");
var arr12=Utility.generateInsertsort(arr2);

//console.log("\n");

//console.log("llllllllllllllllllll")
var data3=Player4.printList();
var arr3=data3.split(" ");
var arr13=Utility.generateInsertsort(arr3);