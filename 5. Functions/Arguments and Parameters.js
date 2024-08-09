function add(x, y) {
    let c = x + y;
    console.log(c);//return undefined also because console.log always returns undefined and
    //due to function it returns undefined as function always returns something
    return c;//return sum only
}

let a = 20;
let b = 30;
let result = add(a, b);
console.log(result);//prints only result as it is not inside any function

