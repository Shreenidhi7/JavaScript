var Utility=require('../../Utility/Utility')
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
            nameArray.push(data[key].Name)
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
            nameArray.push(data[key].Specialisation)
        }
        return nameArray;//returnin array
     }



    getNameFromPatient(object) 
    {
        var nameArray = []
        var data = object.Patient
        for (let key in data) 
        {//looping over each element
            nameArray.push(data[key].Name)
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
            nameArray.push(data[key].PhoneNumber)
        }
        return nameArray;//returnin array
    }



    showReport(data)
    {
          var c=Patient.length;
          console.log("----------------Doctor Patient Report-------------------------------- \n");
          console.log("PatientName              DoctorName                 Appointment Taken on date ");
          console.log("---------------------------------------------------------------------------------");
          
          /*for(let i=0;i<c;i++)
          {
              console.log(i+"       "+data[key].Name+"      "+data[key].appointmentFrom+"       "+data[key].day)//arrtime[i]);
          }
          */


          var data=file.readFileSync('ClinicNew.json');
          var object=JSON.parse(data)
          var doctor=data.Doctor
          var newarr=[];
           var data = object.Patient
           for (let key in data) 
           {
               console.log(data[key].Name  +"               "+  data[key].AppointmentFrom  +"                      "+data[key].OnTheDayOf)
                newarr.push( data[key].AppointmentFrom  )
               // console.log("---------------------------------------------------------------------------");
                
            }
          console.log("-------------------------------------------------------------------------");
          
           
     /*      
        var arrc=[];
        for(let i in doctor)
        {
            var c=0;
            arrc.push([])
            for(let j=0;j<arrdr.length;j++)
            {
                if(doctor[i].Name==arrdr[j])
                {
                    c++;
                }
            }
         var s=" "+c+doctor[i].Name;
         if(!arrc.includes(s))
          {
            arrc.push(s)
          }
       }

    console.log()
    var sortarr=Utility.generateBubbleSort(arrc);
    var st=sortarr[sortarr.length-1]
    var st1=st.substring(1,st.length);
    
    console.log("The Popular Doctor is: "+st1);
    
    }         
}
*/

    }
}




class Doctor
{
    constructor()
    {
    }

    searchDoctor(data)
    {
        var Doctor1=new Clinic;
        var doctor=data.Doctor
       // var doctor = object.Doctor;
        var numbers=readline.questionInt("enter \n 1 to search Doctor by name \n 2 by ID \n 3 by Specialization: ")

        if(numbers==1)
        {
            console.log("the Doctor Names are :")  
            console.log(Doctor1.getNameFromDoctor(data));

            var name1=readline.question("Enter Doctor Name: ")

            while(!Doctor1.getNameFromDoctor(data).includes(name1))
            {
                console.log("enter valid name!!!")
                name1=readline.question("enter the name of Doctor you want to search : ")
            }
            for(const key in doctor)
            {
                if(doctor[key].Name==name1)
                {
                    console.log("-----Your Doctor Information is--------");
                    console.log(doctor[key]);
                    console.log("-----------------------------------------");
                }
            }
        }

        if(numbers==2)
        {
            console.log("the Doctor ID's are :")
            console.log(Doctor1. getIdFromDoctor(data));
            var Id1=readline.question("Enter Doctor ID: ");
            while(!Doctor1.getIdFromDoctor(data).includes(Id1))
            {
                console.log("enter valid Id!!!!");
                Id1=readline.question("Enter the correct ID of doctor to search: ")
            }
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
            console.log("Doctors Specilization are :")
            console.log(Doctor1.getSpecialisationFromDoctor(data));
            
            var sp=readline.question("Enter Doctor Specilization: ")
            while(!Doctor1.getSpecialisationFromDoctor(data).includes(sp))
            {
                console.log("Enter Valid Specilization!!!");
                sp=readline.question("Enter Correct Specilization of Doctor : ");
                
            }

            for(const key in doctor)
            {
                if(doctor[key].Specialisation==sp)
                {
                    console.log("-----Your Doctor Information is--------");
                    console.log(doctor[key]);
                    console.log("-----------------------------------------");
                    
                }
            }
        }

    }


    appointment(data)
    {
        var patient=data.Patient;
        var doctor=data.Doctor;
        var count=patient.length;
        var count;
        var Clinic1=new Clinic;
      //  var arrdr=[];
        //var arrtime=[];

    //    if (ans == 3) {
            count++;
            var date = new Date();
            if (count > 5)
             {
                var rem = Math.floor(count / 5)
                var day = (date.getDate()) + rem;
            }
            else 
            {
                var day = date.getDate()
            }
            //console.log(Clinic1.getNameFromDoctor(data))
            var name = readline.question("Enter the patientname :")
            var age = readline.questionInt("Enter the age of the patient :")
            var Id = Math.floor(Math.random() * 100000)
            var PhoneNumber = readline.questionInt('Enter the phoneNumber :')
            /**
             * Input validations for phoneNumber.
             */
            while (PhoneNumber > 9999999999 || PhoneNumber < 999999999) {
                console.log("number should be of 10 digit")
                PhoneNumber = readline.questionInt('Enter valid phone number')
            }
            console.log("----------------Doctors available are------------")
            console.log(Clinic1.getNameFromDoctor(data))
            var appointmentFrom = readline.question('Enter the doctor name from you want to take appointment :')
            while(!Clinic1.getNameFromDoctor(data).includes(appointmentFrom))
            {
                console.log("Enter Valid Name of Doctor!!!!");
                appointmentFrom=readline.question("Enter Doctors Name ::")
                
            }
            patient.push({
                "Name": name,
                "Id": ""+Id,
                "PhoneNumber": PhoneNumber,
                "Age": age,
                "AppointmentFrom": appointmentFrom,
                "OnTheDayOf": day

            })
            file.writeFileSync('ClinicNew.json', JSON.stringify(data))
            console.log("Your appointment is confirmed on :" + day + "/" + date.getMonth())
        }
     //   else
       //     console.log('Enter valid input')
   // }
}

    class Patient
    {
        constructor()
        {}

        searchPatient(data)
        {
            var Patient1=new Clinic;
            var patient=data.Patient;
            var number1=readline.questionInt("Enter \n 1 to Search Patient by Name \n 2 by ID \n 3 by MobileNumber ")
            
            if(number1==1)
            {
                console.log("The Patients List");
                console.log(Patient1.getNameFromPatient(data))
                
                var name1=readline.question("Enter Patient Name: ")
                while(!Patient1.getNameFromPatient(data).includes(name1))
                {
                    console.log("Enter Vaild Patient Name!!!");
                    var name1=readline.question("Enter Name Of Patient To Search: ");     
                }
                  for(const key in patient)
                {
                    if(patient[key].Name==name1)
                    {
                        console.log("-----------Your Patient Information is-----------");
                        console.log((patient[key]));
                        console.log("--------------------------------------------------");
                        
                    }
                }
            }



            if(number1==2)
            {
                console.log("The Patients ID are :");
                console.log(Patient1.getIdFromPatient(data) );
                var Id1=""+readline.question("Enter Patient ID: ")
                while(!Patient1.getIdFromPatient(data).includes(Id1))
                {
                    console.log("Enter Valid Patient ID!!!");
                    var Id1=""+readline.question("Enter Patients ID you want to Search: ");
                }
                for(var key in patient)
                {
                    if(patient[key].Id==Id1)
                    {
                        console.log("-----------Your Patient Information is-----------");
                        console.log(patient[key]);
                        console.log("---------------------------------------------------");
                    }
                }
            }


            if(number1==3)
            {
                console.log("The Patient PhoneNumbers are: ");
                console.log(Patient1.getPhoneNumberFromPatient(data));
                var phoneNumber1=readline.questionInt("Enter Patient MobileNumber: ")
                while(!Patient1.getPhoneNumberFromPatient(data).includes(phoneNumber1))
                {
                    console.log("Enter Valid PhoneNumber!!!");
                    var phoneNumber1=readline.questionInt("Enter the PhoneNumber of the Patient to Search: ");
                }
                
                for(const key in patient)
                {
                    if(patient[key].PhoneNumber==phoneNumber1)
                    {
                        console.log("-----------Your Patient Information is-----------");
                        console.log(patient[key]);
                        console.log("---------------------------------------------------");
                    }
                }
            }
        }
    }


module.exports={Clinic,Doctor,Patient}