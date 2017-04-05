// //Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// function findSum(x, y){
//   var sum = 0;
//   for(var i = x; i <= y; i++){
//     sum = sum + i;
//   }
//   console.log(sum);
// }
// findSum(1,5);
// //Write a loop that will go through an array, find the minimum value, and then return it
// function findMin(arr){
//   var min = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
//
// function findAvg(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum = sum + arr[i];
//   }
//   var avg = sum/arr.length;
//   return avg;
// }
// console.log(findAvg([3,2,6]));
//  //Create a JavaScript object called person with the following properties/methods
//  /************* var *************/
//  //Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
//  var findSum = function(x, y){
//    var sum = 0;
//    for(var i = x; i <= y; i++){
//      sum = sum + i;
//    }
//    console.log(sum);
//  }
//  findSum(1,5);
//  //Write a loop that will go through an array, find the minimum value, and then return it
//  var findMin = function(arr){
//    var min = arr[0];
//    for(var i = 1; i < arr.length; i++){
//      if(arr[i] < min){
//        min = arr[i];
//      }
//    }
//    return min;
//  }
//  var findAvg = function(arr){
//    var sum = 0;
//    for(var i = 0; i < arr.length; i++){
//      sum = sum + arr[i];
//    }
//    var avg = sum/arr.length;
//    return avg;
//  }
//  console.log(findAvg([3,2,6]));
//
// /********Rewrite these as methods of an object***************************************
// *************************************************************************************/
// var myObj = {
//   findSum:function(x, y){
//     var sum = 0;
//     for(var i = x; i <= y; i++){
//       sum = sum + i;
//     }
//     console.log(sum);
//   },
//   ffindMaz:function(arr){
//     var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//       if(arr[i] < min){
//         min = arr[i];
//       }
//     }
//     return min;
//   },
//   findAvg:function(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//       sum = sum + arr[i];
//     }
//     var avg = sum/arr.length;
//     return avg;
//   }
// }
/**********************************************************************************
Create a JavaScript object called person with the following properties/methods****
**********************************************************************************/
var person = {
  name:"Antonia",
  distance_traveled: 0,
  say_name:function(){
    console.log(person.name);
  },
  say_something:function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk:function(){
    console.log(`${person.name} is walking!`);
    this.distance_traveled += 3;
    return person;
  },
  run:function(){
    console.log(`${person.name} is running!`);
    this.distance_traveled+=10;
    return person;
  },
  crawl:function(){
    console.log(`${person.name} is crawling!`);
    this.distance_traveled += 1;
    return person;
  }
};
console.log(person.run());
