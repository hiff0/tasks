/* 1) функция, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:

Сеттер setNumer() - устанавливает числитель
Сеттер setDenom() - устанавливает знаменатель
Геттер getNumer() - возвращает числитель
Геттер getDenom() - возвращает знаменатель
Геттер toString() - возвращает строковое представление числа
Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)
*/
const makeRationalNumber = (numer, denom) => {
    const rat = { numer, denom, getDenom() { return this.denom }, getNumer() { return this.numer } };
    rat.setNumer = function setNumer(numer) {
        this.numer = numer;
    };
    rat.setDenom = function setDenom(denom) {
        this.denom = denom;
    };
    rat.toString = function toString() {
        return `${this.getNumer()}/${this.getDenom()}`;
    };
    rat.add = function add(number) {
        return makeRationalNumber(this.numer * number.denom + this.denom * number.numer, this.denom * number.denom);
    };
    return rat;
};

//2) Функция, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:
//obj – объект выступающий в роли контекста
//fn() – функция привязываемая к контексту
const getBind = (obj, fn) => {
    const func = (...arg) => {
        return fn.call(obj, ...arg);
    }
    return func;
};

const obj = { number: 5 };
const fn = function fn(number) {
    return number + this.number;
};
const fnWithContext = getBind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8


//3) Эта функция должна вызывать колбек для каждого объекта коллекции. Главная особенность этой функции в том, что она передает объекты коллекции не в саму функцию, а устанавливает их как контекст.
const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
];
function callback() {
    this.name = this.name.split('').reverse().join('');
};

const each = (obj, callback) => obj.forEach((item) => callback.call(item));
