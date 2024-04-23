// Cars: Store information about a car.
function create_car(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: modelName,
    };
    options.forEach(function (option) { return car[option[0]] = option[1]; });
    return car;
}
console.log(create_car('Toyota', 'Corolla', ['color', 'red'], ['sunroof', true]));
