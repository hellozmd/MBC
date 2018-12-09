// a
console.log("\u0061");

// 𠮷
console.log("\uD842\uDFB7");
// 2 '�' '�' 55362 57271
var s = '𠮷';
console.log(s.length, s.charAt(0), s.charAt(1), s.charCodeAt(0), s.charCodeAt(1));
// ஷ 码点返回对应字符，不能识别 u > 0xFFFF
console.log(String.fromCharCode(0x20BB7));

// f \r\n o \r\n o \r\n
for (let codePoint of 'foo') {console.log(codePoint);}

// includes(), startsWith(), endsWith();
// x..x..
console.log('x..'.repeat(2));

// padStart(), padEnd();
// sa.ee
console.log('a.'.padStart(3, 's').padEnd(5, 'e'));

// 模板字符串, 可以内嵌其他语言，但是会转义字符串，导致无法嵌入其他语言
let name1 = "Bob", time = "today";
console.log(`Hello ${name1}, how are you ${time}?`);
// 标签模板 - 紧跟在一个函数名后面，调用这个模板字符串
console.log`aaa`;

// String.raw()
//{ raw: 'test' } 0 1 2
console.log({raw: 'test'}, 0, 1, 2);
//t0e1s2t
console.log(String.raw({raw: 'test'}, 0, 1, 2));
console.log(String.raw({raw: ['t', 'e', 's', 't']}, 0, 1, 2));

