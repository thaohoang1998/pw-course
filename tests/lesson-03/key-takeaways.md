
# 📘 Lesson-03

---

# Git

## 1. Undo Action

### 1.1. Chuyển từ **Staging Area → Working Directory**

Bỏ file khỏi vùng staging nhưng vẫn giữ thay đổi trong máy.

```bash
git restore --staged <file_name>
```

Hoặc bỏ toàn bộ file:

```bash
git restore --staged .
```

---

### 1.2. Quay về commit trước (**Repository → Working Directory**)

```bash
git reset HEAD~<số_commit>
```

Ví dụ:

```bash
git reset HEAD~1
```

---

## 2. Git Branch

### Xem danh sách branch

```bash
git branch
```

---

### Tạo branch mới

```bash
git branch <branch_name>
```

---

### Chuyển sang branch khác

```bash
git checkout <branch_name>
```

---

### Tạo và chuyển sang branch mới

```bash
git checkout -b <branch_name>
```

---

### Xóa branch

```bash
git branch -D <branch_name>
```

> **Lưu ý:** Không thể xóa branch đang đứng. Hãy checkout sang branch khác trước.

---

## 3. `.gitignore`

File `.gitignore` dùng để khai báo những file hoặc thư mục **không muốn đưa lên Git**.

Ví dụ:

```text
node_modules/
.env
playwright-report/
test-results/
```

---

## 4. Git Amend

### Sửa commit message

```bash
git commit --amend -m "new message"
```

Hoặc:

```bash
git commit --amend
```

Các bước:

1. Nhấn `i` để vào **Insert Mode**
2. Chỉnh sửa nội dung
3. Nhấn `Esc`
4. Gõ::wq


5. Nhấn **Enter**

---

### Thêm file vào commit gần nhất (không sửa message)

```bash
git add <file_name>

git commit --amend --no-edit
```

---

### Thêm file và sửa commit message

```bash
git add <file_name>

git commit --amend -m "feat: new message"
```

---

# JavaScript

## 1. Convention

| Convention | Sử dụng                  | Ví dụ                   |
| ---------- | ------------------------ | ----------------------- |
| snake_case | Ít dùng trong JavaScript | `hoang_thi_phuong_thao` |
| kebab-case | Tên file, thư mục        | `hoang-thi-phuong-thao` |
| camelCase  | Biến, hàm                | `hoangThiPhuongThao`    |
| PascalCase | Class                    | `HoangThiPhuongThao`    |

---

## 2. `console.log()`

### In chuỗi

```javascript
console.log('My name is Thao');
console.log("My name is Thao");
```

---

### In kèm biến

```javascript
const name = 'Thao';

console.log(`My name is ${name}`);
```

---

### Nối chuỗi

```javascript
console.log('My name is ' + name);
```

> Khuyến khích sử dụng **Template String** thay vì nối chuỗi bằng dấu `+`.

---

## 3. Object

Object là kiểu dữ liệu dùng để lưu trữ dữ liệu theo dạng **key - value**.

### Cú pháp

```javascript
const objectName = {
    key1: value1,
    key2: value2
};
```

Trong đó:

* **Key**: tuân theo quy tắc đặt tên biến.
* **Value**: có thể là String, Number, Boolean, Array, Object, Function,...

### Ví dụ

```javascript
const myInfo = {
    name: "Thao",
    hometown: "Thai Binh"
};

console.log(myInfo);
```

Kết quả:

```text
{
    name: "Thao",
    hometown: "Thai Binh"
}
```

### Truy cập thuộc tính

```javascript
console.log(myInfo.name);

console.log(myInfo["hometown"]);
```

---

## 4. Array

Array dùng để lưu nhiều giá trị trong cùng một biến.

### Khai báo

```javascript
const arr = ['A', 'B', 'C'];
```

---

### Lấy phần tử theo index

```javascript
console.log(arr[0]);
```

---

### Lấy độ dài mảng

```javascript
console.log(arr.length);
```

---

### Ví dụ

```javascript
const numbers = [1, 2, 3, 4];

console.log(numbers[2]);

console.log(numbers.length);
```

---

## 5. Function

Function là một khối lệnh có thể tái sử dụng nhiều lần.

### Khai báo

```javascript
function functionName() {
    // code
}
```

---

### Function có Parameter

```javascript
function sayHello(name) {
    console.log(`Hello ${name}`);
}
```

---

### Function có Return Value

```javascript
function sum(a, b) {
    return a + b;
}

const result = sum(5, 6);

console.log(result);
```

---
