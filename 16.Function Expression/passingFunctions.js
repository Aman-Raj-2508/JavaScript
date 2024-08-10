function fun() {
    console.log("fun called");
}
function gun(fn) {
    console.log("Inside gun");
    fn();
    console.log("Leaving gun");
}

gun(function () {
    console.log("new function passed");
});

gun(fun);