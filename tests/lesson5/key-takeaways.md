# Function - DOM - Selector
1. Lamda function: viết gọn hơn so với function cũ
- Cách khai báo: 
+ Đối với ham có nhiều param
+ Đối với hàm không có param
+ Hàm có 1 dòng lệnh: bõ đi dấu ngoặc nhọn
2. Anonymous function: hàm không tên, nên dùng trong 1 số trường hợp đặc biệt
- gọi và dùng ngay => thêm ngoặc nhọn để bao function đó
- dùng function ko tên làm đối số cho function khác => ví dụ hàm set timeOut()
3. Tìm hiểu về DOM (Document Object Model): Cấu trúc htlm của 1 trang web
- Cấu trúc thẻ html <control>abc</control>
- Các thẻ html thường gặp: (xem trong video 31:00)
- Vẽ biểu đồ DOM trên mindmap 
+ Gõ enter là tạo ra thẻ con 
+ Gõ tab là tạo ra thẻ ngang hàng với thẻ hiện tại

4. Selector:  
- Xpath Selector: 
+ Xpath tuyệt đối: / -> đi dọc cây DOM tìm đến thẻ cần tìm
+ Xpath tương đối: // -> cú pháp: //tenthe[@thuoctinh='gia tri']

## Playwright Basic Syntax
1. test: đơn vị cơ bản để khai báo một test
1.1 step: đơn vị nhỏ hơn test, để viết từng step (nhớ điền tên map với test case)

2. Basic action trong playwright:
- Navigate: await page.goto('url');
- Click:
+ single click: await page.locator("//button).click();
+ double click: .dblclick();
+ click chuột phải: .click(
    {button: 'right'}
)
+ click chuột kèm bấm phím khác: .click(
    {modifiers: ['shift']}, => bấm cùng lúc nhiều nút thì thêm nút vào vì modifier là chuỗi  
)
- Input:
+ fill: điền nội dung tự động vào field cụ thể
+ pressSequentially: gõ từng chữ cái vào
- Tương tác radio/checkbox:
+ Dùng hàm check() để thực hiện action tick vào checkbox
+ Dùng hàm setChecked(false) để thực hiện action untick vào 1 checkbox
+ Kiểm tra đã tick chưa dùng hàm isChecked();

- Select Option:
- Set Input File: Tạo thư mục data, add file vào, sau đó copy đường dẫn vào file
