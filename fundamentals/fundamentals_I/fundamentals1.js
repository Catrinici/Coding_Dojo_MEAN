function logEach(x){
  var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
  var y = ["hello", "world", "JavaScript is Fun"];
  for(var i = 0; i < x.length; i++){
    console.log(x[i]);
  }
  x.push(100);
  for(var j = 0; j < y.length; j++){
    x.push(y[j]);
  }
  return x;
}
console.log(logEach());

function sum(num){
  var sum = 0;
  for(var i = 0; i <= 500; i++){
    sum = sum + i;
  }
  return "The sum is: " + sum;
}
console.log(sum());

function findMin(arr){
  var arr = [1, 5, 90, 25, -3, 0];
  var min = arr[0];
  var sum = 0;
  var avg;

  for(var i = 1; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    sum = sum + i;
  }
  avg = sum/arr.length;
  console.log('Minimum number is ' + min);
  console.log('Average is ' + avg);
}
console.log(findMin());

function findNinja(){
  var newNinja = {
   name: 'Jessica',
   profession: 'coder',
   favorite_language: 'JavaScript', //like that's even a question!
   dojo: 'Dallas'
  }
  for(key in newNinja){
    console.log(key + ":" + newNinja[key]);
  }
}
console.log(findNinja());
