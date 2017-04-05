var person = {
  name:"Antonina",
  distance_traveled:0,
  say_name:function(){
    console.log(person.name);
  },
  say_something:function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk:function(){
    console.log(`${person.name} is walking`);
    this.distance_traveled+=3;
    return person;
  },
  run:function(){
    console.log(`${person.name} is running!`);
    this.distance_traveled+=10;
    return person;
  },
  crawl:function(){
    console.log(`${person.name} is crowling`);
    this.distance_traveled+=1;
    return person;
  }
}
person.say_name();
person.walk();
person.crawl();
person.distance_traveled;

/*********************************************************************************
create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).*/
function ninjaConstructor(name,cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"];
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltlevel = 0;
  ninja.levelUp = function() {
    if(ninja.beltlevel < 2){
      ninja.beltlevel+=1;
      ninja.belt = belts[ninja.beltlevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltlevel];
  return ninja;
}
