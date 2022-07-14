// String Templates - Bug Fixing #5

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// О, нет! Тимми не очень внимательно следовал инструкциям и забыл, как использовать новую функцию шаблона строки.Помогите Тимми с его шаблоном строки, чтобы он работал так, как он ожидает!


const buildString = (...template) => `I like ${template.join(', ')}!`;
const buildString = (t, r, c) => `I like ${t}, ${r}, ${c}!`;
console.log(buildString('Cheese', 'Milk', 'Chocolate'));