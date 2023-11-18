from flask import Flask, request, jsonify
import csv
import os
import bcrypt

app = Flask(__name__)

@app.route('/shopper-sign-up', methods=['POST'])
def shopper_sign_up():
    # Extract the form data
    full_name = request.json.get('fullName')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm_password = request.json.get('confirmPassword')

    # Validate the form data
    if not full_name or not email or not password:
        return jsonify({"error": "Missing fields"}), 400

    if password != confirm_password:
        return jsonify({"error": "Passwords do not match"}), 400

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    directory = os.path.dirname(os.path.abspath(__file__))
    users_file = os.path.join(directory, 'users.csv')
    # Check if the user already exists
    
    user_exists = False
    if os.path.exists(users_file):
        with open(users_file, mode='r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['email'] == email:
                    user_exists = True
                    break

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    # Write the new user to the CSV file
    with open(users_file, mode='a', newline='') as csvfile:
        print("making a new a usre")
        writer = csv.DictWriter(csvfile, fieldnames=['full_name', 'email', 'password'])
        if csvfile.tell() == 0:
            writer.writeheader()  # File is empty, write a header
        writer.writerow({'full_name': full_name, 'email': email, 'password': hashed_password.decode('utf-8')})

    return jsonify({"status": "success"}), 201

if __name__ == '__main__':
    app.run(debug=True)  # Remember to turn off debug mode in production
