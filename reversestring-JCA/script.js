const MIN_TEXT_LENGTH = 3;

const textInput = document.getElementById("textInput");
const result = document.getElementById("result");

function reverseString(value) {
    return value.split("").reverse().join("");
}

function hasEnoughText(value) {
    return value.trim().length > MIN_TEXT_LENGTH;
}

textInput.addEventListener("input", function () {
    const text = textInput.value;

    if (hasEnoughText(text)) {
        result.textContent = reverseString(text);
    } else {
        result.textContent = "";
    }
});