// Pillars

// There are pillars near the road.The distance between the pillars is the same and the width of the pillars is the same.Your function accepts three arguments:

// number of pillars(≥ 1);
// distance between pillars(10 - 30 meters);
// width of the pillar(10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters(without the width of the first and last pillar).

// Возле дороги стоят столбы.Расстояние между столбами одинаковое и ширина столбов одинаковая.Ваша функция принимает три аргумента:

// количество столбов(≥ 1);
// расстояние между столбами(10 – 30 метров);
// ширина столба(10 – 50 сантиметров).
// Рассчитайте расстояние между первым и последним столбом в сантиметрах(без ширины первого и последнего столба).

function pillars(num_pill, dist, width) {
  if (num_pill < 2) {
    return 0;
  }
  return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
}
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30))