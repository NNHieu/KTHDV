# XML - DTD - XSD

## B1
Viết tài liệu XML cung cấp thông tin về bản thân với ít nhất 8 thẻ.

## B2
Cho một tài liệu XML mẫu như sau. Trong đó:
- sid: chuỗi 8 chữ số
- dob: định dạng YYYY-MM-DD
- gender: chọn một trong hai giá trị Male hoặc Female
- other_email: có thể có hoặc không
- contacts: có ít nhất một contact, nhiều nhất là hai contact  

Hãy viết XSD.

### Testcase

- [x] Valid xml
    - [x] other_email: có thể có hoặc không
    - [x] contacts: có ít nhất một contact, nhiều nhất là hai contact 

- [x] Thiếu một số trường
- [x] Thừa một số trường
- [x] Sai Regex
    - [x] sid: chuỗi 8 chữ số
    - [x] dob: định dạng YYYY-MM-DD
    - [x] định dạng email thường và email vnu
- [x] Sai kiểu
    - [x] gender: chọn một trong hai giá trị Male hoặc Female