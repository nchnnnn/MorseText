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
    "1": "·----",
    "2": "··---",
    "3": "···--",
    "4": "····-",
    "5": "·····",
    "6": "-····",
    "7": "--···",
    "8": "---··",
    "9": "----·",
    "0": "-----",
    ".": "·-·-·-",
    ",": "--··--",
    "'": "·----·",
    "!": "-·-·--",
    " ": " "
  };
  

const binary = {
    "A": "01000001",
    "B": "01000010",
    "C": "01000011",
    "D": "01000100",
    "E": "01000101",
    "F": "01000110",
    "G": "01000111",
    "H": "01001000",
    "I": "01001001",
    "J": "01001010",
    "K": "01001011",
    "L": "01001100",
    "M": "01001101",
    "N": "01001110",
    "O": "01001111",
    "P": "01010000",
    "Q": "01010001",
    "R": "01010010",
    "S": "01010011",
    "T": "01010100",
    "U": "01010101",
    "V": "01010110",
    "W": "01010111",
    "X": "01011000",
    "Y": "01011001",
    "Z": "01011010",
    "a": "01100001",
    "b": "01100010",
    "c": "01100011",
    "d": "01100100",
    "e": "01100101",
    "f": "01100110",
    "g": "01100111",
    "h": "01101000",
    "i": "01101001",
    "j": "01101010",
    "k": "01101011",
    "l": "01101100",
    "m": "01101101",
    "n": "01101110",
    "o": "01101111",
    "p": "01110000",
    "q": "01110001",
    "r": "01110010",
    "s": "01110011",
    "t": "01110100",
    "u": "01110101",
    "v": "01110110",
    "w": "01110111",
    "x": "01111000",
    "y": "01111001",
    "z": "01111010",
    "1": "00110001",
    "2": "00110010",
    "3": "00110011",
    "4": "00110100",
    "5": "00110101",
    "6": "00110110",
    "7": "00110111",
    "8": "00111000",
    "9": "00111001",
    "0": "00110000",
    ".": "00101110",
    ",": "00101100",
    "'": "00100111",
    "!": "00100001",
    " ": "00100000"
};

const baybayin = {
    "e": "i",
    "o": "u",
    "nga": "\u1705",
    "ngi": "\u1705\u1712",
    "ngu": "\u1705\u1713",
    "ng": "\u1705\u1714",
    "ka": "\u1703",
    "ga": "\u1704",
    "ta": "\u1706",
    "da": "\u1707",
    "na": "\u1708",
    "pa": "\u1709",
    "fa": "\u1709",
    "ba": "\u170A",
    "ma": "\u170B",
    "ya": "\u170C",
    "ra": "\u1707",
    "la": "\u170E",
    "wa": "\u170F",
    "sa": "\u1710",
    "ha": "\u1711",
    "ki": "\u1703\u1712",
    "gi": "\u1704\u1712",
    "ti": "\u1706\u1712",
    "di": "\u1707\u1712",
    "ni": "\u1708\u1712",
    "pi": "\u1709\u1712",
    "bi": "\u170A\u1712",
    "mi": "\u170B\u1712",
    "yi": "\u170C\u1712",
    "ri": "\u1707\u1712",
    "li": "\u170E\u1712",
    "wi": "\u170F\u1712",
    "si": "\u1710\u1712",
    "hi": "\u1711\u1712",
    "ku": "\u1703\u1713",
    "gu": "\u1704\u1713",
    "tu": "\u1706\u1713",
    "du": "\u1707\u1713",
    "nu": "\u1708\u1713",
    "pu": "\u1709\u1713",
    "bu": "\u170A\u1713",
    "mu": "\u170B\u1713",
    "yu": "\u170C\u1713",
    "ru": "\u1707\u1713",
    "lu": "\u170E\u1713",
    "wu": "\u170F\u1713",
    "su": "\u1710\u1713",
    "hu": "\u1711\u1713",
    "a": "\u1700",
    "i": "\u1701",
    "u": "\u1702",
    "k": "\u1703\u1714",
    "c": "\u1703\u1714",
    "q": "\u1703\u1714",
    "g": "\u1704\u1714",
    "t": "\u1706\u1714",
    "d": "\u1707\u1714",
    "n": "\u1708\u1714",
    "p": "\u1709\u1714",
    "f": "\u1709\u1714",
    "v": "\u170A\u1714",
    "b": "\u170A\u1714",
    "m": "\u170B\u1714",
    "y": "\u170C\u1714",
    "r": "\u1707\u1714",
    "l": "\u170E\u1714",
    "w": "\u170F\u1714",
    "s": "\u1710\u1714",
    "x": "\u1710\u1714",
    "z": "\u1710\u1714",
    "h": "\u1711\u1714",
    "j": "\u1711\u1714",
    " ":  "  "

};

const reverseBaybayin = {
    "\u1700": "a",
    "\u1701": "e",
    "\u1702": "o",
    "\u1708\u1705\u1714": "nang",
    "\u1708\u1712\u1705\u1714": "ning",
    "\u1708\u1712\u1705\u1714": "neng",
    "\u1708\u1713\u1705\u1714": "nong",
    "\u1708\u1713\u1705\u1714": "nung",
    "\u1705": "nga",
    "\u1705\u1712": "ngi",
    "\u1705\u1713": "ngu",
    "\u1705\u1714": "ng",
    "\u1703": "ka",
    "\u1704": "ga",
    "\u1706": "ta",
    "\u1707": "da",
    "\u1708": "na",
    "\u1709": "pa",
    "\u170A": "ba",
    "\u170B": "ma",
    "\u170C": "ya",
    "\u170E": "la",
    "\u170F": "wa",
    "\u1710": "sa",
    "\u1711": "ha",
    "\u1703\u1712": "ki",
    "\u1704\u1712": "gi",
    "\u1706\u1712": "ti",
    "\u1707\u1712": "di",
    "\u1712\u1707": "id",
    "\u1708\u1712": "ni",
    "\u1709\u1712": "pi",
    "\u170A\u1712": "bi",
    "\u170B\u1712": "mi",
    "\u170C\u1712": "yi",
    "\u170E\u1712": "li",
    "\u170F\u1712": "wi",
    "\u1710\u1712": "si",
    "\u1711\u1712": "hi",
    "\u1703\u1713": "ku",
    "\u1704\u1713": "gu",
    "\u1706\u1713": "tu",
    "\u1707\u1713": "du",
    "\u1708\u1713": "nu",
    "\u1709\u1713": "pu",
    "\u170A\u1713": "bu",
    "\u170B\u1713": "mu",
    "\u170C\u1713": "yu",
    "\u170E\u1713": "lu",
    "\u170F\u1713": "wu",
    "\u1710\u1713": "su",
    "\u1711\u1713": "hu",
    "\u1703\u1714": "k",
    "\u1704\u1714": "g",
    "\u1706\u1714": "t",
    "\u1707\u1714": "d",
    "\u1708\u1714": "n",
    "\u1709\u1714": "p",
    "\u170A\u1714": "b",
    "\u170B\u1714": "m",
    "\u170C\u1714": "y",
    "\u170E\u1714": "l",
    "\u170F\u1714": "w",
    "\u1710\u1714": "x",
    "\u1711\u1714": "h",
    "\u1710\u1714": "s",
    "\u1711\u1714": "j",
    
    " ": " "
};




var codeArea = $("#morse");
var textArea = $("#text");
var choices  = $("#choices")
var hidden =  $("#hidden");
var m = $(".m");

function pick() {
    function setLanguage(language) {
        m.innerHTML = language;
        codeArea.value = "";
        textArea.value = "";
        hidden.style.visibility = 'visible';
    
        if (language === "Baybayin") {
            codeArea.style.fontFamily = 'baybayin';
        } else {
            codeArea.style.fontFamily = ''; // Reset font family for other languages
            hidden.style.visibility = 'hidden';
        }
    }
    
    // Assuming this code is within an event handler or function
    if (choices.value === "morse") {
        setLanguage("Morse");
    } else if (choices.value === "binary") {
        setLanguage("Binary");
    } else {
        setLanguage("Baybayin");
    }

};


function Translate() {
    
    if(choices.value === "morse"){
        const morseCode = textArea.value.toUpperCase().split("").map(char => morse[char] || "").join(" ");
        codeArea.value = morseCode;
    }else if (choices.value === "binary"){
        const binaryCode = textArea.value.split("").map(char => binary[char] || "").join(" ");
        codeArea.value = binaryCode;
    }else {
        let rawText = textArea.value.toLowerCase();
        for (const pattern in baybayin) {
            const replacement = baybayin[pattern];
            const regex = new RegExp(pattern, "g");
            rawText = rawText.replace(regex, replacement);
        }
        
        codeArea.value = rawText;
        
    }

};


function reverseTranslate() {
    if(choices.value === "morse"){
        const text = Object.fromEntries(Object.entries(morse).map(([key, value]) => [value, key]));
        const textCode = codeArea.value.trim().toUpperCase().replace(/[-]/g, "-").replace(/[.]/g, "·").split("  ").map(word => word.split(" ").map(char => text[char] || "").join("")).join(" ");
        textArea.value = textCode
    }else if(choices.value === "binary") {
        const text = Object.fromEntries(Object.entries(binary).map(([key, value]) => [value, key]));
        const textCode = codeArea.value.trim().split("  ").map(word => word.split(" ").map(char => text[char] || "").join("")).join(" ");
        textArea.value = textCode
    }else{
        let baybayinCode = codeArea.value;
        let baybayinText = "";
        for (let charIndex = 0; charIndex < baybayinCode.length; charIndex++) {
            let char = baybayinCode[charIndex];
            let nextChar = baybayinCode[charIndex + 1];
        
            if (nextChar && reverseBaybayin[char + nextChar]) {
            // Check for digraph:
                baybayinText += reverseBaybayin[char + nextChar];
                charIndex++; // Skip next character
            } else {
            // Use single character mapping:
                baybayinText += reverseBaybayin[char] || char;
            }

        }
        textArea.value = baybayinText;
    }
        
    

};    



function $(s) {
    return document.querySelector(s);
}