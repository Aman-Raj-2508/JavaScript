function demo2(val) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed timer");
            if (val % 2 == 0) {
                resolve("even");
            } else {
                reject("Odd");
            }
        }, 10000);
        console.log("somewhere");
    });
}

let x = demo2(1);
console.log(x);