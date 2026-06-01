# PHIẾU BÀI TẬP 06 — BOOTSTRAP 5

> **Track được chọn:** BOOTSTRAP 5 ✓

---

## PHẦN A — ĐỌC HIỂU (20 điểm)

### Câu A1 (10đ) — Grid System

**Bảng grid layout tại các kích thước:**

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| **Số cột hiển thị** | 1 cột | 2 cột | 4 cột |
| **Layout chi tiết** | Mỗi box chiếm toàn bộ chiều rộng (`col-12`) | Mỗi box 50% chiều rộng (`col-md-6` = 6/12) | Mỗi box 25% chiều rộng (`col-lg-3` = 3/12) |

**Giải thích:**
- `col-12` = 12/12 chiều rộng container (100%) — áp dụng mặc định cho mobile
- `col-md-6` = kích hoạt ở `md` (≥768px) — 6/12 = 50% chiều rộng
- `col-lg-3` = kích hoạt ở `lg` (≥992px) — 3/12 = 25% chiều rộng

**Câu hỏi:** `col-md-6` nghĩa là gì?
- `col-md-6` = "Column tại breakpoint Medium (≥768px), chiếm 6 cột từ tổng 12 cột = 50% chiều rộng"
- Breakpoint mobile (< 768px) sẽ kế thừa từ `col-12` (mặc định) = 100%
- Tại sao không cần `col-sm-12`? Vì `col-12` là mặc định cho TẤT CẢ breakpoints < `md`, bootstrap không cần khai báo lại.

---

### Câu A2 (10đ) — Utilities & Components

**1. Giải thích `d-none d-md-block`:**
- `d-none` = `display: none` — ẩn ở TẤT CẢ kích thước (mặc định)
- `d-md-block` = `display: block` ở breakpoint `md` (≥768px) trở lên
- **Kết quả:** Element này **ẩn trên mobile** (<768px), **hiện dạng block trên tablet+** (≥768px)

**2. 5 Spacing utilities (Margin/Padding):**

```css
.mt-3      → margin-top: 1rem (16px)
.mb-4      → margin-bottom: 1.5rem (24px)
.px-2      → padding-left + padding-right: 0.5rem (8px)
.p-5       → padding: 3rem (48px) — tất cả 4 cạnh
.ms-auto   → margin-left: auto — dùng để canh phải
```

**Cách đọc Bootstrap spacing:**
- `m/p` = margin/padding
- `t/b/l/r` = top/bottom/left/right
- `x` = left+right (horizontal), `y` = top+bottom (vertical)
- `1-5` = mức độ (1=0.25rem, 2=0.5rem, 3=1rem, 4=1.5rem, 5=3rem)

**3. Khác biệt `.container`, `.container-fluid`, `.container-md`:**

```html
.container         → width cố định, max-width: 1140px ở lg+, responsive tại breakpoints
.container-fluid   → width: 100% luôn luôn, không có max-width, chiếm toàn bộ viewport
.container-md      → width: 100% cho < md, từ md trở lên → width cố định như .container

<!-- Ví dụ -->
<div class="container">...</div>        <!-- Sẽ có lề trái/phải ở desktop -->
<div class="container-fluid">...</div>  <!-- Chiếm toàn bộ chiều rộng luôn -->
```

---

## PHẦN C — PHÂN TÍCH (20 điểm)

### Câu C1 (10đ) — Tùy biến Bootstrap

**1. Cách đổi `$primary` từ xanh sang `#E63946`:**

Bootstrap sử dụng Sass variables. Để tùy biến màu:

**Cách 1 (Dùng CSS override) — Nhanh:**
```css
/* Tạo file custom.css riêng -->
:root {
    --bs-primary: #E63946;
}
```
**Cách 2 (Dùng Sass override) — Chuyên:**
```scss
// _bootstrap-variables.scss (tạo file này TRƯỚC khi import bootstrap)
$primary: #E63946;

// Sau đó import bootstrap
@import "~bootstrap/scss/bootstrap";
```
Quy trình:
1. Cài đặt Node.js + npm
2. Cài đặt Bootstrap via npm: `npm install bootstrap`
3. Tạo file SCSS riêng, override variables
4. Compile: `sass custom.scss custom.css`
5. Link file CSS compiled vào HTML

**2. Tại sao KHÔNG nên override trực tiếp `.btn-primary { background: red; }`:**
- **Specificity cao:** CSS rule override có priority cao, khó thay đổi sau
- **Khó bảo trì:** Nếu thay đổi màu, phải tìm tất cả override ở nhiều nơi
- **Xung đột:** Khi Bootstrap update, customize của bạn có thể bị override
- **Giải pháp tốt:** Dùng Sass variables từ đầu → chỉ cần đổi 1 chỗ → áp dụng toàn bộ

---

### Câu C2 (10đ) — So sánh CSS thuần vs Bootstrap

**Kịch bản:** Tạo 1 Navbar responsive + 1 Product Card

**CSS Thuần:**

```css
/* navbar.css — ~120 dòng code -->
.navbar { ... }
.nav { display: flex; gap: 20px; }
.nav-toggle { display: none; }
@media (max-width: 768px) {
    .nav { display: none; }
    .nav-toggle { display: block; }
    .nav.open { display: flex; }
}

/* card.css — ~80 dòng -->
.card { border: 1px solid #ddd; border-radius: 8px; ... }
.card:hover { transform: translateY(-8px); box-shadow: 0 12px 24px rgba(...); }
/* Media queries cho responsive ... */
```
**Tổng:** ~200-250 dòng CSS + HTML chuẩn hoá

**Bootstrap:**

```html
<!-- navbar -->
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">☰</button>
        <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav ms-auto">
                <li><a class="nav-link" href="#">Link</a></li>
            </ul>
        </div>
    </div>
</nav>

<!-- card -->
<div class="card">
    <img class="card-img-top" src="...">
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```
**Tổng:** ~50 dòng HTML (Bootstrap xử lý CSS + Responsive + JavaScript interaction)

**Bảng so sánh:**

| Tiêu chí | CSS Thuần | Bootstrap |
|----------|-----------|-----------|
| **Số dòng CSS cần viết** | 200-300 | 0 (dùng sẵn) |
| **Thời gian phát triển** | 2-3 giờ | 30 phút |
| **Khả năng tùy biến** | 100% — có thể làm gì cũng được | 80% — hạn chế bởi design system |
| **Mobile responsive** | Phải viết media queries | Tự động đi kèm |
| **Consistency** | Phụ thuộc developer | Nhất quán theo design system |
| **Bundle size** | Nhỏ (chỉ code cần) | Lớn hơn (~50-100KB) |
| **JavaScript interactivity** | Phải code từ đầu | Tích hợp (modal, dropdown, toast...) |

**Khi NÊN dùng Bootstrap:**
- ✅ Dự án deadline gấp (landing page, MVP, admin dashboard)
- ✅ Team lớn → cần consistency nhanh
- ✅ Không cần customization quá cao
- ✅ Muốn hỗ trợ accessibility & responsive sẵn
- ✅ Cần components có sẵn (modal, carousel, navbar)

**Khi KHÔNG NÊN dùng Bootstrap:**
- ❌ Dự án yêu cầu design độc lạ, không theo chuẩn
- ❌ Performance critical (Single Page App, mobile app)
- ❌ Bundle size quan trọng
- ❌ Muốn 100% kiểm soát styling
- ❌ Có design system riêng phức tạp → dùng TailwindCSS thay

---

## 📋 PHẦN B — THỰC HÀNH

### Bài B1 ✓ — Landing Page Bootstrap  
**File:** `bootstrap_landing.html`
- ✅ Navbar: responsive, collapse ở mobile
- ✅ Carousel: 3 slides với control
- ✅ Product grid: 1 cột mobile → 2 cột tablet → 4 cột desktop
- ✅ Cards: badge, hover effect, modal popup
- ✅ Modal: 8 modals cho từng sản phẩm
- ✅ Footer: 4 cột grid responsive
- ✅ 100% Bootstrap utilities — KHÔNG có CSS tùy chỉnh

### Bài B2 ✓ — Dashboard Layout
**File:** `bootstrap_dashboard.html`
- ✅ Sidebar cố định + responsive
- ✅ Topbar: breadcrumb + user dropdown  
- ✅ Stat cards: 4 cards với status
- ✅ Table: striped, hover, responsive
- ✅ Accordion: FAQ section
- ✅ Alerts: 4 loại (success, warning, info, danger)
- ✅ Pagination + search bar

---

## Track B — TailwindCSS (added)

I đã thêm phiên bản Track B (Tailwind) demo để đáp ứng yêu cầu Track B:

- `PBT_06/tailwind_landing.html` — Landing demo sử dụng CDN Tailwind (`cdn.tailwindcss.com`) (mobile/tablet/desktop)
- `PBT_06/tailwind_components.html` — các component Tailwind (buttons, cards, form)

### Dark mode

- Tailwind demo cấu hình `darkMode: 'class'`. Một ảnh dark-mode đã được tạo: `PBT_06_tailwind_landing_dark_desktop_1440.png`.

### Screenshots (Tailwind)

- `PBT_06_tailwind_landing_mobile_375.png`
- `PBT_06_tailwind_landing_tablet_768.png`
- `PBT_06_tailwind_landing_desktop_1440.png`
- `PBT_06_tailwind_landing_dark_desktop_1440.png`
- `PBT_06_tailwind_components_mobile_375.png`
- `PBT_06_tailwind_components_tablet_768.png`
- `PBT_06_tailwind_components_desktop_1440.png`

Files are in `screenshots/`.

### C3 — Screenshots for submission

- Screenshots created for Track A (Bootstrap) at 3 breakpoints:
    - `PBT_06_bootstrap_landing_mobile_375.png`
    - `PBT_06_bootstrap_landing_tablet_768.png`
    - `PBT_06_bootstrap_landing_desktop_1440.png`
    - `PBT_06_bootstrap_dashboard_mobile_375.png`
    - `PBT_06_bootstrap_dashboard_tablet_768.png`
    - `PBT_06_bootstrap_dashboard_desktop_1440.png`

Screenshots are available in `screenshots/` and demonstrate responsive layouts for mobile, tablet, and desktop.
