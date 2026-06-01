API đã dùng: Trong demo không gọi API bên ngoài — dữ liệu thời tiết được mô phỏng.

Cách chạy:
- Mở các trang:
  - `weather_app/loading.html`
  - `weather_app/success.html`
  - `weather_app/error.html`
- Hoặc chạy static server (khuyến nghị):
  - `python -m http.server 8000`
  - `npx http-server . -p 8000`

Ghi chú: Để tích hợp API thời tiết thật, thay phần mock bằng `fetch` tới OpenWeatherMap hoặc WeatherAPI (cần API key).