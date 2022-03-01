function foo(x, y) {
    console.log(x, y);
    for (const arg of arguments) {
        console.log(arg);
    }

    //let arr = Array.prototype.slice.apply(arguments);
    let arr = Array.from(arguments);
    let sum = arr.reduce((a,x) => a + x, 0);
}

foo(1,2,3,4,5);