// Check your arrows
// You have a quiver of arrows, but some have been damaged.The quiver contains arrows with an optional range information(different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

//   anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

// Проверьте свои стрелки
// У вас есть колчан со стрелами, но некоторые из них повреждены.Колчан содержит стрелы с дополнительной информацией о расстоянии(различные типы целей расположены на разных расстояниях), поэтому каждый предмет является стрелой.
// Вам нужно убедиться, что у вас осталось несколько хороших, чтобы подготовиться к битве:

// anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
// Если стрела в колчане не имеет статуса поврежденной, значит, она новая.

// Ожидаемый результат — логическое значение, указывающее, остались ли у вас хорошие стрелки.

let arrows = [{ range: 5 }, { range: 10, damaged: true }, { damaged: true }];

function anyArrows(arrows) {
  return arrows.filter((el) => el['damaged']).length < arrows.length;
}
function anyArrows(arrows) {
  return arrows.some(a => !a.damaged);
}
function anyArrows(arrows) {
  return arrows.some(arrow => !arrow.damaged);
}