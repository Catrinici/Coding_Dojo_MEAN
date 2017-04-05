function VehicleConstructor(name,num_wheels,num_passengers){
  var vehicle = {}

  vehicle.name = name;
  vehicle.num_wheels=num_wheels;
  vehicle.num_passengers = num_passengers;
  /*
  methods
  */
  var makeNoice = function(){
    console.log("Honk");
 }
  return this.vehicle;
 }

  var bike = VehicleConstructor("bicycle",2,2);
  bike.makeNoice = function(){
    console.log('ring-ring');
  }

var bus = VehicleConstructor('bus',6,0);
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickupPassengers(6);
console.log(bus.passengerNumber);
