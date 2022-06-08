// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    if (distance > 42) {
        return distance - 42
    }
    else {
        return 42 - distance
    }

}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlock
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination) {
        return Math.abs(destination - start )*264
    } else {
        return Math.abs(destination - start )*264
    }
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let totalDistance = distanceTravelledInFeet(start , destination);

    if (totalDistance <= 400) {
        return 0;
    }
    else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25;
    } else (totalDistance > 2500); {
        return 'cannot travel that far'
    }
  }