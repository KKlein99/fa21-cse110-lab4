let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(var object in statistics){
    if(object.charAt(0)='r'){
        console.log(statistics[object]);
    }
    else if(isOdd(statistics[object])){
        console.log(statistics[object]);
    }
}