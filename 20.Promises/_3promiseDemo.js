function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("going to strat the download");
        setTimeout(function process() {
            let data = "Dummy downloaded data";
            console.log("download completed");
            resolve(data);
        }, 10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
x = fetchData("www.google.com");
console.log("new promise object created successfully, but downloading still going on");
console.log(x);