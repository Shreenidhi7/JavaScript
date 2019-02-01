/*var num=require('../Utility/UtilDataStructures');
var l=new num.LinkedList();
l.add("abc");
l.add("bcd");
l.add("cde");  
//console.log(l);
l.print();
//console.log(l);
var res=l.getSize();
console.log(res);

//var arr=[];
//l.addpos(arr,2);

var result=l.insertFirst(1);
console.log(result);

//console.log(arr.length)

l.remove("bcd");
l.print();
*/

var access=require('../Utility/UtilDataStructures');
var M=require('../Utility/Utility');
var read=require('readline-sync');
var word=read.question("enter word to be searched in file:")


var arr=M.fileRead();
var l=new access.LinkedList;
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
    //l=l+''+i;
    //console.log(l);
   l.add(arr[i])
 
console.log(l+" in main")
}


var found=l.search(word);
//console.log(found)
if(found==true)
{
    l.remove(word);
    var output=l.print();
    M.fileWrite('shri.txt',output);
    console.log(output)
}
else
{
    l.add(word)
    var out=l.print();
    M.fileWrite('shri.txt',out);
    console.log(out)
}

