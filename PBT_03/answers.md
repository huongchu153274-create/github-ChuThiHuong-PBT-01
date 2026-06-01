PHIẾU BÀI TẬP 03 - CSS CORE — Selectors, Box Model, Inheritance & Cascade

PHẦN A — KIỂM TRA ĐỌC HIỂU

 A1 — 3 Cách nhúng CSS

 1) Inline
- Ví dụ:
	<p style="color: red;">Hello</p>
	Ưu điểm: Áp dụng nhanh, cụ thể cho 1 element.
	Nhược điểm: Khó bảo trì, không tái sử dụng, làm file HTML lộn xộn.
	Khi dùng: Test nhanh hoặc override tạm thời, hoặc trong email HTML hạn chế.

 2) Internal (embedded)
- Ví dụ:
	<head>
		<style>
			p { color: blue; }
		</style>
	</head>
	Ưu điểm: Không cần file ngoài, thuận tiện cho trang đơn lẻ.
	Nhược điểm: Không tái sử dụng giữa nhiều trang; làm trang nặng.
	Khi dùng: Trang demo nhỏ, tài liệu mẫu, hoặc khi cần style chỉ cho 1 file.

 3) External
- Ví dụ:
	<link rel="stylesheet" href="style.css">
	Ưu điểm: Tái sử dụng, cache trình duyệt, tách rời nội dung & trình bày.
	Nhược điểm: Thêm request (nhưng có cache); cần quản lý đường dẫn.
	Khi dùng: Hầu hết các dự án thực tế, nhiều trang cùng style.

 Nếu cùng 1 element có cả 3 cách áp dụng: ưu tiên theo specificity và importance. Thứ tự chung khi không có !important: inline > id > class > element; nếu có !important, !important thắng (trong author stylesheet) — và nếu nhiều !important thì so specificity. Nói ngắn: inline style thường "thắng" so với internal/external (nếu không có !important khác).

 A2 — CSS Selectors — Dự đoán kết quả

 HTML dùng để kiểm tra (xem file `PBT_03/selectors_test.html`). Dưới đây là đáp án dự đoán (text content):
 1. h1 → Chọn: "ShopTLU"
 2. .price → Chọn: "25.990.000đ" và "45.990.000đ" (hai phần tử <p class="price">)
 3. #app header → Chọn: toàn bộ thẻ <header> (chứa h1 và nav). Text: "ShopTLU" plus link texts.
 4. nav a:first-child → Chọn: thẻ <a href="/" class="active">Home</a" (text: "Home")
 5. .product.featured h2 → Chọn: <h2> của article có class "product featured" → "MacBook Pro"
 6. article > p → Chọn: các <p> là con trực tiếp của article: trong mỗi article có 2 <p> (price và mô tả). Kết quả: "25.990.000đ", "Mô tả sản phẩm...", "45.990.000đ", "Mô tả sản phẩm..." (tổng 4 phần tử)
 7. a[href="/"] → Chọn: <a href="/" class="active">Home</a" (text: "Home")
 8. .top-bar.dark h1 → Chọn: "ShopTLU"

 Kiểm chứng: mở `PBT_03/selectors_test.html` và quan sát các highlight.

 A3 — Box Model — Tính toán kích thước

 /* Trường hợp 1: content-box (mặc định) */
 .box-1 {
		 width: 400px;
		 padding: 20px;
		 border: 5px solid black;
		 margin: 10px;
 }
 → Chiều rộng hiển thị = width (content) + padding-left + padding-right + border-left + border-right = 400 + 20 + 20 + 5 + 5 = 450px
 → Không gian chiếm trên trang = chiều rộng hiển thị + margin-left + margin-right = 450 + 10 + 10 = 470px

 /* Trường hợp 2: border-box */
 .box-2 {
		 box-sizing: border-box;
		 width: 400px;
		 padding: 20px;
		 border: 5px solid black;
		 margin: 10px;
 }
 → Chiều rộng hiển thị = 400px (width bao gồm padding & border)
 → Kích thước content thực tế = width - padding*2 - border*2 = 400 - 40 - 10 = 350px
 → Không gian chiếm trên trang = 400 + 10 + 10 = 420px

 /* Trường hợp 3: Margin collapse */
 .box-a { margin-bottom: 25px; }
 .box-b { margin-top: 40px; }
 → Khoảng cách giữa box-a và box-b = 40px (hai margin kề nhau sẽ collapse và kết quả là giá trị lớn hơn của hai margin)
 → Giải thích: Khi hai margins dọc đứng cạnh nhau (adjacent vertical margins), chúng không cộng mà "collapse" thành một margin duy nhất bằng phần lớn hơn (nếu cả hai dương). Vì vậy 40px chứ không phải 25+40=65px.

 Nâng cao: Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px → khoảng cách = 30px (40 + (-10) = 30). Khi một margin âm, kết quả là tổng đại số.

 A4 — Specificity

 Rules targeting <p class="price" id="main-price">:

 Rule A: p { color: black; }                    /* Specificity: (0,0,1) */
 Rule B: .price { color: blue; }               /* Specificity: (0,1,0) */
 Rule C: #main-price { color: red; }           /* Specificity: (1,0,0) */
 Rule D: p.price { color: green; }             /* Specificity: (0,1,1) */

 So sánh: Rule C có specificity cao nhất (ID), nên element có màu đỏ.

 Nếu thêm inline style: <p class="price" id="main-price" style="color: orange;"> thì inline style thắng các rule trên (màu cam).

 Nếu Rule A thêm !important (p { color: black !important; }): !important sẽ vượt qua các khai báo không có !important, nên element sẽ màu đen (quan trọng: nếu có nhiều !important thì specificity giữa các rule !important quyết định — ID !important sẽ thắng class !important, v.v.).

 PHẦN C — Debug & Suy Luận

 C1 — Debug layout (debug_layout.html)

 1) Vấn đề: Nội dung chính bị đẩy xuống dưới sidebar do tổng chiều rộng (width + padding + border) vượt quá không gian chứa khi dùng box-sizing: content-box.
 2) Kiểm tra: Mở `debug_layout.html` và xem phần "Broken example" — phần content không nằm cạnh sidebar.
 3) Giải pháp:
	 - Fix 1: Sử dụng `box-sizing: border-box;` cho các phần tử layout để padding và border được tính vào trong width, giúp chiều rộng thực tế không vượt quá giới hạn.
	 - Fix 2: Giảm width/padding hoặc border của các phần tử (nếu không muốn thay đổi box-sizing).
 4) Kết luận: Áp dụng `box-sizing: border-box;` là cách phổ biến hiện nay để tránh lỗi layout liên quan đến padding/border làm tràn kích thước.

 C2 — Kiểm chứng

 - Xem `PBT_03/devtools_boxmodel.html` để minh hoạ box-model (có screenshot trong `screenshots/`).
 - Các sửa trên đã được nêu trong file `debug_layout.html` (phần Fix 1/2) và ảnh minh hoạ đã được tạo trong thư mục `screenshots/`.


