from fastapi import FastAPI
from datetime import date, timedelta
from typing import Optional
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],   # allow GET, POST, PUT, DELETE, OPTIONS
    allow_headers=["*"],   # allow all headers
)

app = FastAPI()
DB_PATH = "./db/market.db"

#All of the query params are optional, but if you leave all of them with nothing, it'll
def query_assets(cat: Optional[str] = None, symbol: Optional[str] = None,
                 dateStart: Optional[date] = None, dateEnd: Optional[date] = None,
                 days: Optional[int] = None):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # --- get overall min/max dates ---
    cursor.execute("SELECT MIN(date), MAX(date) FROM assets")
    min_date_str, max_date_str = cursor.fetchone()
    min_date = date.fromisoformat(min_date_str)
    max_date = date.fromisoformat(max_date_str)

    # --- handle days param ---
    if days:
        dateEnd = max_date
        dateStart = max_date - timedelta(days=days)

    # --- handle missing dates ---
    if dateEnd and not dateStart:
        dateStart = min_date
    if dateStart and not dateEnd:
        dateEnd = max_date

    # --- build SQL ---
    base_query = "SELECT name, symbol, cat, date, price, volume FROM assets"
    conditions = []
    params = []

    if cat:
        conditions.append("cat = ?")
        params.append(cat)
    if symbol:
        conditions.append("symbol = ?")
        params.append(symbol)
    if dateStart and dateEnd:
        conditions.append("date BETWEEN ? AND ?")
        params.extend([dateStart.isoformat(), dateEnd.isoformat()])

    if conditions:
        base_query += " WHERE " + " AND ".join(conditions)

    base_query += " ORDER BY date"

    cursor.execute(base_query, tuple(params))
    rows = cursor.fetchall()
    conn.close()

    results = [
        {"name": r[0], "symbol": r[1], "cat": r[2],
         "date": r[3], "price": r[4], "volume": r[5]}
        for r in rows
    ]

    return {
        "filters": {
            "cat": cat,
            "symbol": symbol,
            "dateStart": dateStart,
            "dateEnd": dateEnd,
            "days": days
        },
        "count": len(results),
        "data": results
    }

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI running in WSL!"}

@app.get("/assets")
def get_assets(
    cat: Optional[str] = None,   # STK, IDX, CMD, CRY
    symbol: Optional[str] = None,
    dateStart: Optional[date] = None,
    dateEnd: Optional[date] = None,
    days: Optional[int] = None   # e.g. 30, 90, 270
):
    return query_assets(cat=cat, symbol=symbol,
                        dateStart=dateStart, dateEnd=dateEnd,
                        days=days)
