from unittest.mock import patch
import pytest
from requests import Response
from depscrape.responses import make_requests

@pytest.fixture
def succesful_response():
    response = Response()
    response.status_code = 200
    return response

@pytest.fixture
def failing_response():
    response = Response()
    response.status_code = 400
    return response

def test_make_requests(succesful_response):
    # arrange
    urls = ["https://pypi.org/project/black/"]
    # act
    with patch('depscrape.responses.requests.get', return_value=succesful_response):
        responses = make_requests(urls)
    # assert
    assert responses[0].status_code == 200


def test_make_requests_with_http_errors(failing_response):
    # arrange
    urls = [
        "https://pypi.org/project/black/",
        "https://pypi.org/project/flake8/",
        "https://pypi.org/project/ipython/",
        ]
    # act
    with patch('depscrape.responses.requests.get', return_value=failing_response):
        responses = make_requests(urls)
    # assert
    assert len(responses) == 0