from flask import Blueprint, request, jsonify
from app.services.llm_service import ask_llm

chat_bp = Blueprint("chat", __name__)


@chat_bp.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()

    if not data or "message" not in data:
        return jsonify({"error": "Message is required"}), 400

    response = ask_llm(data["message"])

    return jsonify({"response": response}), 200
