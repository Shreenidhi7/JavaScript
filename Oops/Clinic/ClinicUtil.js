var file = require('fs')
var readline = require('readline-sync')

class Clinic
{
    getNameFromDoctor(object) 
    {//it will give all thetotalCountames of stock in array
        var nameArray = []
        var data = object.Doctor
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].name)
        }
        return nameArray;//return array
    }


    getIdFromDoctor(object) 
    {   /**
         * it will give all the names of stock in arra
         */
        var nameArray = []
        var data = object.Doctor
        /**
         * looping over each element
         */
        for (let key in data) 
        {
            nameArray.push(data[key].Id)
        }
        return nameArray;//return array
    }

    getSpecialisationFromDoctor(object) 
    {
        var nameArray = []
        var data = object.Doctor
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].specialisation)
        }
        return nameArray;//returnin array
     }



    getNameFromPatient(object) 
    {
        var nameArray = []
        var data = object.Patient
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].name)
        }
        return nameArray;//returnin array
    }
    /**
     *@description:it will give all thetotalCountames of stock in array. 
     * 
     */
    getIdFromPatient(object) 
    {
        var nameArray = []
        var data = object.Patient
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].Id)
        }
        return nameArray;//returnin array
    }
    /** 
    *@description:to take all the phone numbers in the object into the array  
    *@param:taking parsed object from the user
    */
    getPhoneNumberFromPatient(object) 
    {//it will give all specialisation in array
        var nameArray = []
        var data = object.Patient
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].phoneNumber)
        }
        return nameArray;//returnin array
    }

}

class Doctor
{
    constructor()
    {

    }

    searchDoctor(data)
    {
        var doctor=data.Doctor
        var numbers=readline.questionInt("enter \n 1 to search Doctor by name \n 2 by ID \n 3 by Specialization:")

        if(numbers==1)
        {
            var name1=readline.question("Enter Doctor Name: ")
            for(const key in doctor)
            {
                if(doctor[key].name==name1)
                {
                    console.log("-----Your Doctor Information is--------");
                    console.log(doctor[key]);
                    console.log("-----------------------------------------");
                }
            }
        }

        if(numbers==2)
        {
            var Id1=readline.question("Enter Doctor ID: ");
            for(const key in doctor)
            {
                if(doctor[key].Id==Id1)
                {
                    console.log("-----Your Doctor Information is--------");
                    console.log(doctor[key]);
                    console.log("-----------------------------------------");
                }
            }
        }

        if(numbers==3)
        {
            var sp=readline.question("Enter Doctor Specilization: ")
            for(const key in doctor)
            {
                if(doctor[key].specialisation==sp)
                {
                    console.log("-----Your Doctor Information is--------");
                    console.log(doctor[key]);
                    console.log("-----------------------------------------");
                    
                }
            }
        }

    }
}






module.exports={Clinic,Doctor}