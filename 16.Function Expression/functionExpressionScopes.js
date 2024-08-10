var x = function gun() {
    console.log("gun");
}

x();

gun();//error because gun is in the scope of x not globally so can't access
