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


/************************************************************************
 * Execution :   default node : cmd> node bankingCashCounter.js
 *              
 * Purpose   :   To  Write a Queue Class to enqueue and dequeue people to either deposit or withdraw 
 *               money and maintain the cash balance
 * 
 * @description
 * @file     :   cashCounter.js
 * @overview :   Create a Program which creates Banking Cash Counter where people come in to deposit Cash
 *               and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw 
 *               money and dequeue the people. Maintain the Cash Balance.
 * @author   :   Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 * @version  :   1.0
 * @since    :   01/02/2019

 **************************************************************************/
var UtilityDS = require('../Utility/UtilityDS');
var readline = require('readline-sync');
function queue() 
{
    var que = new UtilityDS.Queue1;
    var bankAmount = 10000;
    var flag = true;
    var size = readline.question("Enter the total number of people to be in queue = ");
    if (size > 0) 
    {
        for (let i = 1; i <= size; i++) 
        {
            var in1 = readline.question("Enter 1 deposit amount   \nEnter 2 to withdraw amount   :")
            if (in1 == 1) 
            {
                var amount = readline.questionFloat("Enter the total amount to deposit = ")
                que.enqueue(Number(amount));
                bankAmount=bankAmount+amount;
                flag = true;
            }
            else if (in1 == 2) 
            {
                var amount = readline.questionInt("Enter the total amount to be withdraw = ")
                que.enqueue(Number(-amount))
                bankAmount=bankAmount-amount;
                if(bankAmount<0)
                {
                    console.log("bank is out of cash");
                    break;
                }
                flag = true;
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
        console.log("Invalid input");
        return;
    }
    if (flag) 
    {
        bankAmount=10000;
        var add = 0;
        for (let i = 1; i <= size; i++) 
        {
            add = add + que.dequeue();
        }
        //console.log(add);
        var totalAmount = bankAmount + add;
        console.log("Total amount left in bank is:" + totalAmount);
        if (totalAmount > bankAmount) 
        {
            console.log("Minimum cash is maintained in bank");
        }
    }
}
queue();




