//
//------------------------------------------------------------------------
// Name : Gaurav.p					\
//  
//------------------------------------------------------------------------
// 4. Create Native methods for following : 
//c. Define a function getMonthName(date) on Date Object for getting
//textual representation of month
//------------------------------------------------------------------------->

function getMonthName(){ // to get current mnth

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const d = new Date();
    console.log("The current month is " + monthNames[d.getMonth()]);  /// display current month
    
    }
    
    getMonthName();
    