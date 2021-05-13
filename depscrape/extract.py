"""Extrair informações interessantes dos htmls"""
from parsel import Selector


def extract_data_from(html):
    """Recebe um html e extrai as informações."""
    selector = Selector(html)
    return {
        "package_name": selector.css(".package-header__name::text")
        .get()
        .strip()
        .split()[0],
        "latest_release_date": selector.css(
            ".package-header__date time::attr(datetime)"
        ).get(),
        "author_email": selector.css("[href^=mailto]::attr(href)").get().split(":")[1],
    }
