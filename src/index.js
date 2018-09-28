module.exports = function getZerosCount(number, base) {
  let countSystem = base, zerosCounter = 0, degreesCounter = 0, baseFactorial = 0;
  const primeNumbers = [], degrees = [], zeros = [];
  if(countSystem > 0 && countSystem != 1){
    for(let i = 2; i <= countSystem; i++){
      degreesCounter = 0;
      if(countSystem/i == 1){
        primeNumbers.push(countSystem);
        degrees.push(1);
      } else 
      while(countSystem % i == 0 && countSystem > 1){
        countSystem = countSystem / i;
        degreesCounter++;
      }
      if(degreesCounter >= 1){
        primeNumbers.push(i); //list of prime numbers
        degrees.push(degreesCounter); //degrees of prime numders
      }
    }
  }
  for (let z = 0, len = primeNumbers.length; z < len; z++){
    baseFactorial = primeNumbers[z];
    for (let i = baseFactorial; number/i > 1; i *= baseFactorial){
      zerosCounter += Math.floor(number/i); 
    }
    zeros.push(zerosCounter); //zeros found for every prime number
    zerosCounter = 0;
  }
  for(let i = 0, len = zeros.length; i < len; i++){
    zeros[i] = zeros[i]/degrees[i] >> 0;
  }
  zeros.sort(function(a, b){return a-b}); //choosing min value
  return zeros[0];
}