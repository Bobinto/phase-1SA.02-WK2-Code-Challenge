function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

// Test the function
console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'
