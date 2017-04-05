var _ = {
  map: function(val,mapfunc) {
    var newarr=[];
    if(Array.isArray(val)){
      for(i=0;i<val.length;i++){
        newarr.push(mapfunc(val[i]));
      }
    }
    else{
      for(key in val){
        newarr.push(mapfunc(val[key]));
      }
    }
    return newarr;
  },
  reduce: function(val,reducefunc,memo) {
    var result=0;
    if(Array.isArray(val)){
      for(i=0;i<val.length;i++){
        if(!memo){
          result+=reducefunc(val[i],0);
        }
        else{
          result+=reducefunc(val[i],memo);
        }
      }
    }
    else{
      for(key in val){
        if(!memo){
        result+=reducefunc(val[key],0);
        }
        else{
        result+=reducefunc(val[key],memo);
        }
      }
    }
    return result;
  },
  find: function(val,findfunc) {
    if(Array.isArray(val)){
      for(i=0;i<val.length;i++){
        if(findfunc(val[i])){
          return val[i];
        }
      }
    }
    else{
      for(key in val){
        if(findfunc(val[key])){
          return val[key];
        }
      }
    }
    return undefined;
  },
  filter: function(arr,filterfunc) {
    var newarr=[];
    for (i=0;i<arr.length;i++){
      if(filterfunc(arr[i])){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  },
  reject: function(arr,rejectfunc) {
    var newarr=[];
    for (i=0;i<arr.length;i++){
      if(!rejectfunc(arr[i])){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }
}
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
var evensf = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 4 == 0; });
console.log(evensf); // if things are working right, this will return [2,4,6].
var threetimes = _.map([1, 2, 3, 4, 5, 6], function(num){ return num*3; });
console.log(threetimes);
var threetimestwo = _.map({key1:1, key2:2, key3:3, key4:4, key5:5, key6:6}, function(num){ return num*3; });
console.log(threetimestwo);
var a = _.reduce([1, 2, 3, 4, 5, 6], function(num,memo){ return num+memo; });
console.log(a);
var b = _.reduce({key1:1, key2:2, key3:3, key4:4, key5:5, key6:6}, function(num,memo){ return num+memo; });
console.log(b);
var c = _.reduce([1, 2, 3, 4, 5, 6], function(num,memo){ return num+memo; },1);
console.log(c);
var d = _.reduce({key1:1, key2:2, key3:3, key4:4, key5:5, key6:6}, function(num,memo){ return num+memo; },2);
console.log(d);
var findevens = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(findevens);
var findeven = _.find({key1:1, key2:2, key3:3, key4:4, key5:5, key6:6}, function(num){ return num % 2 == 0; });
console.log(findeven);
var findten = _.find([1, 2, 3, 4, 5, 6], function(num){ return num == 10; });
console.log(findten);
var notevens = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(notevens);
