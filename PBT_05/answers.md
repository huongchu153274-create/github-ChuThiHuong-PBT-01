# PHIẾU BÀI TẬP 05 — CSS RESPONSIVE & SCSS (ĐÁP ÁN)

## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 (5đ) — Viewport & Mobile-First

- Thẻ viewport chuẩn:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- Giải thích các thuộc tính:
  - `width=device-width`: đặt width của viewport bằng chiều rộng thực tế của thiết bị (device-width) thay vì kích thước ảo của viewport desktop.
  - `initial-scale=1`: thiết lập mức thu phóng ban đầu (1 = 100%).

- Nếu THIẾU thẻ này: trình duyệt mobile (ví dụ iPhone) sẽ giả lập viewport rộng (thường ~980px) và thu nhỏ toàn bộ trang để vừa màn hình, dẫn tới chữ nhỏ, layout không responsive, các media queries theo `min-width` có thể không kích hoạt đúng; giao diện trông giống phiên bản desktop thu nhỏ.

- Mobile-First vs Desktop-First (ví dụ breakpoint 768px):

Mobile-First (khuyến nghị):
```css
/* styles cho mobile mặc định */
.container { padding: 12px; }

@media (min-width: 768px) {
  /* styles cho tablet+ */
  .container { padding: 24px; }
}
```

Desktop-First:
```css
/* styles cho desktop mặc định */
.container { padding: 24px; }

@media (max-width: 767px) {
  /* styles cho mobile */
  .container { padding: 12px; }
}
```

- Tại sao Mobile-First được khuyên dùng:
  - Bắt đầu với thiết kế cho màn nhỏ (điểm yếu nhất) và dần nâng cao (progressive enhancement).
  - CSS viết theo `min-width` (tăng dần) thường nhỏ gọn hơn và tận dụng cascade tốt hơn.
  - Hiệu năng trên mobile tốt hơn (ít style nặng cho thiết bị nhỏ).

### Câu A2 (5đ) — Breakpoints chuẩn (theo Bootstrap)

- Thông thường (Bootstrap 5):
  - `xs` (extra small): <576px — Điện thoại nhỏ — ví dụ: lưới sản phẩm 1 cột
  - `sm` (small): ≥576px — Điện thoại lớn / small tablet — ví dụ: 2 cột
  - `md` (medium): ≥768px — Tablet — ví dụ: 2–3 cột
  - `lg` (large): ≥992px — Laptop nhỏ/desktop — ví dụ: 3–4 cột
  - `xl` (extra large): ≥1200px — Desktop lớn — ví dụ: 4–5 cột
  - `xxl`: ≥1400px — Màn rất lớn — ví dụ: 4–6 cột

- Ví dụ ứng dụng (lưới sản phẩm):
  - <576px → 1 cột
  - ≥576px → 2 cột
  - ≥768px → 3 cột
  - ≥992px → 4 cột
  - ≥1200px → 4–5 cột tuỳ thiết kế

### Câu A3 (5đ) — Media Queries (điền bảng)

CSS được cho:

.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }

Bảng kết quả (khi không xét box-sizing khác):

- 375px (iPhone SE): `.container` dùng rule mặc định `width: 100%` → width = 375px
- 600px: thỏa `min-width:576px` → width = 540px
- 800px: thỏa `min-width:768px` → width = 720px
- 1000px: thỏa `min-width:992px` → width = 960px
- 1400px: thỏa `min-width:1200px` → width = 1140px

Ghi chú: padding 10px được áp dụng ngoài width khi `box-sizing: content-box`; nếu `box-sizing: border-box` thì padding đã nằm trong width.

### Câu A4 (5đ) — SCSS Basics

4 tính năng chính của SCSS (kèm ví dụ):

1) Variables
```scss
$primary-color: #ff6a00;
button{ background: $primary-color; color: #fff; }
```

2) Nesting (viết CSS lồng nhau)
```scss
.nav{
  ul{ list-style:none; }
  li{ display:inline-block;
    a{ color:#333; text-decoration:none; }
  }
}
```

3) Mixins (`@mixin`, `@include`)
```scss
@mixin btn($bg,$color){
  background:$bg; color:$color; padding:8px 12px; border-radius:4px;
}
.btn-primary{ @include btn(#d23,#fff); }
```

4) `@extend` / Inheritance
```scss
%card-base{ padding:12px; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.08); }
.card{ @extend %card-base; background:#fff }
.panel{ @extend %card-base; background:#f8f8f8 }
```

- Tại sao trình duyệt KHÔNG đọc được file `.scss`?
  - `.scss` là ngôn ngữ preprocessor (cú pháp mở rộng), không phải CSS thuần tuý — trình duyệt chỉ hiểu CSS. Cần biên dịch/transpile `.scss` → `.css` trước khi phục vụ cho trình duyệt.

- Các bước chuyển SCSS → CSS:
  - Dùng Dart Sass / node-sass / công cụ build (webpack, gulp, vite...) để biên dịch: ví dụ `sass input.scss output.css`.
  - Kèm theo source maps (tuỳ chọn) để dễ debug.

---

Nếu bạn muốn, tôi có thể tạo thêm ví dụ SCSS (`PBT_05/styles.scss`) và biên dịch thành `styles.css` để bạn tải lên và kiểm tra.
