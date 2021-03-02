from typing import Union
from flask import Flask, request, Markup, render_template
import json
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('web.html')

def make_json(sid: int, 
              fname: str, lname: str, 
              dob, gender: str , 
              city: str, 
              vnu_mail: str, other_mail: str = ''):
    return {
        "sid": sid,
        "dob": dob,
        "gender": gender,
        "contacts": {
            "contact_addr": city,
            "contact_name": fname + ' ' +lname
        },
        "name": {
            "first": fname,
            "last": lname
        },
        "emails": {
            "vnu_mail": sid + '@vnu.edu.vn',
            "other_mail": other_mail,
        }
    }


data = {
    '18020510': make_json('18020510', 'Hieu', 'Nguyen', '12/03/2000', 'Male', '100 Vu Thi Thuc', 'TB', ),
    '18020543': make_json('18020543', 'Hoang', 'Nguyen', '29/10/2000', 'Male', '100 Xuan Thuy', 'HN', 'hoangnl2000@gmail.com'),
    '18020779': make_json('18020779', 'Loc', 'Nguyen', '04/12/2000', 'Male', '101 Xuan Thuy', 'HN', 'locnguyenhuu2k@gmail.com')
}

@app.route('/api/getinfo')
def get_info():
    try:
        sid = request.args.get('sid')
        if sid == 'all':
            return json.dumps(data)
        else:
            return json.dumps({sid: data[sid]})
    except:
        return "Invalid SID", 400