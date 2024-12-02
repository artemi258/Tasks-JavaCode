// Канонический путь должен иметь следующий формат:

// Путь начинается с одного слеша '/'.
// Любые два каталога разделяются одним слешем '/'.
// Путь не заканчивается на слеш '/.'.
// Путь содержит только каталоги пути от корневого каталога до целевого файла или каталога (т.е. нет точки '.' или двойной точки '..')
// Вернуть упрощенный канонический путь.

// Пример 1:

// **Ввод:** path = "/home/"
// **Вывод:** "/home"
// **Пояснение:** Обратите внимание, что после последнего имени каталога не следует слеш.
// Пример 2:

// **Ввод:** path = "/../"
// **Вывод:** "/"
// **Пояснение:** Переход на один уровень вверх от корневого каталога - это операция бездействия, так как корневой уровень - это самый высокий уровень, на который можно перейти.
// Пример 3:

// **Ввод:** path = "/home//foo/"
// **Вывод:** "/home/foo"
// **Пояснение:** В каноническом пути множественные последовательные слеши заменяются одним.

const absolutePath = (path) => {
  return path.replace(/(\/\/)|(\.+)|(\/$)/gi, (match, p1, p2, p3) => {
    if (p1) return "/";
    if (p3) return "";
    if (p2 && match.length > 2) {
      return p2;
    } else {
      return "";
    }
  });
};

console.log(absolutePath("/home/"));
console.log(absolutePath("/../"));
console.log(absolutePath("/home//foo/"));