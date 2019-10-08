
const Letters = (letts) => {
    console.log(letts);
    let letters= new Map();
    for (let i=0; i<letts.length; i++) {
        let letter = letts[i];
        if(!letters.has(letter)) {
            letters.set(letter,1)
        } else {
            letters.set(letter, letters.get(letter) + 1);
        }
    }
    return letters;
}

export default Letters;