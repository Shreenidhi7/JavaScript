var UtilityDs=require('../Utility/UtilityDS');
var read=require('readline-sync');
var Utility=require('../Utility/Utility');

function Queue()
{
    var queue=new UtilityDs.Queue;
    var bankAmount=10000;
     var flag=true;
    var size=read.question("enter total no of people in Queue= ")

    if(size>0)
    {
        for(var i=1;i<=size;i++)
         {
            var ans=read.question("Press 1 to deposit the cash/Press 2 to withdraw= ");
            if(ans==1)
              {
                var amount=read.questionFloat("enter total amount you want to deposit= ")
                queue.push(Number(amount));
                flag=true;
              }
            else if(ans==2)
              {
                var amount=read.questionFloat("enter total amount you want to withdraw= ")
                queue.push(Number(-amount));
                flag=true;
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
            addition=addition+queue.pop();
          }
          console.log(addition);
       
       var totalAmount=bankAmount+addition;
        console.log("amount left in bank at the end of the day "+totalAmount);
       
        if(totalAmount<bankAmount)
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









