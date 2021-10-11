//minimum
const min = (a, b) => a < b ? a : b;


//recursion
const isEven = (x) => {
    if (x === 0) {
        return true;
    }
    else if (x === 1) {
        return false;
    }
    else {
       return isEven(x-2);    }
}

// Bean counting
const countBs = (str) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "B") {
            counter ++;
        }
    }
    return counter;
}

countChar = (str, char) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === char) {
            counter++;
        }
    }
    return counter;
}



// console.log(min(4, 4));
// console.log(isEven(50));
// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));