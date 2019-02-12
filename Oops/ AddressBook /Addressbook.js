
var read = require('readline-sync');
var access = require('../ AddressBook /AddressBookMain');
var fs = require('fs');
var file = fs.readFileSync('Address.json','utf8');
var details = JSON.parse(file);
/***** Address Book *****/
/*
*11.Address Book
*
*@purpose: To
*@param: Pass
*@function:
*
*/
function addressBook() {
var address = new access.Address;

while (choice != 3) {
console.log("1:Create address profile");
console.log("2:Open address book");
console.log("3:Exit");
var choice = read.questionInt("Please enter your choice: ");

switch (choice) {
case 1:
address.createAddress(details);
break;
case 2:
address.openProfile(details);
break;
case 3:
console.log("Exiting.....");
break;
default:
console.log("Enter choice within 1-3");
}
}

}
addressBook();


