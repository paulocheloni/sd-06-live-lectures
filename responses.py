"""Faz as requisicoes pras urls e retorna as respostas."""
import time
import requests
from requests.exceptions import HTTPError, ReadTimeout


def make_requests(urls):
    """Faz as requisicoes, se possivel, e retorna as respostas bem sucedidas"""
    time.sleep(1)
    responses = []
    for url in urls:
        try:
            response = requests.get(url, timeout=3)
        except ReadTimeout:
            continue

        try:
            response.raise_for_status()
        except HTTPError:
            continue

        responses.append(response)

    return responses