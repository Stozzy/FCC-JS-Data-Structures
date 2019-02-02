function repeatStringNumTimes(str, num) {
    let newStr = '';
    
    if (num < 0) {
        return newStr = '';
    } else {
        while (num > 0) {
            newStr = newStr.concat(str)
            num--;
        }
    }

    return newStr;

}

console.log(repeatStringNumTimes("abc", -1));
