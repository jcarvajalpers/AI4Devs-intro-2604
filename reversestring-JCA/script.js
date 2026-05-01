const MIN_TEXT_LENGTH = 3;

const textInput = document.getElementById("textInput");
const result = document.getElementById("result");

if (!textInput || !result) {
    console.error("No se encontraron los elementos requeridos: textInput y/o result.");
} else {
    function reverseString(value) {
        return value.split("").reverse().join("");
    }

    function hasEnoughText(value) {
        return value.length > MIN_TEXT_LENGTH;
    }

    textInput.addEventListener("input", function () {
        const trimmed = textInput.value.trim();

        if (hasEnoughText(trimmed)) {
            result.textContent = reverseString(trimmed);
        } else {
            result.textContent = "";
        }
    });
}