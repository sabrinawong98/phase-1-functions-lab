// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
        return someValue - 42;
    }
   else{ 
    return 42 - someValue; 

   }

}

function distanceFromHqInFeet(someValue){
   return distanceFromHqInBlocks (someValue) * 264;

}

function distanceTravelledInFeet(start,destination){
    if (start >= destination){
        return (start - destination) * 264;
    }
    else
    return (destination - start) * 264;
}

function calculatesFarePrice(start, destination){
    const feetTravelledInCab = (distanceTravelledInFeet(start,destination));

    if (feetTravelledInCab > 2500){

    return 'cannot travel that far'
     
}
else if (feetTravelledInCab <= 400){
    return 0;
}
else if (feetTravelledInCab > 400 && feetTravelledInCab <= 2000){
    return (feetTravelledInCab - 400 ) * 0.02;

}
else if (feetTravelledInCab > 2000 && feetTravelledInCab < 2500)
return 25;
}