// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Write a function for Fizz Buzz
//a. Write a JavaScript program which iterates the integers from 1 to 
//100. But for multiples of three print "Fizz" instead of the number 
//and for the multiples of five print "Buzz". For numbers which are 
//multiples of both three and five print "FizzBuzz"

//------------------------------------------------------------------------->

function display(){;
    let i;
 for(i =1; i<=15; i++){  // nos less than= 15 iterated 
    if(i%3==0|| i%5==0){   
         if(i%3==0 && i%5==0){ //nos divisile by 3 and 5 
            console.log(`number ${i} is  FizzBuzz`);
         }
         else if(i%3==0){ // nos divisible by only 3
            console.log(`number ${i} is  Fizz`);
         }
         else if(i%5==0){  // nos divisible by only 5
        
           console.log(`number ${i} Buzz`);
             
         }
    
       
     }
     else{
        console.log(`number ${i} is neither divisible of 3 nor 5`);
       }
}
}
display();