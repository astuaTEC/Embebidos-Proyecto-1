from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/LedUpdate', methods=['GET'])
def LedStatus():
    return "1"
