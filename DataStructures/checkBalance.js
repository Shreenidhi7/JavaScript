var UtilityDS = require('../Utility/UtilityDS');
var readline = require('readline-sync');

function queued() 
 {
    var Queue1 = new UtilityDS.Queue2;
    var Queue2 = new UtilityDS.Queue2;
    var bankamount = 3000;
    var temp = 0;
    var c = 0;
    var flag = true;
    var l = readline.questionInt("enter total no of people");

    for (let i = 1; i <= l; i++) 
    {
        if (l > 0)
         {
            var s = readline.questionInt("\n enter 1 for deposition \n enter 2 for withdrawal");
            if (s == 0) 
              {
                var amount = readline.questionFloat("enter amount to deposit");
                 Queue1.enqueue(amount);
              }
            else if (s == 1) 
              {
                for (let i = 1; i <= 1; i++) 
                  {
                    bankamount = bankamount + Queue1.dequeue();
                  }


                var amount = readline.questionFloat("enter amount to withdraw");
                  {
                    if (amount >= bankamount) 
                      {
                        console.log(bankamount + "gggg");
                        c++;
                        temp = amount;
                        Queue2.enqueue(-amount);
                      }
                    else 
                      {
                        console.log(bankamount + "ffff");
                        Queue1.enqueue(-amount);
                      }
                 }
            }
            else
            {
                flag = false;
            }
        }
    }
    if (flag) 
      {
        for (let i = 1; i <= l; i++) 
         {
          bankamount = bankamount + Queue1.dequeue();
         }
        for (let i = 1; i <= c; i++)  
          {
            bankamount = bankamount + Queue2.dequeue();
          }
        if (bankamount >= 0) 
          {
            console.log("maintain cash balance");
          }
        else 
          {
            console.log("cash already available")
          }
      }
    else 
      {
       queued()
    }
  }
    queued()
 