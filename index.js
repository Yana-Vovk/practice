const array = [1, 0, 11, 23, 44, 6, 77, 22];
console.log(array);
let counter = 0;
const filter = array.map(item => {
    if ((item !== 0) && (item % 11 === 0)) {
        counter += 1;
        console.log(item);
    }
})
console.log('counter= ',counter);