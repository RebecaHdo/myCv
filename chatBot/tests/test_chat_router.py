import pytest
from app import create_app


@pytest.fixture
def client():
    app = create_app(testing=True)
    return app.test_client()


def test_chat_endpoint_success(client, mocker):
    mocker.patch(
        "app.routes.ask_llm",
        return_value="Simulación de respuesta"
    )

    response = client.post("/chat", json={"message": "Hola"})
    data = response.get_json()

    assert response.status_code == 200
    assert data["response"] == "Simulación de respuesta"


def test_chat_endpoint_400_without_body(client):
    response = client.post("/chat", json={})
    data = response.get_json()

    assert response.status_code == 400
    assert "error" in data

def test_chat_endpoint_400_body_not_json(client):
    response = client.post("/chat", data="no-json")
    assert response.status_code == 415


def test_chat_endpoint_500(client, mocker):
    # Forzamos que ask_llm lance excepción
    mocker.patch(
        "app.routes.ask_llm",
        side_effect=Exception("Fallo del LLM")
    )

    response = client.post("/chat", json={"message": "Hola"})
    data = response.get_json()

    assert response.status_code == 500
    assert "error" in data
    assert "Fallo del LLM" in data["error"]
