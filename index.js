function same(arr1,arr2){
     let count = 0;

    for(let i=0; i<arr1.length; i++){

        if(Math.pow(arr1[i],2) == arr2[i]){
            count +=1;

            if(count === arr1.length){
                return true;
            }

        }else {
            return false;
        }
    }

}


// console.log(same([1,2,3,4],[1,4,9,16]));


// --------- Normally youd have to use a object to solve frequency counter problems

function same2(arr1,arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] ||0)+1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;

}

console.log(same2([1,2,3,4],[1,4,9,16]));
