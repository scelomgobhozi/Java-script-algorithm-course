// wrong solution

function countUniqueValues(arr){
    //Loop through the array
    //Store the differnt numbers in a object
    //then get the length of the object
  let frequency = {}
    for(let i =0; i<arr.length; i++){
     let num = arr[i];
     frequency[num] ? frequency[num] +=1 :frequency+=1;
    }
  return frequency

}

console.log(countUniqueValues([2,4,5,6,5,4,5,2,4,86]));




//------ Corrections
function countUniqueValues2(arr){
    if(arr.length === 0)return 0;
 let i = 0;
 for(let j = 1; j<arr.length; j++ ){
   if(arr[i] !== arr[j]){
       i++;
       arr[i] = arr[j];
   }
 }
  return i+1;
}
console.log(countUniqueValues2([1,1,1,1,1,2]));