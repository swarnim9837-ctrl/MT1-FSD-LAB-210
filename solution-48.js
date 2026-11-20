let arr = [50, 20, 40, 10, 30];
console.log("Original Array:", arr);
arr.push(60);
console.log("After Insertion:", arr);
arr.splice(2, 1);
console.log("After Deletion:", arr);
let num = 40;
let index = arr.indexOf(num);

if (index !== -1)
    console.log(num + " found at index:", index);
else
    console.log(num + " not found");

arr.sort((a, b) => a - b);
console.log("Sorted Array:", arr);