const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 

const returnFirstTwoDrivers = (driverNames) => drivers.slice(0,2);

const returnLastTwoDrivers = (driverNames) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return (fare) => integer*fare;
}

const fareDoubler = createFareMultiplier(2); //closure function

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLastDrivers){
    if(firstOrLastDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
    } else if (firstOrLastDrivers === returnLastTwoDrivers){
        return returnLastTwoDrivers();
    }
}


