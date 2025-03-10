const getLongestWord = (phrase: string): string => {
  if (phrase === "") {
    throw new Error("No se ha introducido ninguna palabra");
  }

  const words = phrase.split(" ");

  const longestWords = words.sort(
    (wordA, wordB) => wordA.length - wordB.length
  );

  const longestWord = longestWords.at(-1);

  return longestWord!;
};

const phrase1 = "Con lo tranquilo que estaba yo en mi casa";
const phrase2 = "Con lo tranquilo que estaba yo en mi casa, tranquila";
const phrase3 = "";

/*console.log(getLongestWord(phrase1)); //tranquilo)
console.log(getLongestWord(phrase2)); //tranquila
console.log(getLongestWord(phrase3)); // ERROR, no has introducido ninguna palabra*/

const isPalindrome = (phrase: string): boolean => {
  if (phrase === "") {
    return false;
  }

  const trimmedPhrase = phrase.split(" ").join("").toLowerCase();
  const reversedPhrase = trimmedPhrase
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  if (trimmedPhrase === reversedPhrase) {
    return true;
  }
  return false;
};

const phrase4 = "Anita lava la tina"; // true
const phrase5 = "Hola mundo"; // false
const phrase6 = ""; // Error: no has introducio ninguna frase

console.log(isPalindrome(phrase4));
console.log(isPalindrome(phrase5));
console.log(isPalindrome(phrase6));
