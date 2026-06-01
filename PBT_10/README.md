Tổng quan PBT_10:

- `fetch_demo.html` — Demo `fetch` dùng API: https://jsonplaceholder.typicode.com (posts).
- Thư mục apps (mỗi app gồm các trang loading/success/error):
  - `weather_app/` — mock weather (no external API in demo).
  - `user_directory/` — mock users (no external API in demo).
  - `gallery/` — uses https://picsum.photos for placeholder images.
  - `dashboard/` — mock widgets (no external API in demo).

Cách chạy (static files):
- Tốt nhất chạy một HTTP server tại thư mục `PBT` để tránh giới hạn CORS với `fetch`:

  Python 3:
  `python -m http.server 8000`

  Node (http-server):
  `npx http-server . -p 8000`

- Sau đó mở trình duyệt: `http://localhost:8000/PBT_10/fetch_demo.html` hoặc các trang trong `PBT_10/<app>/`.

Ghi chú: `fetch_demo.html` gọi `https://jsonplaceholder.typicode.com` (miễn phí, public), không cần API key.