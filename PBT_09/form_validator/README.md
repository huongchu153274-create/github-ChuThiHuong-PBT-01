API đã dùng: Không dùng API bên ngoài.

Cách chạy:
- Mở `form_validator/index.html` trong trình duyệt.
- Hoặc chạy static server (nên dùng nếu muốn test cùng domain với các API khác):
  - `python -m http.server 8000`
  - `npx http-server . -p 8000`

Ghi chú: Validation tận dụng thuộc tính HTML5 (`required`, `type=email`, `pattern`) và xử lý `submit` bằng `script.js`.