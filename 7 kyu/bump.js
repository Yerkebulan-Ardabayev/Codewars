// our car is old, it breaks easily.The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road(_) or bumps(n).If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// Твоя машина старая, легко ломается.Амортизаторы исчезли, и вы думаете, что он может выдержать еще около 15 ударов, прежде чем полностью умрет.

// К сожалению для вас, ваш диск очень ухабистый! Дана строка, показывающая либо ровную дорогу(_), либо неровности(n).Если вы можете безопасно добраться до дома, встретив 15 bumps or less, вернитесь Woohoo!, в противном случае вернитесьCar Dead

const bump = str => str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";