/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :UtilDataStructures.js
 *@overview      :All the business logic are coded here.
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/



class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}



class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;

    }


 add(data)
  {
    var node=new Node(data);
    if(this.head==null)
      {
        this.head=node;
       // this.size++;
      }
    else
      {
        var temp=this.head;
        while(temp.next)
          {
            temp=temp.next;
          }
        temp.next=node;
      }
    this.size++
  }   


 print()
  {
    var str="";
    var temp=this.head;
    while(temp)
      {  
        str=str+" "+temp.data;
        temp=temp.next;
      }
    console.log(str);
    //return str;
  }

 getSize()
   {
     return this.size;
   }

  addpos(arr,num)
   {
     console.log(num+"in addpos");

     for(let i=0;i<arr.length-1;i++)
       {
         if(arr[0]>=num)
          {
            return 0;
          } 
        else if (arr[i]<num && arr[i+1]>num)
           {
            return i+1;
           }
       }
    return arr.length;
  }

 insertFirst(element)
   {
     var node=new Node(element);
     if(this.head==null)
       {
        this.head=node;
        this.size++;
        return;
       }
     else
      {
      node.next=this.head;
      this.head=node;
      this.size++;
      return;
      }
   }


remove(data)
{
    var temp=this.head;
    var t=null;
    while(temp!=null)
    {
        if(temp.data==data)
        {
            if(t==null)
            {
                this.head=temp.next
            }
            else
            {
                t.next=temp.next;
            }
            this.size--;
            return temp.data;
        }
        t=temp;
        temp=temp.next;
    }
    return-1;
}








}
module.exports={Node,LinkedList};
