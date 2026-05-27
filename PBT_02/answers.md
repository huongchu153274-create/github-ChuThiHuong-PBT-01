PHẦN A
Câu A1: Input Types
1, type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

2, type="password" → Ô nhập ẩn ký tự (dấu chấm) → Dùng nhập mật khẩu. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

3, type="number" → Có nút tăng/giảm, chỉ nhận số → Dùng chọn số lượng hàng. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

4, type="tel" → Hiện bàn phím số trên mobile → Nhập số điện thoại nhận hàng. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

5, type="date" → Hiện bảng chọn ngày → Chọn ngày giao hàng. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

6, type="range" → Thanh trượt chọn giá trị → Bộ lọc khoảng giá sản phẩm. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

7, type="color" → Bảng chọn màu → Chọn màu sắc tùy chỉnh cho sản phẩm. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

8, type="url" → Kiểm tra định dạng http:// → Nhập link website cá nhân. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

9, type="file" → Chọn tệp từ máy tính → Tải ảnh minh họa khi khiếu nại. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

10, type="checkbox" → Ô tích chọn nhiều mục → Chọn các danh mục quan tâm. (Tham chiếu: Bài 07, mục 3 - Tất cả Input Types HTML5)

Câu A2:Validation Attributes

Dự đoán kết quả khi Submit:
TH1: Báo lỗi "Please fill out this field". Lý do: Thuộc tính requied bắt buộc nhập.(Tham chiếu: Bài 07, mục 3 - Validation Attributes)

TH2: Báo lỗi định dạng email. Lý do: Giá trị "abc" không khớp cấu trúc email chuẩn của type="email". (Tham chiếu: Bài 07, mục 0 - Opening Hook)

TH 3: Báo lỗi giá trị quá lớn. Lý do: 15 vượt quá max="10". (Tham chiếu: Bài 07, mục 3 - Validation Attributes)

TH 4: Báo lỗi không khớp định dạng. Lý do: "abc123" không khớp Regex [0-9]{10} (chỉ nhận 10 số). (Tham chiếu: Bài 07, mục 3 - Validation Attributes)

TH 5: Báo lỗi độ dài. Lý do: "123" ngắn hơn minlength="8". (Tham chiếu: Bài 07, mục 3 - Validation Attributes)

Câu A3:Accessibility

Tầm quan trọng của <label for>: Screen reader đọc tên nhãn khi focus vào input; tăng vùng tương tác khi click. (Tham chiếu: Bài 07, mục 3 - Accessibility)

Sử dụng <fieldset> + <legend>: Dùng để nhóm các input liên quan. VD: Nhóm thông tin "Địa chỉ giao hàng". (Tham chiếu: Bài 07, mục 3 - Accessibility)

aria-label: Dùng khi không có nhãn văn bản hiển thị (nút icon). Không dùng khi đã có <label> vì nó sẽ ghi đè nhãn gốc. (Tham chiếu: Bài 07, mục 3 - Accessibility)

Câu A4:Media

loading="lazy": Chỉ tải ảnh khi user scroll đến gần. Cải thiện Page Load Speed. Không dùng cho ảnh "above the fold". (Tham chiếu: Bài 06, mục 3 -  Best Practices)

Nhiều <source> trong <video>: Để hỗ trợ fallback cho các trình duyệt khác nhau. Format: MP4, WebM, Ogg. (Tham chiếu: Bài 06, mục 3 - Video & Audio)

Thuộc tính alt: Mô tả ảnh cho screen reader hoặc khi ảnh lỗi.

iPhone 16: Mô tả chi tiết sản phẩm.

Trang trí: alt="".

Biểu đồ: Mô tả số liệu/xu hướng chính. (Tham chiếu: Bài 06, mục 3 -  Best Practices)

Câu A5: So sánh <figure> vs <img>

<!-- Cách 1 -->
<img src="product.jpg" alt="iPhone">

Cách 1 (<img>): Dùng cho ảnh trang trí, icon hoặc ảnh là một phần không thể tách rời của dòng văn. (Tham chiếu: Bài 06, mục 7 - Common Misconceptions)

<!-- Cách 2 -->
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>

Cách 2 (<figure>): Dùng cho nội dung độc lập, có chú thích (figcaption) và có thể di chuyển vị trí mà không hỏng mạch văn. (Tham chiếu: Bài 06, mục 6 - Hands-on Practice)

PHẦN B — THỰC HÀNH (Ghi chú các file)

B1 — Form Đăng ký Tài khoản
- File: `register.html` (đã tạo trong PBT_02). Nội dung:
    - 3 fieldset: "Thông tin cá nhân", "Tài khoản", "Thông tin giao hàng" (mỗi fieldset có `legend`).
    - Các input có `label for`, `id`/`name`, `placeholder`.
    - Validation attributes: `required`, `minlength`, `maxlength`, `pattern` (username/password/phone), `type="email"`, `type="tel"`, `type="date"` (max = ngày hiện tại).
    - Password confirm: HTML không thể so sánh 2 giá trị password để xác nhận bằng riêng attributes; cần JavaScript (hoặc server-side) để kiểm tra equality trước khi submit.

B2 — Trang Multimedia
- File: `media.html` (đã tạo). Gồm:
    - Inline SVG logo
    - 3 figures với `img` + `figcaption`, `loading="lazy"`, `alt` phù hợp
    - YouTube iframe
    - `<video>` có `poster` và 2 sources (mp4 + webm)
    - `<audio>` cho nhạc giới thiệu

B3 — Form Đặt hàng
- File: `checkout.html` (đã tạo). Gồm:
    - Bảng giỏ hàng với `thead`, `tbody`, `tfoot` và `colspan` cho tổng cộng
    - Phần thanh toán: radio buttons, mã giảm giá với `pattern="SALE[0-9]{4}"`, textarea ghi chú
    - Phần giao hàng: `date` (min = ngày mai), `select` cho khung giờ, `range` để chọn số ngày, `button type="submit"` với `aria-label`
    - Bonus: sử dụng `<datalist>` cho tìm kiếm sản phẩm và `<output>` tĩnh cho tổng tiền, `<progress>` hiển thị tiến độ

PHẦN C — PHÂN TÍCH & SUY LUẬN

C1 — Debug Form (8 lỗi & sửa)
Form gốc (đã cho) chứa những vấn đề sau:
Lỗi 1: "Tên" không có `<label for>` và input không có `id`/`name` → Accessibility & form submission.
    Sửa: `<label for="name">Tên:</label><input id="name" name="name" type="text" required>`

Lỗi 2: Email thiếu `label` và `name`, có thể thiếu `required`/`type="email"` → không có kiểm tra định dạng.
    Sửa: `<label for="email">Email:</label><input id="email" name="email" type="email" required>`

Lỗi 3: Hai trường mật khẩu thiếu `label`/`id`/`name` và thiếu minlength/pattern.
    Sửa: thêm `<label>` cho mỗi, `minlength="8" pattern="(?=.*\d)(?=.*[A-Z]).{8,}"`, và kiểm tra match bằng JS trước submit.

Lỗi 4: Phone dùng `type="text"` và có `value` mặc định → nên dùng `type="tel"` và `pattern="[0-9]{10}"` hoặc tương ứng; không nên tiền điền giá trị không an toàn.
    Sửa: `<label for="phone">Phone:</label><input id="phone" name="phone" type="tel" pattern="[0-9]{10}" placeholder="0987654321">`

Lỗi 5: `<select>` thiếu `label` và `name` → không truy xuất/ghi nhãn cho screen reader.
    Sửa: `<label for="city">Tỉnh/TP:</label><select id="city" name="city">...</select>`

Lỗi 6: Checkbox điều khoản có `label` nhưng không liên kết với input cụ thể (không có input checkbox) → không thể kiểm tra trạng thái.
    Sửa: `<input type="checkbox" id="terms" name="terms" required><label for="terms">Tôi đồng ý điều khoản</label>`

Lỗi 7: Submit sử dụng `<input type="submit">` không có `aria-label` nếu cần cho icon; tốt nhất dùng `<button type="submit" aria-label="Gửi">` để rõ ràng.

Lỗi 8: Form thiếu `action` và `method` cụ thể → không xác định điểm gửi. Sửa: `<form action="#" method="post">` (hoặc URL server-side).

C2 — Thiết kế chiến lược Validation (Ngân hàng số)
1) Regex patterns:
     - CMND/CCCD (12 chữ số): `^\d{12}$`
     - Số tài khoản (10–15 chữ số): `^\d{10,15}$`

2) HTML5 validation có hữu ích nhưng KHÔNG ĐỦ cho ứng dụng ngân hàng:
     - HTML5 chỉ kiểm tra client-side; attacker có thể bỏ qua bằng cách tắt JS hoặc gửi request lập trình. Vì vậy server-side validation/chứng thực là bắt buộc.

3) Ba loại validation HTML5 không xử lý đầy đủ (cần JS/server):
     - Kiểm tra tính duy nhất (unique) của dữ liệu (email, số tài khoản) — yêu cầu truy vấn cơ sở dữ liệu server-side.
     - Kiểm tra logic liên quan nhiều trường (cross-field) như số dư tài khoản so với giao dịch.
     - Phát hiện payload độc hại (XSS/SQL injection) — cần sanitization server-side.

4) Hai rủi ro nếu chỉ validate frontend:
     - Kẻ tấn công có thể bypass validation và gửi dữ liệu không hợp lệ hoặc độc hại tới API, gây gian lận hoặc lỗi.
     - Dữ liệu chưa sanitize có thể dẫn đến XSS hoặc injection khi lưu vào DB hoặc render ra client.

Kết luận: Kết hợp client-side HTML5 validation cho UX tốt và server-side validation + sanitization cho bảo mật.



