//function for counting the no of occurences of 
//a letter in a given string

function CountLettersInAString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count ++;
        }
    }
    return count;
}

console.log(CountLettersInAString('aabababbaabbaa','a'));
console.log(CountLettersInAString('aabababbaabbaa','b'));
