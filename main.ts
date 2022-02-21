input.onButtonPressed(Button.A, function () {
    radio.sendValue("Ada", 1815)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showNumber(value)
})
radio.setGroup(42)
