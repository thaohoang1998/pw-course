// khai báo chiều cao
const height = 163; 
//khai báo số lẻ của chiều cao 
const heightMinus = height - 100;
// khai báo cân nặng
const idealWeight = heightMinus * 9 / 10;
const maxWeight = heightMinus;
const minWeight =  heightMinus * 8 / 10;
//In ra 
console.log(
    "Cân nặng lý tưởng:", idealWeight + "kg,",
    "Cân nặng tối đa:", maxWeight + "kg,",
    "Cân nặng tối thiểu:", minWeight + "kg"
)