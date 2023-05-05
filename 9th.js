// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Write a function that will find differences in hours between two dates
//------------------------------------------------------------------------->

function diff_hours(dt2, dt1) // to get diff between two dates in hrs
 {

  let diff =(dt2.getTime() - dt1.getTime()) / 1000; // 
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date("October 14,2022 10:2:00"); // 1st date entered 
dt2 = new Date("October 14,2022 5:0:00"); // 2nd date entered
console.log(`the time diff is ${diff_hours(dt1, dt2)} Hrs`);


