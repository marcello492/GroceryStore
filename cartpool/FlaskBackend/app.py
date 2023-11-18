from flask import Flask, request
import csv
import bcrypt

app = Flask(__name__)

@app.route('/driver-sign-in', methods=['POST'])
def driver_sign_in():
    email = request.json.get('email')
    password = request.json.get('password').encode('utf-8')
    
    with open('users.csv', mode='r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row['email'] == email:
                hashed_password = row['password'].encode('utf-8')
                if bcrypt.checkpw(password, hashed_password):
                    return {"status": "success"}, 200
        return {"status": "error", "message": "Invalid credentials"}, 401

if __name__ == '__main__':
    app.run()
