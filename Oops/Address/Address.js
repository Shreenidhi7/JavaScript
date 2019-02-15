/*var read=require('readline-sync');
var file=require('fs');
var sort=require('../../Utility/Utility')

class Person
{
    constructor(firstname,lastname,phonenum,address)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.phonenum=phonenum;
        this.address=address;
    }
}

class Address
{
    constructor(doorno,streetname,city,state,zip)
    {
        this.doorno=doorno;
        this.streetname=streetname;
        this.city=city;
        this.state=state;
        this.zip=zip;
    }
}
*/

//var D=require('../../ObjectOrientedPrograms/Oppsutility')
var Utility=require('../../Oops/Address/AddressUtil')
var file=require('fs')
var data1=file.readFileSync('Address.json','utf8')
var data=JSON.parse(data1)
var manager=new Utility.AddressBookManager
//var object=new M.AddressBook
//manager.newAddressBook(data)

