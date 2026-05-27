
# PHẦN C — PHÂN TÍCH (ĐÁP ÁN)

## C1 — Phân tích trang thực tế: Shopee (ví dụ)

Luu y: toi khong the mo DevTools hoac chup anh truc tiep trong moi truong nay. Duoi day la phan tich tham khao dua tren cac trang e-commerce (vi du: shopee.vn). Ban co the chay chinh xac tren trinh duyet cua minh va thay cac buoc "chup screenshot" theo huong dan.

- Kich thuoc kiem tra: Mobile 375px | Tablet 768px | Desktop 1440px

- Navigation thay doi the nao?
	- Desktop (1440px): Header rong, logo ben trai, o tim kiem lon o giua, bieu tuong gio hang/ung dung o phai; menu chuyen muc dang ngang hoac mega-menu dropdown khi hover.
	- Tablet (768px): Header rut gon; search van hien nhung nho hon; mot so menu duoc gop vao menu chinh; dropdown thay cho hover-based mega menu.
	- Mobile (375px): Header toi gian: logo + search icon + cart; menu chinh an sau hamburger hoac slide overlay; nhieu lien ket duoc chuyen vao menu hamburger hoac bottom sheet.

- Luoi content thay doi may cot?
	- Desktop: product grid thuong 4 cot (hoac nhieu hon tuy chieu rong). Sidebar filters hien o trai, ads/recommendations o phai.
	- Tablet: 2-3 cot (thuong la 2 cot cho 768-1024px range).
	- Mobile: 1 cot de doc va cham de thao tac.

- Elements bi an tren mobile?
	- Sidebar filter (an hoac dua vao collapsible filter panel).
	- Banner quang cao, bieu tuong phu, van ban mo ta dai co the bi rut gon.
	- Mega-menu chuyen sang hamburger overlay.

- Font size co thay doi khong?
	- Thuong co: base font-size nho hon tren mobile (vi du 14px), tang len tren tablet/desktop (15-16px). Headings cung scale theo breakpoint.

- Tim @media rules (huong dan):
	- Mo DevTools -> Styles -> tim cac rules chua @media (vi du @media (max-width: 767px) hoac @media (min-width: 992px)).
	- Thuong thay doi: @media (min-width: 768px) de chuyen mobile -> tablet; @media (min-width: 1024px) cho desktop.

Ghi chu: De hoan thanh bai nop, mo site tren trinh duyet cua ban, bat Device Toggle, chup 3 screenshot (375/768/1440) va 2 screenshot Styles cho media queries.

---

## C2 — Thiet ke Responsive Strategy (Trang Dat ban nha hang)

Yeu cau: ve wireframe cho Mobile / Tablet / Desktop + CSS skeleton (mobile-first)

Wireframes (ASCII):

Mobile (<= 767px)
-----------------
HEADER (logo + phone)
HERO (anh toan man hinh)
FORM (dat ban)  -- dat sau hero hoac mo modal khi bam nut
GALLERY (6 images, 1 cot)
MAP (embed) - co the an hoac collapse
FOOTER

Tablet (768px - 1023px)
-----------------------
HEADER (logo + phone)
HERO (anh)
FORM (nam tren hoac ben tren gallery)
GALLERY (2-3 cot)
MAP (o duoi hoac ben canh)
FOOTER

Desktop (>= 1024px)
-------------------
HEADER (logo + phone + nav)
HERO (anh lon full-width)
MAIN: grid 2 cot - LEFT main (gallery 3 cot), RIGHT sidebar (form + map)
FOOTER

Chi tiet:
- Mobile: nen an sidebar phuc vu, hoac chuyen filter/chi tiet thap thanh modal. Form dat ban nen dat o vi tri som tren mobile hoac mo bang modal tu nut sticky.
- Tablet: gallery 2-3 cot (3 cot neu ngang lon), map neu du cho co the hien ben duoi hoac ben canh.
- Desktop: dung grid 2 cot: main + sidebar. Sidebar chua form va thong tin lien he, map co the nam duoi form hoac lon hon.

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

```

Huong dan test: neu muon, toi se tao file `restaurant_skeleton.css` va mot HTML demo `restaurant_demo.html` de ban preview. Hoac toi co the commit file nay thang len repo.

