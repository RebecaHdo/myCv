import pytest
from app.services.llm_service import ask_llm


@pytest.mark.skipif(False, reason="Real test: active only if there are enough tokens")
def test_ask_llm_real():
    user_message = "Cuéntame sobre la experiencia de Rebeca en Python"
    response = ask_llm(user_message)

    assert isinstance(response, str)
    assert len(response) > 0

    assert "Rebeca" in response or "Python" in response
