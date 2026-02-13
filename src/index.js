import last from 'lodash-es/last.js';

export function runApp() {
  console.log('Запуск приложения...');
   console.log(last(["one", "two"]));
   return last(["one", "two"]);
}

