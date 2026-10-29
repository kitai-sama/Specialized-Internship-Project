I. Lộ trình xây dựng đồ án
Trước tiên, chúng ta chia dự án thành 5 giai đoạn:
1	Thiết lập môi trường và tạo website Flask	Website chạy trên localhost
2	Xây dựng chức năng PDF → Word	Chuyển đổi tài liệu thành công
3	Bổ sung Word → PDF, PDF → JPG, JPG → PDF	Website có nhiều công cụ
4	Xây dựng MySQL, đăng nhập và lịch sử chuyển đổi	Hệ thống quản lý người dùng
5	Hoàn thiện giao diện, kiểm thử và viết báo cáo	Đồ án hoàn chỉnh

sơ đồ cấu trúc làm :
Specialized Internship Project/
│
├── .git/
│
├── DocConvert/
│   │
│   ├── .venv/
│   │
│   ├── App.py
│   │
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   │
│   │   ├── images/
│   │   │
│   │   └── js/
│   │       └── main.js
│   │
│   └── templates/
│       └── index.html
│
└── README.txt

Thành phần	
Môi trường Python .venv	
Backend App.py	
Giao diện index.html	
CSS style.css	
JavaScript main.js
Thư mục hình ảnh

II. Thiết lập môi trường và tạo website Flask	Website chạy trên localhost
Tạo môi trường ảo Python
nên sử dụng py 3.13 cho đồ án thực tập chuyên ngành và đồ án phân tích thiết kế hệ thống
sau khi tải xong thì ta cài đặt powershell và cài đặt flask

2. khởi chạy flask 
trong terminal của vsc
di chuyển đến thư mục DocConvert
và dùng lệnh ".\.venv\Scripts\Activate.ps1"
tiếp đến dùng lệnh "python App.py" để khởi chạy app 

III. Xây dựng chức năng PDF → Word	Chuyển đổi tài liệu thành công
1. cài thư viện chuyển đổi PDF
