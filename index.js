// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(42 - block);
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;  
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400){
        return fare = 0;
    } else if (distance > 400 && distance <= 2000){
        fare = (distance - 400) * 2;
        return fare / 100;
    } else if (distance > 2000 && distance <= 2500){
        return fare = 25;
    } else {
        return 'cannot travel that far';
    }
}