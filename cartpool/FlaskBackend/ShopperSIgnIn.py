from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample user data (for demonstration purposes)
users = [
    {"email": "user1@example.com", "password": "password123"},
    {"email": "user2@example.com", "password": "securepass456"},
]

@app.route('/api/signin', methods=['POST'])
def shopper_sign_in():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Check if the provided email and password match any user in the sample data
    user = next((user for user in users if user['email'] == email and user['password'] == password), None)

    if user:
        return jsonify({"message": "Sign-in successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
