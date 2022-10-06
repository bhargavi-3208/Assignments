
// function to reverse a string 
function reverseString(str) {
    revstring = ' ';
    for (let i = str.length - 1; i >= 0; i--) { 
        revstring = revstring + str[i];
    }
  
    return revstring; 
}
 
console.log(reverseString('hello'));