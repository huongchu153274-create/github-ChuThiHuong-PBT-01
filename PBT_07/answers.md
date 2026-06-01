# PHIẾU BÀI TẬP 07 — JAVASCRIPT BASICS

> **Bài tập này tập trung vào:** Kiểu dữ liệu, toán tử, vòng lặp, điều kiện, hàm cơ bản

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 — Kiểu Dữ Liệu trong JavaScript

**7 kiểu dữ liệu primitive:**

| Kiểu | Ví dụ | Mô tả |
|------|-------|-------|
| **number** | `42`, `3.14`, `NaN`, `Infinity` | Số nguyên, số thập phân, đặc biệt |
| **string** | `"Hello"`, `'World'`, `` `Template` `` | Chuỗi ký tự |
| **boolean** | `true`, `false` | Giá trị logic |
| **undefined** | `undefined` | Biến khai báo nhưng chưa gán giá trị |
| **null** | `null` | Không có giá trị (cách khai báo tường minh) |
| **symbol** | `Symbol("id")` | Định danh duy nhất (ES6+) |
| **bigint** | `123n`, `BigInt("123")` | Số nguyên lớn (ES2020+) |

**Non-primitive (Objects):**
- `{}` — Object
- `[]` — Array (là Object)
- `function() {}` — Function (là Object)

**Kiểm tra kiểu:**

```javascript
typeof 42          // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug lịch sử!)
typeof Symbol("x") // "symbol"
typeof 123n        // "bigint"
typeof {}          // "object"
typeof []          // "object" (Array là Object)
typeof function(){} // "function"
```

---

### Câu A2 — Type Coercion (Ép kiểu)

**Implicit Coercion (tự động):**

```javascript
// String concatenation
5 + "5"           // "55" (số + string → string)
"5" + 5           // "55"

// Numeric operations
"5" - 2           // 3 (string → number)
"5" * 2           // 10
"5" / 2           // 2.5

// Comparisons
5 == "5"          // true (loose equality — ép kiểu)
5 === "5"         // false (strict equality — không ép)

// Boolean context
if (0) { }        // false (0 là falsy)
if ("") { }       // false ("" là falsy)
if ("hello") { }  // true (non-empty string là truthy)

// Falsy values: 0, "", null, undefined, NaN, false
// Truthy values: tất cả khác
```

**Explicit Coercion:**

```javascript
String(123)       // "123"
Number("123")     // 123
Boolean(1)        // true
parseInt("123")   // 123
parseFloat("3.14") // 3.14
```

---

### Câu A3 — Hoisting

**Hoisting là gì?**
JavaScript engine nâng khai báo (nhưng không gán giá trị) lên đầu scope trước khi execute code.

```javascript
// ❌ Code gốc:
console.log(x);    // undefined (không lỗi!)
var x = 5;

// ✓ JavaScript interpret như thế này:
var x;             // Khai báo hoisted
console.log(x);    // undefined
x = 5;             // Gán giá trị ở đây

// Nhưng let/const không hoisted:
console.log(y);    // ReferenceError: Cannot access 'y' before initialization
let y = 5;
```

---

### Câu A4 — Vòng Lặp

**for, while, do-while, for...in, for...of:**

```javascript
// 1. for
for (let i = 0; i < 3; i++) {
    console.log(i);  // 0, 1, 2
}

// 2. while
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

// 3. do-while (chạy ít nhất 1 lần)
let j = 0;
do {
    console.log(j);
} while (j++ < 3);

// 4. for...in (lặp qua keys/indexes)
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);  // a 1, b 2
}

// 5. for...of (lặp qua values)
const arr = [10, 20, 30];
for (const val of arr) {
    console.log(val);  // 10, 20, 30
}

// 6. Array.forEach()
arr.forEach((val, idx) => {
    console.log(idx, val);
});
```

---

### Câu A5 — Toán Tử

**Arithmetic, Assignment, Comparison, Logical:**

```javascript
// Arithmetic
5 + 3    // 8
5 - 3    // 2
5 * 3    // 15
5 / 3    // 1.666...
5 % 3    // 2 (modulo)
2 ** 3   // 8 (exponentiation)

// Assignment
x = 5; x += 3; // x = 8
x -= 2; // x = 6
x *= 2; // x = 12
x /= 3; // x = 4

// Comparison
5 > 3    // true
5 < 3    // false
5 == "5" // true (loose)
5 === "5" // false (strict)
5 != 3   // true
5 !== "5" // true

// Logical
true && false  // false (AND)
true || false  // true (OR)
!true          // false (NOT)

// Ternary
age >= 18 ? "Adult" : "Minor"
```

---

### Câu A6 — Hàm

**Function Declaration vs Expression:**

```javascript
// 1. Declaration (hoisted)
function greet(name) {
    return `Hello ${name}`;
}

// 2. Expression (không hoisted)
const greet2 = function(name) {
    return `Hello ${name}`;
};

// 3. Arrow Function (ES6)
const greet3 = (name) => `Hello ${name}`;

// 4. Parameters & Default
function add(a, b = 0) {
    return a + b;
}
add(5);     // 5
add(5, 3);  // 8

// 5. Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10
```

---

### Câu A7 — Scope & var vs let vs const

```javascript
// Global scope
var globalVar = 1;

function test() {
    // Function scope
    var functionVar = 2;
    let blockVar = 3;
    const blockConst = 4;

    if (true) {
        // Block scope
        var x = 10;  // function scope
        let y = 20;  // block scope
        const z = 30; // block scope
    }

    console.log(x);  // 10 (var không có block scope)
    console.log(y);  // ReferenceError (let có block scope)
}
```

| | var | let | const |
|---|-----|-----|-------|
| **Scope** | Function | Block | Block |
| **Hoisting** | Hoisted (undefined) | Hoisted (TDZ) | Hoisted (TDZ) |
| **Redeclare** | ✓ Có | ✗ Không | ✗ Không |
| **Reassign** | ✓ Có | ✓ Có | ✗ Không |
| **Best Practice** | ❌ Tránh | ✓ Dùng | ✓ Dùng |

---

## PHẦN B — THỰC HÀNH CODE (50 điểm)

### Bài B1 (15đ) — Calculator đơn giản

```javascript
function calculate(a, operator, b) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Lỗi: chia cho 0";
        case '%': return a % b;
        case '**': return a ** b;
        default: return "Operator không hợp lệ";
    }
}

console.log(calculate(10, '+', 5));   // 15
console.log(calculate(10, '-', 5));   // 5
console.log(calculate(10, '*', 5));   // 50
console.log(calculate(10, '/', 2));   // 5
console.log(calculate(10, '/', 0));   // Lỗi: chia cho 0
console.log(calculate(2, '**', 3));   // 8
```

---

### Bài B2 (15đ) — Kiểm tra số nguyên tố

```javascript
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function listPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(isPrime(17));       // true
console.log(isPrime(20));       // false
console.log(listPrimes(20));    // [2, 3, 5, 7, 11, 13, 17, 19]
```

---

### Bài B3 (20đ) — Đảo chuỗi, CamelCase, Palindrome

```javascript
// 1. Đảo chuỗi
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Hello"));  // olleH

// 2. Chuyển thành camelCase
function toCamelCase(str) {
    return str
        .split(' ')
        .map((word, idx) => 
            idx === 0 
                ? word.toLowerCase() 
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

console.log(toCamelCase("Hello World JavaScript"));  // helloWorldJavaScript

// 3. Kiểm tra Palindrome
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("Hello"));  // false
```

---

## PHẦN C — SUY LUẬN (25 điểm)

### Câu C1 (12đ) — So sánh == vs ===

```javascript
5 == "5"      // true  — ép kiểu: "5" → 5 → 5 == 5
5 === "5"     // false — không ép, types khác

null == undefined   // true (special case)
null === undefined  // false

0 == false    // true  — false → 0
0 === false   // false — types khác

"" == 0       // true  — "" → 0
"" === 0      // false
```

**Kết luận:** **Luôn dùng ===** vì:
- Tránh bugs từ ép kiểu tự động
- Hiệu suất hơi tốt hơn (không cần ép kiểu)
- Code rõ ràng ý định

---

### Câu C2 (13đ) — Callback, Async/Await (preview)

```javascript
// 1. Callback (cũ)
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded!");
    }, 1000);
}

fetchData((data) => console.log(data));

// 2. Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded!"), 1000);
    });
}

fetchDataPromise().then(data => console.log(data));

// 3. Async/Await (mới, sạch nhất)
async function main() {
    const data = await fetchDataPromise();
    console.log(data);
}

main();
```

---