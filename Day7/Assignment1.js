

function generateRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
  

  function generateRandomNumberPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 5 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error('The generated number is not a multiple of 5'));
      }
    });
  }
  

  generateRandomNumberPromise()
    .then(randomNumber => {
      console.log('Generated random number:', randomNumber);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  
