from unittest.mock import patch
from depscrape.responses import make_requests
from requests import Response


def test_make_requests():
    # arrange
    urls = ["https://pypi.org/project/black/"]
    response = Response()
    response.status_code = 200
    # act
    with patch('depscrape.responses.requests.get', return_value=response):
        responses = make_requests(urls)
    # assert
    assert responses[0].status_code == 200


def test_make_requests_with_http_errors():
    # arrange
    urls = [
        "https://pypi.org/project/black/",
        "https://pypi.org/project/flake8/",
        "https://pypi.org/project/ipython/",
        ]
    response = Response()
    response.status_code = 400
    # act
    with patch('depscrape.responses.requests.get', return_value=response):
        responses = make_requests(urls)
    # assert
    assert len(responses) == 0