from flask import Flask
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
    return "Hello World!"


def startServer():

    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)



if __name__ == '__main__':
    startServer()