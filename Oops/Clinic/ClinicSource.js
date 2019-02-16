/**************************************************************************
 * Execution        : Default node             cmd> node ClinicSource.js
 * @file            : ClinicSource.js
 * @overview        : This programme is used to manage a list of Doctors associated with the Clinique. 
        This also manages the list of patients who use the clinique.
        It manages Doctors by Name, Id, Specialization and Availability (AM,  PM or both). 
        It manages Patients by Name, ID, Mobile Number and Age. 
        The Program allows users to search Doctor by name, id, Specialization or Availability.
        Also the programs allows users to search patient by name, mobile number or id. 
        The programs allows patients to take appointment with the doctor. 
        A doctor at  any availability time can see only 5 patients.
        If exceeded the user can take appointment for patient at different date or availability time. 
        Print the Doctor Patient Report. 
        Also show which Specialization is popular in the Clinique as well as which Doctor is popular.
 * @author          : Shreenidhi Sharma N  <shreenidhisharma7@gmail.com>
 * @version         : 1.0.
 * @since           : 09/02/2019
 ***************************************************************************/

var D=require('../Clinic/ClinicUtil');
var file=require('fs');
var read=require('readline-sync');

var data=file.readFileSync('ClinicNew.json');
var object=JSON.parse(data)

var patient=new D.Patient;
var doctor=new D.Doctor;
var clinic=new D.Clinic;
console.log("-----Clinique Management-----\n");

console.log("Enter 1 to Search for Doctors");
console.log("Enter 2 to Search for Patients");
console.log("Enter 3 to take Appointment from Doctors");
console.log("Enter 4 for Appointment Details");
console.log("Enter 5 to Exit");

var number=read.question("Enter your Choice: ");

if(number==1)
{
    doctor.searchDoctor(object)
}

if(number==2)
{
    patient.searchPatient(object)
}

if(number==3)
{
    doctor.appointment(object)
}

if(number==4)
{
    clinic.showReport(object)
}
if(number==5)
{
    console.log("Exiting the Program...!")
}