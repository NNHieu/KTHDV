import requests
import json
import sys


def print_student(student):
    print(f'Họ tên: {student["name"]["first"]} {student["name"]["last"]}')
    print(f'Ngày sinh: {student["dob"]}')
    print(f'Giới tính: {student["gender"]}')
    print(f'Contact: {student["contacts"]["contact_addr"]}')
    print(f'Vnu Email: {student["emails"]["vnu_mail"]}')
    print(f'Other Email: {student["emails"]["other_mail"]}')



if __name__ == '__main__':
    if len(sys.argv) == 2:
        response = requests.get(f'http://127.0.0.1:5000/api/getinfo?sid={sys.argv[1]}').json()
    else:
        response = requests.get('http://127.0.0.1:5000/api/getinfo').json()
    for sid, student in response.items():
        print(f'---------Student {sid}---------')
        print_student(student)
                