/*
var UtilityDs=require('../Utility/UtilityDS');
var readline=require('readline-sync');
var Utility=require('../Utility/Utility');

function Queue()
{
    var queue=new UtilityDs.Queue1;
    var bankAmount=10000;
     var flag=true;
    var size=readline.question("enter total no of people in Queue= ")


  

  

    if(size>0)
    {
        for(var i=1;i<=size;i++)
         {
            var ans=readline.question("Press 1 to deposit the cash  \n Press 2 to withdraw= ");
            if(ans==1)
              {
                var amount=readline.questionFloat("enter total amount you want to deposit= ")
                queue.enqueue(Number(amount));
                flag=true;
              }

            else if(ans==2)
              {
                var amount=readline.questionFloat("enter total amount you want to withdraw= ")
                if(amount<=bankAmount)  
                {
                queue.enqueue(Number(-amount));
                flag=true;
                }
              }
            else
              {
                console.log("make sure that you entered the correct key= ");
                    flag=false;
                     return;
              }       
        }
    }
    else
     {
        console.log("invalid input");
        return;
     }

     if(flag)
      {
        var addition=0;
         for(let i=1;i<=size;i++)
          {
            addition=addition+queue.dequeue();
          }
          console.log(addition);
       
       var totalAmount=bankAmount+addition;
       if(addition>0)
       {
        console.log("amount left in bank at the end of the day "+totalAmount);
       }
       else
       {
         console.log("insufficient balance");
       }
        if(totalAmount<bankAmount)
          {
            console.log("bank cash is not maintained");
          }
        else
          {
             console.log("bank cash is maintained");
          }
    }      
}
Queue();        
*/
/*******************Simulate Banking Cash Counter******************
 * 4.Simulate Banking Cash Counter.
 * Execution : default node : cmd>node cashCounter.js
 * @purpose : people to either deposit or withdraw money and maintain the cash balance.
 *
 * @description
 * @file : cashCounter.js
 * @overview : Create a Program which creates Banking Cash Counter where people
 *  come in to deposit Cash and withdraw Cash. Have an input panel to add people 
 * to Queue to either deposit or withdraw money and dequeue the people.
 *  Maintain the Cash Balance.

 * @param :Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
 *********************************************************************
 */


var UtilityDS = require('../Utility/UtilityDS')
var Utility = require('../Utility/Utility');
var readline = require('readline-sync');

function Queue()
 {
    var Queue = new UtilityDS.Queue;
    var bankamount = 4000;
    var set = [];
    var flag = true;
    var count = 0;
    var valid = false;
    do 
    {
        var size = readline.question("Enter the total number of people to be in queue :")
        if (isNaN(size)) 
        {
            console.log("Not a valid entry");
        }
        else 
        {
            valid = true;
        }
    } 
    while (!valid)
    if (size > 0) 
    {
        /**
         * Loop the number of size of people to deposit and withdraw amount.
         */
        for (let i = 1; i <= size; i++) 
        {
            var input = readline.question("Enter 1 deposit amount :\nEnter 2 to withdraw amount :")
            if (input == 1) 
             {
                var amount = readline.questionFloat("Enter the total amount to deposit :")
                var set = Queue.enQueue(Number(amount));
                flag = true;
             }
            else if (input == 2) 
             {
                var amount = readline.questionInt("Enter the total amount to be withdraw :")
                if ( amount<=bankamount)
                {
                Queue.enQueue(Number(-amount))
                flag = true;
                }
             }
            else 
             {
                console.log("Make sure that you have entered correct key ");
                flag = false;
                return;
             }
         }
     }
    else 
     {
        console.log(" Invalid input ");
        return;
     }
    /**
     * Condition to check if flag is true enter the loop.
     */
    if (flag) 
     {
        var add = 0
        /**
         * Loop number of size and dequeue the people.
         */
        for (let i = 1; i < size; i++) 
         {
            add = add + Queue.deQueue();
         }
       // console.log(add);
        var totalamount = bankamount + add;
        if(add>0)
         {
          console.log("Total amount left in bank is :" + totalamount);
         }
        else
         {
            console.log("Insufficent Balance ")
         }
        if (totalamount < bankamount) 
         {
            console.log("Minimum cash is not maintained in bank:");
         }
        else 
         {
            console.log("Minimum cash is maintained in bank");
         }
    }
}
Queue();







