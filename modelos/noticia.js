class Noticia {
  set titulo(titulo) {
    this._titulo = titulo;
  }
  get tituloNoticia() {
    return this._titulo
  }

  set data_de_publicacao(data) {
    this._data = data;
  }
  get dataNoticia() {
    return this._data;
  }


  set autor(autor) {
    this._autor = autor;
  }
  get autorNoticia() {
    return this._autor
  }

  set resumo(resumo) {
    this._resumo = resumo;
  }
  get resumoNoticia() {
    return this._resumo;
  }
  set imagem(imagem) {
    this._imagem = imagem;
  }
  get imagemNoticia() {
    return this._imagem;
  }
  set link(link) {
    this._link = link;
  }
  get linkNoticia() {
  }

  get mostrarNoticia() {
    try {
      return this.noticiaNova();
    } catch (erro) {
      return erro
    } finally {
      console.log("Executado")
    }
  }

  noticiaNova() {
    if (this._titulo != "") {

      return `
       <div class="shadow p-3">
        <a href="${this._link}"><h1>${this._titulo}</h1></a>
        <p class="mt-2">${this._data_de_publicacao}</p>
        <p class="mt-2">${this._autor}</p>
        <p class="resumo">${this._resumo}</p>
<p class="mt-2">${this._autor}</p>
        <p class="imagem">${this._imagem}</p>
        </div>
      `

    } else {

      throw new ErroCustomizado("A noticia nao esta completa.")
    }

  }

}

