# PHẦN C — SUY LUẬN (ĐÁP ÁN)

## C1 — Flexbox vs Grid: Khi nào dùng gì? (5 tình huống)

1) Navigation bar ngang (logo + menu + buttons)
- Chọn: Flexbox
- Lý do: Bố cục 1 chiều (horizontal) rất phù hợp với Flexbox; dễ căn giữa, phân phối khoảng cách và đặt logo/menu/button ở 3 vùng khác nhau.

2) Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- Chọn: CSS Grid (ưu tiên) hoặc Flexbox
- Lý do: Grid cho phép xác định cột cố định (`repeat(3,1fr)`) và xử lý gap/spacing tốt; Flexbox cũng làm được nhưng Grid thuận tiện hơn cho layout lưới nhiều hàng.

3) Layout blog: main content + sidebar
- Chọn: CSS Grid hoặc Flexbox (kết hợp)
- Lý do: Đây là layout 2 cột; Flexbox đủ dùng cho layout đơn giản, nhưng Grid cho kiểm soát track/areas tốt hơn khi cần responsive hoặc thay đổi vị trí (ví dụ mobile chuyển sidebar xuống dưới).

4) Footer với 4 cột thông tin
- Chọn: Grid (ưu tiên) hoặc Flexbox
- Lý do: Grid dễ cấu hình số cột và responsive (chuyển thành 2×2 trên mobile); Flexbox dễ dùng nếu chỉ cần 1 hàng cột đều hoặc `justify-content:space-between`.

5) Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
- Chọn: Flexbox (trong card) + Grid/Flexbox cho container
- Lý do: Để nút luôn dính đáy, đặt `.card { display:flex; flex-direction:column }` và `button { margin-top:auto }`. Container card có thể là Grid hoặc Flexbox tuỳ yêu cầu cột.

---

## C2 — Debug Flexbox (nguyên nhân + sửa)

Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

- Nguyên nhân: Các `.card` có chiều cao khác nhau; để nút dính đáy cần:
  1) container hàng kéo các card cùng hàng có cùng chiều cao (`align-items: stretch`),
  2) mỗi `.card` phải là flex column để `margin-top: auto` đẩy nút xuống đáy.

- Sửa (áp dụng cho code đang dùng `.cards` và `.card`):
```css
.cards { display:flex; flex-wrap:wrap; gap:20px; align-items:stretch; }
.card { flex:0 0 calc(25% - 20px); margin:0; display:flex; flex-direction:column; }
.card button { margin-top: auto; }
```

- Giải thích: `align-items:stretch` bắt các item trong hàng stretch về chiều dọc; `display:flex;flex-direction:column` trong `.card` cho phép nút dùng `margin-top:auto` để tự động nằm dưới cùng.

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên

- Nguyên nhân: Thiếu thuộc tính căn giữa của flex container. `display:flex` không tự động căn giữa cả hai trục.

- Sửa:
```css
.hero {
  height: 100vh;
  display: flex;
  justify-content: center; /* căn giữa ngang */
  align-items: center;     /* căn giữa dọc */
}
.hero-content{ text-align:center; width:100%; max-width:900px }
```

- Giải thích: `justify-content:center` và `align-items:center` căn chính giữa trên hai trục của flex container.

Lỗi 3: Sidebar bị co lại khi content quá dài

- Nguyên nhân: Khi layout là flex, nếu không ngăn cho sidebar co lại, phần tử có thể bị co do không đặt `flex` hợp lý; đồng thời nội dung chính có thể gây tràn.

- Sửa:
```css
.layout { display:flex; gap:20px; align-items:flex-start }
.sidebar { flex: 0 0 250px; /* cố định 250px */ }
.content { flex: 1 1 auto; min-width: 0; }
```

- Giải thích: `flex:0 0 250px` đảm bảo sidebar không co; `min-width:0` cho `.content` cho phép nội dung co đúng giới hạn và overflow xử lý nội dung dài.

---

Ghi chú: Tôi không thể chụp screenshot trong môi trường này; bạn hãy mở các file demo (`flexbox_layout.html`, `positioning.html`, `grid_layout.html`) trong trình duyệt để kiểm tra trước/sau áp dụng các sửa trên.
