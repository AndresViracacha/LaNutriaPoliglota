var game = new Phaser.Game(1440, 900, Phaser.CANVAS, "phaser-example");

game.state.add("juego", juego);
game.state.add("instrucciones", instrucciones);
game.state.add("inicio", inicio);
game.state.add("historieta", historieta);

game.state.start("inicio", inicio);
