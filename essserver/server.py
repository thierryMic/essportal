from flask import Flask, jsonify, request
from flask_cors import cross_origin
from db.employee import Employee
import logging
import json

app = Flask(__name__)
with app.app_context():
    from auth.auth import requires_auth, requires_scope, AuthError
# cors = CORS(app, resources={r'/api/*': {"origins": "*"}})




# @app.route("/api/private-scoped")
@app.route('/api/employee/')
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@cross_origin(headers=["Content-Type", "Authorization"])
@requires_auth
def getEmployee():
    e = Employee.getEmployee(request.json)
    return jsonify(data=[e])




# @app.route('/API/employees/')
# def getEmployees():
#     employees = Employee.query().fetch()
#     # logging.error(type(employees[0].to_dict()))
#     return jsonify(data=[e.serialize for e in employees])


@app.route('/API/saveemployee/', methods=['POST'])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@cross_origin(headers=["Content-Type", "Authorization"])
@requires_auth
def saveEmployee():
    if request.method == 'POST':
        employee = Employee.save(request.json)
        return jsonify(employee.serialize)



def startServer():
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8080)



if __name__ == '__main__':
    startServer()