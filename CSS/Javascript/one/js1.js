//function for finding the even nos between two given nos
function EvenNumbers(a,b){
   for (i = a; i <= b; i++) {
         if (i%2==0) {              //if the number is divisible by two
            console.log(i)          //then,it is called a even number.
         }
       
   }
}
//calling the function
EvenNumbers(1,10);