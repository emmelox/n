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
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (hallo))
})
let hallo = 0
radio.setGroup(1)
basic.forever(function () {
	
})
