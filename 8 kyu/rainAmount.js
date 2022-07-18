// Fix your code before the garden dies!

// You have an award - winning garden and every day the plants need exactly 40mm of water.You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day.Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

// У вас есть отмеченный наградами сад, и каждый день растениям требуется ровно 40 мм воды.Вы создали отличный фрагмент JavaScript для расчета количества воды, которое потребуется вашим растениям, учитывая прогнозируемое на день количество дождевой воды.Ваш завистливый сосед взломал ваш компьютер и заполнил ваш код ошибками.

// Ваша задача — отлаживать код до того, как ваши растения умрут!

function rainAmount(mm) {
  if (mm >= 40) {
    return "Your plant has had more than enough water for today!"
  }
   else if  (mm < 40) {
  return  `You need to give your plant ${40 - mm}mm of water`; 
};
}