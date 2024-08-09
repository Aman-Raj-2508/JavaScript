// var teacher = "sanket";
// function fun() {
//     var teacher = "pulkit"
//     console.log(teacher, teachingAssistant);
//     teachingAssistant = "Vaibhav";
// }

// function gun() {
//     console.log(subject);
//     var subject = "JS";
//     console.log(teacher);
// }
// console.log(teacher);
// fun();
// gun();

/** gun is called first */
var teacher = "sanket";
function fun() {
    var teacher = "pulkit"
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Vaibhav";
}

function gun() {
    console.log(subject);
    var subject = "JS";
    console.log(teacher);
}
console.log(teacher);
gun();
fun();

//when only var student is there
var teacher = "sanket";
function fun() {
    var teacher = "pulkit"
    console.log(teacher, teachingAssistant);
    teachingAssistant = "Vaibhav";
}

function gun() {
    var student;//in first phase it will be in the scope of gun as it is a formal declaration because we used the keyword var/let/const
    console.log(subject);
    var subject = "JS";
    console.log(teacher, student);
}
console.log(teacher);
gun();