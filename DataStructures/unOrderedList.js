var num=require('../Utility/UtilDataStructures');
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
