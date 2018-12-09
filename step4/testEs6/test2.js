// 1 2 3
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// undefined 'bbb'
let {foo, bar} = {bar: "bbb"};
console.log(foo, bar);

// 有一个o没有人接收
let [o, p, q, r, s] = 'helloo';
console.log(o, p ,q, r, s);

// 3
function add([x, y]) {
    return x + y;
}
console.log(add([1, 2]));

// 禁用圆括号