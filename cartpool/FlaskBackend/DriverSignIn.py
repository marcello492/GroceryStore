from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample user data (for demonstration purposes)
drivers = [
    {"email": "driver1@example.com", "password": "driverpass123"},
    {"email": "driver2@example.com", "password": "securepass456"},
]

@app.route('/api/drivers/signin', methods=['POST'])
def driver_sign_in():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Check if the provided email and password match any driver in the sample data
    driver = next((driver for driver in drivers if driver['email'] == email and driver['password'] == password), None)

    if driver:
        return jsonify({"message": "Sign-in successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
