var _ = {
  filter: function(arr,filterfunc) {
    var newarr=[];
    for (i = 0;i < arr.length;i++){
      if(filterfunc(arr[i])){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  },
  reduce: function(val,reducefunc,memo) {
    var result = [];
    if(Array.isArray(val)){
      for(i = 0; i < val.length; i++){
        if(!memo){
          result+=reducefunc(val[i],0);
        }
        else {
          result+=reducefunc(val[i],memo);
        }
      }
    }
    else {
      for(key in val){
        if(!memo){
          result+=reducefunc(val[key],0);
        }
        else {
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



   var evens = _.filter([1, 10, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
   console.log(evens);
   var odds = _.filter([3,4,5,9,13], function(num){return num % 2 != 0;});
   console.log(odds);
   var sum = _.reduce([1,2,3],function(memo, num){return memo + num}, 2);
   console.log(sum);
   var a = _.reduce([1, 2, 3, 4, 5, 6], function(num,memo){ return num+memo; });
   console.log(a);
   var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

   var notevens = _.reject([1, 2, 3, 4, 5, 6], function(num){ return  num % 2 == 0; });
   console.log(notevens);
