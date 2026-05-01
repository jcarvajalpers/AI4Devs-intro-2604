const text = prompt("Introduce una cadena de texto:");

function reverseString(value) {
    return value.split("").reverse().join("");
}

const reversedText = reverseString(text);

alert(reversedText);
console.log(reversedText);