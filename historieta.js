//musica
var music;
//FONDO
var bg;
var title;
//PLAY
var play;

var historieta = {
  preload: function () {
    //juagador
    game.load.spritesheet(
      "PLAY",
      "Sprites/juegop/botonSiguiNara.png",
      328,
      128
    );

    //explosionmina
    game.load.spritesheet("inicio", "Sprites/juegop/nutria.png", 1440, 900);
    game.load.spritesheet(
      "historieta",
      "Sprites/juegop/historierta.png",
      869,
      478
    );
    game.load.spritesheet("papel", "Sprites/juegop/paper.png", 1245, 830);
    game.load.spritesheet(
      "tituloHisto",
      "Sprites/juegop/historietaTitulo.png",
      366,
      120
    );
  },
  create: function () {
    //-------------------------------------------------------------
    //----------------------background
    bg = game.add.tileSprite(0, 0, 1440, 900, "inicio");
    bg.fixedToCamera = true;

    papel = game.add.tileSprite(98, 35, 1245, 830, "papel");
    papel.fixedToCamera = true;

    titulo = game.add.tileSprite(537, 83, 366, 120, "tituloHisto");
    papel.fixedToCamera = true;

    titulo = game.add.tileSprite(286, 211, 869, 478, "historieta");

    //---botton------
    play = game.add.button(951, 709, "PLAY", nukeButton, this, 0, 0, 0);

    //-------------------------------------------------------
    function nukeButton() {
      game.state.start("instrucciones", instrucciones);
    }
  },
  update: function () {},
}; //yyyyyyyyyyyyyyyyyyyyyyyyyyyy
