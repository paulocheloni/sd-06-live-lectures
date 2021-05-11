import csv
import dependencies as deps
from responses import make_requests
from extract import extract_data_from
from output import save_to_csv

# de onde vem os dados (site, urls)
## requirements.txt lista as nossas dependencias
## gerar as urls de cada pacote a partir do nome
pacotes = deps.get_dependencies()
urls = deps.get_dependencies_urls(pacotes)

# como fazer as requisições
## lib requests
data = []
for response in make_requests(urls[:3]):
    # como extrair os dados
    ## procurar no html usando parsel
    data.append(extract_data_from(response.text))

# como salvar os dados
## salvar em um csv
save_to_csv(data)
