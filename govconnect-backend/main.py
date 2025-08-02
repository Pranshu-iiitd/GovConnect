from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === In-memory user and complaint DBs ===
users = {
    "admin@govconnect.com": "adminpass",
    "user1@example.com": "123456"
}
complaints_db = []

# === Auth config ===
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SECRET_KEY = "govconnectsecret"
ALGORITHM = "HS256"

# === Auth helper ===
def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email is None or email not in users:
            raise HTTPException(status_code=401, detail="Invalid token")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Token error")

# === Pydantic Models ===
class Complaint(BaseModel):
    title: str
    description: str
    status: str = "Pending"
    user_email: str = ""

class ComplaintUpdate(BaseModel):
    id: int
    status: str

# === Routes ===

# Submit complaint
@app.post("/complaints")
def submit_complaint(data: Complaint, user_email: str = Depends(get_current_user)):
    data.user_email = user_email
    complaints_db.append(data)
    return {"msg": "Complaint submitted"}

# Get logged-in user's complaints
@app.get("/my-complaints", response_model=List[Complaint])
def get_user_complaints(user_email: str = Depends(get_current_user)):
    return [c for c in complaints_db if c.user_email == user_email]

# Get all complaints (admin only), optional status filter
@app.get("/all-complaints", response_model=List[Complaint])
def get_all_complaints(user_email: str = Depends(get_current_user), status: str = None):
    if user_email != "admin@govconnect.com":
        raise HTTPException(status_code=403, detail="Admins only")
    if status:
        return [c for c in complaints_db if c.status == status]
    return complaints_db

# Admin updates complaint status by index
@app.put("/update-complaint")
def update_complaint_status(update: ComplaintUpdate, user_email: str = Depends(get_current_user)):
    if user_email != "admin@govconnect.com":
        raise HTTPException(status_code=403, detail="Admins only")
    if 0 <= update.id < len(complaints_db):
        complaints_db[update.id].status = update.status
        return {"msg": "Status updated"}
    raise HTTPException(status_code=404, detail="Complaint not found")
