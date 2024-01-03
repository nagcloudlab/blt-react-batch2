
// Pattern : module pattern

// self-executable function
// IIFE - Immediately Invoked Function Expression

// e.g : counter module

const counter = (function (initialCount = 0) {
    let count = initialCount; // private
    function increment() { // public
        count++;
    }
    function getCount() { // public
        return count;
    }
    return {
        increment: increment,
        getCount: getCount
    }
})(100)

