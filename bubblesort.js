// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Write a function to apply bubble sort algorithm


//------------------------------------------------------------------------->

let a = [222,145,20,9503,900];

for(let i = 0; i < a.length; i++) { 
    for(let j=0; j < a.length; j++) { 
        // values in i and j compared
    if(a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;        
        }
    }
}

console.log("Array:: ", a);