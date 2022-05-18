function bmi(weight, height) {
  let imt = weight / height ** 2;
  if (imt <= 18.5) {
    return "Underweight"
  }
  if (imt <= 25.0) {
    return "Normal"
  }
  if (imt <= 30.0) {
    return "Overweight"
  }
  if (imt > 30) {
    return "Obese"
  }
}