

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
 *@author name   :Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :31/01/2019
 * 
 ***********************************************************/
var Utility = require('./Utility');
class Node 
{

    
    constructor(data) 
    {
        this.data = data;
        this.next = null;
    }
}

/**
 * 1.UnOrdered LinkedList
 * 
 * @description:Read the Text from a file, split it into words and arrange it as Linked List.
 *              Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
 *              and if it found then remove the word from the List. In the end save the list into a file.
 *
 * @purpose:    To read list of words from the file and add it to the file and remove it from th file and save it.
 * 
 * @param:      Read from file the list of Words and take user input to search a Text.
 */
class LinkedList 
{
    /**
     * LinkedList has two varibles head,size 
     * head will always point to first node and size will be zero if no node object is created.
     */
    constructor() 
    {
        this.head = null;
        this.size = 0;
     }
    add(data) 
     {
        var node = new Node(data)
        /**
         * add method by accepting the data it will create new node object.
         */
        var current;
        if (this.head == null)
         {
            this.head = node;
            /**
             * Condition is used to check weather the head is pointing to null.
             */
        }
        else 
        {
            current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    isEmpty() 
    {
        /**
         * Condition to check the size is zero or not.
         */
        if (this.size == 0)
            return true
        else
            return false;
    }

    remove(data) 
    {
        var temp = this.head;
        var prev = null;
        while (temp != null) 
        {
            /**
             * Loop over till temp is equal to null.
             */
            if (temp.data == data) 
            {
                /**
                 * Condition to check the passed data is equal to current data.
                 */
                if (prev == null) 
                {
                    this.head = temp.next;
                }
                else 
                {
                    prev.next = temp.next
                    temp.next = null;
                }
                this.size--;
                return temp.data;
            }
            else 
            {
                prev = temp;
                temp = temp.next;
            }
        }
        return false;
    }

    search(data)
     {
        var temp = this.head;
        while (temp) 
        {
            /**
             * Condition to check weather given data is present in the list.
             */
            if (temp.data === data)
             {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    print() 
    {
        var temp = this.head;
        var str = "";
        while (temp) 
        {
            /**
             * Loop till temp is equal to null.
             */
            str += temp.data + " ";
            temp = temp.next;
        }
        return str;
    }
    indexOf(data) 
    {
        var count = 0;
        var temp = this.head;
        while (temp != null) {
            if (temp.data === data)
                return count;
            count++;
            temp = temp.next;
          }
        return -1;
    }

   

  insertAt(number,index)
   {
     if(index<0 || index>this.size)
      {
       return false;
      }
     else
      {
       var node=new Node(number);
       var curr,prev,temp;

       if(index==0)
        {
          curr=this.head;
          this.head=node;
          node.next=temp;

          return true;
        }
        else
        {
          curr=this.head;
          var it=0;

         while(it<index)
          {
           it++;
          prev=curr;
          curr=curr.next;
        }
      node.next=curr;
      prev.next=node;
      }
    }
    this.size++;
  }
        

  addpos(arr,num)
  {
    for(let i=0;i<arr.length;i++)
    {
      if(arr[0]>=num)
      return 0;
      else if(arr[i]<num && arr[i+1]>num)
      {
        return i+1;
      }
    }
      return arr.length;
      }
  

  printShares()
  {
    var arr = [];
    if (this.head == null) {
      return null;
    } else {
      var temp = this.head;
      while (temp) {
        arr.push(temp.data);
        temp = temp.next;
      }
      return arr;
    }
  }
  /**
   * To remove the share from the stock
   * @param {any} element 
   */

  removeStock(element) 
  {
    var temp = this.head;
    var prev = null;

    // iterate over the list
    while (temp != null) {
      // comparing element & if found then remove
      var stock = temp.data;
      if (stock.name == element || stock.symbol == element) {
        if (prev == null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        /**
         * To decrement the size of the LinkedList
         */
        this.size--;
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return -1;
  }
}

/*******************************STACKED LINKEDLIST************************************** */

class StackLinkedList {

  constructor() {
      this.size = 0
      this.head = null;
  }
  size() {

      return this.size
  }
  isEmpty() {
      /**
       * Condition to check the size is zero.
       */
      return top == null;
  }
  push(data) {
      var n = new Node(data)
      if (this.head == null) {
          this.head = n
          this.size++
      }
      else {
          var temp = this.head
          while (temp.next) {
              temp = temp.next
          }
          temp.next = n
          this.size++
      }
  }
  pop() {
      if (this.head == null) {
          console.log("Stack underflow");
          return null;
      }
      var curr = this.head;
      var pre = this.head;
      if (curr.next == null) {
          this.head = null;
          return curr.data;
      }
      while (curr.next) {
          pre = curr;
          curr = curr.next;
      }
      var data = curr.data
      pre.next = null;
      this.size--;
      return data;
  }
  peek() {
      // check for empty stack 
      if (!isEmpty()) {
          return high.data;
      }
      else {
          console.log("Stack empty");
          return -1;
      }
  }
  print() 
  {
      var st = ""
      var temp = this.head
      while (temp) 
      {
          //console.log(temp.data)
          st = st + " " + temp.data
          temp = temp.next
      }
      return st;
  }

  printShares()
  {
      var arr = [];
      if (this.head == null) 
      {
        return null;
      } else 
      {
        var temp = this.head;
        while (temp) 
        {
          arr.push(temp.data);
          temp = temp.next;
        }
        return arr;
      }
    }
    removeStock(element) 
    {
      var temp = this.head;
      var prev = null;
  
      // iterate over the list
      while (temp != null) 
      {
        // comparing element & if found then remove
        var stock = temp.data;
        if (stock.name == element || stock.symbol == element) 
        {
          if (prev == null) 
          {
            this.head = temp.next;
          } else 
          {
            prev.next = temp.next;
          }
          /**
           * To decrement the size of the LinkedList
           */
          this.size--;
          return temp.data;
        }
        prev = temp;
        temp = temp.next;
      }
      return -1;
    }
  }


/*****************************STACK***************************************************** */
  
class Stack 
  {
      constructor() 
      {
          this.item = [];
          this.capacity;
          this.head = -1;
          this.size = 0;
      }
      size() 
      {
          return this.size;
      }

      isEmpty()
       {
          if (this.size == 0) 
          {
              return true;
          }
          else 
          {
              return false;
          }
       }
      
       push(data)  
        {
          if (this.head == this.capacity - 1) 
          {
              console.log("stack overflow");
              return;
          }
          this.size++;
          this.item[++this.head] = data;
        }
  
      pop() 
      {
          if (this.head == this.capacity - 1)
              console.log("Stack is empty");
          this.size--;
          return this.item.pop();
      }
  
      peek() 
      {
          if (this.head = -1) 
          {
              console.log("Stack is empty");
          }
          else 
          {
              return this.item(top);
          }
        }
  
       display()
        {
          var str="";
          for(let i=0;i<this.size;i++)
            {
              str=str+" "+this.item[i];
                
            }
            return str;
        }
      
      printShares()
      {
        var arr = [];
        if (this.head == null) 
        {
          return null;
        } else 
        {
          var temp = this.head;
          while (temp) 
          {
            arr.push(temp.data);
            temp = temp.next;
          }
          return arr;
        }
      }
      /**
       * To remove the share from the stock
       * @param {any} element 
       */
      removeStock(element) 
      {
        var temp = this.head;
        var prev = null;
    
        // iterate over the list
        while (temp != null) 
        {
          // comparing element & if found then remove
          var stock = temp.data;
          if (stock.name == element || stock.symbol == element) 
          {
            if (prev == null) 
            {
              this.head = temp.next;
            } else 
            {
              prev.next = temp.next;
            }
            /**
             * To decrement the size of the LinkedList
             */
            this.size--;
            return temp.data;
          }
          prev = temp;
          temp = temp.next;
        }
        return -1;
      }
    }
/****************************Banking Cash Counter*************************************** */

class Queue
{
  constructor()
  {
    this.items=[];
    this.top=null;
    this.size=0;
    this.front=null;
  }
 push(data)
  {
   if(this.isEmpty())
    {
    var node=new Node(data);
    this.top=node;
    this.size++;
    return;
    }
    var node=new Node(data);
    this.top.next=node;
    this.top=node;
    this.size++;
  }

  pop()
  {
    if(this.isEmpty())
    {
      console.log("no elements found");
      return this.items.shift();
    }
    /*var dat=this.front.data;
    this.front=this.front.next;
    this.size--;
    return dat;*/
  }

  peek()
  {
    return this.top.data;
   }
   print()
   {
     var t=this.front;
     while(t!=null)
     {
       console.log(t.data);
       t=t.next;
     }
    }

    getdata()
      {
        var temp=this.front;
        var str="";
        while(temp)
        {
          str=str+temp.data;

          if(temp.next!=null)
          {
            str=str+" ";
          }
          temp=temp.next;
        }
        return str;
      }
    
      isEmpty()
      {
        if(this.size===0)
        {
          return true;
        }
        else
        {
          return false;
        }
      
        getSize()
        {
          return this.size;
        }
      }
    }
   
  /**************************CheckBalance*******************************************  */
   class Queue2
   {
     constructor()
     {
       this.item=[];
       this.size=0;
       this.capacity;
       this.front=-1;
       this.rear=-1;
      }

      stack(capacity)
    {
      this.capacity=capacity;
      var t= new  items[capacity];
    }
    enqueue(data)
    {
      console.log(data)
      
        if(this.top == this.capacity-1)
        {
          console.log("Stack Overflow")
          return;
        }
        if(this.front== -1)
        {
          this.front++;
        }
        this.size++;
        this.items[++this.rear]= data;
    }

    dequeue()
    {
      if(this.front== -1)
      {
        return null;
      }
      var ele=this.items[this.front++];
      console.log(this.front)
      this.size--;
      if(this.front>this.rear)
      {
        this.front=this.rear=-1;
      }
      return ele;
    }


    getSize()
    {
      return this.size;
    }

    isEmpty()
    {
      if(size==0)
      return true;
      else
      return false;
    }


    display()
    {
      var res= "";
      for(var i=this.front;i<=this.rear;i++)
      {
        var res=res + this.items[i];
        if(i<this.rear)
        {
          res=res+",";
        }
      }
      return res;
    }
  }





/***************************************************************************************** */


class Queue1
{
  constructor()
   {
    this.items=[];
   }

  enqueue(data)
   {
    this.items.push(data);
   }

  dequeue()
   {
    if(this.isEmpty())
     {
      return "Underflow";
      }
     return this.items.shift();
   }

  isEmpty()
   {
    return this.items.length==0;
   }

  printList()
   {
    var str="";
    for(var i=0;i<this.items.length;i++)
     {  
      str=str+this.items[i]+" ";
      return str;
     }
   }

  printShares()
  {
    var arr = [];
    if (this.head == null) {
      return null;
    } else {
      var temp = this.head;
      while (temp) {
        arr.push(temp.data);
        temp = temp.next;
      }
      return arr;
    }
  }
  /**
   * To remove the share from the stock
   * @param {any} element 
   */

  removeStock(element) 
  {
    var temp = this.head;
    var prev = null;

    // iterate over the list
    while (temp != null) {
      // comparing element & if found then remove
      var stock = temp.data;
      if (stock.name == element || stock.symbol == element) {
        if (prev == null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        /**
         * To decrement the size of the LinkedList
         */
        this.size--;
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return -1;
  }
}

/**************************Palindrome*************************************************8
 */
class Dequeue
 {
  constructor()
  {
    this.front=-1;
    this.size=0;
    this.rear=0;
    this.head=null;
    this.arr=new Array(30);
  }
  isFull()
    {
        if(this.front==0 && this.rear==this.size-1 || (this.rear+1==this.front)){
            return true;
        }
        return false;
    }



    isEmpty()
    {
        return this.front==-1;
    }



    addFront(item) 
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
        }
        if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==0)
        {
            this.front=this.arr.length-1;
        }
        else
        {
            this.front--;
        }
        this.arr[this.front]=item;
    }



    addRear(item)
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
            
        }
        if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==this.arr.length-1)
        {
            this.rear=0;
        }
        else
        {
            this.rear++;
        }
        this.arr[this.rear]=item;
    }



    removeFront() 
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
            
        }
        var item;
        if(this.front==this.rear)
        {
            item=this.arr[this.front];
            this.front=-1;
            this.rear=-1;
        }
        else if(this.front==this.arr.length-1)
        {
            item=this.arr[this.front];
            this.front--;
        }
        else
        {
            item=this.arr[this.front];
            this.front++;
        }
        return item;
    }



    removeRear() 
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
            
        }
        var item;
        if(this.arear==this.front){
            item=this.arr[this.rear];
            this.rear=-1;
            this.front=-1;
        }
        else if(this.rear==0)
        {
            item=this.arr[this.rear];
            this.rear=this.rear--;
        }
        return item;
        }



        
    getFront()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.front];
    }




    getRear()
    {
        if(this.isEmpty()){
            return -1;
        }
        return this.arr[this.rear];
    }
/*
 addFront(data)
  {
    var n=new Node(data);
    if(this.head==null)
    {
      this.head=n;
      this.size++;
    }
    else
    {
     var temp=this.head;
     while(temp.next)
      {
        temp=temp.next;
      }
      temp.next=n;
      this.size++;
    }
  }

removeFront()
  {
    if(this.head==null)
    {
      console.log("Stack Underflow");
      return null;
    }
    else
    {
      var temp=this.head;
      var data=temp.data;
      this.head=temp.next;
      this.size--;
      return data;
    }
  }
  

removeRear()
  {
    if(this.head==null)
    {
      console.log("Stack Underflow");
      return null;
    }
    var curr=this.head;
    var pre=this.head;

    if(curr.next==null)
     {
      this.head=null;
      return curr.data;
     }
    while(curr.next)
    {
      pre=curr;
      curr=curr.next;
    }
    var data=curr.data;
    pre.next=null;
    this.size--;
    return data;
  }

  print()
  {
    var st=" ";
    var temp=this.head;
 // while(temp)
    {
      console.log(temp.data)
      st=st+""+temp.data;
      temp=temp.next;
    }
    return st;
  }

*/
  isPalindrome(str)
  {
    for(let i=0;i<str.length;i++)
    {
      this.addRear(str.charAt(i));
    }
    
    while(this.front!=this.rear && this.front<this.rear)
    {
      if(this.getFront()!=this.getRear())
      {
      return false;
      }
      this.front++;
      this.rear--;
    }
    return true;
  }
}


/*****************************LinkedList Queue*********************************************** */


class LinkedListQueue {
  constructor() {
      this.tail = null;
      this.head = null;
  }
  /**
   * To add an element into the rear of the queue.
   * @param {any} item
   */
  enQueue(item) {
      /**
       * Create a node by passing the item
       */
      let node = new Node(item);
      /**
       * If there are no head and tail, point the data to head and tail
       */
      if (!this.head) {
          this.head = node;
          this.tail = node;
      } else {
          /**
           * We just move the tail pointer
           */
          this.tail.next = node;
          this.tail = node;
      }
  }
  /**
   * To remove an item from the queue.
   */
  deQueue() {
      if (!this.head) {
          return "No item";
      } else {
          let itemToPop = this.head;
          this.head = this.head.next;
          return itemToPop.data;
      }
  }
  /**
   *return true if the queue is empty.
   */
  isEmpty() {
      return this.size() < 1;
  }
  /**
   * Returns the size of the queue
   */
  size() {
      let current = this.head;
      let counter = 0;
      while (current) {
          counter++;
          current = current.next;
      }
      return counter;
  }
  printList() {
      var st = ""
      var temp = this.head
      while (temp) {
          //console.log(temp.data)
          st = st + " " + temp.data
          temp = temp.next
      }
      return st;
  }
  printShares()
  {
    var arr = [];
    if (this.head == null) 
    {
      return null;
    } else 
    {
      var temp = this.head;
      while (temp) 
      {
        arr.push(temp.data);
        temp = temp.next;
      }
      return arr;
    }
  }
  /**
   * To remove the share from the stock
   * @param {any} element 
   */

  removeStock(element) 
  {
    var temp = this.head;
    var prev = null;

    // iterate over the list
    while (temp != null) {
      // comparing element & if found then remove
      var stock = temp.data;
      if (stock.name == element || stock.symbol == element) {
        if (prev == null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        /**
         * To decrement the size of the LinkedList
         */
        this.size--;
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return -1;
  }
}








  







  
module.exports = { LinkedList, 
  Node, 
  Stack, 
  Queue, 
  Dequeue,
  LinkedListQueue, 
  Queue1,
  Queue2,
  StackLinkedList,


getBinaryTree(num)
{
  var fact=1;
  for(let i=1;i<=num;i++)
  {
    fact=fact*i;
  }
  return fact;
},


isPrime(initial,final)
{
var flag=0;
k=0;
var prime=[];

for(var index1=initial;index1<=final;index1++)
{
  for(var index2=2;index2<index1;index2++)
  {
    if(index1%index2==0)
    {
      flag=0;
      break;
    }
    else
    {
      flag=1;
    }
  }
  if(flag==1)
  {
    prime[k++]=index1;
  }
}
return prime;
},




findAnaPrime(initial,final)
{
  var primes=this.isPrime(initial,final);
  var n=primes.length;

  var anaPrimes=[];
  var h=0;

  for(let index1=0;index1<n-1;index1++)
  {
    for(let index2=index1+1;index2<n-1;index2++)
    {
      if(algoutil.isanagarm(primes[index1],primes[index2]))
      {
        anaPrimes[h++]==primes[index1];
        anaPrimes[h++]==primes[index2];
      }
    }
  }
  return anaPrimes;
},


















}