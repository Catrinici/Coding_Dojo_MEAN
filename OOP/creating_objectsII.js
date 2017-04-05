function VehicleConstructor(name, wheels,passengers,speed){
  var distance_traveled = 0;
  var self = this;
  function updateDistanceTravelled(){
    distance_traveled += self.speed;
    console.log(distance_traveled);
  }
  this.move = function(){
    this.makeNoice();
    updateDistanceTravelled();
  };
  var checkMiles = function(){
    console.log(distance_traveled);
  }
  }

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;

  this.makeNoice = function(){
    console.log("Making noice!");
  }
}
var bike = new VehicleConstructor("bicycle",1,2);
this.makeNoice = function(){
  console.log("ring-ring");
}
console.log(bike);

var sedan = new VehicleConstructor("sedan",4,6);
this.makeNoice = function(){
  console.log("Honk-Honk!!!");
}
console.log(sedan);

var bus = new VehicleConstructor("Bus",8,8);
this.pickupPassengers = function(newPassengers){
  this.passengerNumber += newPassengers;
}
console.log(bus);
