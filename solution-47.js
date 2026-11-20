let str = process.argv[2];
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Reversed:", str.split("").reverse().join(""));