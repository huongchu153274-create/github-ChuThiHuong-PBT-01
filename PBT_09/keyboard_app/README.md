API đã dùng: Không dùng API bên ngoài.

Cách chạy:
- Mở `keyboard_app/index.html` và nhấn phím để xem `keydown` events.
- Hoặc chạy static server:
  - `python -m http.server 8000`
  - `npx http-server . -p 8000`

Ghi chú: Ứng dụng demo lắng nghe `keydown` trên `window` và hiển thị `key`/`code`/modifier flags.