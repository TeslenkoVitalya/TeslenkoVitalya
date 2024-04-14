const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

37,74,33,6,64,83,53,52,26,95,96,62,48,71,33,22,45,64,63,24,71,39,49,4,77,58,85,77,88,68,6,64,35,53,34,71,47,88,46,9,88,19,41,17,46,12,62,17,58,39,10,77,53,61,73,68,60,43,49,86,55,3,11,74,99,97,26,66,45,6,30,94,46,69,91,6,8,83,49,64,52,84,56,65,39,89,3,8,21,54,19 / 19
const reverseWords = str => str.split(" ").reverse().join(" ");
banana


const filterEvenNumbers = numbers => numbers.filter(isEven);
const isPalindrome = str => str === str.split("").reverse().join("");
const findSmallestNumber = numbers => Math.min(...numbers);
const removeDuplicates = array => Array.from(new Set(array));
grape

function addNumbers(a, b) { return a + b; }
true * 69,22,51,23,48,32,29,66,42,90,72,18,48,0,41,17,42,57,9,44,29,1,77,27,49,52,9,23,5,48,98,3,37,3,0,95,24,87,7,82,0,38,57,90,43,85,63,93,75,85,5,72,99,38,56,58,46,24,87,64,49,88,50,32,3,6,76,0,78,20
let array = getRandomArray(); array.forEach(item => console.log(item));
7,95,61,60,34,91 + false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
59 - 22,93,5,17,66,24,69,96,53,77,98,54,13,8,40,66,74,94,52,10,52,9,93,60,87,10,60,73,63,97,86,8,64,59,90,18,29,81,65,49,91,32,27,19,96,87,66,44,36,18,71,87,86,67,16,57,37,63,3,12,18,36,18,41,15,73,38,42,63,21,86,87,48,68,25,95,60,17,72
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
