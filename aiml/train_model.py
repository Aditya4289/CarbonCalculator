# train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle

# Load dataset
data = pd.read_csv('energy_data.csv')

# Preprocess data
# Assuming the data has columns: 'lighting', 'heating', 'medical_equipment', 'others', 'total_consumption'
X = data[['lighting', 'heating', 'medical_equipment', 'others']]
y = data['total_consumption']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Save the model
with open('energy_model.pkl', 'wb') as file:
    pickle.dump(model, file)
