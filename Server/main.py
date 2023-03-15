from flask import Flask
from flask import jsonify
from flask import request, send_file
from flask_cors import CORS
import utils.values as values
import utils.queries as queries


main = Flask(__name__)
main.config["DEBUG"] = True
cors = CORS(main)
main.config["CORS_HEADERS"] = "Content-Type"

# Contains an example of a get method
@main.route("/get/sample", methods=["GET"])
def GetSample():
    return "Get method"

# Collects the data of an updated light
@main.route("/light/update", methods=["POST"])
def ChangeLedStatus():
    data = {"ok": True}
    fail = {"ok": False}

    # Here we collect the received data
    lightInfo = request.json 
    
    # Set the light area and light status
    area = lightInfo["area"]
    status = lightInfo["status"]

    if (status == values.high):
         result = queries.TurnOnLight(area)
    elif (status == values.low):
         result = queries.TurnOffLight(area)

    # Return response
    response = data if result else fail
    return jsonify(response), 200

#Obtain all light states
@main.route("/light/status", methods=["GET"])
def GetLights():

    response = {
        "error": False,
        "data" : None,
        "msg" : None
    }
    
    response["data"]={
        "Sala": queries.GetLightState("Sala"),
        "Cuarto 1": queries.GetLightState("Cuarto 1"),
        "Cuarto 2": queries.GetLightState("Cuarto 2"),
        "Cocina": queries.GetLightState("Cocina"),
        "Comedor": queries.GetLightState("Comedor"),
        "ok": True
    }
        
    return jsonify(response),200

#Obtain one door state
@main.route("/door/status", methods=["GET"])
def GetDoor():
    #GET params
    id = request.args.get("id")
    
    #Print value
    print(id)
    
    #Generic response
    response = {
        "error": False,
        "data" : None,
        "msg" : None
    }
    #Check if pin is valid
    if id in values.pins:
        response["data"]={
            "state": queries.GetDoorState(id),
            "ok": True
        }
        
    else:
        response["errjson, or"]=True
        response["data"]="Puerta {id}: No existe"
        
    return jsonify(response),200

#Obtain all doors states
@main.route("/doors/status", methods=["GET"])
def GetDoors():

    response = {
        "error": False,
        "data" : None,
        "msg" : None
    }
    
    response["data"]={
        "door1": queries.GetDoorState("1"),
        "door2": queries.GetDoorState("2"),
        "door3": queries.GetDoorState("3"),
        "door4": queries.GetDoorState("4"),
        "ok": True
    }
        
    return jsonify(response),200