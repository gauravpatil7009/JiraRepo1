// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
//  Write a function to find value of bn, where n is exponent and b is base.
//Accept b and n as parameters and display result
//------------------------------------------------------------------------->

// //method 1 to calculate b**n
// function expo(b,n){
   
//    let result=b**n;

//   return result;
    
// }
//  console.log(expo(2,3));
//  console.log(expo(4,3));



 //method 2 to calculate b**n

 function cal(b,n){
    let result=1;
    for(let i=1;i<=n;i++ ){

       
        result*=b; //  result is multipled by itself
    }

    console.log(` ${b} to the power ${n} is ${result}`);
 }

 cal(2,3);
 cal(4,3);