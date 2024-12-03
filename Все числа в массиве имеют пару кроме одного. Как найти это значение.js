// // Все числа в массиве имеют пару, кроме одного. Как найти это значение?

const notDublicate = (arr) => {
  const copyArr = arr.slice();

  while (copyArr.length > 1) {
    const index = copyArr.indexOf(copyArr[0], 1);
    copyArr.splice(index, 1);
    copyArr.splice(0, 1);
  }

  return copyArr;
};

console.log(notDublicate([23, 12, 23, 5, 34, 5, 78, 3, 12, 34, 78]));
