//musica
var music;
//FONDO
var bg;
var title;
//PLAY
var play;

var inicio = {
  preload: function () {
    //juagador
    game.load.spritesheet("PLAY", "Sprites/abrir.png", 400, 400);

    //explosionmina
    game.load.spritesheet("inicio", "Sprites/fondoconnutria.png", 1440, 900);

    game.load.spritesheet("titulo", "Sprites/titulo.png", 700, 500);
  },
  create: function () {
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
  },
  update: function () {},
}; //yyyyyyyyyyyyyyyyyyyyyyyyyyyy
