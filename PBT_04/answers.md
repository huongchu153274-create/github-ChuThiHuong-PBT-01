# PHIẾU BÀI TẬP 04 — CSS LAYOUT (ĐÁP ÁN)

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

---
Ghi chú: Nếu bạn muốn, tôi sẽ tạo ví dụ HTML/CSS minh họa cho từng trường hợp và mở preview local.
