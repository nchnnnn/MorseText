var morseArea = $("#morse");
var textArea = $("#text");

const morse = {
    "A": "·-",
    "B": "-···",
    "C": "-·-·",
    "D": "-··",
    "E": "·",
    "F": "··-·",
    "G": "--·",
    "H": "····",
    "I": "··",
    "J": "·---",
    "K": "-·-",
    "L": "·-··",
    "M": "--",
    "N": "-·",
    "O": "---",
    "P": "·--·",
    "Q": "--·-",
    "R": "·-·",
    "S": "···",
    "T": "-",
    "U": "··-",
    "V": "···-",
    "W": "·--",
    "X": "-··-",
    "Y": "-·--",
    "Z": "--··",
    ".": "·-·-·-",
    ",": "--··--",
    "'": "·----·",
    "!": "-·-·--",
    " ": "   "
};

const text = Object.fromEntries(
    Object.entries(morse).map(([key, value]) => [value, key])
  );

function $(s) {
    return document.querySelector(s);
}

function TxtToMorse(txt) {
    if (textArea.value == ""){
        morseArea.value = "";
    };

    const texts = textArea.value.toUpperCase();
    const morseCode = texts.split("").map(char => morse[char] || " ");
    const formattedMorse = morseCode.join(" "); // Add spaces for readability
    morseArea.value = formattedMorse;
}

function MorseToTxt(morseArea) {

    const morseCode = morseArea.value.trim().toUpperCase().replace("-", "-").replace(".", "·"); 
    const words = morseCode.split("   "); // Split into words based on triple spaces
    const output = words.map(word => word.split(" ").map(char => text[char] || "").join("")).join(" ");
    textArea.value = output
  }