function carFactory(car) {
    let resultCar = {};
    resultCar.model = car.model;
    let engine = {};    
    let carriage = {};
    if(car.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }else if(car.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    }else if(car.power <= 200){
        engine.power = 200;
        engine.volume = 3500;
    }
    carriage.type = car.carriage;
    carriage.color = car.color;
    if(car.wheelsize % 2 == 0){
        car.wheelsize --;
        
    }
    let wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize]
    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.wheels = wheels;
    return resultCar;
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });
