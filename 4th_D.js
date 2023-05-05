
//------------------------------------------------------------------------
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// 4. Create Native methods for following : 
//Define a function repeat(string,numberOfRepeats) on String 
//Object to repeat a string a specified times
//------------------------------------------------------------------------->
function repeatStringNumTimes(string, times) { // to repeat enter input 
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  console.log(repeatStringNumTimes("abc ", 3)); // abc is to be printed 3 times 
