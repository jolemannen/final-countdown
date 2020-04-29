let robocop = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 3 . . . . . 
. . . 3 5 5 5 5 5 5 3 3 3 . . . 
. . . 3 5 5 5 5 5 5 5 5 3 . . . 
. . 3 3 f f f f f f f f 3 . . . 
. . 3 5 f f f f f f f f 3 . . . 
. . 3 5 f f f 5 5 f f f 3 . . . 
. . 3 5 5 5 5 5 5 5 5 5 3 . . . 
. . 3 5 5 2 2 2 2 2 2 5 3 . . . 
. . 3 5 5 2 2 2 2 2 2 5 3 . . . 
. . 3 5 3 3 2 2 2 2 2 5 3 . . . 
. . 3 3 3 . 3 3 3 5 5 5 3 . . . 
. . . 3 . . . . . 3 3 3 3 . . . 
. . . 3 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    controller.moveSprite(robocop, 100, 100)
})
