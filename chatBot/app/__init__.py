from flask import Flask
from app.routes import chat_bp


def create_app(testing=False):
    app = Flask(__name__)

    if testing:
        app.config["TESTING"] = True

    app.register_blueprint(chat_bp)

    return app
