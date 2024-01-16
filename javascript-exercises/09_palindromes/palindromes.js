const palindromes = function (string) {
  let newString = string
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase()
    .replaceAll(" ", "");
  let reversedString = newString.split("").reverse().join("");
  return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
