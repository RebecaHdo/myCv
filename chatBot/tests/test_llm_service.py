from app.services.llm_service import ask_llm


def test_ask_llm_calls_openai(mocker):
    mock_client = mocker.patch("app.services.llm_service.client")

    mock_client.chat.completions.create.return_value.choices = [
        mocker.Mock(message=mocker.Mock(content="Mock response"))
    ]

    result = ask_llm("Hola")

    assert result == "Mock response"
