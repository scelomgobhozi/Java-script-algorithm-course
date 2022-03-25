function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.


     let arr1 = num1.toString().split('').sort();
     let arr2 = num2.toString().split('').sort();
     if(arr1.length !== arr2.length){
         return false;
     }
      for(let i =0; i<arr1.length; i++){
          if(arr1[i] !== arr2[i]){
              return false;
          }
      }
    return  true;


}
console.log(sameFrequency(3589578,5879385));