// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// Write a function to alphabetize string

//------------------------------------------------------------------------->

let sortAlphabets = function(text) {
    return text.split('').sort().join(''); // entered string is spilt sorted in order and rejoined.
};
console.log(sortAlphabets('acb'));

/// .sort() fucntion used

/// 2nd method to use it

// let MAX_CHAR = 26;
 
//     // function to print string in sorted order
//     function sortString(str)
//     {
     
//         // Hash array to keep count of characters.
//         // Initially count of all characters is
//         // initialized to zero.
//         let charCount = new Array(MAX_CHAR);
//         charCount.fill(0);
 
//         // Traverse string and increment
//         // count of characters
//         for (let i = 0; i < str.length; i++)
 
//             // 'a'-'a' will be 0, 'b'-'a' will be 1,
//             // so for location of character in count
//             // array we will do str[i]-'a'.
//             charCount[str[i].charCodeAt()-'a'.charCodeAt()]++;   
 
//         // Traverse the hash array and print
//         // characters
//         for (let i=0;i<MAX_CHAR;i++)
//             for (let j=0;j<charCount[i];j++)
//                  document.write(String.fromCharCode('a'.charCodeAt()+i) );
//     }
 
//     let s = "geeksforgeeks";   
//     sortString(s);   