// Event Listeners (escuchadores de eventos)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const word = formData.get("word");
    if (word.length > 0) {
      let iterations = Math.trunc(word.length / 2);
      let i = 0;
      let palindromeCheck = true;

      while (i < iterations && palindromeCheck) {
        let wordLowerCase = word.toLowerCase();
        wordLowerCase.charAt(i) ===
        wordLowerCase.charAt(wordLowerCase.length - 1 - i)
          ? i++
          : palindromeCheck = false;
      }

      palindromeCheck ? alert("It's a palindrome word") : alert("It's NOT a palindrome word");
    } else {
      alert("You must enter a word");
    }
  });
});
