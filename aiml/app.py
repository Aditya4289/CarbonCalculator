# app.py
from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the model
with open('energy_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    lighting = data['lighting']
    heating = data['heating']
    medical_equipment = data['medical_equipment']
    others = data['others']
    
    prediction = model.predict(np.array([[lighting, heating, medical_equipment, others]]))
    
    return jsonify({'total_consumption': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
