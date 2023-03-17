//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]
let element =[3,7,34,90,12]
let lastElement = element.slice(-1)
console.log(element);
//Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
// console.log(myPets.toStrings())
myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString());
//Write a JS script to sort the following array items
// var arr3 Write a JS script to sort the following string"
// let word = "lufituaeb"= [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1]
arr3.sort(function(a,b){
    return(a,b)
})
console.log(arr3)
//Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",  // "orange", "mango", "mango";]
let arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"]
// let best = [];
// arr.forEach(function(arr)
    // if (!best.contains=(arr)){
        // best.push(arr);

    // });
    // console.log(best);


//Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];
let arr5 = ["the", "way", "x", 4, 23];
const include=arr5.includes(4);
console.log(include)
//Write a JS script to sort the following string
// let word = "lufituaeb"
let word = "lufituaebo"
console.log(word.split("").sort().join(""));