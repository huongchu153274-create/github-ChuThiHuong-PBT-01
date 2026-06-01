# PHIẾU BÀI TẬP 08 — JAVASCRIPT FUNCTIONS, ARRAYS & OBJECTS
# ĐÁP ÁN CHI TIẾT

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

**Cùng 1 hàm `tinhThueBaoHiem(luong)` — 3 cách:**

```javascript
// 1. Function Declaration
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
}

// 2. Function Expression (anonymous)
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};

// 3. Arrow Function
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

**Câu hỏi: Khác nhau về hoisting?**

| Cách | Hoisting | Ví dụ |
|------|----------|-------|
| **Declaration** | ✅ Hoisted fully — có thể gọi TRƯỚC khai báo | `tinhThue(20000000)` ở dòng 1 → OK |
| **Expression** | ❌ Hoisted nhưng = undefined — gọi sẽ lỗi | `tinhThue(20000000)` ở dòng 1 → TypeError |
| **Arrow** | ❌ Giống Expression — không hoisted | `tinhThue(20000000)` ở dòng 1 → TypeError |

**Ví dụ code minh họa:**

```javascript
// ✓ OK — Function Declaration được hoisted toàn bộ
console.log(tinhThue(20000000)); // Chạy bình thường!

function tinhThue(luong) {
    return luong > 11000000 ? luong * 0.1 : 0;
}

// ❌ LỖI — Function Expression không được hoisted
console.log(tinhThue2(20000000)); // TypeError: tinhThue2 is not a function

const tinhThue2 = function(luong) {
    return luong > 11000000 ? luong * 0.1 : 0;
};
```

**Tại sao?**
- Function Declaration: JavaScript hoisting nâng toàn bộ function definition lên đầu scope
- Function Expression: Chỉ hoisting variable name (= undefined), không hoisting function body
- Arrow Function: Giống Expression (dùng const)

---

### Câu A2 (5đ) — Scope & Closure

**Đoạn 1 — Counter Closure:**

```javascript
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

**Giải thích:**
- `counter()` tạo hàm với `let count = 0` (private variable)
- Mỗi call `.increment()` → `++count` → return count
- Mỗi call `.decrement()` → `--count` → return count
- `count` được "nhớ" trong closure — không thay đổi giữa lần gọi

---

**Đoạn 2 — var vs let trong setTimeout:**

```javascript
// ❌ var — tất cả setTimeout "nhớ" cùng i cuối cùng (= 3)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
// Output sau 100ms: var: 3, var: 3, var: 3

// ✓ let — mỗi loop iteration có i riêng (block scope)
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
// Output sau 200ms: let: 0, let: 1, let: 2
```

**Tại sao khác nhau?**

| Loại | Scope | Kết quả | Lý do |
|------|-------|--------|-------|
| **var** | Function scope | 3, 3, 3 | `i` là biến global/function scope — khi setTimeout chạy, `i` đã = 3 |
| **let** | Block scope | 0, 1, 2 | Mỗi iteration có block riêng, `j` được "capture" từng lần |

**Giải pháp nếu dùng var:**

```javascript
for (var i = 0; i < 3; i++) {
    (function(idx) {
        setTimeout(() => console.log("var:", idx), 100);
    })(i);  // IIFE tạo closure cho từng i
}
// Output: 0, 1, 2 ✓
```

---

### Câu A3 (5đ) — Array Methods (1 dòng mỗi cái)

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

1. nums.filter(n => n % 2 === 0)                              // [2, 4, 6, 8, 10]
2. nums.map(n => n * 3)                                       // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
3. nums.reduce((sum, n) => sum + n, 0)                        // 55
4. nums.find(n => n > 7)                                      // 8
5. nums.some(n => n > 10)                                     // false
6. nums.every(n => n > 0)                                     // true
7. nums.map((n, i) => `Số ${n} là ${n % 2 ? 'lẻ' : 'chẵn'}`) // ["Số 1 là lẻ", "Số 2 là chẵn", ...]
8. [...nums].reverse()                                        // [10, 9, 8, ..., 1]
```

---

### Câu A4 (5đ) — Object Destructuring & Spread

**Dự đoán output:**

```javascript
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  
// → "iPhone 16" 25990000 8 "Titan"

console.log(specs);  
// → ReferenceError: specs is not defined
// (specs được destructured thành ram/color, không tạo biến specs)

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            
// → 23990000 (đã update)

console.log(updated.sale);             
// → true (property mới)

console.log(product.price);            
// → 25990000 (gốc không thay đổi)

// Spread gotcha — shallow copy!
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        
// → 16 (không phải 8!)
// Tại sao? Spread chỉ copy shallow — specs object vẫn dùng chung tham chiếu
```

**Giải thích Shallow Copy vs Deep Copy:**

```javascript
// Shallow copy (spread operator):
const copy = { ...product };
copy.specs.ram = 16;  // Ảnh hưởng đến gốc vì specs là reference!

// Deep copy (cần copy nested objects):
const deepCopy = {
    ...product,
    specs: { ...product.specs }
};
deepCopy.specs.ram = 16;  // Không ảnh hưởng đến gốc ✓
```

---

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Refactor Code

**Code cũ (Ugly):**
```javascript
// ~25 dòng code tệ
```

**Refactored (~8 dòng, sạch và hiệu quả):**

```javascript
function processOrders(orders) {
    return orders
        .filter(o => o.status === "completed" && o.total > 100000)
        .map(o => ({
            ...o,
            discount: o.total * 0.1
        }))
        .map(o => ({ ...o, finalTotal: o.total - o.discount }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
}
```

**Hoặc gọn hơn nữa:**

```javascript
function processOrders(orders) {
    return orders
        .filter(o => o.status === "completed" && o.total > 100000)
        .map(o => ({ id: o.id, customer: o.customer, total: o.total, discount: o.total * 0.1, finalTotal: o.total * 0.9 }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
}
```

**Cải thiện:**
- ✓ Loại bỏ vòng lặp nested (bubble sort tệ)
- ✓ Dùng `filter` + `map` + `sort` (functional)
- ✓ Arrow functions ngắn gọn
- ✓ Dùng spread operator `...` và destructuring
- ✓ Dễ đọc, dễ maintain

---

### Câu C2 (10đ) — Implement Custom miniArray

**Implement lại map, filter, reduce:**

```javascript
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// Test phải pass:
console.log(miniArray.map([1,2,3], x => x * 2));         // → [2,4,6]
console.log(miniArray.filter([1,2,3,4], x => x > 2));   // → [3,4]
console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10
```

**Giải thích:**

| Method | Công dụng | Return |
|--------|-----------|--------|
| **map** | Transform mỗi element qua fn | Array mới (cùng length) |
| **filter** | Giữ elements thỏa fn | Array mới (có thể ngắn hơn) |
| **reduce** | Gộp toàn bộ thành 1 giá trị | Giá trị scalar (number, string, object) |

---

## 📋 CHECKLIST PHẦN B

- ✅ `product_manager.js` — 8 functions (filter, sort, cheapest, total, format, rating, search)
- ✅ `shopping_cart.js` — Cart module dùng Closure (7 methods)
- ✅ `higher_order.js` — pipe, memoize, debounce, retry + bonus (compose, curry)
