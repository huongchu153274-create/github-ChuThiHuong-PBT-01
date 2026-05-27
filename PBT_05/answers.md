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

## PHẦN C — PHÂN TÍCH (ĐÁP ÁN)

### C1 — Phân tích trang thực tế: Shopee (ví dụ)

Lưu ý: tôi không thể mở DevTools hoặc chụp ảnh trực tiếp trong môi trường này. Dưới đây là phân tích tham khảo dựa trên quan sát phổ biến của các e‑commerce (ví dụ shopee.vn). Bạn có thể chạy chính xác trên trình duyệt của mình và thay các bước "chụp screenshot" theo hướng dẫn.

- Kích thước kiểm tra: Mobile 375px | Tablet 768px | Desktop 1440px

- Navigation thay đổi thế nào?
  - Desktop (1440px): Header rộng, logo bên trái, ô tìm kiếm lớn ở giữa, biểu tượng giỏ hàng/ứng dụng ở phải; menu chuyên mục ở dạng ngang hoặc mega-menu dropdown khi hover.
  - Tablet (768px): Header rút gọn; search vẫn hiện nhưng nhỏ hơn; một số menu được gộp vào menu chính; dropdown thay cho hover-based mega menu.
  - Mobile (375px): Header tối giản: logo + search icon + cart; menu chính ẩn sau hamburger hoặc trình đơn dạng slide/overlay; nhiều liên kết được chuyển vào menu hamburger hoặc bottom sheet.

- Lưới content thay đổi mấy cột?
  - Desktop: product grid thường 4 cột (hoặc nhiều hơn tùy chiều rộng). Sidebar filters hiện ở trái, ads / recommendations ở phải.
  - Tablet: transition xuống 2-3 cột (thường 2 cột cho 768px → 1024px range).
  - Mobile: 1 cột duy nhất để dễ đọc và nhấn.

- Elements bị ẩn trên mobile?
  - Sidebar filter (ẩn hoặc đưa vào collapsible filter panel).
  - Một số banner quảng cáo, biểu tượng phụ, văn bản mô tả dài có thể bị rút gọn.
  - Mega-menu hiển thị dưới dạng hamburger overlay.

- Font size có thay đổi không?
  - Thường có: base font-size nhỏ hơn trên mobile (ví dụ 14px), tăng dần trên tablet/desktop (15–16px). Headings cũng scale theo breakpoint.

- Tìm @media rules (hướng dẫn):
  - Mở DevTools → Styles → tìm các rules chứa `@media` (ví dụ `@media (max-width: 767px)` hoặc `@media (min-width: 992px)`).
  - Thông thường sẽ thấy `@media (min-width: 768px)` để chuyển từ mobile → tablet và `@media (min-width: 1024px)` cho desktop.

---

### C2 — Thiết kế Responsive Strategy (Trang Đặt bàn nhà hàng)

Yêu cầu: vẽ wireframe cho Mobile / Tablet / Desktop + CSS skeleton (mobile-first)

Wireframes (ASCII):

Mobile (<= 767px)
-----------------
HEADER (logo + phone)
HERO (ảnh toàn màn)
FORM (đặt bàn)  -- đặt sau hero hoặc mở modal khi bấm nút
GALLERY (6 images, 1 cột)
MAP (embed) - có thể ẩn hoặc collapse
FOOTER

Tablet (768px - 1023px)
-----------------------
HEADER (logo + phone)
HERO (ảnh)
FORM (nằm trên hoặc bên trên gallery)
GALLERY (2-3 cột)
MAP (ở dưới hoặc bên cạnh)
FOOTER

Desktop (>= 1024px)
-------------------
HEADER (logo + phone + nav)
HERO (ảnh lớn full-width)
MAIN: grid 2 cột - LEFT main (gallery 3 cột), RIGHT sidebar (form + map)
FOOTER

Chi tiết:
- Mobile: nên ẩn sidebar phục vụ, hoặc chuyển filter/chi tiết thành modal. Form đặt bàn nên đặt ở vị trí sớm trên mobile hoặc mở bằng modal từ nút sticky.
- Tablet: gallery 2-3 cột (3 cột nếu ngang lớn), map nếu đủ không gian có thể hiển thị cạnh gallery.
- Desktop: dùng grid 2 cột: main + sidebar. Sidebar chứa form và thông tin liên hệ; map có thể nằm dưới form hoặc lớn hơn tùy thiết kế.

CSS skeleton (mobile-first):

```css
/* PASTE into PBT_05/restaurant_skeleton.css */
*{box-sizing:border-box}
:root{--gap:16px}
body{margin:0;font-family:Arial,Helvetica,sans-serif}
.site{display:grid;grid-template-areas:
  "header"
  "hero"
  "form"
  "gallery"
  "map"
  "footer";gap:var(--gap);padding:16px}
.header{grid-area:header}
.hero{grid-area:hero}
.form{grid-area:form}
.gallery{grid-area:gallery;display:grid;grid-template-columns:1fr;gap:12px}
.map{grid-area:map}
.footer{grid-area:footer}

@media (min-width:768px){
  .gallery{grid-template-columns:repeat(3,1fr)}
}

@media (min-width:1024px){
  .site{grid-template-columns:1fr 360px;grid-template-areas:
    "header header"
    "hero hero"
    "gallery sidebar"
    "gallery sidebar"
    "footer footer"}
  .gallery{grid-template-columns:repeat(3,1fr)}
  .sidebar{grid-area:sidebar}
}

.card img{max-width:100%;height:auto}
