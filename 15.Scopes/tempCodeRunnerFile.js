if (true) {
    let x = 10; //block Scope 
    console.log(x);
}
function fun() {
    console.log(y);
    let y = 8;
    console.log(y);
}
fun();
console.log(x);