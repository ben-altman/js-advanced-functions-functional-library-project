const returnsArray = function(collection) {
    if (typeof collection === "object") {
        return Object.values(collection);
    }
    if (typeof collection === "array") {
        return collection.slice();
    }     
}

let myEach = function(collection, callback) {
    const newArray = returnsArray(collection);

    for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i]);
    }
    return collection;
}

const myMap = function(collection, callback) {
    const newArray = returnsArray(collection);

    const returnValue = [];

    for (let i = 0; i < newArray.length; i++) {
        returnValue.push(callback(newArray[i]));
    }

    return returnValue;
}

const myReduce = function(collection, callback, acc) {
    let newArray = returnsArray(collection);
    
    if (!acc) {
        acc = newArray[0];
        newArray = newArray.slice(1);
    }
    for (let i = 0; i < newArray.length; i++) {
        acc = callback(acc, newArray[i], newArray);
    }    
    return acc;
}

const myFind = function(collection, predicate) {
    const newArray = returnsArray(collection);

    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
            return newArray[i];
        }
    }    
}

const myFilter = function(collection, predicate) {
    const newArray = returnsArray(collection);

    let filtered = []
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
            filtered.push(newArray[i]);
        }
    }    
    return filtered;
}

const mySize = function(collection) {
    const newArray = returnsArray(collection);

    return newArray.length;
}

const myFirst = function(array, n = false) {
    return (n ? array.slice(0, n) : array[0])
}

const myLast = function(array, n = false) {
    return (n ? array.slice(0 - n) : array[array.length-1])
}

const myKeys = function(obj) {
    const keyArr = [];

    for (let key in obj) {
        keyArr.push(key);
    } 
    return keyArr;
}

const myValues = function(obj) {
    const valArr = [];

    for (let key in obj) {
        valArr.push(obj[key]);
    } 
    return valArr;
}

const mySortBy = function(array, callback) {
    let spreadArray = [...array];

    return spreadArray.sort(function(a,b) {
        if (callback(a) > callback(b)) {
            return 1;
        } else if (callback(b) > callback(a)) {
            return -1;
        } else {
            return 0;
        }
    });
}

const myFlatten = function() {
    let flatArr = [];

    return flatArr;
}