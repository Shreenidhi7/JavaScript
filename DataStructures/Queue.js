var Utility=require('../Utility/UtilDataStructures');
var read=require('readline-sync');

function Queue()
{
    var que=new Utility.Queue;
    var totalbankbalance=1000;
    flag=true;
    var ask=read.question("enter total no of people")

    if(ask>0)
    {
        for(var i=1;i<ask;i++)
         {
            var ans=read.question("Press 1 to deposit the cash/Press 2 to withdraw");
            if(ans==1)
              {
                var amount=read.question("enter total amount you want to deposit")
                que.push(Number(amount));
                flag=true;
              }
            else if(ans==2)
              {
                var amount=read.question("enter total amount you want to withdraw")
                que.push(Number(-amount));
                flag=true;
              }
            else
              {
                console.log("make sure that you entered the correct key");
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
         for(let i=1;i<=ask;i++)
          {
            addition=(addition+que.pop());
          }
          console.log(addition)
       
       var totaltransaction=totalbankbalance+addition;
        console.log("amount left in bank at the end of the day",totaltransaction);
       
        if(totaltransaction<totalbankbalance)
          {
            console.log("bank cash is not maintained");
          }
        else
          {
             console.log("bank cash is maintained")
          }
    }      
}
Queue();        









