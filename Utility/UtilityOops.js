module.exports={

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










}
