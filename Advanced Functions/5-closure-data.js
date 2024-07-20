function createPrivateCounter() {
    let counter = {
        count: 0,
        getCount() {
            return this.count;
        },
        increment() {
            this.count++;
        }
    }
    return counter;
}


const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount());
