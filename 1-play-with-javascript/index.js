


// Q

let myFunctions = [];

//---------------------------------------------

function getF(i) {
    let func = function () {
        console.log(i);
    }
    return func;
}

for (var i = 0; i < 2; i++) {
    myFunctions.push(getF(i));
}
//---------------------------------------------

myFunctions[0]();
myFunctions[1]();