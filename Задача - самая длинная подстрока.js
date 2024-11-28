const lastWordlength = (s) => {
  return s.trim().match(/\w+$/)[0].length;
};

console.log(lastWordlength("Hello World"));
console.log(lastWordlength("   fly me   to   the moon  "));
console.log(lastWordlength("luffy is still joyboy"));

// **Ввод:** s = "Hello World"
// **Вывод:** 5
// **Пояснение:** Последнее слово - "World" с длиной 5.
// Пример 2:

// **Ввод:** s = "   fly me   to   the moon  "
// **Вывод:** 4
// **Пояснение:** Последнее слово - "moon" с длиной 4.
// Пример 3:

// **Ввод:** s = "luffy is still joyboy"
// **Вывод:** 6
// **Пояснение:** Последнее слово - "joyboy" с длиной 6.
