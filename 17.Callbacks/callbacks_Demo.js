function fun(x, fn) {
    /**
     * x  be a --> number
     * fn be some -->function
     */

    //some logic
    for (let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();//calling the callback function
}

//This is the callback function 
fun(10, function log() {
    console.log("custom logger");
})

//We can pass anonymous funciton as calllbacks
fun(10, function () {
    console.log("Anonymous logger");
})

//We can pass separate function also
function gun() { //fucniton declaration
    console.log("inside gun");
}

gun();

fun(15, gun);
fun(15, gun());//when we put a pair of parenthesis it means we are immediately callling the function and it will throw error as it will return undefined
//whereas if we just paas as a name gun it is call first fun then the logic inside this

//We can pass fucniton expression as well
let g = function () {
    console.log("Inside g");
}
fun(2, g);