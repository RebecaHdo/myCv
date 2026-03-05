from app.services.llm_service import ask_llm
import pytest


def test_ask_llm_calls_openai(mocker):
    mock_client = mocker.patch("app.services.llm_service.client")

    mock_client.chat.completions.create.return_value.choices = [
        mocker.Mock(message=mocker.Mock(content="Mock response"))
    ]

    result = ask_llm("Hola")

    assert result == "Mock response"


def test_ask_llm_raises_error(mocker):
    mock_client = mocker.patch("app.services.llm_service.client")
    # Forzamos que chat.completions.create lance Exception
    mock_client.chat.completions.create.side_effect = Exception("Fallo API")

    import app.services.llm_service as llm
    with pytest.raises(Exception) as exc_info:
        llm.ask_llm("Pregunta de prueba")

    assert "Fallo API" in str(exc_info.value)
