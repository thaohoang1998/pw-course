//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply (a, b) {
    console.log(a*b)
}
multiply(5, 3);
multiply(5, 8);


//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả vs 2 bộ số khác nhau.
function findMin(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    }

    if (c < min) {
        min = c;
    }

    return min;
};
console.log(findMin(5, 2, 8));
console.log(findMin(10, 7, 3));

/*3. Viết hàm getTopStudents nhận 2 tham số:
    ● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
    ● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.*/

let students = [
    {name: 'A', score: 7},
    {name: 'B', score: 10},
    {name: 'C', score: 3},
    {name: 'D', score: 5},
    {name: 'E', score: 6.5},
    {name: 'F', score: 7},
]
function getTopStudents(students, threshold) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    };

    return result;
}
console.log(getTopStudents(students, 6));

/*4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.*/
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(190000000, 5, 3));
