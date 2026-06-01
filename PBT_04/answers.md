
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---:|---|---:|---|
| static | Có | Vị trí trong flow mặc định (không offset) | Có | Mặc định, không cần định vị đặc biệt |
| relative | Có (vẫn giữ chỗ) | Vị trí bình thường của chính nó (sử dụng top/left để dịch chuyển tương đối) | Có | Dịch chuyển nhẹ (nudge); làm `positioned ancestor` cho con `absolute` |
| absolute | Không (bị lấy ra khỏi flow) | Nearest positioned ancestor (ancestor có `position` ≠ `static`); nếu không có thì tham chiếu viewport/initial containing block (`html`/`body`) | Có (theo trang/khối chứa) | Popup, dropdown, đặt phần tử chính xác bên trong container |
| fixed | Không | Viewport (màn hình) | Không (cố định trong viewport khi cuộn) | Header/footer cố định, nút nổi cố định |
| sticky | Có (ban đầu giữ chỗ như `relative`) | Nearest scrolling ancestor; dính khi đạt threshold (offset) | Ban đầu có, sau dính thì không di chuyển trong viewport cho đến khi container kết thúc | Tiêu đề bảng/danh sách dính khi cuộn |

**Giải thích thêm — `absolute` tham chiếu body hay parent?**
- `absolute` sẽ tham chiếu tới `nearest positioned ancestor` (tổ tiên gần nhất có `position` khác `static`, ví dụ `relative`, `absolute`, `fixed`, `sticky`).
- Nếu không tồn tại ancestor nào được định vị (tức tất cả đều `position: static`), thì nó sẽ tham chiếu tới initial containing block (thường là `html`/`body`).
- "Nearest positioned ancestor" = tổ tiên gần nhất trên cây DOM có `position` ≠ `static`; đó là khung tọa độ để tính `top/left/right/bottom` cho phần tử `absolute`.

### Câu A2 — Flexbox vs Grid (dự đoán bố cục)

/* Trường hợp 1 */
.container { display: flex; }
.item { flex: 1; }
- Dự đoán: 4 items trên 1 hàng, chia đều chiều ngang (mỗi item ~25%).
- Sơ đồ: [item1][item2][item3][item4]

/* Trường hợp 2 */
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
- Dự đoán: Mỗi item chiếm 45% + margin ~50% → 2 cột hàng. 6 items → 3 hàng × 2 cột.
- Sơ đồ:
  Hàng1: [1][2]
  Hàng2: [3][4]
  Hàng3: [5][6]

/* Trường hợp 3 */
.container { display: flex; justify-content: space-between; align-items: center; }
- Dự đoán: 3 items trên 1 hàng; item1 dán trái, item3 dán phải, item2 canh giữa; khoảng trống giữa đều do `space-between`.
- Sơ đồ: [item1] ---- [item2] ---- [item3]

/* Trường hợp 4 */
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
- Dự đoán: 3 cột: trái 200px, giữa linh hoạt, phải 200px. Với 3 items → item1 ở cột trái, item2 ở cột giữa, item3 ở cột phải.
- Sơ đồ: [200px:item1] | [flex:item2] | [200px:item3]

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
- Dự đoán: 3 cột bằng nhau. 7 items → ceil(7/3)=3 hàng.
- Sơ đồ:
  Row1: [1][2][3]
  Row2: [4][5][6]
  Row3: [7][   ][   ]  (item7 ở cột 1 của hàng 3)

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

## C3 — DevTools kiểm chứng

- Mở `PBT_04/devtools_flexbox.html` và dùng DevTools để kiểm tra container có `display:flex`, các property `gap`, `align-items`, `justify-content`.
- Screenshot DevTools:  file `screenshots/PBT_04_devtools_flexbox.html.png` để minh hoạ (mô tả vị trí và các thuộc tính flex trên panel Styles/Computed).


