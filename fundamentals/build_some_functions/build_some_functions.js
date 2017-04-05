
function runningLogger(str){
  console.log("I am running!")
}

function multiplyByTen(num){
  if(typeof(num) === 'number'){
    return num*10;
  }
}

function stringReturnOne(){
  return "This is the first string returned!";
}

function stringReturnTwo(){
  return "This is the second string returned!";
}

function caller(param1){
  if(typeof(param1) === "function"){
    param1();
  }
}
caller(stringReturnOne);

function myDoubleConsoleLog(param1, param2){
  if(typeof(param1) === "function" && typeof(param2)=== "function"){
    console.log(param1(), param2());
  }
  myDoubleConsoleLog(stringReturnOne, stringReturnTwo);


function caller2(param){
  console.log("starting!");
  var x = setTimeout(function(){
    if(typeof(param) == 'function'){
      param(stringReturnTwo, stringReturnTwo);
    }
  }, 2000);
  console.log('ending!');
  return "interesting!"
}
coller2(myDoubleConsoleLog);
}
