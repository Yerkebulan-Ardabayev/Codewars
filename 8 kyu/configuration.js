// Nodejs package.json
// Node applications require a file named package.json on the root of the project.

// You can create this file manually or have the command npm init to assist you in this process.

// The fields name and version are mandatory.But there a lot of other fields that you can include:

// for a documentation on all fields see https://docs.npmjs.com/files/package.json

// name: must be lowercase and url friendly
// version: must include major, minor and patch version
// description: can contain a description of your project
// main: the entry point of your application(when running node without args)
// scripts: a set of commands that can be executed with npm run < cmd >
//   keywords: an array of strings containing keywords that describe your application
// bugs: an object with the url and / or email to contact about bugs
// license: a valid SPDX license or UNLICENSED(proprietary) or SEE LICENSE IN < filename >
//   author: the name, email and url in a single string or an object with these three properties
// contributors: an array of items that follow the same rules as author
// repository: an object with type(e.g.git) and url(e.g.git url)
// private: true | false; if true the repository field can be omitted without any warnings
// preferGlobal: true | false; if your application is preferred to be installed globally
// engines: object listing engines and versions used by your application
// os: array of strings with supported OS
// cpu: array of strings with supported CPU
// dependencies: run - time dependencies of your application, things that will run in production
// devDependencies: compile - time dependencies of your application, things that should not be in production
// The dependencies is an object with the name of modules as keys and the values are the versions.For example to require babel in your application you would have these entries:

// {
//   "babel-core": "^6.0.0",
//     "babel-polyfill": "^6.0.0",
//       "babel-preset-es2015": "^6.0.0",
//         "babel-preset-stage-0": "^6.0.0"
// }
// Your task
// Create a package.json configuration and assign it to the configuration constant so it can be tested.

// To pass the kata you need only the least that a real package file would require.

//   Notes
// the kata version validation doesn't handle all cases and isn't 100 % accurate, so don't try to be too fancy, stick to with the simple
// to simplify the license validation this kata only allows the following
// ISC
// MIT
// UNLICENSED
// SEE LICENSE IN filename

// Пакет Nodejs.json
// Для приложений Node требуется файл с именем package.jsonв корне проекта.

// Вы можете создать этот файл вручную или получить команду npm init, которая поможет вам в этом процессе.

// Поля name и version являются обязательными.Но есть много других полей, которые вы можете включить:

// для документации по всем полям см.https://docs.npmjs.com/files/package.json

// имя: должно быть в нижнем регистре и оптимизировано для URL
// версия: должна включать основную, дополнительную версию и версию исправления.
//   description : может содержать описание вашего проекта
// main: точка входа вашего приложения(при работе nodeбез аргументов)
// скрипты: набор команд, которые можно выполнить с помощьюnpm run < cmd >
//   keywords : массив строк, содержащих ключевые слова, описывающие ваше приложение.
//     bugs : объект с urlи / или emailдля связи с ошибками
// license: действующая лицензия SPDX или UNLICENSED(проприетарная) илиSEE LICENSE IN < filename >
//   автор : имя, адрес электронной почты и URL - адрес в одной строке или объект с этими тремя свойствами
// contributors: массив элементов, которые следуют тем же правилам, что и автор
// репозиторий: объект с type(например git) и url(например, git url)
// частный: true | false; если true, поле репозитория может быть опущено без каких - либо предупреждений
// PreferGlobal: true | false; если ваше приложение желательно установить глобально
// Engines: список объектов с движками и версиями, используемыми вашим приложением.
//   os : массив строк с поддерживаемой ОС
// cpu: массив строк с поддерживаемым процессором
// зависимости: зависимости времени выполнения вашего приложения, вещи, которые будут работать в производстве
// devDependencies: зависимости вашего приложения во время компиляции, вещи, которые не должны быть в рабочей среде.
// Это dependenciesобъект с именами модулей в качестве ключей и значениями версий.Например, чтобы потребовать babelв своем приложении, у вас должны быть следующие записи:

// {
//   "babel-core": "^6.0.0",
//     "babel-polyfill": "^6.0.0",
//       "babel-preset-es2015": "^6.0.0",
//         "babel-preset-stage-0": "^6.0.0"
// }
// Твое задание
// Создайте конфигурацию package.json и назначьте ее configuration константе, чтобы ее можно было протестировать.

// Чтобы передать ката, вам нужно лишь минимум того, что потребуется для реального файла пакета.

//   Заметки
// проверка версии kata не обрабатывает все случаи и не является на 100 % точной, поэтому не пытайтесь быть слишком причудливой, придерживайтесь простого
// для упрощения проверки лицензии этот ката позволяет только следующее
// ИСК
// Массачусетский технологический институт
// БЕЗ ЛИЦЕНЗИИ
// СМОТРЕТЬ ЛИЦЕНЗИЮ В имени файла

const configuration = {
  name: 'kata',
  version: '1.0.0',
  description: 'kata',
  main: 'index.js',
  scripts: {
    start: 'node index.js',
    test: 'echo "Error: no test specified" && exit 1'
  },
  
};
