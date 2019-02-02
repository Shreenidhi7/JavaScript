var D=require('../Utility/UtilDataStructures');
var readline=require('readline-sync');

function Queue()
{
    var q=new D.Queue;
    var q1=new D.Queue;
    var bankamount=300;
    var temp=0;
    var c=0;
    var flag=true;
    var l=readline.questionInt("enter total no of people");
    
    for(let i=1;i<=1;i++)
    {
        if(l>0)
        {
            var s=readline.questionInt("enter 1 for deposition or enter 2 for withdrawal");
            if(s==0)
            {
                var amount=readline.questionFloat("enter amount to deposit");
                q.enque(amount);
            }
            else if(s==1)
            {
                for(let i=1;i<=1;i++)
                {
                    bankamount=bankamount+q.deque();
                }


            var amount=readline.questionFloat("enter amount to withdraw");
            {
                if(amount>bankamount)
                {
                    console.log(bankamount+"gggg");
                    c++;
                    temp=amount;
                    q1.enque(-amount);
                }
                else
                {
                    console.log(bankamount+"ffff");
                    q.enque(-amount);
                }
            }
        }
                else
                flag=false;
    }
}
if(flag)
{
    for(let i=1;i<=1;i++)
    {
        bankamount=bankamount+q.deque();
    }
    for(let i=1;i<=c;i++)
    {
        bankamount=bankamount+q1.deque();
    }
    if(bankamount>=0)
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
    Queue()

}
//Queue()
}

