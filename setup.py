from setuptools import setup

setup(
    name="depscrape",
    description="Scraping dependencies data from pypi.",
    packages=["depscrape"],
    install_requires=[
        "parsel",
        "requests",
    ],
    tests_require=["pytest"],
)
