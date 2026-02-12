function sumOfTripleEvens(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i]%2==0){
            const tripleEvenNumber = array[i]*3;
            sum=sum + tripleEvenNumber;
        }
    }
    return sum;
    }
    console.log(sumOfTripleEvens([1,2,3,4,5]));


    /*
map is one such function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”.

Let’s say we had a function addOne, which takes in num as an argument and outputs that num increased by 1, and an array of numbers, [1, 2, 3, 4, 5]. Let’s say we’d like to increment all of these numbers by 1 using our addOne function.

Instead of making a for loop and iterating over the above array, we could use our map array method instead, which automatically iterates over an array for us. We don’t need to do any extra work aside from simply passing the function we want to use in:

function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
map returns a new array and does not change the original array.

// The original array has not been changed!
console.log(arr); // Outputs [1, 2, 3, 4, 5]
Using map in this way can be more elegant than writing a for loop and iterating over the array. But we can do even better. Since we’re not using addOne anywhere else and it’s a simple function, we can define it inline using an arrow function, right inside of map like so:

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
    */

    