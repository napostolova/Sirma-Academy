function partialSum(n) {
    return function sum(a, b, c) {
        return a + b + c + n;

    }
}


const addFive = partialSum(5);
console.log(addFive(1, 2, 3));