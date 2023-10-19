function captialize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

class calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    mulitply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}


function caesarCipher(string, shift) {
    let encryptedMsg = '';
    for (let i = 0; i < string.length; i += 1) {
        const letter = string.charCodeAt(i);
        if (letter > 96 && letter < 123) {
            if (letter + shift > 122 || letter + shift < 97) {
                encryptedMsg += String.fromCharCode((letter + shift) - 122 + 96)
            } else {
                encryptedMsg += String.fromCharCode(letter + shift)
            }
        }
        else if (letter > 64 && letter < 91) {
            if (letter + shift > 90 || letter + shift < 65) {
                encryptedMsg += String.fromCharCode((letter + shift) - 90 + 64)
            } else {
                encryptedMsg += String.fromCharCode(letter + shift)
            }
        }
        else {
            encryptedMsg += String.fromCharCode(letter)
        }
    }
    return encryptedMsg;
}

function analyzeArray(array) {
    return {
        average: Math.floor(array.reduce((prev, curr) => (prev + curr), 0) / array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        lenght: array.length
    }

}


module.exports={capitalize, reverseString, calculator, caesarCipher, analyzeArray};
