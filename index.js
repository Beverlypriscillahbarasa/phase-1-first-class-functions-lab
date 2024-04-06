
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
        
    return drivers.slice(0, 2);
    };
console.log(returnFirstTwoDrivers(drivers));
 
const  returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
    };
console.log( returnLastTwoDrivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



const createFareMultiplier = function (fare) {
    return function (numberOfRides) {
        return fare * numberOfRides;
    }
}


const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

function selectDifferentDrivers(arrayNames, firstOrLastDrivers) {
    return firstOrLastDrivers(arrayNames);    // Return the result of calling firstOrLastDrivers with arrayNames
}
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers));