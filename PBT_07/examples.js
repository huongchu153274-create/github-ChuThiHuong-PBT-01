// PHIẾU BÀI TẬP 07 — JAVASCRIPT BASICS
// THỰC HÀNH CÁC KHÁI NIỆM CƠ BẢN

// ============= PHẦN B1: CALCULATOR =============
console.log("=== CALCULATOR ===");

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

console.log("10 + 5 =", calculate(10, '+', 5));    // 15
console.log("10 - 5 =", calculate(10, '-', 5));    // 5
console.log("10 * 5 =", calculate(10, '*', 5));    // 50
console.log("10 / 2 =", calculate(10, '/', 2));    // 5
console.log("10 / 0 =", calculate(10, '/', 0));    // Lỗi: chia cho 0
console.log("2 ** 3 =", calculate(2, '**', 3));    // 8
console.log();

// ============= PHẦN B2: SỐ NGUYÊN TỐ =============
console.log("=== KIỂM TRA SỐ NGUYÊN TỐ ===");

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

console.log("isPrime(17):", isPrime(17));           // true
console.log("isPrime(20):", isPrime(20));           // false
console.log("isPrime(2):", isPrime(2));             // true
console.log("Các số nguyên tố ≤ 30:", listPrimes(30));
console.log();

// ============= PHẦN B3: STRING MANIPULATION =============
console.log("=== STRING MANIPULATION ===");

// 1. Đảo chuỗi
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log("Đảo 'Hello':", reverseString("Hello"));      // olleH
console.log("Đảo 'JavaScript':", reverseString("JavaScript")); // tpircSavaJ
console.log();

// 2. CamelCase
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

console.log("CamelCase 'hello world':", toCamelCase("hello world"));  // helloWorld
console.log("CamelCase 'hello world javascript':", toCamelCase("hello world javascript")); // helloWorldJavaScript
console.log();

// 3. Palindrome
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

console.log("Palindrome 'racecar':", isPalindrome("racecar"));  // true
console.log("Palindrome 'A man, a plan, a canal: Panama':", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("Palindrome 'Hello':", isPalindrome("Hello"));  // false
console.log();

// ============= TYPE COERCION EXAMPLES =============
console.log("=== TYPE COERCION ===");

console.log("5 + '5' =", 5 + '5');           // "55" (string)
console.log("'5' - 2 =", '5' - 2);           // 3 (number)
console.log("5 == '5' →", 5 == '5');         // true
console.log("5 === '5' →", 5 === '5');       // false
console.log("null == undefined →", null == undefined);     // true
console.log("null === undefined →", null === undefined);   // false
console.log();

// ============= LOOPS EXAMPLES =============
console.log("=== LOOPS ===");

console.log("For loop (0-5):");
for (let i = 0; i < 5; i++) {
    process.stdout.write(i + " ");
}
console.log("\n");

console.log("Array forEach:");
[10, 20, 30].forEach((val, idx) => {
    console.log(`Index ${idx}: ${val}`);
});
console.log();

console.log("For...of (values):");
for (const val of [1, 2, 3]) {
    process.stdout.write(val + " ");
}
console.log("\n");

console.log("For...in (keys):");
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    process.stdout.write(`${key}:${obj[key]} `);
}
console.log("\n");

// ============= FUNCTION EXAMPLES =============
console.log("=== FUNCTIONS ===");

// 1. Function Declaration
function greet1(name) {
    return `Hello ${name}`;
}

// 2. Function Expression
const greet2 = function(name) {
    return `Hello ${name}`;
};

// 3. Arrow Function
const greet3 = (name) => `Hello ${name}`;

// 4. Default parameters
function add(a, b = 0) {
    return a + b;
}

// 5. Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log("Declaration:", greet1("Alice"));         // Hello Alice
console.log("Expression:", greet2("Bob"));            // Hello Bob
console.log("Arrow:", greet3("Charlie"));             // Hello Charlie
console.log("add(5):", add(5));                       // 5
console.log("add(5, 3):", add(5, 3));                 // 8
console.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));  // 15
console.log();

// ============= SCOPE EXAMPLES =============
console.log("=== SCOPE: var vs let vs const ===");

function scopeTest() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 10;  // overwrites outer x (function scope)
        let y = 20;  // inner y (block scope)
        const z = 30; // inner z (block scope)
        console.log("Inside if: x=" + x + ", y=" + y + ", z=" + z);
    }

    console.log("Outside if: x=" + x + ", y=" + y + ", z=" + z);
}

scopeTest();
// Output:
// Inside if: x=10, y=20, z=30
// Outside if: x=10, y=2, z=3
