PBT_09 — DOM & Events (answers)

---

## PHẦN A — KIỂM TRA NGẮN (ví dụ đáp án)

1) Event delegation là gì và khi nào dùng?

- Event delegation: gắn listener lên ancestor và xử lý event cho các con (sử dụng event.target). Dùng khi có nhiều phần tử động hoặc muốn giảm số listener.

2) Nêu cách lưu/truy xuất localStorage và giới hạn dữ liệu?

- `localStorage.setItem('todos', JSON.stringify(arr))`, `JSON.parse(localStorage.getItem('todos'))` để đọc. Lưu ý: localStorage chỉ lưu chuỗi và có giới hạn dung lượng nhỏ (~5-10MB).

3) `addEventListener('click', fn)` vs `onclick = fn` khác nhau thế nào?

- `addEventListener` cho phép đăng ký nhiều handler; `onclick` chỉ gán 1 handler, ghi đè handler cũ.

---

## PHẦN B — BÀI TẬP (thư mục hiện có)

- `todo_app/` — Đã có: `index.html`, `style.css`, `app.js` (Todo app với add/remove, localStorage). Screenshot: `screenshots/PBT_09_todo_app_index.html.png`
- `product_catalog/` — (B2) Danh mục sản phẩm mẫu: `index.html`, `style.css`, `script.js`. Screenshot: `screenshots/PBT_09_product_catalog_index.html.png`
- `form_validator/` — (B3) Contact form với validation HTML + xử lý JS: `index.html`, `style.css`, `script.js`. Screenshot: `screenshots/PBT_09_form_validator_index.html.png`
- `keyboard_app/` — (B4) Ứng dụng thử phím: `index.html`, `style.css`, `script.js`. Screenshot: `screenshots/PBT_09_keyboard_app_index.html.png`

---

## PHẦN C — SUY LUẬN / GIẢI THÍCH (ví dụ)

- Thiết kế `todo_app`: sử dụng DOM API để render danh sách, lưu mảng tasks vào `localStorage` để giữ trạng thái. Dùng event delegation cho danh sách nếu cần nhiều nút động.
- `product_catalog`: dữ liệu mẫu được giữ trong một array JS và được render thành các card — cho phép mở rộng để lọc/sort.
- `form_validator`: tận dụng thuộc tính HTML5 (`required`, `type=email`, `pattern`) kết hợp xử lý `submit` bằng JS để hiển thị thông báo.
- `keyboard_app`: lắng nghe `keydown` tại window để hiển thị phím, giúp kiểm tra key/code và phím modifier.
