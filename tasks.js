//Задача - палиндром

const palindrome = (str) => {
  if (str.length < 1 || str.length > 2 ** 105) return false;
  const newStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  const reverseStr = newStr.split("").reverse().join("");
  return newStr === reverseStr;
};

console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome("race a car"));
console.log(palindrome(" "));

//Задача - zip it

const countSymbols = (str, st) => {
  console.log(st);
  return str.split("").reduce((a, b) => {
    if (!a) return `${b}1`;
    if (a[a.length - 2] === b) {
      return `${a.slice(0, a.length - 1)}${++a[a.length - 1]}`;
    } else {
      return `${a}${b}1`;
    }
  }, "");
};
console.log(countSymbols("AAAABBCCCDDD"));
// => ‘A4B2C3D3’

//Задача - сортировка строк

const sortByLength = (arrStr) => {
  return arrStr.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["apple", "banana", "orange", "kiwi", "grape"]));
// Output: ["kiwi", "grape", "apple", "orange", "banana"]

console.log(sortByLength(["a", "bc", "def", "ghij", "klmno"]));
// Output: ["a", "bc", "def", "ghij", "klmno"]

console.log(sortByLength([]));
// Output: []

console.log(sortByLength(["xyz", "pq", "rs", "tuvw"]));
// Output: ["pq", "rs", "xyz", "tuvw"]
