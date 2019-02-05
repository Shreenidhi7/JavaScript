
var Utility=require('../Utility/Utility');
var UtilityDS=require('../Utility/UtilityDS');

var read=require('readline-sync');
var word=read.question("enter word to be searched in file:")


var arr=Utility.fileRead("shri.txt");

var l=new UtilityDS.LinkedList();

for(let i=0;i<arr.length;i++)
    {
     l.add(arr[i]);
    }


var found=l.search(word);
if(found==true)
{
    l.remove(word);
    var output=l.print();
    Utility.fileWrite('shri.txt',output);
    console.log(output)
}
else
{
    l.add(word)
    var out=l.print();
    Utility.fileWrite('shri.txt',out);
    console.log(out)
}

