from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

# Function to get a database connection
def get_db_connection():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def form():
    return render_template('member.html')  # This is your form page

@app.route('/submit', methods=['POST'])
def submit():
    email = request.form.get('email')
    password = request.form.get('password')
    age = request.form.get('age')
    phone = request.form.get('phone')

    conn = get_db_connection()
    cursor = conn.cursor()

    # Insert data into the users table
    cursor.execute("INSERT INTO users (email, password, age, phone) VALUES (?, ?, ?, ?)", 
                   (email, password, age, phone))
    conn.commit()
    conn.close()

    return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)
