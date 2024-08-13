function todo(task) {
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
}

console.log("starting");
todo("assignments");
console.log("ending");



/** To clarify that function todo is over when function fun is called */
function todo(task) {
    console.log("start of todo");
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
    console.log("end of todo");
}

console.log("starting");
todo("assignments");
console.log("ending");



/** When task is reassigned then the fun function task is also changed */
function todo() {
    var task = "assignments";
    console.log("start of todo");
    setTimeout(function fun() {
        console.log("completed", task);
    }, 2000);
    task = "dayananda";
    console.log("end of todo");
}

console.log("starting");
todo();
console.log("ending");  