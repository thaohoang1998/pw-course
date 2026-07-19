
#  Git

## 1. Lịch sử Git

Cha đẻ là LinuxTorvalds

---

## 2. Git và GitHub

| Git | GitHub |
|------|---------|
| Là phần mềm được cài trên máy tính. | Là website lưu trữ Git Repository.|
| Dùng để quản lý phiên bản (Version Control). | Dùng để lưu trữ, chia sẻ và cộng tác với người khác. |
| Hoạt động trên máy local. | Hoạt động trên Internet. |

---

## 3. Git - Three States

Git có **3 vùng làm việc (Three States):**

### 1. Working Directory (Vùng làm việc)

- Chứa các file mới hoặc file đã được chỉnh sửa.
- Đây là nơi bạn làm việc hằng ngày.

**Ví dụ:**

```bash
git status
```

Nếu chưa `git add`, Git sẽ hiển thị:

```text
Changes not staged for commit
```

---

### 2. Staging Area (Vùng chờ Commit)

- Chứa các file đã được chọn để commit.
- Đưa file vào vùng này bằng:

```bash
git add .
```

hoặc

```bash
git add <file_name>
```

---

### 3. Repository (Kho lưu trữ)

- Chứa các commit (phiên bản) của dự án.
- Tạo một commit bằng:

```bash
git commit -m"message"
```

---

## 🔄 Quy trình làm việc với Git

### 🟡 Thực hiện 1 lần duy nhất

#### 1. Khởi tạo Local Repository

```bash
git init
```

> Khởi tạo một Git Repository trên máy tính.

#### 2. Liên kết với GitHub Repository

```bash
git remote add origin <repository_url>
```

Ví dụ:

```bash
git remote add origin git@github.com:thaohoang1998/pw-course.git
```

> Liên kết Local Repository với Remote Repository trên GitHub.

---

### 🔵 Thực hiện mỗi khi có thay đổi

#### 1. Đưa file vào Staging Area

```bash
git add .
```

Hoặc:

```bash
git add <file_name>
```

> Đưa các file đã thay đổi vào vùng chuẩn bị commit.

#### 2. Commit thay đổi

```bash
git commit -m "Commit message"
```

Ví dụ:

```bash
git commit -m "Add login test"
```

> Lưu một phiên bản (commit) của dự án.

#### 3. Push code lên GitHub

```bash
git push origin main
```

> Đồng bộ các commit từ Local Repository lên GitHub.

---

## 📌 Tóm tắt

### Chỉ làm 1 lần

```text
git init
        ↓
git remote add origin <repository_url>
```

### Làm mỗi khi có thay đổi

```text
Chỉnh sửa file
        ↓
git add .
        ↓
git commit -m "message"
        ↓
git push origin main
```
---

## 💡 Ghi nhớ

- **Working Directory** → Nơi chỉnh sửa file.
- **Staging Area** → Nơi chuẩn bị commit.
- **Repository** → Nơi lưu các commit.
- **GitHub** → Nơi lưu repository trên Internet.

---

## 4. Cấu hình git 
  git config user.name “Alex”

  git config user.name “alex@betterbytesvn.com”

1 số câu lệnh: 
  - kiểm tra commit git log 
  - xem trạng thái file: git status 

1 số quy tắc git commit convention:
  - <type>: <short_description>

    ● Trong đó:

        ○ type: loại commit
            ■ chore: sửa nhỏ lẻ,chính tả, xóa file không dùng tới,...
            ■ feat: thêm tính năng mới, test case mới
            ■ fix: sửa lỗi 1 test trước đó

        ○ short_description: mô tảngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

---

## 5. Javascript basic 
1. Javascript
    - chạy file bằng lệnh: node tên file 
    - chạy file trong folder: node <đường dẫn tới file>

2. Comment: 
    - // 
    - /* cmt */

3. Biến và Hằng 
    - Biến: Var và let: nên dùng let an toàn hơn 
    - Hằng: const 

    ● Mặc định dùng const - giúp code an toàn hơn, dễ đọc hơn

    ● Chỉ dùng let khi chắc chắn cần gán lại giá trị

    ● Không dùng var

4. Kiểu dữ liệu: 
    - Number: số nguyên, số thực 
    - String: chuỗi 
    - Boolenn: giá trị logic 

    ● Để biết 1 biến kiểu dữ liệu gì dùng lệnh : typeof <variable>

5. Toán tử so sánh: 
    - Để so sánh 2 toán hạng 

    ● So sánh bằng:

        ○ == và ===
        == so sánh giá trị sau khi chuyển đổi kiểu 
        === so sánh giá trị và dữ liệu ko chuyển đổi kiểu (luôn dùng)
    ● So sánh không bằng

        ○ !
    ● So sánh lớn hơn, nhỏ hơn

        ○ >
        ○ <
        ○ <=
        ○ >=

6. Toán tử logic 
    - && (and) trả về đúng nếu cả 2 vế của mệnh đề đúng
    - || (or) trả về đúng nếu một trong 2 vế của mệnh đề đúng

7. Toán tử một ngôi: 
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau

        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau

        - x++;
        - x--;

8. Toán tử toán học: 
    - +, -, *, / 

9. Câu điều kiện: 
    - Cú pháp: If (<điều kiện>) {//code}

10. Vòng lặp: 
    - Cú pháp: for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}

