input.onButtonPressed(Button.A, function () {
    basic.showString("" + (images.createImage(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)))
    radio.sendString("" + (hallo))
})
function doSomething (bool: boolean, bool2: boolean, bool3: boolean, bool4: boolean, bool5: boolean, bool6: boolean, bool7: boolean) {
    for (let index = 0; index < 4; index++) {
        let sprite: game.LedSprite = null
        sprite.move(1)
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (hallo))
})
let hallo = 0
radio.setGroup(1)
basic.forever(function () {
	
})
