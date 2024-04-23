// Cars: Store information about a car.

function create_car(manufacturer: string, modelName: string, ...options: [string, any][]) {
    let car = {
        manufacturer: manufacturer,
        model: modelName,
    };
    options.forEach(option => car[option[0]] = option[1]);
    return car;
}

console.log(create_car('Toyota', 'Corolla', ['color', 'red'], ['sunroof', true]));
