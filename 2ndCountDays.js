//
//------------------------------------------------------------------------
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// 2. Write a function to calculate number of days for Diwali
//------------------------------------------------------------------------->
const Diwali = '24 October 2022'; // date is set

function countdown(){
const DiwaliDate = new Date(Diwali);
const currentDate = new Date();

const totalSeconds = (DiwaliDate-currentDate) / 1000; //current date subtracted from entered date.

const days= Math.floor(totalSeconds/3600/24);


 console.log(days);
}

countdown();
