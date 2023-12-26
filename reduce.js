const arr = [
  { firstName: "JD", lastName: "Ch", Age: 45 },
  { firstName: "Mr", lastName: "Sha", Age: 32 },
  { firstName: "My", lastName: "Sha", Age: 32 },
];

const output = arr.reduce(function (acc, curr) {
  if (curr.Age < 45) {
    acc[curr.firstName] = { firstName: curr.firstName };
  }

  return acc;
}, {});
console.log(output);
