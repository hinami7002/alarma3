let alarma = 0
radio.setGroup(115)
music.setVolume(35)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 150) {
        radio.sendNumber(1)
        alarma = 1
        music.ringTone(262)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(10)
        music.stopAllSounds()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(10)
    } else {
        radio.sendNumber(0)
        alarma = 0
        music.stopAllSounds()
        basic.clearScreen()
    }
})
