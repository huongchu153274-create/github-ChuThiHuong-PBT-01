# PBT_10 — Async JavaScript & API

## PHẦN A — ĐỌC HIỂU

### Câu A1 — Sync vs Async (thứ tự output)
Dự đoán thứ tự in ra:
1. "1 - Start"
2. "4 - End"
3. "3 - Promise"
4. "6 - Promise 2"
5. "2 - Timeout 0ms"
6. "7 - Nested timeout"
7. "5 - Timeout 100ms"

Giải thích ngắn: Promise callbacks (microtasks) chạy sau stack hiện tại nhưng trước macrotasks (setTimeout). Microtask queue: Promise.then callbacks. Macrotask queue: setTimeout callbacks.

### Câu A2 — Fetch API
- `fetch(url)` trả về một Promise resolved với Response object.
- `await response.json()` parse body thành JS object.
- Sử dụng `try/catch` để bắt lỗi network hoặc lỗi parsing.
- Kiểm tra `response.ok` (status 2xx) trước khi parse.

## PHẦN B — THỰC HÀNH (demo)
File `fetch_demo.html` chứa ví dụ gọi `https://jsonplaceholder.typicode.com/posts` bằng `fetch` và hiển thị kết quả vào trang. Nó dùng `async/await`, xử lý lỗi, và có nút tải lại.

Lưu ý: Khi thực hành gọi API thật, cần tuân thủ CORS và giới hạn rate của API. Dùng Proxy hoặc server-side khi API yêu cầu API key.

---

## PHẦN A — KIỂM TRA NGẮN (ví dụ đáp án)

1) Nêu cách xử lý lỗi khi dùng `fetch`?

- Dùng `try/catch` xung quanh `await fetch()`, kiểm tra `response.ok` trước khi `response.json()`. Thông báo lỗi cho người dùng nếu không thành công.

2) Promise.all vs Promise.race — khi dùng?

- `Promise.all` khi cần tất cả kết quả hoàn thành; trả về reject nếu bất kỳ promise nào reject. `Promise.race` khi cần kết quả nhanh nhất (ví dụ timeout vs request).

---

## PHẦN C — SUY LUẬN (ví dụ)

- `weather_app/` (B1): mô phỏng trạng thái loading, success và error; hiển thị dữ liệu thời tiết khi success.
- `user_directory/` (B2): danh sách người dùng với trạng thái tải/ lỗi.
- `gallery/` (B3): gallery ảnh — trạng thái loading/loaded/error.
- `dashboard/` (B4): dashboard widget — trạng thái loading/success/error.


