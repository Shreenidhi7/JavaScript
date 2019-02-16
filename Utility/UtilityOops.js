/*module.exports={

    inventory(object)
    {
        var rice=object.Rice;
        var wheat=object.Wheat;
        var pulses=object.Pulses;


        for(var key in rice)
        {
            console.log("the total price of "+rice[key].ricename,"is ",rice[key].weight * rice[key].price);

        }
        console.log("\n");

        for(var key in wheat)
        {
            console.log("the total price of "+wheat[key].wheatName,"is ",wheat[key].weight * wheat[key].price);
        }
        console.log("\n");

        for(var key in pulses)
        {
            console.log("the total price of "+pulses[key].pulseName,"is ",pulses[key].weight * pulses[key].price);
        }
    },


*/
var read = require('readline-sync');
var file = require('fs');

class Items 
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight * this.price;
    }
}

class Rice extends Items
 {
    constructor(name, weight, price) 
    {
       super(name,weight,price)
    }
 }

class Wheat  extends Items
{
    constructor(name, weight, price) 
    {
        super(name,weight,price)   
    }
   
}

class Pulses extends Items
{
    constructor(name, weight, price) 
    {
        super(name,weight,price)
    }
}


/***************************STOCK****************************************************************** */

class Stock {
    constructor(name, numberofshare, shareprice) {
        this.name = name;
        this.numberOfShare = numberofshare;
        this.sharePrice = shareprice;
    }

    sharePrice() {
        return this.numberOfShare * this.sharePrice;
    }


}
/********************************INVENTORY MANAGER******************************************************* */

class inventoryManage {

    constructor() {

    }
    add(data) {
        var name = read.question("Enter the name of the stock to add :");
        var shares = read.questionInt("Enter number of shares :");
        var quantity = read.questionInt("Enter the price of the shares :");
        data.Stock.push(
            {
                stockname: name,
                numberofshare: shares,
                shareprice: quantity
            })
        var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
    }

    remove(data) {
        var name = read.question("Enter the name of the stock want to remove :")
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].stockname == name) {
                var index = data.Stock.indexOf(data.Stock[i])
                data.Stock.splice(index, 1)
            }
            var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
        }
    }

    print(data) {
        var stock = data.Stock;
        for (const key in stock) {
            console.log(stock[key]);

        }
    }
    edit(data) {
        var stock = data.Stock;
        var name = read.question("Enter the stock name to edit :")
        var shr = read.question("Enter noofShares to edit : ")
        var money = read.question("Enter the shares price :")
        for (let key in stock) {
            if (stock[key].stockname == name)
                var value = key;
            if (stock[key].numberofshare == shr)
                var value1 = key;
            if (stock[key].shareprice == money)
                var value2 = key;
        }
        var name1 = read.question("Enter the new name of the share :");
        stock[value].stockname = name1;
        var name2 = read.question("Enter the new noofShares :");
        stock[value1].numberofshare = name2;
        var name3 = read.question("Enter  the new price of the shares :")
        stock[value2].shareprice = name3;
        var d = file.writeFileSync('StockReport.json', JSON.stringify(data))
    }
}
/*****************************DECK OF CARDS********************************************************* */
/*
class Deck
{
    createDeck()
    {
        var suit= ["\♣", "\♦", "\♥", "\♠"];
        var rank=['2','3','4','5','6','7','8','9','10',"jack","queen","king","ace"];
        var cardarr=[];


    for(let i=0;i<suit.length;i++)
    {
      for(let j=0;j<rank.length;j++)
        {
        var temp=" ";
        
        cardarr.push(temp+rank[j]+suit[i]);
        }
    }
    var cards=suit.length * rank.length;

    for(let i=0;i<cards;i++)
    {
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i]+" ";
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
    }   
    return cardarr;
}
}

*/

/*************************************************************************************************** */

class Card
{
    constructor(rank,suit)
    {
        this.rank=rank;
        this.suit=suit;
    }
}




class Deck 
{
    constructor()
    {
        this.suit = ["♣", "♦", "♥", "♠️"];
        this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "jack", "queen", "king", "ace"];
    }
    createDeck()
    {
        var cardarr = [];
        for (let i = 0; i < this.suit.length; i++) 
        {
            for (let j = 0; j < this.rank.length; j++) 
            {
                cardarr.push(new Card(this.rank[j],this.suit[i]));
            }
        }
        return cardarr;
        
    }


    printCard(Card)
    {
        return ""+Card.rank+Card.suit;
    }


    shuffle(cardarr)
    {
        var cards = this.suit.length * this.rank.length;
        for (let i = 0; i < cards; i++) 
        {
            var num = Math.floor(Math.random() * cards);
            var temp = cardarr[i];
            cardarr[i] = cardarr[num];
            cardarr[num] = temp;
        }
        return cardarr;
    }
        
}    
/****************************Address Book************************************************* */

var read = require('readline-sync');
var file = require('fs');
/**
* regex
*/
nameFormat = /[a-zA-Z]/ig;
contactFormat = /[0-9]/g;
/**
* Add new entries each time and manage that address book and perform
opeartions like add,delete,
* search,update and sort information.
* @param person store the info of each person and perform opeartions.
*/
class Address {
    /**
    * create a constructor to initialize and store values
    */
    constructor(address) {
        this.address;
    }
    createAddress(address) {
        var firstName = read.question("Enter your first name : ");
        while (!nameFormat.test(firstName)) {
            console.log("Enter string only");
            firstName = read.question("Enter your first name : ");
        }
        var lastName = read.question("Please enter your last name: ");
        /**
        * validating last name
        */
        while (!nameFormat.test(lastName)) {
            console.log("Enter string only");
            lastName = read.question("Please enter your last name: ");
        }
        /**
        * add the address information
        */
        var street = read.question("Street : ");
        var city = read.question("City : ");
        while (!nameFormat.test(city)) {
            console.log("Enter string only");
            city = read.question("City : ");
        }
        var state = read.question("State : ");
        while (!nameFormat.test(state)) {
            console.log("Enter string only");
            state = read.question("State : ");
        }
        var nation = read.question("Nationality : ");
        while (!nameFormat.test(nation)) {
            console.log("Enter string only");
            nation = read.question("Nationality : ");
        }
        var zip = read.question("Zip code : ");
        /**
        * zip code validation that should not exceed length 6
        */
        while (!contactFormat.test(zip) || zip.length != 6) {
            console.log("Invalid zip code! Zip code must be 6 digits");
            zip = read.question("Zip code : ");
        }
        var phoneNum = read.question("Phone number : ");
        while (!contactFormat.test(phoneNum) || phoneNum.length != 10) {
            console.log("Invalid phone number! Phone number must be 10 digits");
            phoneNum = read.question("Phone number : ");
        }
        /**
        * push each value into json
        */
        address.Person.push({
            "firstName": firstName,
            "lastName": lastName,
            "address": {
                "street": street,
                "city": city,
                "state": state,
                "nationality": nation,
                "zip": zip,
                "phoneNum": phoneNum
            }
        })
        /**
        * write file into json
        */
        file.writeFile('addressBook1.json', JSON.stringify(address), 'utf-8',
            function (err) {
                if (err) throw err
                console.log('Done!');
            })
        console.log("Address created succesfully!");
        console.log("First Name: " + firstName + "\nLast Name: " + lastName +
            "\nStreet: " + street + "\nCity: " + city + "\nState: " + state +
            "\nNationality: " + nation);
    }
    /**
    * comaparing name of each object and sort alphabetically
    */
    compare1(a, b) {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
        }
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting(address) {
        console.log(address.Person.sort(this.compare1));
    }
    /**
    * open profile for given name
    */
    openProfile(address) {
        var temp = -1;
        if (address.Person.length > 0) {
            for (var i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i]);
            }
            var update = read.question("Enter the name of profile to edit : ");
            /* while (!this.getName().includes(update)) {
            console.log("Name doesn't exist");
            update = read.question("Enter an existing name : ");
            }*/
            for (var k = 0; k < address.Person.length; k++) {
                if (update == address.Person[k].firstName) {
                    temp = k;
                    while (choice2 != 5) {
                        console.log("What you want to do?");
                        console.log("1: Update");
                        console.log("2: Delete");
                        console.log("3: Sort");
                        console.log("4: Save");
                        console.log("5: Exit");
                        var choice2 = read.questionInt("Enter your choice : ");
                        switch (choice2) {
                            case 1:
                                /**
                                * update profile
                                */
                                while (choice3 != 7) {
                                    console.log("What do you want to update? ");
                                    console.log("1: Street");
                                    console.log("2: City");
                                    console.log("3: State");
                                    console.log("4: Nationality");
                                    console.log("5: Zip code");
                                    console.log("6: Phone");
                                    console.log("7: Exit");
                                    var choice3 = read.questionInt("Enter your choice : ");
                                    switch (choice3) {
                                        case 1:
                                            var streetUpdate = read.question("Enter the new street : ");
                                            if (!nameFormat.test(streetUpdate)) {
                                                console.log("Enter string only");
                                                streetUpdate = read.question("Enter the new street : ");
                                            }
                                            /**
                                            * update whole data after changes
                                            */
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": streetUpdate,
                                                    "city": address.Person[k]["Address"].city,
                                                    "state": address.Person[k]["Address"].state,
                                                    "nationality": address.Person[k]["Address"].nation,
                                                    "zip": address.Person[k]["Address"].zip,
                                                    "phoneNum": address.Person[k]["Address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            /**
                                            * save into json every time after update
                                            */
                                            save();
                                            break;
                                        case 2:
                                            var cityUpdate = read.question("Enter the new city name : ");
                                            if (!nameFormat.test(cityUpdate)) {
                                                console.log("Enter string only");
                                                cityUpdate = read.question("Enter the new city name : ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["Address"].street,
                                                    "city": cityUpdate,
                                                    "state": address.Person[k]["Address"].state,
                                                    "nationality": address.Person[k]["Address"].nation,
                                                    "zip": address.Person[k]["Address"].zip,
                                                    "phoneNum": address.Person[k]["Address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            save();
                                            break;
                                        case 3:
                                            var stateUpdate = read.question("Enter the new state name: ");
                                            if (!nameFormat.test(stateUpdate)) {
                                                console.log("Enter string only");
                                                stateUpdate = read.question("Enter the new state name: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["Address"].street,
                                                    "city": address.Person[k]["Address"].city,
                                                    "state": stateUpdate,
                                                    "nationality": address.Person[k]["Address"].nation,
                                                    "zip": address.Person[k]["Address"].zip,
                                                    "phoneNum": address.Person[k]["Address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            save();
                                            break;
                                        case 4:
                                            var nationalityUpdate = read.question("Enter the new nation name : ");
                                            if (!nameFormat.test(nationalityUpdate)) {
                                                console.log("Enter string only");
                                                nationalityUpdate = read.question("Enter the new nation name : ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["Address"].street,
                                                    "city": address.Person[k]["Address"].city,
                                                    "state": address.Person[k]["Address"].state,
                                                    "nationality": nationalityUpdate,
                                                    "zip": address.Person[k]["Address"].zip,
                                                    "phoneNum": address.Person[k]["Address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            save();
                                            break;
                                        case 5:
                                            var zipUpdate = read.question("Enter the new zip code: ");
                                            if (!contactFormat.test(zipUpdate)) {
                                                console.log("Enter numbers only");
                                                zipUpdate = read.question("Enter the new zip code: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["Address"].street,
                                                    "city": address.Person[k]["Address"].city,
                                                    "state": address.Person[k]["Address"].state,
                                                    "nationality": address.Person[k]["Address"].nation,
                                                    "zip": zipUpdate,
                                                    "phoneNum": address.Person[k]["Address"].phoneNum
                                                }
                                            }
                                            address.Person[k] = obj;
                                            save();
                                            break;
                                        case 6:
                                            var phoneNumberUpdate = read.question("Enter the new phone number: ");
                                            if (!contactFormat.test(phoneNumberUpdate) || phoneNumberUpdate.length != 10) {
                                                console.log("Invalid input! Phone number must be 10 digits");
                                                phoneNumberUpdate = read.question("Enter the new phone number: ");
                                            }
                                            var obj = {
                                                "firstName": address.Person[k].firstName,
                                                "lastName": address.Person[k].lastName,
                                                "address": {
                                                    "street": address.Person[k]["Address"].street,
                                                    "city": address.Person[k]["Address"].city,
                                                    "state": address.Person[k]["Address"].state,
                                                    "nationality": address.Person[k]["Address"].nation,
                                                    "zip": address.Person[k]["Address"].zip,
                                                    "phoneNum": phoneNumberUpdate
                                                }
                                            }
                                            address.Person[k] = obj;
                                            save();
                                            break;
                                        case 7:
                                            console.log("Exiting.....");
                                            break;

                                    }
                                }

                                break;
                            case 2:
                                /**
                                * to delete profile
                                */
                                var update = read.question("Please enter the index you want to delete: ");
                                delete address.Person[update];
                                for (var k = 0; k < address.Person.length; k++) {
                                    if (address.Person[k] == null) {
                                        address.Person.splice(k, 1);
                                    }
                                }
                                /**
                                * write file
                                */
                                file.writeFile('addressBook1.json', JSON.stringify(address), 'utf-8',
                                    function (err) {
                                        if (err) throw err
                                        console.log('Done!')
                                    })
                                break;
                            case 3:
                                /**
                                * sort the profile by name
                                */
                                this.sorting(address);
                                save();
                                break;
                            case 4:
                                /**
                                * save file into json
                                */
                                function save() {
                                    file.writeFile('addressBook1.json', JSON.stringify(address), 'utf-8',
                                        function (err) {
                                            if (err) throw err
                                            console.log('File Saved!!')
                                        })
                                }
                                save();
                                break;
                            case 5:
                                console.log("Exiting.....");
                                //address();
                                break;
                            default:
                                console.log("Enter choice within 1-5");
                                break;
                        }
                    }

                }


            }
            if (temp == -1) {
                /**
                * check if name is available in json or not
                */
                console.log("Profile unavailable!!Please create new one.");
                //address();
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}
//module.exports = { Address }

/*******************DECK OF CARDS LINKED LIST*************************************************************** */


class Player
 {
    constructor(cards) 
    {
        this.cards = cards;
    }
    /**
     * Function to sort the cards.
     */
    sortedCards() {
        var sortedCards = [];
        var Utility = require("../Utility/Utility");
        sortedCards = Utility.generateBubbleSort(this.cards);
        return sortedCards;
    }
}
//module.exports = { Player };

/**********************************String Replace**************************************** */
module.exports = {
    Stock, Rice, Wheat, Pulses, inventoryManage, Address, Player,Items,Card,Deck,



    regex(name, fullName, phoneNum, day) {
        var fileread = require('fs');
        var line = fileread.readFileSync("regex.txt", 'utf8')
        //console.log(line)
        line = line.replace(/<<name>>/g, name);
        line = line.replace(/<<full name>>/g, fullName);
        line = line.replace(/91-xxxxxxxxxx/g, phoneNum);
        line = line.replace(/01-01-2016/g, day);
        //console.log();
        //console.log();
        //console.log(line);
        return line

    },

    //} 
    /******************************************************************************************* */

    /*
    
    stockReport(object)
    {
        var stock=object.Stock;
        var totalstock=0;
    
        for(var key in stock)
        {
            console.log();
            console.log("the total value of ",stock[key].stockname, "share is", stock[key].numberOfShare * stock[key].sharePrice);
            var num=stock[key].numberOfShare * stock[key].sharePrice;
            console.log(num);
            totalstock=totalstock+num;
        }
        console.log();
        console.log("value of total stocks: "+totalstock); 
    },
    
    */

    /*
    inventory(object)
    {
    var invent=object.Inventory;
    var totalprice=0;
    
    for(var key in invent)
    {
        console.log();
        console.log("the total value of",invent[key].name,"is ",invent[key].weight * invent[key].price);
        var num=invent[key].weight * invent[key].price;
        console.log(num);
        totalprice=totalprice+num;
        
    }
    console.log();
    console.log("value of totalprice: "+totalprice);
    }
    */

    deckOfCards() {
        try {
            var suits = ["♣", "♦", "♥", "♠"];
            var ranks = [
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "Jack",
                "Queen",
                "King",
                "Ace"
            ];
            /**
             * To calculate total number of cards
             */
            var totalCards = suits.length * ranks.length;
            /**
             * To create a deck of array
             */
            var cardArray = [];
            for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) 
            {
                for (let currentRank = 0; currentRank < ranks.length; currentRank++) 
                {
                    var temp = "";
                    cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
                }
            }
            /**
             * To shuffle the deck
             */
            for (let shuffle = 0; shuffle < totalCards; shuffle++) 
            {
                var num = Math.floor(Math.random() * totalCards);
                /**
                 * Performing swapping
                 */
                var temp = cardArray[shuffle];
                cardArray[shuffle] = cardArray[num];
                cardArray[num] = temp;
            }
            //console.log(cardArray);
            
            return cardArray;
        } catch (error) 
        {
            console.log(error.message);
        }
    }
}














































