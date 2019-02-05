/************************************************************
 * Execution    :   1. cmd> node calenderQueue.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon calenderQueue.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   by using Queue, print calender  
 * .
 * 
 * @description
 * 
 * @file        :   calenderQueue.js
 * @overview    :   take input month and year from the user and print calender
 * @author      :   Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 * @version     :   1.0
 * @since       :   1-02-2019
 * 
 * **********************************************************/
/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
* */
var util = require('util');
const read = require('readline-sync')
var Queue = require('../Utility/UtilityDS');
var Utility = require('../Utility/Utility');
function calender() {

    var dayQue = new Queue.Queue1;
    var dateQue = new Queue.Queue1;
    var month = read.questionInt('enter month')
    var year = read.questionInt('enter year')

    while ((month < 0 || month >= 12) || (month == isNaN)) 
    {//validating month
        console.log("month should be less than 12")
        month = read.questionInt('enter month greater than 0 nad less than 12')
    }
    while (year == (isNaN) || year < 0)//validating year
    {

        console.log("year should be greater than 0")
        year = read.questionInt('enter year greater than 0')
    }

    var day = Utility.findDay(1, month, year);
    //console.log(day);
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

    var leap = Utility.leapYear(year);//checking wheather the given year is leap year by using isleapyear function
    if (leap) {
        dates[2] = 29;//if the year is leap year then the number of days is 29
    }

    for (var i = 0; i < week.length; i++) {//taking all the days into one array
        dayQue.enqueue(week[i]);
    }
    for (var i = 1; i <= dates[month]; i++) {//taking all the date into one array
        dateQue.enqueue(i);
    }


    for (var i = 0; i < week.length; i++) {
        util.print(dayQue.dequeue() + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        util.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) 
        {
            util.print(" " + dateQue.dequeue() + "   ");//printing dates less than 10

        }

        if (i > 9) 
        {
            util.print("" + i + "   ")//printing dates greater than 10
        }
        if ((i + day) % 7 == 0) 
        {
            console.log();
        }

    }

    console.log("\n\n");
}
calender();