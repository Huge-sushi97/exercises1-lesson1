# Tổng hợp kiến thức playwright:
1. Phân biệt giữ var và let:
- Var: biến dùng tất cả các nơi (global) -> không nằm trong vòng lặp vẫn dùng được
- Let: chỉ dùng trong vòng lặp, nếu như đưa ra ngoài sẽ bị error (nên dùng)

2. Câu điều kiện nâng cao: 
- if ... else 
syntax: 
if (condition){
    //cau lenh dung
}
else (condition){
    //cau lenh sai
}
- if .... else ....if
syntax: 
if (condition1){
    //cau lenh dung voi dieu kien 1
}
else if (condition2){
    //cau lenh dung voi dieu kien 2
}
else (condition){
    //cau lenh sai
}
- switch .... case -> dùng khi cần để kiểm tra nhiều điều kiện cùng lúc
syntax: xem lại record.

3. Phân biệt so sánh == và !=
- so sánh == != là so sánh lỏng lẻo, không cần đúng kiểu dữ liệu
- so sánh === !== là so sánh tuyệt đối, khi đó cần phải đúng kiểu dữ liệu

4. Vòng lặp nâng cao for: 
- for ... in : để lặp các thuộc tính trong object và các index trong array -> Ex: gọi các thuộc tính trong array để tính tổng 
Cách gọi tên và giá trị: lặp qua các giá trị trong object / array
for (let item of array){
    console.log (key + ":" + array[key])
}
key: đại diện cho tên các thuộc tính của 1 array
array[key]: đại diện cho giá trị của các thuộc tính của 1 array
syntax:
for (let <biến> in <object>){
    //code
}

- for each : hay dùng cho array để gọi items ra
Bản chất: duyệt qua một mảng để thực hiện một action nào đó
syntax: 
array.forEach((value, index) => {
    //logic code
})
- for ... of : chi dùng cho array để gọi trực tiếp items ra duyệt giá trị, và KHÔNG lấy chỉ số index như forEach for...in

5. Phân biệt giữa break và continue:
- break: thoat hẳn ra khỏi vòng lặp không chạy thêm gì cả
- continue: bõ qua vòng lặp và chạy vòng lặp tiếp theo, không chạy đoạn code và chạy đến vòng lặp tiếp theo

6. String Util function: câu lệnh tiện ích của JS
- String util:
* trim(): giúp loại bõ khoảng cách đầu cuối, dùng để verify text
* trimStart(): chỉ loại bõ khoảng cách đầu
* toLowerCase(), toLoweCase(): biến các chuỗi thành in hoa/in thường
* include() : xem chuỗi có include text không
* replace() : thay thế text chữ bằng một text mới **Dung bieu thuc chinh quy /value/g de thay nhieu lan**
* split() : cắt chuỗi truyền vào khoảng cách, hoặc dấu phẩy, hoặc dấu :
string.split(",");
* substring(): trả về một chuỗi dựa trên index của chuỗi cha
string.substring(start value, end value);
* indexOf() : trả về vị trí xuất hiện đầu tiên của một số trong chuỗi -> ko tìm thấy thì return về trừ 1
* lastIndexOf() : trả về vị trí xuất hiện cuối cùng của một số trong chuỗi
* toString chuyển đổi mảng thành chuỗi

7. Array utils functions: 
* map : tạo ra mảng mới theo map, đi qua tất cả các phần tử của array
* filter : filter các giá trị trong mảng thỏa 1 điều kiện
let numbers = [1,2,3,4]
let newNumber = number.filter(num => num % 2 === 0);
* find : chạy qua các giá trị trong mảng nếu thỏa điều kiện thì dừng luôn **(phần tử đầu tiên)**
* reduce : cộng dồn các giá trị trong mảng => let b = ages.reduce((sum,num) => sum + num, 0);
* some : kiểm tra **từng giá trị** trả về true/false, dựa theo các điều kiện ứng lên mảng
* every : kiểu tra **tất cả** các giá trị trả về true/false tùy theo điều kiện nêu ra
* push : thêm phần tử vào mảng
* shift : loại bõ phần tử đầu tiên của mảng -> return giá trị bị loại bõ
* sort : sắp xếp các phần tử trong mảng default theo thứ tự từ điển


