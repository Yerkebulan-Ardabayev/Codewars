// Determine offspring sex based on genes XX and XY chromosomes

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes.They are either X or Y.The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female.If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// Мужские гаметы или сперматозоиды у человека и других млекопитающих являются гетерогаметными и содержат один из двух типов половых хромосом.Они либо X, либо Y.Однако женские гаметы или яйца содержат только половую хромосому X и являются гомогаметными.

// В этом случае пол особи определяет сперматозоид.Если сперматозоид, содержащий Х - хромосому, оплодотворяет яйцеклетку, полученная зигота будет XX или женской.Если сперматозоид содержит Y - хромосому, то полученная зигота будет XY или мужской.

//   Определите, будет ли пол потомства мужским или женским, на основе X или Y - хромосомы, присутствующей в сперме мужчины.

// Если сперма содержит Х - хромосому, верните «Поздравляем! У вас будет дочь»; Если сперма содержит Y - хромосому, вернуть «Поздравляем! У вас будет сын»;

const chromosomeCheck = (sperm) => sperm === 'XY' ? "Congratulations! You\'re going to have a son." : "Congratulations! You\'re going to have a daughter." 
