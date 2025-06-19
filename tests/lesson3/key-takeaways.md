# Tong hop kien thuc bai ba cho GIT
1. Thay doi commit message truoc do:
*cach_1*
- git commit --amend
- press "i"
- change message and then press "esc"
- enter ":wq" to exit INSERT mode
*cach_2*
- git commit --amend -m"new_message"
2. Dua file ve vung Working Directory -> dung trong truong hop file da git add roi nhung chua commit
- git restore --staged  <file_name>
3. Dua file tu vung repository ve vung Working Directory (undo commit) -> dung trong truong hop file da commit roi
- git reset HEAD~<n> -> voi n la so version gan nhat ma file da commit
3. Branching model:
- Muc Dich: de tao ra mot vung lam viec moi, khong anh huong den vung lam viec da stable cua team -> tranh gay ra loi
- Tips: Luon checkout nhanh moi tu moi truong master de co code on dinh nhat
- Top useful command:
* git branch <branch_name> : tao ra nhanh moi
* git checkout <branch_name> : switch qua nhanh moi
* git checkout -b <branch_name> : tao va switch qua nhanh moi (nen dung cau lenh nay)
4. git ignore: 
- Tao file ten la: ".gitignore"
- File: Add <ten file> vao .gitignore 
- Folder: Add <ten folder\> vao .gitignore
## Tong hop kien thuc cua PW
1. Convention code: 
- Ten file -> dung kebad-case ex: bai-01
- Ten bien -> dung camelCase ex: sumCost
- Ten Class -> dung PascalCase ex: PhuLe
2. Console Log: 
- Chuoi ki tu nam trong "" '' `` deu duoc hieu la chuoi string
- Muon in ra cau lenh khong can noi chuoi thi dung: 
console.log(`name = ${ten_bien}`);
3. Oject: luu tap hop cac gia tri vao cung 1 bien hoac hang so
- Goi gia tri cua 1 thuoc tinh trong object co hai cach:
<ten_object>.<ten_thuoc_tinh>   
<ten_object>.['ten_thuoc_tinh']
- Goi thuoc tinh cua object trong object: tuong tu cach tren (cham vao nhieu lan de den cac thuoc tinh can goi)
- Gan thuoc tinh thanh value moi:
<ten_object>.<ten_thuoc_tinh> = <new_value>
- Doi gia tri cua toan bo thuoc tinh object -> bao loi, nhung chi doi 1 thuoc tinh thi khong loi 
- Them / xoa thuoc tinh -> xem trong file bai tap.
4. Logical Operator: && || ! 
5. Array: 
- Tao mang, add cac gia tri
- Truy xuat mang: 
* Do dai: array.length
* Truy suat phan tu: array.[0] -> 0 la so vi tri cua phan tu, start tu 0
6. Function:
- syntax khai bao:

function <name_function> (){
    //code...
}

- add parameter
- return: tra ve gia tri khi thoa dieu kien

### Kien Thuc Collect Tu Bai Tap:
1. Cách khai báo item của 1 mảng (dùng trong tính toán cái phần tử trong mảng) -> dùng *for (let item of <mang>)*
2. 