# Removes last cache folder if exists
rm -rf __pycache__

# Runs flask
export FLASK_APP=main.py
flask run
