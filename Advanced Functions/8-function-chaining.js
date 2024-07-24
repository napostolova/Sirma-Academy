stringManipulator = {
  
    setValue(text) {
        this.text = text;
        return this;
    },
    toUpperCase() {
        this.text = this.text.toUpperCase();
        return this;
    },
    print() {
        console.log(this.text);
        return this;
    },
    toLowerCase() {
        this.text = this.text.toLowerCase();
        return this;
    }
}

stringManipulator.setValue('Hello').toUpperCase().print().toLowerCase().print();
