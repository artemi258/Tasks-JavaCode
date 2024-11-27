const staples = (s) => {
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const strArr = s.split("");

  while (strArr.length) {
    const startStapl = strArr[0];
    if (!obj[startStapl]) return false;
    const endIndex = strArr.indexOf(obj[startStapl]);
    if (endIndex > 0) {
      strArr.splice(endIndex, 1);
      strArr.splice(0, 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(staples("()"));
console.log(staples("()[]{}"));
console.log(staples("(]"));
console.log(staples("()[{]{}"));

// **Вход:** s = "()"
// **Выход:** true
// Пример 2:

// **Вход:** s = "()[]{}"
// **Выход:** true
// Пример 3:

// **Вход:** s = "(]"
// **Выход:** false
