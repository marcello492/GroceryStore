from flask import Flask, render_template

app = Flask(__name__, static_folder='cartpool/src', static_url_path='')

# Your existing routes

# Route to serve the React frontend
@app.route('/')
def serve_react_app():
    return render_template('index.html')  # Assuming your main React file is named index.html

if __name__ == '__main__':
    app.run(debug=True)

# Sample data for demonstration purposes
opportunities = [
    {"date": "2023-01-01", "time_range": "2-5 PM", "km_radius": 20},
    {"date": "2023-01-02", "time_range": "5-8 PM", "km_radius": 15},
]

@app.route('/')
def index():
    return 'Hello, this is the backend of your GroceryStore project!'

@app.route('/opportunities', methods=['GET'])
def get_opportunities():
    return jsonify({"opportunities": opportunities})

@app.route('/opportunities', methods=['POST'])
def create_opportunity():
    data = request.json
    new_opportunity = {
        "date": data.get("date"),
        "time_range": data.get("time_range"),
        "km_radius": data.get("km_radius")
    }
    opportunities.append(new_opportunity)
    return jsonify({"message": "Opportunity created successfully", "opportunity": new_opportunity})

if __name__ == '__main__':
    app.run(debug=True)
