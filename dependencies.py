"""Extrai uma lista de dependencias de um projeto python."""


def get_dependencies():
    """Le o arquivo requirements.txt e retorna a lista de deps."""
    with open("requirements.txt") as reqtxt:
        deps = []
        for line in reqtxt:
            deps.append(line.split("==")[0])
    return deps


assert get_dependencies() == [
    "appdirs",
    "backcall",
    "black",
    "certifi",
    "chardet",
    "click",
    "cssselect",
    "decorator",
    "Faker",
    "flake8",
    "idna",
    "ipython",
    "ipython-genutils",
    "jedi",
    "lxml",
    "matplotlib-inline",
    "mccabe",
    "mypy-extensions",
    "parsel",
    "parso",
    "pathspec",
    "pexpect",
    "pickleshare",
    "prompt-toolkit",
    "ptyprocess",
    "pycodestyle",
    "pyflakes",
    "Pygments",
    "python-dateutil",
    "regex",
    "requests",
    "six",
    "text-unidecode",
    "toml",
    "traitlets",
    "urllib3",
    "w3lib",
    "wcwidth",
]
