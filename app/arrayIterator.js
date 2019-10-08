//my first iterator
const arrayIterator = (array) => {
    let index = 0;


    return {
        next: () => {
            if(index < array.length) {
                let next = array[index];
                index +=1;
                return next;
            }
        }
    }
}


let it = arrayIterator([1,2,3])
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
