// USD => CNY
// Create a function that converts US dollars(USD) to Chinese Yuan(CNY).The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples(Input -> Output)
// 15 -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// The conversion rate you should use is 6.75 CNY for every 1 USD.All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

// Создайте функцию, которая конвертирует доллары США(USD) в китайские юани(CNY).Ввод представляет собой сумму в долларах США в виде целого числа, а вывод должен представлять собой строку, в которой указывается сумма в юанях, за которой следует «китайский юань».

// Примеры(ввод -> вывод)
// 15 -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// Коэффициент конверсии, который вы должны использовать, составляет 6, 75 китайских юаней за каждый 1 доллар США.Все числа должны быть представлены в виде строки с двумя десятичными знаками. (например, "21.00", НЕ "21.0" или "21")

const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
console.log(usdcny(948));