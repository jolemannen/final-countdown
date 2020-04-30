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
controller.moveSprite(robocop, 20, 20)
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 3 3 . . . . . . . . . . 
. . . . 3 3 3 3 . . . . . . . . 
. . . . 3 3 3 3 3 3 . . . . . . 
. . . . 3 2 3 3 2 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . 3 3 1 1 1 3 3 3 . . . . 
. . . . . 3 3 3 3 3 3 3 3 3 . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite.setPosition(128, 38)
game.onUpdate(function () {
    if (robocop.overlapsWith(mySprite)) {
        game.over(true, effects.confetti)
    } else {
        mySprite.setPosition(61, 32)
    }
})
