const sumAll = function(min, max) {

if (min < 0 || max < 0 || min % 1 != 0 || max % 1 != 0){
    return "ERROR"
}
else if (typeof min === "string" || typeof max === "string"){
    return "ERROR"
}


if (max < min){
    first = max
    last = min
}
else {
    first = min
    last = max
}

sum = 0

for (i = first;i <= last; i++){

    sum += i

}

return sum

};

// Do not edit below this line
module.exports = sumAll;
