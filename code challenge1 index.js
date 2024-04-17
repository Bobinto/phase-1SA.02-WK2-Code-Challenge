function swapCase(inputString) {

  const swappedChars = inputString.split('').map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
  const swappedString = swappedChars.join('');

  return swappedString;
}

const inputStr = 'HELLO WORLD';
const outputStr = swapCase(inputStr);
console.log(outputStr);
