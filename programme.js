//////////REVERSE STRING/////////////

let n = "bhopal"
let reverse = "";
for (i = n.length - 1; i >= 0; i--) {
    reverse = reverse + n[i]
}
console.log(reverse)


///PROGRAMME TO FIND FACTORIAL///////

let factorial = 1;

for (i = 1; i <= 4; i++) {
    factorial = factorial * i
}
console.log(factorial)

// ////FIND FACTORIAL USING RECURSION ///////////

function factorial(a) {
    if (a == 0) {
        return 1;
    }
    return a * factorial(a - 1);
}

console.log(factorial(a));

//////////////SORT AN ARRAY///////////////////

let arr = [23,55,34,4,22]

for(int=0; int<arr.length; int++){
    
    for(j=0; j<arr.length-int; j++){
      
        if(arr[j]>arr[j+1]){
           let abc = arr[j] 
            arr[j] = arr[j+1];
            arr[j+1] = abc
        }
    }
}
console.log(arr)
