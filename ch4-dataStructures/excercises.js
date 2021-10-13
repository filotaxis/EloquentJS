// sum of a range
const range = (start, end, step=1) => {
    const arr = [];
    if ((start > end) && step < 0) {
        for (let i = start; i >= end; i+=step){
            arr.push(i);
        }
    }
    else if((start < end) && step > 0){
        for (let i = start; i <= end; i+=step){
            arr.push(i);
        }
    }

    else {
        return `An array from [${start}] to [${end}] with steps of [${step}] it's not possible`;
    }
    return arr;
}
const sum = (arr) => {
    let res = 0;
    for (num of arr) {
        res += num;
    }
    return res;
}

// Reversing an array
const reverseArray = (arr) => {
    const res = [];
    for (let i = arr.length-1; i >= 0; i--){
        res.push(arr[i]);
    }
    return res;
}

const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length) / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}


const arrayToList = (arr) => {
    let obj = {};
    let temp = null;
    for (let i = arr.length-1; i >= 0; i--){
        obj.value = arr[i];
        obj.rest = temp;
        temp = {
            value: obj.value,
            rest: obj.rest,
        };
    }
    return obj;
}

const listToArray = (list) => {
    let arr = [list.value];
    let temp = list.rest;
    while(temp){
        arr.push(temp.value);
        temp = temp.rest;
    }
    return arr;
}

const prepend = (el, list) => {
    const obj = {};
    obj.value = el;
    obj.rest = list;
    return obj;
}

const nth = (list, num) => {
    return listToArray(list)[num];
}

// Deep comparison
const deepEqual = (obj1, obj2) => {
    
}



// console.log(sum(range(1, 10)));
// console.log(reverseArray(["A", "B", "C"]));
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 3));
// // → 20

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true