
const api = axios.create({
  baseUrl: "https://rickandmortyapi.com/api",
});
 
function buscarPersonagem(pagina,nome){
  const urlCharacter= `https:rickandmortyapi.com/api/character/?page=${pagina}&name=${nome}`


api.get(urlCharacter)
.then()
} 

 
  
  





