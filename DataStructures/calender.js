var calender = require('../Utility/calender')
var Utility = require('../Utility/Utility');
var T = require('util')

function call() 
{
    var month = +process.argv[2];
    var year = +process.argv[3];
    
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
   
    var day = calender.day(month,1,year);
    //console.log(day);
    var leap = calender.leapYear(year);
    console.log("month=>"+month+" year=>"+year);
    console.log()
    if (leap == true) 
      {
        dates[2] = 29;
      }
    for (var i = 0; i < week.length; i++) 
      {
        T.print(week[i] + "  ");
      }
    console.log();
    
    for (var i = 0; i < (day * 5); i++) 
      {
        T.print(" ");
      }

    for (var i = 1; i <= dates[month]; i++) 
      {
        if (i < 10) 
          {
            T.print(" " + i + "   ");
          }

        if (i > 9) 
          {
            T.print("" + i + "   ")
          }
        if ((i + day) % 7 == 0) 
          {
            console.log();
          }
        }

    console.log("\n\n");

} 
call();