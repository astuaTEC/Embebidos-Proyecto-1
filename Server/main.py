from flask import Flask
from flask import json, jsonify
from flask import request, send_file
from flask_cors import CORS


main = Flask(__name__)
main.config['DEBUG'] = True
cors = CORS(main)
main.config['CORS_HEADERS'] = 'Content-Type'

# Contains an example of a get method
@main.route('/get/sample', methods=['GET'])
def GetSample():
    return "Get method"

# Collects the data of an updated light
@main.route('/light/update', methods=['POST'])
def LedStatus():

    # Here we collect the received data
    lightInfo = request.json 
    
    # Set the light area and light status
    area = lightInfo["area"]
    status = lightInfo["status"]

    # Print both values
    print(area)
    print(status)

    # Return response
    data = {'ok': 'true'}
    return jsonify(data), 200
