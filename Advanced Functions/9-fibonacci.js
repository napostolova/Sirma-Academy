function getFibonacci() {
    let previousNum = 0;
    let nextNum = 1;
    return function currentNum() {
        let current = previousNum + nextNum;
        previousNum = nextNum;
        nextNum = current;
        return current;
    }

}

let fibonacci = getFibonacci();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());