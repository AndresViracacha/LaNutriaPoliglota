//musica
var music;
var aventura;
//FONDO
var bg;
var title;
//PLAY
var play;

var inicio = {
  preload: function () {
    //Audio
    game.load.audio("aventura", "sonidos/MusicaAventura.mp3");
    game.load.audio("gano", "sonidos/MusicaGano.mp3");
    game.load.audio("perdio", "sonidos/MusicaPerdio.mp3");
    //juagador
    game.load.spritesheet("PLAY", "Sprites/abrir.png", 400, 400);

    //explosionmina
    game.load.spritesheet("inicio", "Sprites/fondoconnutria.png", 1440, 900);

    game.load.spritesheet("titulo", "Sprites/titulo.png", 700, 500);
  },
  create: function () {
    aventura = game.add.audio("aventura");
    gano = game.add.audio("gano");
    perdio = game.add.audio("perdio");
    //-------------------------------------------------------------
    //----------------------background
    bg = game.add.tileSprite(0, 0, 1440, 900, "inicio");
    bg.fixedToCamera = true;

    title = game.add.tileSprite(529, 65, 700, 500, "titulo");
    title.fixedToCamera = true;

    //---botton------
    play = game.add.button(924, 474, "PLAY", nukeButton, this, 0, 0, 0);

    //-------------------------------------------------------
    function nukeButton() {
      game.state.start("historieta", historieta);
    }
    aventura.loop = true;
    aventura.play();
  },
  update: function () {},
}; //yyyyyyyyyyyyyyyyyyyyyyyyyyyy
