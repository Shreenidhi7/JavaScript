/***********************************************************
 *
 * Execution     :Default node      cmd>node filename.js
 * Purpose       :To deploy all the business logic.
 * 
 *@description 
 * 
 *
 *@file          :utility.js
 *@overview      :All the business logic are coded here.
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/
//const readline = require('readline-sync');


module.exports = {
 /**
    * 
     * 
     * @purpose  :To accept array elements from user.
     * 
     */

     /***** String replace *****/
    /*
     * username with minimum 3 characters and not a number 
     * with userinput
     * 
     
     *@description: Declaring the function and passing the userinput as argument.
     * 
     * 
     *@purpose: display the username with given inputs
     *
     *@function : It takes the userinput and print it with some sentence.
     */

    replaceString(identity) 
    {
        try
        {
           if (identity.length > 2) 
            {   
                console.log("Hello " + identity + " how are you!!");
            }
           else 
            {
            console.log("please enter username which has more than 3 characters")
            }
        }
        catch(err)
        {
            console.log(err)
        }
    
    },

 /*************leapYear****************/
    /**
     * user input to find leap year.
     * 
     * @description:Declaring the function and passing the user input as argument.
     * 
     * @purpose :Print weather the year is leap year or not.
     * 
     * @function:Checks length of the given number, if length equals to 4, then it prints 
     * given number is Leap year or not.
     */   


    leapYear(year) 
    {
     try
        {
          if (year > 999 && year < 10000) 
           {
             if ((year % 4 == 0) || (year % 400 == 0) && (year % 100 == 0)) 
              {
                console.log(year + " is a leap year");
              }
             else 
              {
                console.log(year + " not a leap year");
              }
            }
             else 
             {
               console.log("enter 4 digit number only");
             }
           }
      catch(err)
      {
        console.log(err);
      }     
    },

 /******************powerOf2*********************/
    /**
     * Command line inputs to find the power
     * 
     * @description: This program takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^N.
     * 
     * @purpose :To print the power table of 2.
     * 
     * @function:function checks the given number is less then 31, if less then 31, then it prints
          the value of two's power i.e., 2^N value.
     */


    _2exponential(exponent) 
    {
     try
       {
         var i;
         if (exponent > 0 && exponent < 31) 
          {
            for (i = 0; i <= exponent; i++) 
              {
                console.log("powerof2=" + "2^" + i + "=" + Math.pow(2, i));
              }
          }
         else 
          {
            console.log("enter valid number")
          }
       }

     catch(err)
       {
        console.log(err);
       }
    },


 /****************Harmonic****************/
    /**
     *  To find the harmonic number.
     * 
     * @description:Prints the Nth harmonic number.
     * 
     * @purpose : Print the Nth Harmonic Value.
     * 
     * @function:function Harmonic takes user input and sum it number of times that user given.
     */

    
     findHarmonic(number) 
    {
      try
       {
         var result = 0;
         while (number > 0) 
          {
            result = result + (1 / number);
            number--;
          }
        console.log(result);
        }
        
       catch(err)
       {
           console.log(err);
       } 

    },


 /***************primeFactors*****************/
    /*Number to find the prime factors
     * 
     *@description:Computes the prime factorization of N using brute force.
     *
     *@purpose:Print the prime factors of number N.
     * 
     *@function:Function harmonicNumber takes user input and adds it to 1/number of times of user input.
     */    


    printPrimeFactors(number) 
    {
     try
      {
        var i;
        for (i = 2; i <= number; i++) 
        {
          if (number % i == 0) 
           {
             while(number % i == 0) 
              {
                number = number / i;
                console.log("prime factors " + i);
              }
            }
         } 
      } 
     catch(err)
      {
       console.log(err);  
      }
    },

 /***********flipcoin************/
    /***
     * user input to flip the coin number of times.
     * 
     *@description:Declaring the function and passing the user input as argument.
     * 
     *@purpose :Display the percentage of coins fliped heads and tails.
     * 
     * @function:coinflip takes the no of times to flip coin and print the percentage of head and tail
     */


    flipCoin(number) 
    {
      try
      {
        var i;
        var n = 0;
        var head = 0;

         if (number > 0) 
         {
           for (i = 0; i <= number; i++) 
             {
               n = Math.random();
               if (n < 0.5)
               head++;
             }
         }
        var headper = head / number * 100;
        console.log("percentage of heads" + headper);
        console.log("percentage of tails" + (100 - headper));
       }
      catch(err)
       {
        console.log(err);
       }
    },

/***************Gambler*************** */
    /**
     *  To find the number bets he/she makes
     * 
     * @description: Evaluate a gambler who start with stake and place bets until he/she goes broke.
     *  Keeps track of the number of times he/she wins and the number of bets he/she makes. 
     * 
     * @purpose :To find out the win and loss percentage. 
     * 
     * @function:Function gambler takes the stake ,if math.random >0.5 increment the stake
     * else increment the loss and decrement the stake ,and keep the count number times bets,
     * and prints the number of percentage of win and loss. 
     * 
     */    


    Gambling(stake, goal, numberoftimes)
     {
       try
       {
        var profit = 0; loss = 0; count = numberoftimes;

        while (stake != 0 && stake != goal && count > 0) 
         {
            var amount = Math.random();
              if (amount > 0.5) 
               {
                 loss--;
                 stake--;
                 count--;
               }
              else
               {  
                 profit++;
                 stake++;
                 count--;
               }
          }
            console.log("number of times won is" + profit)
            console.log("profit percentage is" + profit / numberoftimes * 100);
            console.log("loss percentage is" + (100 - (profit / numberoftimes * 100)));
        }
        catch(err)
        {
            console.log(err);

        }
    },    


 /*****************couponNumbers********************/
    /**
     * N Distinct Coupon Number
     * 
     * @description:Given N distinct Coupon Numbers,need to generate random coupon numbers
     * this code simulates this in  random process.
     * 
     * @purpose :To generate the coupon number using math.rondom
     * 
     * @function:Is to generate random number and to process distinct coupons.
    
     */

   generateCoupons(coupannumber)
   {
     try
      {
       var arr=[];
       for(let i=0;i<coupannumber;i++)
        {
          var num=Math.random();
          var roundof=(Math.round((num)*1000));

          if(!arr.includes(roundof))
           {
            arr.push(roundof);
           }
        }   
        console.log(arr);
      }
     catch(err)
      {
        console.log("err");
      }
   },

/******************2DArray*******************/
    /**
     * Create 2 dimensional array in memory to read in M rows and N cols 
     * 
     *  @description:Taking the user inputs elements to print 2 Dimensional Array.
     *  
     * @purpose :To dispaly the array elements in 2D array.
     * 
     * @function:M rows, N Cols, and M * N inputs for 2D Array. 
     */
   

    TwoDimensionalArray(rows,columns,read)
    {
      try
      {
        var arr=[];
        var i=0;
        var j=0;

        while(i<rows)
         {
           arr.push([])
            j=0;
              while(j<columns)
                {
                  var num=read.question("enter the numbers");
                  arr[i][j]=num;
                    j++;
                 }
            i++;  
          }
       console.log(arr);
       }
      catch(err)
        {
          console.log(err);
        }
    },

/*****************findTriplets******************* */
    /**
     * find three elements whose sum is equal to zero.
     * 
     * @description:A program with cubic running time. Read in N integers and counts the   
     * number of triples that sum to exactly 0.
     * 
     *@purpose : Prints all triplets in array with 0 sum.
     *
     * @function:Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
     */

  findTriplet(number,arr)
    {
      try
      {
        var counter=0;
        for(let i=0;i<number-2;i++)

         {
           for(let j=i+1;j<number-1;j++)
             {
               for(let k=j+1;k<number;k++)
                 {
                   if(Number(arr[i])+Number(arr[j])+Number(arr[k])==0)
                     {
                        counter++;
                        console.log(arr[i]+","+arr[j]+","+arr[k]);

                     }
                 }
             }
         }
        console.log("number of triplets"+counter);
      }
      catch(err)
       { 
         console.log(err);
       }
    },

 /*******************Distance*********************/

    /**
     * To find the distance from origin.
     * 
     * @description:To calculate the distance from the point(x,y)
     * 
     * @purpose :To print the distance from origin.
     * 
     * @function:Function factorization accepts user input, loops over it till the input,
    *            if the number is divisible by each number, print the number.
     */


    findEuclidistance(result1,result2)
    {
     try
      {
        var x=result1;
        var y=result2;
        console.log(Math.sqrt(x*x+y*y));
      }
     catch(err)
      {
       console.log(err);
      }
    },


/*********************stopWatch***********************/
    /**
     * Start the Stopwatch and End the Stopwatch
     * 
     * @description:Measuring the time that elapses between the start and end clicks.
     * 
     * @purpose :Print the elapsed time.
     * 
     *@function: Is to calculate the time elapsed betweem the start and stop.
     *            Press 0 to start. 
     *            Press 1 to stop.    
     */



    
    stopWatch(input)
     {
       try
        {
         var dt1=new Date();

        var starttine=input.question("start");
        var start=dt1.getSeconds();

        var dt2=new Date();

        var stoptime=input.question("stop");
        var stop=dt2.getSeconds();

        console.log(stop-start+"secs");
        }
       catch(err)
         {
            console.log(err);
         }
        
    },


    /*******************findRootsofEquations*********************/
    /**
     * 1.To find the roots of the quations.
     *  
     * @description: Take a, b and c as input values to find the roots of x.
     * 
     * @purpose :To find real and imaginery parts of the quation. 
     *  
     * @function:To find the roots of the equation a*x*x + b*x + c.
     */

 
    findQuadratic(a,b,c)
    {
      try
      {
        var result;
        var delta=(((b*b)-(4*a*c)));
        console.log("delta value ="+delta);

        if(delta==0)
          {
             var root=(-b/(2*a));
            console.log("root ="+root);
          }
        else if(delta>0)
          {
            var x1=((-b + Math.sqrt(delta))/(2*a));
            var y1=((-b - Math.sqrt(delta))/(2*a));
            console.log("the roots of equation is= "+x1);
            console.log("the roots of equation is= "+y1+"i");
          }
        else if(delta<0)
          {
            var x1=(-b/(2*a));
            var y1=((Math.sqrt(-delta))/(2*a));
            console.log("the roots of equation is= "+x1);
            console.log("the roots of equation is= "+y1+"i");
          }
        else
          {
            console.log("invaild imput");
          }
       }
     catch(err)
       {
        console.log(err)
       }
     },


 /****************findWindchill***************** */
    /**
     * 1.To find Wind chill using temperature and speed.
     * 
     * @description:Takes the user commands inputs and calculate the windchill using temperature and speed.
     * 
     * @purpose :To compute wind chill using formula.
     * 
     * @function:Given the temperature t (in Fahrenheit) and the wind speed v
            (in miles per hour), compute the wind chill.
     */     

    
    findChillwind(temp,speed)
     {
       try
        {
         var windchill;
         windchill=35.74 + 0.6215*(temp) + ((0.4275*(temp))-35.75)*(Math.pow(speed,0.16));
         console.log(windchill);
        }
       catch(err)
       {
        console.log(err);
       }
     },


/*****************************************Algorithms********************************************** */


    /******************Anagram******************** */

    /**
     * Take 2 Strings as Input  and Check for Anagrams
     * 
     * 
     * @description:One string is an anagram of another if the second is simply
     *  a rearrangement of the first.
     * 
     * @purpose :To display the string is anagram are not.
     * 
     * @function:function to check whether two strings are  
     *           anagram of each other.
     */


    findAnagram(str1,str2)
     {
       try
       {
         var str3;
         var str4;

         str1=str1.toLowerCase();
         str2=str2.toLowerCase();

         var arr1=Array.from(str1);
         arr1.sort();
         var arr2=Array.from(str2);
         arr2.sort();
        
        if(str1.length==str2.length)
         {
          for(let i=0;i<str1.length;i++)
            {
              str3=""+str3+arr1[i];
              str4=""+str4+arr2[i];
            }
             if(str3==str4)
             {
               console.log("the words are similar= "+str1+" "+str2);
               // return true;
             }
         }
        else
          {
            console.log("the words are not similar= "+str1+" "+str2);
            //return false;
          }
       }
      catch(err)
       {
         console.log(err);
       }
    },   
  

/************************primeNumber************************ */
    /**
     * Find the Prime numbers in that range.
     * 
     * @description:Take a range of 0 - 1000 Numbers from the user  to generate prime number. 
     * 
     * @purpose:In given range to find the prime numbers.
     * 
     * @function:To find the prime numbers in the given range using loop condition.
     */

    generatePrimeno(initial,final)
      {
        var primenumbers="";
         
        for(let i=initial;i<=final;i++)
         {
            var count=0;
            for(let j=i;j>=1;j--)
            {
                if(i%j==0)
                {
                  count=count+1;
                }
            }
                if(count==2)
                  {
                    primenumbers=primenumbers+i+" ";
                  }
            }
            return primenumbers;   
      },
     
/*********************bubbleSort********************** */
    /**
     * 1.Sorting the integers using bubble sorted method.
     * 
     * @description:Reads in integers prints them in sorted order using Bubble Sort.
     * 
     * @purpose :Sorting the integers.
     * 
     * @function:Sort the integers using bubble sort method. 
     *  
     */ 

    generateBubbleSort(inputArray)
      {
        var n=inputArray.length;
        var temp;
        var arr=[];
        var i,j;

       for( i=0;i<n;i++)
        {
          for(j=i+1;j<n;j++)
            {
              if(inputArray[i]>inputArray[j])
               {
                 temp=inputArray[i];
                 inputArray[i]=inputArray[j];
                 inputArray[j]=temp;
               }
            }
        }
        console.log("after sorting");
        console.log(inputArray);
     },


/***********************insertionSort**************************/
    /**
     * 1.Sorting the string. 
     * 
     * @description: In strings from standard input and prints them in sorted order.
     *                    Uses insertion sort.
     * 
     * @purpose  : To sort the string in standard form.
     * 
     * @function:Takes the user inputs string and sort the string using insertion sort method. 
     */



     generateInsertsort(arr)
     {
         var length=arr.length;
         for(var i=1;i<length;i++)
         {
             var temp=arr[i];
             for(j=i-1;j>=0 && arr[j]>temp;--j)
             {
                 arr[j+1]=arr[j];
                 
             }
             arr[j+1]=temp;

         }
         console.log("after sorting ")
         console.log(arr);
         return arr;
     },

/*************************DayofWeek*************************** */
    /**
     * To find the Day of week.
     * 
     * @description:Take three command-line arguments: m (month), d (day), and y (year). 
     * For m use 1 for January, 2 for February, and so forth. For output print 0 for Sunday, 
     * 1 for Monday, 2 for Tuesday, and so forth.
     * 
     * @purpose : To find the day of week using by formula and 
     * taking command line arguments inputs.
     * 
     * @function:That takes a date as input and prints the day of the week that date falls on.
     */


    findDay(day,month,year)
     {
        var i;
        var x;
        var y;
        var y = year - Math.floor ((14 - month) / 12);
        var x = y + Math.floor((y/4))- Math.floor ((y/100)) + Math.floor ((y/400));
        var m = month + 12*Math.floor(((14 - month) / 12)) - 2;
        var day = (day + x + Math.floor((31*m) / 12)) % 7;

        i=day;
        switch(i)
          {
            case 1: return("Monday");
            case 2:return("Tuesday");
            case 3:return("Wednesday");
            case 4:return("Thrusday");
            case 5:return("Friday");
            case 6:return("Saturday");
            case 7:return("Sunday");
            case 8:return("Monday");
            case 9:return("Tuesday");
            case 0:return("Sunday");
          } 
     },


/**********************************Monthly Payment************************* */
 /** 
 * To Calculate MonthlyPayment 
 * 
 * @description :reads in three command-line arguments P, Y, and R and calculates 
 * the monthly payments you would have to make over Y years
 * to pay off a P principal loan amount at R per cent interest compounded monthly.
 * 
 * @puspose :To calculate the monthly payment
 * 
 * @function : that takes the value of p y r and returns the final amount 
 * 
 */

    monthPayment(principal,year,rate)
      {
        var n=12*year;
        var r= (rate/(12*100));
        var amount = ((principal * r) / ((1 - Math.pow((1 + r), -n))));
        return amount;
      },

/************************temperatureConversion***************************/
    /**
     * .TemperatureConversion.
     * 
     * @description:Taking the user inputs in temperature and converting  to fahrenheit and Celsius.
     * 
     * @purpose :Conversion of temperature to fahrenheit and Celsius.
     * 
     * 
     * @function:temperature in fahrenheit as input outputs the temperature in Celsius 
     * or viceversa using the formula.
     */   

    tempConversion(input)
     {
        var result;
        var value=input.question("press 1 to convert Celsius to Fahrenheit and 2 to convert Fahrenheit to Celsius ")
        if(value==1)
          {
            var cel=input.question("enter temp in celcius ")
            result= (cel *(9/5)) + 32;
            return result;
          }
        if(value==2)
          {
            var fah=input.question("enter temp in fahrenheit ");
            result= (fah-32)*(5/9);
            return result;
          }
      },

    
/******************************Square root************************* */
 /** 
 * To Calculate Square Root of the given number 
 * 
 * @description : compute the square root of a nonnegative number 
 *               c given in the input using Newton's method
 * 
 * @puspose :To calculate the Square Root 
 * 
 * @function : Using the given formulae evaluate the square root
 * 
 */

    findSquareRoot(number)
      {
          var temp=number; 
          const epsilon =1e-15;
          while( Math.abs(temp-number/temp) > epsilon*temp)
            {
              temp=(number/temp+temp)/2;
            }
        console.log("square root of number is= "+temp);
      },
    
    
    
    
      doBinarySearch(arr,words)
      {
          arr.sort();
          var li=0;
          var hi=arr.length-1;
          var mi=Math.floor((li+hi)/2);

          while(li<=hi)
          {
              if(arr[mi]===words)
              {
                  return true;

              }
              else if(arr[mi]<words)
              {
                  li=mi+1
              }
              else
              {
                  hi=mi-1;

              }
              //mi=(li+hi)/2;
              mi=Math.floor((li+hi)/2)
          }
          return false;
      },
    
    
    calculateNotes(amount)
    {
        var notes=0;
        var arr=[1000,500,100,50,20,10,5,2,1];
        
        for(let i=0;i<=arr.length;i++)
        {   
            if(amount/arr[i]>=1)
            {
                var n=Math.floor(amount/arr[i]);
                notes=notes+n;
                console.log(arr[i]+"notes are : "+n);
                amount=amount%arr[i];
            }
        }
        console.log("total number of notes = "+notes);
    },
    
    
    toFindNumber(low, high, input )
     {
      try 
        {
          var mid = low + Math.floor((high - low) / 2);
            var k;
            if (low < high)
             {
                if (low == high - 1)
                 {
                   k = input.question("Is the number " + low + "If Yes press --> Yes " + "  " + "If No press No");
                    if (k == 'Yes')
                      return low;
                    if (k == 'No')
                      return high;
                 }

            k = input.question("Is the number in the range " + mid + "--" + high + "If Yes Press -->Yes " + " " + "If No Press--> No")

                if (k == 'Yes')
                    mid = this.toFindNumber(mid, high,input)
                if (k == 'No')
                    mid = this.toFindNumber(low, mid - 1, input);
            }
    
            return mid;
        
        } 
        catch (error) 
          {
            console.log(error.message);
          }
    },
    
    
    
    
    
    
    
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    



    


        
    

     



















    


















