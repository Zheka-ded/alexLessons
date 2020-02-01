const a = [5, 6, 9];

let d = a.join('-');

console.log(d);

console.log(typeof d);

let f = d.split('');


console.log(f);

console.log(typeof f);

let k = [];

for(let i = 0; i < a.length; i++) {
    k.push(a[i] * 2);
}

console.log(k);

let b = a.map(a => a * 2);


console.log(b);

let T = [273,290,270,285];

let t = T.map(function (element) {
    return element - 273;
});

console.log(t);

let t2 = t.filter(function (element) {
    
    return element > 0;    // true false
})

console.log(t2);

let w = [3, 're', 4, 'o'];

let v = w.filter(function (elem) {
    return typeof elem == 'number';
})

console.log(v);

let y = [5,6,7];

y = y.filter(function (elem) {
    return elem > 6;
});

console.log(y);


let yy = [10,5,6,7];

// yy.forEach(function (elem, index) {
//     console.log(elem);
//     console.log(index);
// })

// let p = '5';

// console.log(p);

// p.forEach(function (elem) {
//     console.log(elem);
// });

// function f1 (a) {
//     console.log(a);
//     return a > 2;
// }

let a1 = yy.some(function (elem) {
    console.log(elem);
    return elem > 2;
});
console.log(a1);

let a2 = yy.every(function (elem) {
    console.log(elem);
    return elem > 2;
});
console.log(a2);