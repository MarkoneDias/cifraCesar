function caesarCipher(str, key) {
  const charsArray = str.split("");
  const normalizedKey = key % 26;

  const codesArray = charsArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (currentCode - normalizedKey < 65 && currentCode >= 65 && currentCode <= 90) {
      return currentCode + 26;
    }

    if (currentCode - normalizedKey < 97 && currentCode >= 97 && currentCode <= 122) {
      return currentCode + 26;
    }

    return currentCode;
  });

  return codesArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("")
    .replace(/\W/g, " ");
}

function caesarCipherCrip(str, key) {
  const charsArray = str.split("");
  const normalizedKey = 26 - (key % 26);

  const codesArray = charsArray.map((char) => {
    const currentCode = char.charCodeAt(0);

    if (currentCode - normalizedKey < 65 && currentCode >= 65 && currentCode <= 90) {
      return currentCode + 26;
    }

    if (currentCode - normalizedKey < 97 && currentCode >= 97 && currentCode <= 122) {
      return currentCode + 26;
    }

    return currentCode;
  });

  return codesArray
    .map((code) => String.fromCharCode(code - normalizedKey))
    .join("")
    .replace(/\W/g, " ");
}

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const textArea = document.getElementById("textArea");
const inputKey = document.getElementById("inputKey");
const resultText = document.getElementById("resultText");
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  textArea.value = "";
  resultText.value = "";
});

encryptBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const code = caesarCipherCrip(textArea.value, inputKey.value);
  resultText.value = code;
});

decryptBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const code = caesarCipher(textArea.value, inputKey.value);
  resultText.value = code;
});
