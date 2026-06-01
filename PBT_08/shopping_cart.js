// PHIẾU BÀI TẬP 08 — PHẦN B2: SHOPPING CART DÙNG CLOSURE

function createCart() {
    // Private data — không truy cập được từ bên ngoài
    let items = [];
    let discountCode = null;
    let discountPercent = 0;

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find(i => i.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
            console.log(`✓ Thêm ${quantity}x "${product.name}" vào giỏ`);
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            const index = items.findIndex(i => i.id === productId);
            if (index > -1) {
                const removed = items[index];
                items.splice(index, 1);
                console.log(`✓ Xóa "${removed.name}" khỏi giỏ`);
            } else {
                console.log(`✗ Không tìm thấy sản phẩm id=${productId}`);
            }
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            const item = items.find(i => i.id === productId);
            if (item) {
                if (newQuantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = newQuantity;
                    console.log(`✓ Cập nhật "${item.name}" → ${newQuantity} sản phẩm`);
                }
            } else {
                console.log(`✗ Không tìm thấy sản phẩm id=${productId}`);
            }
        },

        // Tính tổng tiền (trước khuyến mãi)
        getSubtotal() {
            return items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
        },

        // Tính tổng tiền (sau khuyến mãi)
        getTotal() {
            const subtotal = this.getSubtotal();
            return subtotal * (1 - discountPercent / 100);
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            const discounts = {
                "SALE10": 10,
                "SALE20": 20,
                "FREESHIP": 30000  // Giảm cố định, sẽ xử lý riêng
            };

            if (code === "FREESHIP") {
                // Giảm cố định 30,000đ
                discountCode = code;
                console.log(`✓ Áp dụng mã "${code}" — Giảm 30.000đ`);
                return;
            }

            if (discounts[code]) {
                discountCode = code;
                discountPercent = discounts[code];
                console.log(`✓ Áp dụng mã "${code}" — Giảm ${discountPercent}%`);
            } else {
                console.log(`✗ Mã khuyến mãi "${code}" không hợp lệ`);
            }
        },

        // In giỏ hàng dạng bảng
        printCart() {
            if (items.length === 0) {
                console.log("Giỏ hàng trống!");
                return;
            }

            console.log("\n┌──────────────────────────────────────────────────────────────────┐");
            console.log("│                         GIỎ HÀNG CỦA BẠN                         │");
            console.log("├────┬────────────────────┬────┬──────────────┬──────────────────┤");
            console.log("│ #  │ Sản phẩm           │ SL │ Đơn giá      │ Tổng             │");
            console.log("├────┼────────────────────┼────┼──────────────┼──────────────────┤");

            items.forEach((item, idx) => {
                const totalPrice = item.price * item.quantity;
                const formattedPrice = item.price.toLocaleString('vi-VN');
                const formattedTotal = totalPrice.toLocaleString('vi-VN');
                const name = item.name.substring(0, 18).padEnd(18);
                console.log(
                    `│ ${idx + 1}  │ ${name} │ ${String(item.quantity).padStart(2)} │ ${formattedPrice.padStart(12)} │ ${formattedTotal.padStart(16)} │`
                );
            });

            console.log("├────┴────────────────────┴────┴──────────────┴──────────────────┤");

            const subtotal = this.getSubtotal();
            const total = this.getTotal();
            const discount = subtotal - total;

            console.log(`│ Cộng tiền hàng:                                ${subtotal.toLocaleString('vi-VN').padStart(16)}đ │`);
            if (discountPercent > 0) {
                console.log(`│ Giảm giá (${discountPercent}%):                              ${discount.toLocaleString('vi-VN').padStart(16)}đ │`);
            }
            console.log(`│ ▶ TỔNG CỘNG:                                 ${total.toLocaleString('vi-VN').padStart(16)}đ │`);
            console.log("└──────────────────────────────────────────────────────────────────┘\n");
        },

        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },

        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discountCode = null;
            discountPercent = 0;
            console.log("✓ Giỏ hàng đã được làm trống");
        },

        // Get items (for inspection)
        getItems() {
            return [...items];
        }
    };
}

// ============= TEST =============
console.log("=== TEST SHOPPING CART ===\n");

const cart = createCart();

// Thêm sản phẩm
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

// Áp dụng khuyến mãi
console.log("Áp dụng khuyến mãi SALE10...");
cart.applyDiscount("SALE10");
cart.printCart();

// Cập nhật số lượng
console.log("Cập nhật AirPods Pro → 1 cái:");
cart.updateQuantity(3, 1);
cart.printCart();

// Xóa sản phẩm
console.log("Xóa sản phẩm id=3...");
cart.removeItem(3);
cart.printCart();

// Thông tin
console.log(`Số sản phẩm: ${cart.getItemCount()} cái`);
console.log(`Tổng tiền: ${cart.getTotal().toLocaleString('vi-VN')}đ`);

// Xóa toàn bộ
console.log("\nXóa toàn bộ giỏ...");
cart.clearCart();
console.log(`Số sản phẩm lúc này: ${cart.getItemCount()}`);
