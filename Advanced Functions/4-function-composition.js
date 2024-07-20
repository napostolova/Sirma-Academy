function double(a) {
    return a * 2;
}

function square(a) {
    return Math.pow(a, 2);
}

// const compose = (...functions) => {
//     return (input) => {
//         return functions.reduce((acc, fn) => {
//             return fn(acc);
//         }, input)
//     }
// }

const compose = (double, square) => (a) => square(double(a));

const doubleThenSquare = compose(double, square);

    console.log(doubleThenSquare(3));