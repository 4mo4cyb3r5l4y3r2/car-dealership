import sqlite3
# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect("database.db")
cursor = conn.cursor()
# Create users table if it doesn't exist
cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        age INTEGER NOT NULL,
        phone TEXT NOT NULL
    )
""")

conn.commit()
conn.close()

print("Database and table created successfully!")
