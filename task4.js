//Есть функция, которая принимает числа от 1 до n. Внутри функции находится и возвращается факториал n!.
//Как оптимизировать эту функцию?

const cache = {};

const fact = (n) => {
  if (cache[n]) return cache[n];
  const prevSum = Object.keys(cache)
    .filter((num) => num < n)
    .pop();
  let sum = cache[prevSum] ?? 1;
  for (let i = prevSum ? +prevSum + 1 : 2; i < n + 1; i++) {
    sum *= i;
  }
  cache[n] = sum;
  return sum;
};
console.log(fact(4));
console.log(fact(5));
console.log(fact(10));
console.log(fact(7));
console.log(fact(7));
console.log(cache);

// //Все числа в массиве имеют пару, кроме одного. Как найти это значение?

// //Дан массив чисел. Известно, что все числа разные, кроме двух. Как найти дублированное значение?

const searchDublicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const index = nums.indexOf(nums[i], i + 1);
    if (index > 0) {
      return [i, index];
    }
  }
};

console.log(searchDublicate([1, 23, 4, 56, 89, 564, 45, 4]));
