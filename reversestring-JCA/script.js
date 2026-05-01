const MIN_TEXT_LENGTH = 3;

const textInput = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseButton");
const result = document.getElementById("result");

function reverseString(value) {
    return value.split("").reverse().join("");
}

function hasEnoughText(value) {
    return value.trim().length > MIN_TEXT_LENGTH;
}

textInput.addEventListener("input", function () {
    if (hasEnoughText(textInput.value)) {
        reverseButton.style.display = "inline-block";
    } else {
        reverseButton.style.display = "none";
        result.textContent = "";
    }
});

reverseButton.addEventListener("click", function () {
    result.textContent = reverseString(textInput.value);
});