//
//------------------------------------------------------------------------
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// 4. Create Native methods for following : 
//a. Define removeAt(array,element_to_remove) function on Array 
//Object that will remove specified element from array
//------------------------------------------------------------------------->

function removeAt(){
    const array=[1,2,3,67,6,5];
    let spliced = array.splice(2,2); // first parameter is index of the array and the second is the delete count//
    console.log(`the spliced array elements is ${spliced}`);
    console.log(`the remaining array is ${array}`);
}

removeAt();