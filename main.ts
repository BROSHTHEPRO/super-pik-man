scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.reset()
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(assets.image`pacman`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(50)
music.playMelody("E B C5 A B G A F ", 120)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 9 9 9 9 9 . . . . . . . . 
    . . . 9 f 9 f 9 . . . . . . . . 
    . . . 9 9 9 9 9 . . . . . . . . 
    . . . 9 9 9 9 9 . . . . . . . . 
    . . . 9 9 9 9 9 . . . . . . . . 
    . . . . 9 . 9 . . . . . . . . . 
    . . . 9 . 9 . 9 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileDarkGrass2)
