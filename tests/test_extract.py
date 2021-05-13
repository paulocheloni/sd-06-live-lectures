import pytest
from depscrape.extract import extract_data_from


@pytest.fixture
def pypi_black_html():
    with open("./tests/assets/pypi-black.html") as html_file:
        return html_file.read()


def test_extract_data(pypi_black_html):
    # arrange
    # act
    data = extract_data_from(pypi_black_html)
    # assert
    assert data == {
        "author_email": "lukasz@langa.pl",
        "latest_release_date": "2021-05-10T15:11:11+0000",
        "package_name": "black",
    }
