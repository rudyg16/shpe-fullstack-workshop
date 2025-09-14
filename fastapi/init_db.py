import sqlite3

def init_db():
    # Connect to SQLite (creates file if it doesn’t exist)
    conn = sqlite3.connect("market.db")
    cursor = conn.cursor()

    # Create table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS assets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        symbol TEXT NOT NULL,
        cat CHAR(3) NOT NULL,   -- STK / IDX / CMD / CRY
        date DATE NOT NULL,
        price REAL NOT NULL,
        volume INTEGER,
        UNIQUE(symbol, date)
    )
    """)

    conn.commit()
    conn.close()
    print("✅ Database and table created successfully!")

if __name__ == "__main__":
    init_db()
