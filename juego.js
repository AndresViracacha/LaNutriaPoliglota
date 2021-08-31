//musica
var music;
var skin;
var turistas;
var huron;
//FONDO
var bg;
var title;
var CN = 0;
//PLAY
var play;

var mensajePerdio =
  "¡Oh no!, el huron ha conseguido escaparse con los papeles de los turistas. ¡Pero no te preocupes! puedes volverlo a intentar";
var mensajeGano =
  "¡Genial nutria! ¡Has conseguido atrapar al huron antes de que escapara con los papeles de los turistas! ¡Muchas gracias! Nos veremos en un proxima aventura";

//form
var formulario = document.getElementById("codigo");
var tiempoTexto = document.getElementById("tiempo");
var alerta = document.getElementById("alerta");

var botonIngresar;
var textoAlerta;
var titulo;
var botonSalirAlerta;

var binocularesOb;
var camaraOb;
var gorraOb;
var mapaOb;
var termoOb;
var tiempo = 120;

var juego = {
  preload: function () {
    var intervalo = setInterval(() => {
      tiempo--;
      tiempoTexto.textContent = Math.floor(tiempo / 60) + ":" + (tiempo % 60);
      if (tiempo == 0) {
        clearInterval(intervalo);
      }
    }, 1000);

    //juagador
    game.load.tilemap(
      "map",
      "Sprites/tiledmap/xd_piso.csv",
      null,
      Phaser.Tilemap.CSV
    );
    game.load.tilemap(
      "mapObstaculos",
      "Sprites/tiledmap/xd_paredes.csv",
      null,
      Phaser.Tilemap.CSV
    );
    game.load.image("tiles", "Sprites/tiledmap/tiledmap.png");

    game.load.spritesheet("PLAY", "Sprites/juegop/botonJugar.png", 328, 128);

    game.load.spritesheet(
      "nutria",
      "Sprites/juegop/spriteSheetNutria.png",
      56,
      87
    );

    //Objetos----------------------------------------------------------------------------------
    game.load.image("binoculares", "Sprites/UI/binocularesN.png");
    game.load.image("camara", "Sprites/UI/camaraN.png");
    game.load.image("gorra", "Sprites/UI/gorraN.png");
    game.load.image("mapa", "Sprites/UI/mapaN.png");
    game.load.image("termo", "Sprites/UI/termoN.png");
    game.load.spritesheet("papel", "Sprites/juegop/paper.png", 1245, 830);
    //boton
    game.load.spritesheet("PLAY", "Sprites/juegop/botonJugar.png", 328, 128);

    //turistas
    game.load.image("turistas", "Sprites/juegop/turistas.png");
    //huron
    game.load.spritesheet("huron", "Sprites/juegop/huron.png", 40, 60);
  },
  create: function () {
    var contenedorVidas = document.getElementById("vidas");
    contenedorVidas.style.display = "flex";
    var contenedorTiempo = document.getElementById("tiempoo");
    contenedorTiempo.style.display = "flex";
    var contenedorObjetos = document.getElementById("objetos");
    contenedorObjetos.style.display = "flex";

    game.physics.startSystem(Phaser.Physics.ARCADE);
    //-------------------------------------------------------------
    //----------------------background
    bg = game.add.tileSprite(0, 0, 1440, 900, "inicio");
    bg.fixedToCamera = true;
    //NutriaDetective
    nutria4 = game.add.button(
      570,
      602,
      "nutriaDetectiveBoton",
      null,
      this,
      0,
      0,
      0
    );
    map = game.add.tilemap("map", 100, 100);
    //  Now add in the tileset
    map.addTilesetImage("tiles");

    obstaculos = game.add.tilemap("mapObstaculos", 100, 100);
    //  Now add in the tileset
    obstaculos.addTilesetImage("tiles");
    //  cargar la capa 0
    layer = map.createLayer(0);
    layer = obstaculos.createLayer(0);
    //  Resize the world
    layer.resizeWorld();
    obstaculos.setCollisionBetween(1, 3);
    obstaculos.setCollisionBetween(6, 8);
    obstaculos.setCollisionBetween(10, 13);

    binocularesOb = game.add.sprite(225, 425, "binoculares");
    game.physics.enable(binocularesOb, Phaser.Physics.ARCADE);
    binocularesOb.body.setSize(52, 62, 0, 0);

    camaraOb = game.add.sprite(125, 1525, "camara");
    game.physics.enable(camaraOb, Phaser.Physics.ARCADE);
    camaraOb.body.setSize(52, 62, 0, 0);

    gorraOb = game.add.sprite(2425, 25, "gorra");
    game.physics.enable(gorraOb, Phaser.Physics.ARCADE);
    gorraOb.body.setSize(52, 62, 0, 0);

    mapaOb = game.add.sprite(2425, 825, "mapa");
    game.physics.enable(mapaOb, Phaser.Physics.ARCADE);
    mapaOb.body.setSize(52, 62, 0, 0);

    termoOb = game.add.sprite(1725, 1525, "termo");
    game.physics.enable(termoOb, Phaser.Physics.ARCADE);
    termoOb.body.setSize(52, 62, 0, 0);

    //Turistas--------------------------------------------------------------------------------------------
    turistas = game.add.sprite(2700, 1850, "turistas");
    game.physics.enable(turistas, Phaser.Physics.ARCADE);
    turistas.body.setSize(52, 62, 0, 0);

    /*huron ---------------------------------------------------------------------------------------- */
    huron = game.add.sprite(2800, 1850, "huron");
    game.physics.enable(huron, Phaser.Physics.ARCADE);

    ////////Nutria-----------------------------------------------------------------------------------------
    nutriaPlayer = game.add.sprite(32, 92, "nutria");
    game.physics.enable(nutriaPlayer, Phaser.Physics.ARCADE);
    nutriaPlayer.body.gravity.y = 0; //GRAVEDAD EN Y
    nutriaPlayer.body.bounce.y = 0; //rebote en y
    nutriaPlayer.body.collideWorldBounds = true;
    //cajita invisible que hace las colision
    nutriaPlayer.body.setSize(52, 62, 0, 20);
    if (skin == 0) {
      CN = 0;
    }
    if (skin == 1) {
      CN = 14;
    }
    nutriaPlayer.animations.add(
      "right",
      [0 + CN, 1 + CN, 2 + CN, 3 + CN, 4 + CN, 5 + CN, 6 + CN],
      10,
      true
    );
    nutriaPlayer.animations.add("turn", [0], 20, true);
    nutriaPlayer.animations.add(
      "left",
      [13 + CN, 12 + CN, 11 + CN, 10 + CN, 9 + CN, 8 + CN, 7 + CN],
      10,
      true
    );
    ////////Fin Nutria-----------------------------------------------------------------------------------------

    //pantalla juego
    papel = game.add.tileSprite(98, 35, 1245, 830, "papel");
    papel.visible = false;
    papel.fixedToCamera = true;
    play = game.add.button(1065, 711, "PLAY", menu, this, 0, 0, 0);
    play.visible = false;
    play.fixedToCamera = true;

    cursors = game.input.keyboard.createCursorKeys();

    function menu() {
      tiempo = 120;
      game.paused = false;
      alerta.style.display = "none";
      game.state.start("inicio", inicio);
    }
  },
  update: function () {
    if (tiempo == 0) {
      papel.visible = true;
      play.visible = true;
      game.paused = true;
      var contenedorVidas = document.getElementById("vidas");
      contenedorVidas.style.display = "none";
      var contenedorTiempo = document.getElementById("tiempoo");
      contenedorTiempo.style.display = "none";
      var contenedorObjetos = document.getElementById("objetos");
      contenedorObjetos.style.display = "none";
      alerta.style.display = "flex";
    }
    function binocularesObOver() {
      binocularesOb.visible = false;
      binocularesOb.kill();
      var binocularesID = document.getElementById("binoculares");
      binocularesID.style.opacity = 1;
    }
    function camaraObOver() {
      var camaraID = document.getElementById("camara");
      camaraID.style.opacity = 1;

      camaraOb.visible = false;
      camaraOb.kill();
    }
    function gorraObOver() {
      gorraOb.visible = false;
      gorraOb.kill();
      var gorraID = document.getElementById("gorra");
      gorraID.style.opacity = 1;
    }
    function mapaObOver() {
      mapaOb.visible = false;
      mapaOb.kill();
      var mapaID = document.getElementById("mapa");
      mapaID.style.opacity = 1;
    }
    function termoObOver() {
      termoOb.visible = false;
      termoOb.kill();
      var termoID = document.getElementById("termo");
      termoID.style.opacity = 1;
    }
    game.physics.arcade.collide(nutriaPlayer, layer);

    game.physics.arcade.overlap(
      nutriaPlayer,
      binocularesOb,
      binocularesObOver,
      null,
      this
    );
    game.physics.arcade.overlap(
      nutriaPlayer,
      camaraOb,
      camaraObOver,
      null,
      this
    );
    game.physics.arcade.overlap(nutriaPlayer, gorraOb, gorraObOver, null, this);
    game.physics.arcade.overlap(nutriaPlayer, mapaOb, mapaObOver, null, this);
    game.physics.arcade.overlap(nutriaPlayer, termoOb, termoObOver, null, this);

    game.camera.follow(nutriaPlayer);

    //movimiento del jugador
    nutriaPlayer.body.velocity.x = 0;
    nutriaPlayer.body.velocity.y = 0;
    if (cursors.right.isDown) {
      nutriaPlayer.body.velocity.x = 350;
      nutriaPlayer.animations.play("right");
      facing = "right";
    } else if (cursors.left.isDown) {
      nutriaPlayer.body.velocity.x = -350;
      nutriaPlayer.animations.play("left");
      facing = "left";
    } else if (cursors.up.isDown) {
      if (facing == "right") {
        nutriaPlayer.body.velocity.y = -350;
        nutriaPlayer.animations.play("right");
      } else {
        nutriaPlayer.body.velocity.y = -350;
        nutriaPlayer.animations.play("left");
      }
    } else if (cursors.down.isDown) {
      if (facing == "right") {
        nutriaPlayer.body.velocity.y = 350;
        nutriaPlayer.animations.play("right");
      } else {
        nutriaPlayer.body.velocity.y = 350;
        nutriaPlayer.animations.play("left");
      }
    } else {
      nutriaPlayer.animations.stop();
      if (facing == "right") {
        nutriaPlayer.frame = 6 + CN;
      } else {
        nutriaPlayer.frame = 7 + CN;
      }
    }

    //FIN UPDATE----------------------------------------------------------------------------------------------------------
  },
  /* 
  render: function () {
    // Display
    game.debug.body(nutriaPlayer);
  }, */
};
