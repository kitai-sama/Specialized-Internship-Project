I. Lộ trình xây dựng đồ án
Trước tiên, chúng ta chia dự án thành 5 giai đoạn:
Giai đoạn	Công việc	Kết quả
1	Thiết lập môi trường và tạo website Flask	Website chạy trên localhost
2	Xây dựng chức năng PDF → Word	Chuyển đổi tài liệu thành công
3	Bổ sung Word → PDF, PDF → JPG, JPG → PDF	Website có nhiều công cụ
4	Xây dựng MySQL, đăng nhập và lịch sử chuyển đổi	Hệ thống quản lý người dùng
5	Hoàn thiện giao diện, kiểm thử và viết báo cáo	Đồ án hoàn chỉnh
sơ đồ cấu trúc làm :
DocConvert/
│
├── .venv/
│
├── app.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── main.js
    │
    └── images/

1. Tạo môi trường ảo Python
nên sử dụng py 3.13 cho đồ án thực tập chuyên ngành và đồ án phân tích thiết kế hệ thống
sau khi tải xong thì ta cài đặt powershell và cài đặt flask

2. 
di chuyển đến thư mục DocConvert
và dùng lệnh .\.venv\Scripts\Activate.ps1
