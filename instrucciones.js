//musica
var music;
var skin;
//FONDO
var bg;
var title;
//PLAY
var play;

//form
var formulario = document.getElementById("codigo");

var botonIngresar;
var textoAlerta;
var titulo;
var botonSalirAlerta;

var instrucciones = {
  preload: function () {
    //juagador
    game.load.spritesheet("PLAY", "Sprites/juegop/botonJugar.png", 328, 128);

    //explosionmina
    game.load.spritesheet("inicio", "Sprites/juegop/nutria.png", 1440, 900);
    game.load.spritesheet("papel", "Sprites/juegop/paper.png", 1245, 830);
    game.load.spritesheet(
      "tituloHisto",
      "Sprites/juegop/tituInstrucciones.png",
      614,
      120
    );
    game.load.spritesheet(
      "botonNutria",
      "Sprites/juegop/nutriaBoton.png",
      614,
      120
    );
    game.load.spritesheet(
      "botonNutriaOculta",
      "Sprites/juegop/tarjetaNutriaOculta.png",
      614,
      120
    );
    game.load.spritesheet(
      "fondoAlerta",
      "Sprites/juegop/fondoAlerta.png",
      772,
      391
    );
    game.load.spritesheet(
      "textoAlerta",
      "Sprites/juegop/textoAlerta.png",
      266,
      44
    );
    game.load.spritesheet(
      "botonIngresar",
      "Sprites/juegop/botonIngresar.png",
      266,
      44
    );
    game.load.spritesheet(
      "botonSalirAlerta",
      "Sprites/juegop/xAlerta.png",
      20,
      44
    );
    game.load.spritesheet(
      "instructivo",
      "Sprites/juegop/instructivo.png",
      1033,
      351
    );
    game.load.spritesheet(
      "nutriaDetectiveBoton",
      "Sprites/juegop/botonDetective.png",
      140,
      187
    );
  },
  create: function () {
    //-------------------------------------------------------------
    //----------------------background
    bg = game.add.tileSprite(0, 0, 1440, 900, "inicio");
    bg.fixedToCamera = true;

    papel = game.add.tileSprite(98, 35, 1245, 830, "papel");
    papel.fixedToCamera = true;

    instructivo = game.add.tileSprite(204, 222, 1033, 351, "instructivo");

    titulo = game.add.tileSprite(413, 83, 614, 120, "tituloHisto");
    papel.fixedToCamera = true;

    //---botton------
    play = game.add.button(1065, 711, "PLAY", nukeButton, this, 0, 0, 0);
    nutria = game.add.button(
      410,
      605,
      "botonNutria",
      eleccionNutria,
      this,
      0,
      0,
      0
    );
    nutria = game.add.button(
      570,
      592,
      "botonNutriaOculta",
      abrirAlerta,
      this,
      0,
      0,
      0
    );
    nutria2 = game.add.button(
      730,
      592,
      "botonNutriaOculta",
      null,
      this,
      0,
      0,
      0
    );
    nutria3 = game.add.button(
      890,
      592,
      "botonNutriaOculta",
      null,
      this,
      0,
      0,
      0
    );

    //NutriaDetective
    nutria4 = game.add.button(
      570,
      602,
      "nutriaDetectiveBoton",
      eleccionDetective,
      this,
      0,
      0,
      0
    );
    nutria4.visible = false;

    //alerta-------------------------------------------------------------------------------------
    titulo = game.add.tileSprite(334, 255, 772, 391, "fondoAlerta");
    textoAlerta = game.add.tileSprite(587, 338, 266, 44, "textoAlerta");
    botonIngresar = game.add.button(
      590,
      508,
      "botonIngresar",
      verificarcodigo,
      this,
      0,
      0,
      0
    );
    botonSalirAlerta = game.add.button(
      1067,
      255,
      "botonSalirAlerta",
      cerrarAlerta,
      this,
      0,
      0,
      0
    );
    formulario.style.display = "none";
    botonIngresar.visible = false;
    textoAlerta.visible = false;
    titulo.visible = false;
    botonSalirAlerta.visible = false;

    //Fin de alerta-------------------------------------------------------------------------------
    //-------------------------------------------------------
    function nukeButton() {
      game.state.start("juego", juego);
    }
    function cerrarAlerta() {
      formulario.style.display = "none";
      botonIngresar.visible = false;
      textoAlerta.visible = false;
      titulo.visible = false;
      botonSalirAlerta.visible = false;
    }
    function abrirAlerta() {
      formulario.style.display = "block";
      botonIngresar.visible = true;
      textoAlerta.visible = true;
      titulo.visible = true;
      botonSalirAlerta.visible = true;
    }
    function verificarcodigo() {
      if (formulario.value == "1234") {
        nutria4.visible = true;
      }
    }
    function eleccionNutria() {
      skin = 0;
    }
    function eleccionDetective() {
      skin = 1;
    }
    function abrirAlertao() {
      alert("xd");
    }
    function name() {
      if (contraseña == "1234") {
        nutria4.visible = true;
      }
    }
  },
  update: function () {},
}; //yyyyyyyyyyyyyyyyyyyyyyyyyyyy
