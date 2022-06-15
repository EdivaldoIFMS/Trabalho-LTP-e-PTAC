  var requestURL = 'https://www.luizpicolo.com.br/api.json';

  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function (){
  var response = request.response;
    
  //Noticia
    
  let titulo = response.articles[0].title;
  let data_de_publicacao = response.articles[0].publishedAt;
  let autor = response.articles[0].author;
  let resumo = response.articles[0].description;

  let objeto_destaque = new NoticiaDestaque(titulo, data_de_publicacao, autor, resumo);

    let noticia1 = document.getElementById("Imagem");
    noticia1.insertAdjacentHTML('afterbegin', '<div>' + objeto_destaque.mostrarDestaque + '</div>');

    response.articles.shift();

    response.articles.forEach(response => {
    let titulo = response.title;
    let data_de_publicacao = response.publishedAt;
    let autor = response.author;
    let resumo = response.description;
    let imagem = response.urlToImage;
   novaDestaque._link = ultimo.url;

    let objeto = new Noticia(titulo, data_de_publicacao, autor, resumo);

      let noticias = document.getElementById("noticias");

      noticias.insertAdjacenHTML('afterbegin', 'noticias' + objeto.mostrarNoticia + '</div>');
    })
    let ultimas_noticias = response.articles;
    let ultimo = ultimas_noticias.shift();
    let lista = document.getElementById("lista");

    lista.insertAdjacentHTML('afterbelgin', '<li>' + ultimo.title + ';' + '</li>');
}