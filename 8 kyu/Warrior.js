// ВВ что ? !?

//   Кажется, ни один из этих кодировщиков не помнит его имени!

// Не могли бы вы помочь ?
// albert.toString()-- > "Hi! my name's Boris" < --ohoh..

let albert = new Warrior("Al")
let boris = new Warrior("Boris")


function Warrior(n) {
  let name = n;
  this.name = function (n) {
    if (n) name = n;
    return name;
  }
}

Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

   

console.log(Warrior("Al"));
console.log(Warrior("Boris"));