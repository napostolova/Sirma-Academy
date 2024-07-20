function multiply(a, b) {
    return a * b;
}

const multiplyByFive = (a) => {
    const b = 5;
    return a * b;
};

multiplyByFive.bind(multiply);

console.log(multiplyByFive(3));