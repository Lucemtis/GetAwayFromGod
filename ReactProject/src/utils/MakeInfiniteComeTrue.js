import data from '../data/words.json';

function makeInfiniteComeTrue(ref, Nref) {

    if(!ref.current.innerHTML){

    ref.current.innerHTML = "あなたはまだマトリックスの中にいる";

    let finalWord = "";

    function randomNumberUpToInfinity() {
        const randomNumber = Math.random() * 1 / 1.618 ; // Génère un nombre entre 0 (inclus) et 1 (exclus)

        const min = 108;
        const max = Number.MAX_SAFE_INTEGER;

        const infinity = Math.floor(randomNumber * (max - min + 1)) + max;

        return Math.floor(randomNumber * infinity);
    }


    function getRandomNumberWithInterval() {
        const randomNum = randomNumberUpToInfinity();

        Nref.current.innerHTML = randomNum;

        let timeInterval = 50;
        
        if (randomNum < 0 || randomNum >= data.length) {
          // Si le nombre est en dehors de la plage souhaitée, rappeler la fonction avec un délai
          setTimeout(getRandomNumberWithInterval, timeInterval); // 1000 ms = 1 seconde (ajustez le délai si nécessaire)
        } else {
          // Si le nombre est dans la plage souhaitée, retourner le résultat
          
          finalWord = data[randomNum];

          ref.current.innerHTML = finalWord;
          
        }
      }

    return getRandomNumberWithInterval();

    }

    else {
    const textload = ref.current;
    const originalText = textload.innerHTML;
    let decryptInterval;

    function matrixing() {
      if (decryptInterval) {
        clearInterval(decryptInterval);
      }

      const decryptedText = textload.innerHTML;
      textload.innerHTML = '_'; // Replace the text with a single underscore at the beginning

      let decryptedIndex = 0;
      let loopCounter = 0; // Add a counter to track the number of loops performed
      decryptInterval = setInterval(() => {
        if (loopCounter < 2) {
          setTimeout(() => {
            const encryptedChar = getRandomChar(); // Generate a random encrypted character
            textload.innerHTML = textload.innerHTML.slice(0, -1) + encryptedChar; // Replace the last displayed character with the encrypted character
          }, 20);
          loopCounter++;
        } else if (decryptedIndex < decryptedText.length) {
          textload.innerHTML = textload.innerHTML.slice(0, -1);
          const decryptedChar = decryptedText[decryptedIndex];
          textload.innerHTML += decryptedChar;
          textload.innerHTML += '&#9608;'; // Use HTML entity for the solid block character (█)
          decryptedIndex++;
          loopCounter = 0; // Reset the loop counter
        } else {
          textload.innerHTML = textload.innerHTML.slice(0, -1);
          clearInterval(decryptInterval);
          textload.innerHTML = originalText;
        }
      }, 30);
    }

    matrixing(); // Start the effect when the page is loaded

    function getRandomChar() {
      const chars = 'Σ_—eAf4█7!@#$:~';
      const randomIndex = Math.floor(Math.random() * chars.length);
      return chars[randomIndex];
    }
  }
}

export default makeInfiniteComeTrue;