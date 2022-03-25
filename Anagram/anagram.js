
function anagram(str1,str2){
    if(str1 == '' && str2 == ''){
        return true;
    }
    if(str1.length !== str2.length){
        return false;
    }

    let strarr = str1.split('');
    let strarr2 = str2.split('');
    console.log(strarr);
    console.log(strarr2);

    strarr.sort();
    strarr2.sort();
    for(let i=0; i<strarr.length; i++){

        console.log(i);
     if(strarr[i] != strarr2[i] ){
         return false;
     }

    }
    return true
}
console.log(anagram('','lrohe'));

// Activity create the Anagram using the frequency counter technique