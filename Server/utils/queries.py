from libGPIO import *
import values
import os
import datetime

def Start():
    for room, pin in values.pins["doors"].items():
        if export_command(pin) == values.error:
            print(f"Door Error: Pin {pin} for {room} failed to start.")
        else:
            if pin_mode(pin, values.iMode) == values.error:
                print(f"Door Error: Pin {pin} for {room} failed to start.")

def Finish():
    for pin in values.pins["doors"].values():
        unexport_command(pin)

def GetDoorState(room: str):
    pin = values.pins["doors"][room]
    result = digital_read(pin)

    if (result == values.error):
        print("Door Error: {room} in pin {pin} is not available.")
    
    return result

def TurnOnLight(room: str):
    pin = values.pins["rooms"][room]
    if digital_write(pin, values.high) == values.error:
        return False
    return True

def TurnOffLight(room: str):
    pin = values.pins["rooms"][room]
    if digital_write(pin, values.low) == values.error:
        return False
    return True

def GetLightState(room: str):
    pin = values.pins["rooms"][room]
    result = digital_read(pin)

    if (result == values.error):
        print("Light Error: {room} in pin {pin} is not available.")
    
    return result

def TakePhoto():
    image_name = f'/server/src/{datetime.datetime.now()}.jpg'.replace(' ', '_')
    os.system(f'fswebcam --no-banner {image_name}')
    return image_name