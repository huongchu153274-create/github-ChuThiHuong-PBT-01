API đã dùng: Không dùng API bên ngoài — lưu dữ liệu cục bộ bằng `localStorage`.

Cách chạy:
- Mở `todo_app/index.html` trực tiếp trong trình duyệt.
- Hoặc khởi một static server (khuyến nghị khi dùng `fetch` trên các trang khác):
  - Python: `python -m http.server 8000`
  - Node: `npx http-server . -p 8000`

Ghi chú: Ứng dụng lưu todo vào `localStorage` nên dữ liệu sẽ được giữ khi reload.