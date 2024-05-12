const numbers = [];

export default function randomNumber(max) {
   const number = Math.floor((Math.random()   * max) + 1);
   
    if (numbers.includes(number) && (numbers.length < max))  return randomNumber(max)
    numbers.push(number)
    return number;
}