class Form {
  constructor() {
    //propriedades ou caracteristicas
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  showElements() {
    this.titleImg.position(50, 50);
    this.titleImg.class("gameTitle");

    this.input.position(width / 2 - 100, height / 2);
    this.input.class("customInput");

    this.playButton.position(width / 2, height / 2 + 50);

    this.greeting.position(width / 2, height / 2);
  }

  //função que desenha as coisas na tela
  display() {
    this.showElements();
  }
}
