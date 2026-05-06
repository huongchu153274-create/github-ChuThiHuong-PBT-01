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


