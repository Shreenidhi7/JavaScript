/**************************************************************************
 * Execution        : Default node             cmd> node InventoryManagement.js
 * @file            : InventoryManagement.js
 * @overview        :  Extend the above program to Create InventoryManager to manage the Inventory. 
         The Inventory Manager will use InventoryFactory to create Inventory Object from JSON. 
        The InventoryManager will call each Inventory Object in its list
        to calculate the Inventory Price and then call the Inventory Object to return the JSON String.
        The main program will be with InventoryManager

 * @author          : Shreenidhi Sharma N  <shreenidhisharma7@gmail.com>
 * @version         : 1.0.
 * @since           : 13/02/2019
 ***************************************************************************/

var Utility = require('../Utility/UtilityOops');
var read = require('readline-sync');
var fileRead = require('fs');
var data = fileRead.readFileSync('StockReport.json', 'utf8');
function inventoryManage() {
    //try {
        var data1 = JSON.parse(data);
        var object = new Utility.inventoryManage
        here: while (ch != 5) {
            console.log("Press 1 to add :");
            console.log("Press 2 to remove :");
            console.log("Press 3 to edit :");
            console.log("Press 4 to print:");
            console.log("Press 5 to exit :");
            var ch = read.questionInt("Enter the number :")
            switch (ch) {
                case 1:
                    object.add(data1)
                    break;
                case 2:
                    object.remove(data1)
                    break;
                case 3:
                    object.edit(data1)
                    break;
                case 4:
                    object.print(data1)
                    break;
                case 5:
                    break;
                default:
                    console.log("Please enter the correct number ");
                    break here;
            }
        }
    }
    /*catch (err) {
        console.log(err.message);
    }
}*/ inventoryManage();