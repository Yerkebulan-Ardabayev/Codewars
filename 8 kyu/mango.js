// Price of Mangoes

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Есть предложение «3 по цене 2» (или «2 + 1» , если хотите) на манго.Для данного количества и цены (за манго) рассчитайте общую стоимость манго.

//   Примеры
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3)); 