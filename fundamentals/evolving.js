// function ninjaConstructor(name,cohort){
//   var ninja = {}
//   var belts = ["yellow", "red", "black"];
//   ninja.name = name;
//   ninja.cohort = cohort;
//   ninja.beltlevel = 0;
//   ninja.levelUp = function() {
//     if(ninja.beltlevel < 2){
//       ninja.beltlevel+=1;
//       ninja.belt = belts[ninja.beltlevel];
//     }
//     return ninja
//   }
//   ninja.belt = belts[ninja.beltlevel];
//   return ninja;
// }

// Refactor some of your existing assignments using ES6 syntax, such as abbreviated function calls:
function ninjaConstructor(name,cohort,beltlevel){
  this.name = name;
  this.cohort = cohort;
  this.beltlevel = beltlevel;
  ninja.levelUp = function(){
    if(this.beltlevel < 2){
      this.beltlevel++;
      this.belt = belts[this.beltlevel];
    }
    return ninja
  }
}
var ninja = ninjaConstructor("Ana", "Winter", 1);
