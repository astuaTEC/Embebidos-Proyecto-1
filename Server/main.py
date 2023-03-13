from flask import Flask
from flask import json, jsonify
from flask import request, send_file
from flask_cors import CORS


main = Flask(__name__)
main.config['DEBUG'] = True
cors = CORS(main)
main.config['CORS_HEADERS'] = 'Content-Type'


###Para borrar despues
import random
PINS =['1','2','3','4']
def get_state(id):
    return random.choice([0,1])

###




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

#Obtain one door state
@main.route('/door/status', methods=['GET'])
def get_door():
    #GET params
    id = request.args.get('id')
    
    #Print value
    print(id)
    
    #Generic response
    response = {
        'error': False,
        'data' : None,
        'msg' : None
    }
    #Check if pin is valid
    if id in PINS:
        response['data']={
            'state': get_state(id)
        }
        
    else:
        response['error']=True
        response['data']='Puerta {id}: No existe'
        
    return jsonify(response),200

#Obtain all doors states
@main.route('/doors/status', methods=['GET'])
def get_doors():

    response = {
        'error': False,
        'data' : None,
        'msg' : None
    }
    
    response['data']={
        'door1': get_state(1),
        'door2': get_state(2),
        'door3': get_state(3),
        'door4':get_state(4)

    }
        
    return jsonify(response),200