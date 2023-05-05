function amountTocoins(amount, coins) 
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Create a function to convert amount to coins
//a. Sample function : amountToCoins(amount, [coins])
//b. Input : amountToCoins(51,[20,10,,5,2,1])
//c. O/P : 20,20,5,1

//------------------------------------------------------------------------->

{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0])  
       {
        left = (amount - coins[0]); //entered amt - coins
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(51, [20, 10, 5, 2,1])); 