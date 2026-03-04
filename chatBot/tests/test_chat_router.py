import pytest
from app import create_app


@pytest.fixture
def client():
    app = create_app(testing=True)
    return app.test_client()


def test_chat_returns_200(client, mocker):
    # Mockeamos el servicio LLM
    mocker.patch(
        "app.routes.ask_llm",
        return_value="Respuesta simulada"
    )

    response = client.post(
        "/chat",
        json={"message": "Hola"}
    )

    assert response.status_code == 200
    assert response.get_json()["response"] == "Respuesta simulada"
