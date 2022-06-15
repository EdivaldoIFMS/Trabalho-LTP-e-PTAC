class ErroCustomizado extends Error{
  constructor(mensagem) {
    super(mensagem);
    this.name = "ErronaNoticia";
  }
}