from depscrape.dependencies import get_dependencies_urls


def test_get_dependencies_url():
    # arrange
    deps = ["appdirs", "backcall", "black"]
    # act
    urls = get_dependencies_urls(deps)
    # assert
    assert urls == [
        "https://pypi.org/project/appdirs/",
        "https://pypi.org/project/backcall/",
        "https://pypi.org/project/black/",
    ]
