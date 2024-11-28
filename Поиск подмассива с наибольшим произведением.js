const maxNum = (arr) => {
  const arrNums = arr.map((nums) => nums[0] * nums[1]);
  const maxNum = Math.max(...arrNums);

  return maxNum;
};

console.log(
  maxNum([
    [2, 3],
    [-2, 4],
  ])
);
console.log(
  maxNum([
    [1, 3],
    [2, 4],
  ])
);
console.log(
  maxNum([
    [0, 3],
    [2, 5],
  ])
);

// **Входные данные:** nums = [[2,3],[-2,4]]
// **Вывод:** 6
// **Объяснение:** [2,3] имеет наибольшее произведение 6.
