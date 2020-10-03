// console.log(global);

global.setTimeout(() => {
    console.log('me');
    clearInterval(int);
}, 2000);

const int = setInterval(() => {
    console.log('me every second');
}, 1000);

console.log(__dirname);
console.log(__filename);