//
//------------------------------------------------------------------------
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// 4. Create Native methods for following : 
//b. Define a function findInArray(array,element_to_find) on Array 
//object for searching in array using binary search
//------------------------------------------------------------------------->



function binarySearch(target) {
    let array = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];//array to be searched

    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) { //entered no check 
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        startIndex = middleIndex+1;       ///if not found
      }
      if(target < array[middleIndex]) {
      
        endIndex = middleIndex-1;
      }
     
    }
    
    console.log("Target value not found in array");
  }
console.log(binarySearch(19)); //enter the no to search as parameter
