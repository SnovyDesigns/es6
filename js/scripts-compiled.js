'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Zadanie 1
var first = 'Hello',
    second = 'World';

console.log('Nowy zapis string: ' + first + ' ' + second);

// Zadanie 2
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log('Wynik mnozenia podanych warto\u015Bci: ' + multiply(5));

// Zadanie 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.reduce(function (prevVal, val) {
        return prevVal + val;
    }) / args.length;
};
console.log('\u015Arednia arytmetyczna podanych warto\u015Bci: ' + average(1, 2, 3, 4));

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('\u015Arednia arytmetyczna z warto\u015Bci z tablicy: ' + average.apply(undefined, grades).toFixed(2));

// Zadanie 5
var _ref = [1, 4, 'Iwona', false, 'Nowak'],
    firstName = _ref[2],
    lastName = _ref[4];

console.log('Zmienne utworzone z warto\u015Bci z tablicy: firstName = ' + firstName + ', lastName = ' + lastName);

// CW - 1
// https://www.codewars.com/kata/string-templates-bug-fixing-number-5
function buildString() {
    for (var _len2 = arguments.length, template = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        template[_key2] = arguments[_key2];
    }

    return 'I like ' + template.join(', ') + '!';
}
console.log(buildString('Cheese', 'Milk', 'Chocolate'));

// CW - 2: 
// https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript
function shuffleIt(arr) {
    for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        params[_key3 - 1] = arguments[_key3];
    }

    params.forEach(function (element) {
        var _ref2 = element || [],
            _ref3 = _slicedToArray(_ref2, 2),
            a = _ref3[0],
            b = _ref3[1];

        var _ref4 = [arr[b], arr[a]];
        arr[a] = _ref4[0];
        arr[b] = _ref4[1];
    });
    return arr;
}

// CW - 3
// https://www.codewars.com/kata/sum-with-arrows/train/javascript
var Sum = 'sum = function(arr){ return arr.reduce((prevVal, val) => prevVal + val); }';
// let Sum = arr => {return arr.reduce((prevVal, val) => prevVal + val);};


// CW - 4
// https://www.codewars.com/kata/unpacking-arguments
function spread(func, args) {
    return func.apply(undefined, _toConsumableArray(args));
}
