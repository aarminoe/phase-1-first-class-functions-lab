// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function (fare) {
        return fare * num
    }
}

const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
