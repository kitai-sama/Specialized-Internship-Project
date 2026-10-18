from flask import Flask, render_template

# Khởi tạo ứng dụng Flask
app = Flask(__name__)

# Đường dẫn trang chủ
@app.route("/")
def home():
    return render_template("index.html")

# Chạy ứng dụng
if __name__ == "__main__":
    app.run(debug=True)

# Flask(__name__): Khởi tạo ứng dụng web.
# @app.route("/"): Xác định đường dẫn trang chủ.
# render_template("index.html"): Hiển thị giao diện HTML.
# app.run(debug=True): Chạy máy chủ Flask ở chế độ phát triển.