// Code your solution in this file!
function returnFirstTwoDrivers(driverList){
    return driverList.slice(0, 2);
}

function returnLastTwoDrivers(driverList){
    return driverList.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return (fare) => fare * number;
}
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driverList, driverFunction) {
    return driverFunction(driverList);
}