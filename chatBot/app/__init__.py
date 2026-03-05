from flask import Flask
from flask_cors import CORS
from app.routes import chat_bp

def create_app(testing=False):
    app = Flask(__name__)

    if testing:
        app.config["TESTING"] = True

    origins = [
        "http://localhost:5173",       
        "https://https://rebecahdo.github.io/myCv/"           
    ]
    CORS(app, origins=origins)

    app.register_blueprint(chat_bp)

    return app
