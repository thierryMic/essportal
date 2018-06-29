from flask import Flask, jsonify
# from flask import session, flash, make_response

# from flask_seasurf import SeaSurf
# from flask.ext.seasurf import SeaSurf


# import memcache


# mc = memcache.Client(['127.0.0.1:11211'], debug=0)
app = Flask(__name__)
# csrf = SeaSurf(app)
# app.config['UPLOAD_FOLDER'] = '/var/www/itemcatalog/static/img'
# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024



@app.route('/')
@app.route('/index/')
def index():
    # return render('index.html')
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
    return jsonify(employees)

def startServer():

    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)



if __name__ == '__main__':
    startServer()