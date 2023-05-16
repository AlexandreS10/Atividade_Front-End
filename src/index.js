import axios from "axios";

// https://rickandmortyapi.com/api

async function buscarDadosApiRickandMorty() {
  const id = 73;
  const response = await axios.get(`https:rickandmortyapi.com/api/character/${id}`);
  console.log(response.data);
}

buscarDadosApiRickandMorty();

// async function buscarDadosApiRickandMorty(){
//     const body = {text:}
//     const response = await axios.post(`https:rickandmortyapi.com/api/character/${id}`, body)
//     console.log(response.data);
// }
// buscarDadosApiRickandMorty()