let array = [1, 3, 6, 8, 9, 10, 4]; // Declare array
console.log("Before Sorting Array is :"+array);
let sortedArray = array.sort(function (a, b) { // Sorting the array by Ascending Order
    return a - b
});
console.log("After Sorting Array is : "+sortedArray);
console.log("Second Largest element is :"+array[array.length-2]);
console.log("Second smallest element is :"+array[1]);