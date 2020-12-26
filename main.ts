sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 5 5 . . 
    . . . . . . . 5 . . . 5 5 5 5 . 
    . . . . . . 5 5 . . . . . 5 5 . 
    . . . . . . 5 5 . . . . . 5 5 . 
    . . . . . . 5 5 . . . . . 5 5 . 
    . . . . . . . 5 . . . . . 5 . . 
    . . . . . . 3 3 5 5 5 5 5 5 . . 
    . . . . . . 3 2 3 5 5 5 . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . 3 3 . . . . . . . . . . 
    . . . 3 3 . . . . . . . . . . . 
    . . 3 3 . . . . . . . . . . . . 
    . 3 3 . . . . . . . . . . . . . 
    5 3 . . . . . . . . . . . . . . 
    5 5 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . 8 . . . . . 8 . . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 8 . . . 8 8 8 . . . . 
    . . . 8 3 8 8 5 8 8 3 8 . . . . 
    . . . 8 3 8 8 8 5 8 3 8 . . . . 
    . f . . 8 8 5 8 5 8 8 . . f . . 
    f . f 8 8 8 8 5 8 8 8 8 f . f . 
    . f . f 8 1 1 8 1 1 8 f . f . . 
    . . f 8 f 1 2 8 2 1 f 8 f . . . 
    . . . f 8 f 8 8 8 f 8 f . . . . 
    . . . 8 f f 8 8 8 f f 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 f 8 8 8 8 8 f 8 . . . . 
    . . . 8 f f f f f f f 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(100, 100)
