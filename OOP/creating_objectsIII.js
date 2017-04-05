function VehicleConstructor(name, wheels,passengers,speed){
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;
  this.vin = createVin;

VehicleConstructor.prototype.createVin = function () {

};
  function createVin(){
    var vin = '';
    for (var i = 0; i < 15; i++){
      vin = vin + chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }
  VehicleConstructor.prototype.updateDistanceTravelled = function () {
    this.distance_traveled += this.speed;
    console.log(this.distance_traveled);
    return this;
  };

  VehicleConstructor.prototype.checkMiles = function () {
    console.log(this.distance_traveled);
    return this;
  };
  var checkMiles = function(){
    console.log(this.distance_traveled);
    return this;
  }
  VehicleConstructor.prototype.makeNoice = function () {
    if(wheels <= 2){
      console.log('ring-ring');
    }
    else if(wheels == 4){
      console.log("Horn-horn!");
    }
    else {
      console.log(" biiig noice!");
    }
    return this;
  };
}
VehicleConstructor.prototype.move = function () {
  this.updateDistanceTravelled();
  this.makeNoice();
  return this;
};

var bike = new VehicleConstructor('bicycle',8,1,20);
bike.move().checkMiles();
console.log(bike);
