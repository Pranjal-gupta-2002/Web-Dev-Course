// map

const input = [1, 2, 3, 4, 5];

const newArray = input.map((value) => {
  return value * 2;
});

console.log(input);
console.log(newArray);


// filter

const evenNumbers = input.filter((value) => {
  return value % 2 === 0;
});
console.log(evenNumbers);