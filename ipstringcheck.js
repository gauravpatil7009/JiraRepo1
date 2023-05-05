// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Write a function to check if given string is IP Address


//------------------------------------------------------------------------->
function string (){

const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

const str = "192.168.5.68"; // normal ip format
console.log(regexExp.test(str)); // if ip format changed output will be false and if matched then true
}
string();

