function LargestElement(arr, n)
{
    arr.sort();                 //sort the array to get the values in descending or ascending order
    return arr[n-1];
}
 
    let arr = [10, 324, 45, 90, 9808];
    let n = arr.length;
    console.log(LargestElement(arr, n));