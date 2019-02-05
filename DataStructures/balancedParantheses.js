var UtilityDs=require('../Utility/UtilityDS');
//var M=require('../Utility/Utility');
var read=require('readline-sync');

 function Stack()
 {
     var St=new UtilityDs.Stack;
     var str=read.question("enter mathematical expression with para");
    var ch,i;

    for(i=0;i<str.length;i++)
    {
        ch=str.charAt(i);
        
        if(ch== '(' || ch == '[' || ch == '{')
        {
            St.push(ch);
        }
        else
        {
            switch(ch)
            {
                case ')' : if(St.pop()!='(')
                {
                    return false;
                }
                break;
                case ']' : if(St.pop()!='[')
                {
                    return false;
                }
                break;
                case '}' : if(St.pop()!='{')
                {
                    return false;
                }
                break;
            }
        }                  
     }
     if(St.size==0)
     {
         return true;
     }
     return false;
 }

 var bol=Stack();
console.log(bol);
 if(bol)
 {
     console.log("String balanced")
 }
 else
 {
     console.log("not balanced")
 }
 