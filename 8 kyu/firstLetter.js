let names = ["marge", "homer", "bart", "lisa", "maggie"];
let newNames = [];

for (let i = 0; i < names.length; i++) {
 let name = names[i];
  let firstLetter = name.charAt(0).toUpperCase();
  console.log(firstLetter);
 newNames.push(firstLetter + name.slice(1));
}
console.log(newNames);