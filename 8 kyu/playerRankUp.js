// Давайте представим, что у нас есть популярная онлайн - ролевая игра.Игрок начинает с 0 очков в классе E5.A1 — это наивысший уровень, которого может достичь игрок.

// Теперь предположим, что игроки хотят подняться до класса E4.Для этого игроку необходимо набрать не менее 100 очков, чтобы попасть в квалификационный этап.

// Напишите скрипт, который будет проверять, набрал ли игрок хотя бы 100 очков в своем классе.Если да, то он входит в квалификационный этап.

// В этом случае мы возвращаемся, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// В противном случае вернитесь False / false(в соответствии с используемым языком).

// Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

// Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

// Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

// In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

// Otherwise return, False / false(according to the language n use).

function playerRankUp(points) {

  if (points >= 100) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  }
  else if (points < 100)
    return false;
}

function playerRankUp(points) {
  return points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
}