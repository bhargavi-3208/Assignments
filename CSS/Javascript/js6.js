let arr = [-100,23,3035,76,86,69,99,102];

//get all the elements between 40 and 80

let result = arr.filter(function (element) {
    return element > 40 && element< 80;
})

console.log(result)