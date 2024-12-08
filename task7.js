// https://i.imgur.com/HWve1CG.png
// Что выводится в консоль?
// [ { code: 0 }, { code: 3 }, { code: 4 } ]

// Зачем здесь нужен break?
// break для остановки внутреннего цикла https://i.imgur.com/HWve1CG.png

//  Как можно улучшить код до O(n)?

const filterArrayByArray = (first, second) => {
  const newArray = [];

  for (let i = 0; i < second.length; i++) {
    const elem = first.find((item) => item.code === second[i]);
    if (elem) newArray.push(elem);
  }

  return newArray;
};

const a = [{ code: 0 }, { code: 1 }, { code: 2 }, { code: 3 }, { code: 4 }];
const b = [0, 3, 4];

console.log(filterArrayByArray(a, b));

// https://static.itconsult-web.ru/file/1160/1710326906440.png

const fn = (data) => {
  return data
    .filter((d) => !d.expired)
    .sort((a, b) => a.order - b.order)
    .reduce((str, strNext) => {
      return str + strNext.value;
    }, "")
    .split("")
    .reverse()
    .reduce((arr, letter) => {
      if (!arr.includes(letter)) arr.push(letter);
      return arr;
    }, [])
    .join("");
};

const input = [
  { expired: false, order: 4, value: "abcd" },
  { expired: true, order: 2, value: "qwer" },
  { expired: false, order: 1, value: "xyz1" },
  { expired: false, order: 3, value: "abx2" },
];

console.log(fn(input));
