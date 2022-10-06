//function for finding factors of a number
function FactorOfANum(a){
    for (i = 1; i <= a; i++) {
        if (a%i==0) {             //when a number is divided with a number
                                  //if the remainder is zero,then it is a factor
            console.log(i)
        }
        
    }
}
//calling the function
FactorOfANum(12)