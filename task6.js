// Задачка Дана строка(возможно пустая), состоящая из буква A-Z: AAAABBBCCCCEEAA.. Нужно Написать функцию RLE,
//  которая на выходе даст строку вида: A4B3C4E2A2... Пояснение Если символ встречается один раз, он остается без изменений,
//  если более то остается одна буква и добавляется количество ей повторений

const countingLetters = (str) => {
  return str.split("").reduce(
    (obj, letter) => {
      if (obj.string[obj.string.length - 1] === letter) {
        obj.count++;
      } else if (obj.count > 1) {
        obj.string += obj.count;
        obj.count = 1;
        obj.string += letter;
      } else {
        obj.string += letter;
      }
      return obj;
    },
    {
      string: "",
      count: 1,
    }
  ).string;
};

console.log(countingLetters(""));
