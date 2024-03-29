const infoPersonagem = "https://rickandmortyapi.com/api/character";
const localizacao = "https://rickandmortyapi.com/api/location";
const episodios = "https://rickandmortyapi.com/api/episode";

const inputBusca = document.getElementById("input-busca");
const botaoBusca = document.getElementById("botao-busca");
const paginacao = document.getElementById("paginacao");

let paginaAtual = 1;

function filtrarPersonagens(pagina, nome = "") {
  const url = `${infoPersonagem}?page=${pagina}&name=${nome}`;

  axios
    .get(url)
    .then(function (response) {
      const personagens = response.data.results;
      const informacoes = response.data.info;
      const listaPersonagens = document.getElementById("container-dos-cards");

      listaPersonagens.innerHTML = "";

      personagens.forEach(function (item) {
        listaPersonagens.innerHTML += ` 
        <div class="card-info">
          <img src="${item.image}">
          <div class="info-lista">
              <p class="p-lista"><strong>Nome: </strong><strong style="color:rgb(21, 105, 21)">${item.name}</strong></p>
              <p class="p-lista"><strong>Gênero: </strong>${item.gender}</p>   
              <p class="p-lista"><strong>Status: </strong>${item.status}</p>
              <p class="p-lista"><strong>Espécie: </strong>${item.species}</p>
              <p class="p-lista"><strong>Origem: </strong>${item.origin.name}</p>
              <p class="p-lista"><strong>Localização: </strong>${item.location.name}</p>
              <p class="p-lista"><strong>Aparece em: </strong>${item.episode.length} episódios</p>
          </div>
       </div> 
      
    `;
      });

      paginacao.innerHTML = "";

      if (informacoes.prev) {
        const botaoAnterior = document.createElement("button");
        botaoAnterior.textContent = "Anterior";
        botaoAnterior.addEventListener("click", function () {
          filtrarPersonagens(informacoes.prev.split("=")[1], nome);
        });
        paginacao.appendChild(botaoAnterior);
      }

      if (informacoes.next) {
        const botaoProximo = document.createElement("button");
        botaoProximo.textContent = "Próximo";
        botaoProximo.addEventListener("click", function () {
          filtrarPersonagens(informacoes.next.split("=")[1], nome);
        });
        paginacao.appendChild(botaoProximo);
      }
    })
    .catch(function (erro) {
      erro.response;
    });
}

axios
  .get(localizacao)
  .then(function (response) {
    const informacoes = response.data.info;
    const totalLocalizacoes = document.getElementById("localizacoes");

    totalLocalizacoes.innerHTML = "";

    totalLocalizacoes.innerHTML += `     
    <div class="info-lista">
      <p class="p-lista"><strong>Localizações: </strong>${informacoes.count}</p>  
    </div> 
  `;
  })
  .catch(function (erro) {
    console.log(erro.response);
  });

  axios
  .get(episodios)
  .then(function (response) {
    const episodios = response.data.info;
    const totalEpisodio = document.getElementById("episodios");

    totalEpisodio.innerHTML = "";

    totalEpisodio.innerHTML += `     
    <div class="info-lista">
      <p class="p-lista"><strong>Episódios: </strong>${episodios.count}</p>  
    </div> 
  `;
  })
  .catch(function (erro) {
    console.log(erro.response);
  });


  axios
  .get(infoPersonagem)
  .then(function (response) {
    const infoPersonagem = response.data.info;
    const totalPersonagens = document.getElementById("personagens");

    totalPersonagens.innerHTML = "";

    totalPersonagens.innerHTML += `     
    <div class="info-lista">
      <p class="p-lista"><strong>Personagens: </strong>${infoPersonagem.count}</p>  
    </div> 
  `;
  })
  .catch(function (erro) {
    console.log(erro.response);
  });
botaoBusca.addEventListener("click", function () {
  const termoBusca = inputBusca.value;
  filtrarPersonagens(paginaAtual, termoBusca);
});


filtrarPersonagens(paginaAtual);
