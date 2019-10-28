// test data

// upate loaner object to?

//loaners.identifiers-> stockNum, vin, plate, year, model, trim
//loaners.status 
//loaners.trips-> 
    // outDate, outTime, outFuel, outMiles, outDamage???, outCustomer, outAgreementNum, outRO
    // inDate, inTime, inMiles, inFuel, inDamage
// loaners.fleetStatus -> inFleet, enteredFleet, exitedFleet


export const loaners = [
    {
        stockNum:'24701',
        vin:'5FNYF6H53KB025774',
        plate:'VANS8',
        year:'2019',
        model:'Pilot',
        trim:'EX-L',
        isOut:true,
        outDate:'09/27/2019',
        returnDate:'',
        // status?
        isRes:false,
        resBy:'Drew',
        resBegDate:'',
        resEndDate:'',
        enteredFleet:'06/20/2018',
        currMiles:6976,
    },
    {
        stockNum:'25735',
        vin:'5J6RW2H53KL015797',
        plate:'VANS11',
        year:'2019',
        model:'CRV',
        trim:'EX',
        isOut:true,
        outDate:'09/24/2019',
        returnDate:'',
        isRes:false,
        resBy:'Drew',
        resBegDate:'',
        resEndDate:'',
        enteredFleet:'09/17/2019',
        currMiles:533,  
    },
    {
        stockNum:'25569',
        vin:'1HGCV1F18KA077606',
        plate:'VANS4',
        year:'2019',
        model:'Accord',
        trim:'LX',
        isOut:false,
        outDate:'09/23/2019',
        returnDate:'',
        isRes:false,
        resBy:'Sam',
        resBegDate:'',
        resEndDate:'',
        enteredFleet:'06/21/2019',
        currMiles:2735,  
    },
    {
        stockNum:'25569',
        vin:'1HGCV1F18KA077608',
        plate:'VANS4',
        year:'2019',
        model:'Accord',
        trim:'LX',
        isOut:false,
        outDate:'09/23/2019',
        returnDate:'',
        isRes:false,
        resBy:'Sam',
        resBegDate:'',
        resEndDate:'',
        enteredFleet:'06/21/2019',
        currMiles:2735,  
    },
    {
        stockNum:'25569',
        vin:'1HGCV1F18KA077603',
        plate:'VANS4',
        year:'2019',
        model:'Accord',
        trim:'LX',
        isOut:false,
        outDate:'09/23/2019',
        returnDate:'',
        isRes:false,
        resBy:'Sam',
        resBegDate:'',
        resEndDate:'',
        enteredFleet:'06/21/2019',
        currMiles:2735,  
    }

]