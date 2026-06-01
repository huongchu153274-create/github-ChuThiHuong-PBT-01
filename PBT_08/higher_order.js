// PHIẾU BÀI TẬP 08 — PHẦN B3: HIGHER-ORDER FUNCTIONS

// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);
console.log("=== 1. PIPE ===");
console.log(process(5)); // → "Kết quả: 20"
console.log();

// 2. memoize() — Cache kết quả
function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});

console.log("=== 2. MEMOIZE ===");
console.log("Lần 1:");
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log("Lần 2 (từ cache):");
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)
console.log();

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

console.log("=== 3. DEBOUNCE ===");
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

// Gọi liên tục
console.log("Gõ: 'J'");
search("J");
console.log("Gõ: 'Ja'");
search("Ja");
console.log("Gõ: 'Jav'");
search("Jav");
console.log("Gõ: 'Java'");
search("Java");
console.log("Chờ 600ms...");
setTimeout(() => {
    console.log("(Chỉ lần cuối 'Java' được in ra)\n");
}, 600);

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            console.log(`❌ Lỗi lần ${attempt}/${maxAttempts}: ${error.message}`);
            if (attempt === maxAttempts) {
                throw new Error(`Thất bại sau ${maxAttempts} lần thử`);
            }
            // Exponential backoff: 1s, 2s, 4s...
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt - 1) * 1000));
        }
    }
}

console.log("=== 4. RETRY ===");
let attempt = 0;
const unreliableTask = async () => {
    attempt++;
    if (attempt < 3) {
        throw new Error("Kết nối thất bại");
    }
    return "✓ Thành công!";
};

// Test retry
(async () => {
    try {
        const result = await retry(unreliableTask, 3);
        console.log(result);
    } catch (error) {
        console.log(`Final error: ${error.message}`);
    }
})();

// 5. Bonus: compose() — Giống pipe nhưng thứ tự ngược
function compose(...fns) {
    return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}

console.log("\n=== BONUS: COMPOSE (ngược chiều pipe) ===");
const composedProcess = compose(
    x => "Kết quả: " + x,
    x => x.toString(),
    x => x + 10,
    x => x * 2
);
console.log(composedProcess(5)); // → "Kết quả: 20"

// 6. Bonus: curry() — Partial application
function curry(fn) {
    const arity = fn.length; // Số tham số
    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }
        return fn.call(null, ...args);
    };
}

console.log("\n=== BONUS: CURRY ===");
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));        // 6
console.log(curriedAdd(1)(2, 3));       // 6
console.log(curriedAdd(1, 2)(3));       // 6
