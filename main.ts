namespace SpriteKind {
    export const Item = SpriteKind.create()
}
function Start () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(Man, tiles.getTileLocation(0, 10))
    scene.cameraFollowSprite(Man)
    Corpse = sprites.create(assets.image`myImage`, SpriteKind.Item)
    tiles.placeOnTile(Corpse, tiles.getTileLocation(18, 15))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    game.splash("S l e e p", "Choose . . .")
    game.splash("Left or Right . . .")
    Doorness = 4
    Final_Moments()
})
function Hub_2 () {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(Man, tiles.getTileLocation(2, 3))
    game.splash("You find Yourself in Bed", "With a key in hand . . .")
    tiles.setWallAt(tiles.getTileLocation(13, 12), true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    game.splash("S l e e p")
    Doorness = 2
    Dream_1()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    game.splash("S l e e p")
    Doorness = 3
    Dream_2()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    Doorness = 1
})
function Hub_3 () {
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(Man, tiles.getTileLocation(2, 3))
    game.splash("You find Yourself in Bed", "With a key in hand . . .")
    tiles.setWallAt(tiles.getTileLocation(26, 12), true)
    Gato.destroy()
}
function Dream_1 () {
    Spook = 4
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnTile(Man, tiles.getTileLocation(2, 3))
    Key_2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 9 9 . . 
        . . . . . . 9 9 9 9 9 9 6 6 . . 
        . . 9 9 9 9 6 6 6 6 6 6 5 5 . . 
        9 9 9 6 6 6 6 5 5 . 5 5 . 5 5 . 
        6 6 6 . . . . . 5 . . 5 . . 5 . 
        . . . . . . . . 5 . . 5 . . . 5 
        . . . . . . . . . 5 . . 5 . . 5 
        . . . . . . . . . 5 . . 5 . 5 . 
        . . . . . . . . 5 . . 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Key_2, tiles.getTileLocation(26, 3))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (Doorness == 1) {
        Room_1 = true
        Key_1.destroy(effects.disintegrate, 500)
        game.splash("This seems to be the ", "Key for Room 1")
    }
    if (Doorness == 2) {
        Room_2 = true
        Key_2.destroy(effects.disintegrate, 500)
        game.splash("This seems to be the ", "Key for Room 2")
        game.splash("Wake Up . . .")
        Hub_2()
    }
    if (Doorness == 3) {
        Room_2 = true
        Key_2.destroy(effects.disintegrate, 500)
        game.splash("This seems to be the ", "Key for Room 2")
        game.splash("Wake Up . . .")
        Hub_2()
    }
})
function Final_Moments () {
    tiles.setTilemap(tilemap`level9`)
    effects.blizzard.startScreenEffect()
    Spook = 5
    tiles.placeOnTile(Man, tiles.getTileLocation(0, 0))
    mySprite = sprites.create(img`
        .........................
        .........................
        .........................
        .........................
        .........9799............
        .......77996979979.......
        ......996aa7aa6a6999.....
        ..49999aa7a...7aa7999....
        .454aaaaa......aa7a999..a
        ..4aaaaa9........aaa999a.
        ....a9.aa9.......9aaa99..
        ....a9..a9......9aa.9a9..
        ....aa9.a99....9aaa.9a9..
        ....aa9..a9...9aaa.9aaa..
        .....a9..a99..9aa.9aaa...
        ....aa9..a99..9a..9aa....
        ....aa9..a9...9a..9aa....
        ....a9...a9...9aa..9aa...
        ....a9..a9.....9aa..9aa..
        ....a9..a9......9aa..9aa.
        ....9...9........9a...9a.
        ...a9..a9.......9a...9a..
        ...a9..a9......9a....9...
        ...a9..9.......9....9a...
        ...9...9......9a...9a....
        `, SpriteKind.Item)
}
function Dream_2 () {
    Spook = 3
    tiles.setTilemap(tilemap`level10`)
    tiles.placeOnTile(Man, tiles.getTileLocation(7, 14))
    Key_3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 6 5 . . . . . . . . . . 
        . . . 6 1 2 6 . . . . . . . . . 
        . . . 5 2 3 5 . . . . . . . . . 
        . . . . 6 5 6 6 . . . . . . . . 
        . . . . . 4 5 7 6 . . . . . . . 
        . . . . . . 4 5 7 6 . . . . . . 
        . . . . . 4 . 4 5 7 6 . . . . . 
        . . . . . . . . 4 5 7 6 . . . . 
        . . . . . . . 4 . 4 5 7 5 . . . 
        . . . . . . . . . . 4 5 . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Key_3, tiles.getTileLocation(7, 1))
    for (let index = 0; index < 3; index++) {
        Gato = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnTile(Gato, tiles.getTileLocation(randint(1, 14), randint(1, 11)))
    }
    Eye = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . 4 4 5 5 1 4 . . . . . 
        . . . . 4 5 5 5 3 5 5 4 . . . . 
        . . . . . 4 5 5 2 5 5 4 . . . . 
        . . . . . . 4 3 5 5 5 5 4 . . . 
        . . . . . . . 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Eye.follow(mySprite, 40)
    controller.moveSprite(Gato, 40, 40)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(Man, tiles.getTileLocation(7, 14))
})
function Hub_1 () {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(Man, tiles.getTileLocation(2, 3))
    Key_1 = sprites.create(assets.image`myImage1`, SpriteKind.Food)
    tiles.placeOnTile(Key_1, tiles.getTileLocation(26, 3))
    tiles.setWallAt(tiles.getTileLocation(4, 12), true)
    scene.cameraFollowSprite(Key_1)
    pause(1000)
    game.splash("I feel strangely attracted ", "To the far closet")
    scene.cameraFollowSprite(Man)
}
let Eye: Sprite = null
let Key_3: Sprite = null
let mySprite: Sprite = null
let Room_2 = false
let Key_1: Sprite = null
let Room_1 = false
let Key_2: Sprite = null
let Gato: Sprite = null
let Corpse: Sprite = null
let Doorness = 0
let Spook = 0
let Man: Sprite = null
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999aaa99aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99aa99999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99aaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999a99aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9aaa99aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999aaaaaaaaaaaa99999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999aaaaaaaaaaaaaaaaaaaaaa9999999999999999aaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaa9999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaa99999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaa999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaa
    aaaaaaaaaaaaaaaaaa999999999999aaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaa99999999999aaaaaaaa
    aaaaaaaaaaaaaaaaaaa9999999999999aaaaa9999999999999992aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaa9999999999999aaaaaaa
    aaaaaaaaaaaaaaaaaaa999999999999999999999999999999922aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaa9999999999999aaaaaaa
    aaaaaaaaaaaaaaaaaaaa999999999999999999999999999222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaa999999999999999aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaa999a9999999a999aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999992222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaa999aa99a9999aa99aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999922222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaa999aaa99a999aaa999aaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22222222222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaa9aa9999aaa99a999aaaa99aaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22222222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaa9999aaaaa99aa99aaaa99aaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1222222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaa99aaa99aaaa9aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaa999aa999aaaa9aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaa99aaa99aaaa9aaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaa999aaa99aaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaa9aaaaa9aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaa9aaaaa99aaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaa9aaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaa9aaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999999999222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa122222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999aa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999929999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999299999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999992999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999aaaaaaaaaaaaa999999999992999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaa999aaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaa9999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaa9999229999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaa99999aaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa22aa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaa9999999aaaaaaaaa99999aaaaaaaaaaaaaaaaaaaa9999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaa99999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaa999999999aaaaaaaaaa999999aaaaaaaaaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaa999aaaa9999999999aaaaaaaaaaa9999999aaaaaaaaaaa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaa9999aa999999999aaaaaaaaaaaaa999999999aaaaa9999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaa9999aa99999999aaaaaaaaaaaaaa9999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa999a9999999aaaaaaa999aaaaaa19999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa999a999999a99999999999aaaaaa2999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa999a99999a999999999999aaaaaa129999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa9999999999999999999999aaaaaaa2229999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa99999999999999999999aaaaaaaaa222222223aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaa99999999999999aaaaaaaaaaaaaaaa1222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa99999999999999999aaaaaaaaaaaa1222222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa999999999999999999aaaaaaaaaaaa22222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa9999999999999999999aaaaaaaaaaa12222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa9999999999999999999aaaaaaaaaaa12222aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa999999999999999999aaaaaaaaa12223aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa999aaa99a9999aa9999999aaaaaaaaa1223aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaa999999aa99999aaa999999aaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa99999999999aaaaaa999aaaaaaaaaa122aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaa22aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa99a9999999aaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa999aaaaaaaaaaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa99999999999aaaaaaaaaaaaaaaaaaaa12aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaa2aaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa9999a99aaaa9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa99999aaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaa9999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaa999999999a999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaa9a9999aaa9999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaa99aaaa9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999aaaaaaaaaaaa9999999999999999999aaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaa999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999aaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaaaa
    aaaaaaaaaaaa9999999999a9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999999aaaaaaaaaaaaaa
    aaaaaaaaaaaa99a999999a9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999aaaaaaaaaaaaa
    aaaaaaaaaaaa999aaaaaa99aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999aaaaaaaaaaaa
    aaaaaaaaaaaa99999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999999aaaaaaaaaaa
    aaaaaaaaaaa9999a9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa9999999999aaaaaaaaaa
    aaaaaaaaaaa99999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaaa
    aaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999aaaaaaaa
    aaaaaaaaaa9999999999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99999999aaaaaaaa
    `)
game.splash("Place Removed Chain Here")
Man = sprites.create(assets.image`myImage0`, SpriteKind.Player)
Spook = 0
Doorness = 0
controller.moveSprite(Man, 150, 150)
Start()
game.onUpdateInterval(1000, function () {
    if (Spook == 0) {
        scene.cameraShake(2, 500)
    }
})
forever(function () {
    if (Room_1 == true) {
        while (Man.tileKindAt(TileDirection.Bottom, assets.tile`myTile37`)) {
            tiles.setWallAt(tiles.getTileLocation(4, 12), false)
            tiles.setTileAt(tiles.getTileLocation(4, 12), assets.tile`myTile46`)
        }
    }
})
forever(function () {
    if (Room_2 == true) {
        while (Man.tileKindAt(TileDirection.Bottom, assets.tile`myTile36`)) {
            tiles.setWallAt(tiles.getTileLocation(13, 12), false)
            tiles.setTileAt(tiles.getTileLocation(13, 12), assets.tile`myTile46`)
        }
    }
})
forever(function () {
    if (Spook == 3) {
    	
    } else if (Spook == 4) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile30`)) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 10))
        }
    } else if (Spook == 5) {
    	
    }
})
forever(function () {
    while (Spook == 1 && Man.tileKindAt(TileDirection.Bottom, assets.tile`myTile21`)) {
        game.splash("I think it was a Lady at one point...")
        game.splash("w . . . u p")
        game.splash("W a k e  U p")
        Corpse.destroy()
        Hub_1()
    }
})
forever(function () {
    while (Spook == 0 && Man.tileKindAt(TileDirection.Top, assets.tile`myTile17`)) {
        game.splash("What is that Thing...")
        Spook = 1
    }
})
forever(function () {
    while (Spook == 5) {
        if (Man.tileKindAt(TileDirection.Right, assets.tile`myTile78`) || (Man.tileKindAt(TileDirection.Right, assets.tile`myTile79`) || (Man.tileKindAt(TileDirection.Right, assets.tile`myTile80`) || Man.tileKindAt(TileDirection.Right, assets.tile`myTile81`)))) {
            scene.cameraFollowSprite(mySprite)
            mySprite.say("You should have Ran")
        }
    }
})
