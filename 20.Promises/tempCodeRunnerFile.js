function process() {
    console.log("Start");
    for (i = 1; i < 3; i++) {
        setTimeout(function exec() {
            console.log("Executed after sometime");
        }, 3000);
        console.log("inside for loop");
    }
    for (var j = 0; j = 10000; j++) {

    }
    console.log("end");
}
process();