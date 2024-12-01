// //----------------------------------------------------

// // Написать собственный Promise.all()

function promiseAll(promises) {
  return new Promise((res, rej) => {
    const result = [];

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((promise) => {
          result.push(promise);
          if (promises.length === result.length) {
            res(result);
          }
        })
        .catch((err) => rej(err));
    }
  });
}

const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
const promiseB = Promise.resolve("a");
const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
const promiseD = new Promise((res, rej) =>
  setTimeout(() => rej("error"), 1000)
);

Promise.all([promiseA, promiseB, promiseC]).then(console.log);
promiseAll([promiseA, promiseB, promiseC]).then(console.log);
Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
promiseAll([promiseA, promiseB, promiseD]).catch(console.error);

//----------------------------------------------------

//Написать функцию list, которая принимает массив объектов с полем ‘name’
//и возвращает массив строк с содержанием поля name каждого из объектов в изначальном массиве.

const list = (names) => {
  return names.map((item) => item.name);
};

console.log(list([{ name: "Artem" }, { name: "Sasha" }]));

// //----------------------------------------------------

// //Написать функцию duplicate которая вернет список повторяющихся email'ов

const duplicate = (emails) => {
  const dublicateEmails = [];

  emails.reduce((prev, next) => {
    if (prev.includes(next) && !dublicateEmails.includes(next)) {
      dublicateEmails.push(next);
    }
    return [...prev, next];
  }, []);

  return dublicateEmails;
};

const emails = [
  "lyhxr@example.com",
  "lyhxr@example.com",
  "lyhxr@example.com",
  "masha@example.com",
  "fedya@example.com",
  "katya@example.com",
  "fedya@example.com",
  "katya@example.com",
  "lyhxr@example.com",
];

const val = duplicate(emails);
console.log(val);
// [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com']

// //----------------------------------------------------

// /*
// необходимо реализовать функцию сортировочного центра,
// которая на вход принимает какой-то вес посылок и отправляет их самым оптимальным транспортом,
// под оптимальностью мы понимаем, что транспорт едет полностью загруженный, минимальное количество раз.
// У каждого транспорта есть грузоподъемность, которая записана в переменной transportsDefault.
// */

const transportsDefault = [
  5000, // Поезд
  2000, // Грузовик
  1000, // Фургон
  100, // Легковой автомобиль
  10, // Почтальон
];

const transSort = (weight, transports = transportsDefault) => {
  const result = {};

  transports.reduce((prev, next) => {
    const count = (prev / next).toFixed();
    const remains = prev % next;
    result[next] = count;
    return remains;
  }, weight);

  return result;
};

// Примеры вызовов
console.log(transSort(10410));
// { 5000: 2, 2000: 0, 1000: 0, 100: 4, 10: 1 }
console.log(transSort(2100));
// { 5000: 0, 2000: 1, 1000: 0, 100: 1, 10: 0 }

// //----------------------------------------------------

// Найти все элементы массива, встречающиеся более ⌊n/3⌋ раз
// Дан целочисленный массив размера n. Найти все элементы, которые встречаются более ⌊n/3⌋ раз.

// Пример 1:

// **Входные данные:** nums = [3,2,3]
// **Выходные данные:** [3]
// Пример 2:

// **Входные данные:** nums = [1]
// **Output:** [1]
// Пример 3:

// **Входные данные:** nums = [1,2]
// **Выходные данные:** [1,2]

const fun = (nums) => {
  const obj = {};
  const result = [];
  const length = nums.length / 3;
  for (let num of nums) {
    if (obj.hasOwnProperty(num)) {
      obj[num] = ++obj[num];
    } else {
      obj[num] = 1;
    }
  }
  for (let [key, value] of Object.entries(obj)) {
    if (value > length) result.push(key);
  }

  return result;
};

console.log(fun([3, 2, 3]));
console.log(fun([1]));
console.log(fun([1, 2]));
