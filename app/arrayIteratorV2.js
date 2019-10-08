//array iterator shorter
function* arrayIterator(){
    for (let arg of arguments) {
        yield arg;
    }
}

var it = arrayIterator(1,2,3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);