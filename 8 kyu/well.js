// Well of Ideas - Easy Version

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array(x) for good ideas 'good' and bad ideas 'bad'.If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.If there are no good ideas, as is often the case, return 'Fail!'.

// На каждую хорошую идею ката приходится немало плохих!

// В этом ката вам нужно проверить предоставленный массив(x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, верните «Fail!».

function well(x) {
  let good = 0;
  let bad = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      good++;
    } else if (x[i] === 'bad') {
      bad++;
    }
  }
  if (good === 0) {
    return 'Fail!';
  } else if (good === 1 || good === 2) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }

}

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' :
    good_count < 3 ? 'Publish!' : 'I smell a series!';
}