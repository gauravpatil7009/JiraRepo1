// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
//Create a function for reversing a string
//------------------------------------------------------------------------->
function reverseString(str) {
    let splitString = str.split(""); //string spilt
    
 
    let reverseArray = splitString.reverse();   //  reverse the string
 
    let joinArray = reverseArray.join("");  // rejoin the string
    
    
    return joinArray; 
}
 
console.log(reverseString("varuag si eman ym"));

