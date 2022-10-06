//function for checking whether a no is prime or not
function CheckIfPrimeOrNot(n){
    if (n==1) {           //1 is neither prime nor composite
        return false;    
    } else {if (n==2) {    //2 is first prime number
        console.log(true);
    } else {
        for (i = 2; i < n; i++) {
            if (n%i==0) {          //n is a composite number
                console.log(false);
            }
            
        }
         console.log(true);
    }
    }
}
//calling the function
CheckIfPrimeOrNot(3);
CheckIfPrimeOrNot(10);
