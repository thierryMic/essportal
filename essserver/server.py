from flask import Flask, jsonify, request
from flask_cors import CORS
from db.employee import Employee
import logging
import json

app = Flask(__name__)
cors = CORS(app, resources={r'/API/*': {"origins": "*"}})



def authed(userId=None):
    return True



@app.route('/API/employees/')
def getEmployees():
    employees = Employee.query().fetch()
    # logging.error(type(employees[0].to_dict()))
    return jsonify(data=[e.serialize for e in employees])


@app.route('/API/saveemployee/', methods=['POST'])
def saveEmployee():
    if request.method == 'POST':
        if authed():
            employee = Employee.save(request.json)
            return jsonify(employee.serialize)


def startServer():
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8080)



if __name__ == '__main__':
    startServer()