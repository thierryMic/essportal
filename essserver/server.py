from flask import Flask, jsonify, request
from flask_cors import CORS
from db.employee import Employee
import yaml

app = Flask(__name__)
cors = CORS(app, resources={r'/API/*': {"origins": "*"}})

employees = {'data':[{
                'id': 'TM001',
                'firstName': 'Thierry',
                'middleName': 'Arnaud',
                'lastName': 'Michel',
                'address': '76 Elmswood boulevard, Keysborough',
                'email': 'thierryamichel@gmail.com',
                'phone': '0417 897 591',
                'bsb': '1232-456',
                'accountNo': '89101112',
                },
                {'id': 'JW001',
                'firstName': 'John',
                'middleName': 'Patrick',
                'lastName': 'Wood',
                'address': '12 buggs bunny road, Acme',
                'email': 'johnwood@gmail.com',
                'phone': '0417 127 111',
                'bsb': '123-456',
                'accountNo': '131415',
                },
                {'id': 'JM001',
                'firstName': 'Julie',
                'middleName': 'Mac',
                'lastName': 'McCarron',
                'address': '12 micker road, Acme',
                'email': 'jould@gmail.com',
                'phone': '0417 127 111',
                'bsb': '888-886',
                'accountNo': '133245',
                }]
            }


def authed(userId=None):
    return True



@app.route('/API/employees/')
def getEmployees():
    return jsonify(employees)


@app.route('/API/saveemployee/', methods=['POST'])
def saveEmployee():
    if request.method == 'POST':
        if authed():
            employee = Employee.get(request.json)
            employee.save(request.json)
            return jsonify(employee.serialize)


def startServer():
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8080)



if __name__ == '__main__':
    startServer()