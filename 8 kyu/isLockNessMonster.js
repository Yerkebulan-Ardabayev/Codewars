// A Strange Trip to the Market

// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes.As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes.You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy".Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster.Note that the phrase can also be written as "3.50" or "three fifty".

// Вы идете на рынок, когда слышите красивую музыку, исходящую от соседнего уличного артиста. Ноты складываются так, что вы не поверите, когда музыкант складывает воедино образцы мелодий. Когда вы задаетесь вопросом, какой алгоритм вы могли бы использовать для сдвига октав на 8 тонов или что-то в этом роде, до вас доходит, что вы наблюдали за музыкантом в течение каких-то 10 с лишним минут. Вы спросите: «Сколько люди обычно дают чаевые за что-то подобное?» Художник смотрит вверх. «Это всегда будет о деревяшках».

// Именно тогда вы понимаете, что музыкант был зверем высотой 400 футов из эпохи палеолита! Лохнесское чудовище чуть не обмануло вас!

// Есть только 2 гарантированных способа узнать, говорите ли вы с Лохнесским чудовищем: А) это зверь высотой 400 футов из эпохи палеолита; B) он попросит у вас деревянную фидди.

// Поскольку Несси — мастер маскировки, единственный способ точно сказать — найти фразу "tree fiddy". Поскольку вы устали от обмана этого монстра, пришло время закодировать решение для поиска Лохнесского чудовища. Обратите внимание, что фраза также может быть записана как "3.50"или "three fifty".

const isLockNessMonster = (s) => /tree fiddy|3.50|three fifty/.test(s);