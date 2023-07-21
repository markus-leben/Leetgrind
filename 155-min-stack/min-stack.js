var MinStack = function() {
    var instance = Object.create(MinStack.prototype)
    instance.contents = []
    instance.lowest = [Infinity]
    return instance
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.contents.push(val)
    if (val <= this.lowest[this.lowest.length-1]) {
        this.lowest.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var val = this.contents.pop()
    if (val === this.lowest[this.lowest.length-1]) {
        this.lowest.pop()
    }

    return (val)
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return (this.contents[this.contents.length-1])
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.lowest[this.lowest.length-1])
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */