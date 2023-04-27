function A10 () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # . # #
        . . . . .
        . . . . .
        `)
}
function A13 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
}
function A6 () {
    led.plot(2, 0)
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(4, 1)
}
function A1 () {
    led.unplot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.unplot(4, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.unplot(4, 1)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
}
function Sunglasses_Emoji () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    A1()
    basic.pause(100)
    A2()
    basic.pause(100)
    A3()
    basic.pause(100)
    A4()
    basic.pause(100)
    A5()
    basic.pause(100)
    A6()
    basic.pause(100)
    A7()
    basic.pause(100)
    A8()
    basic.pause(100)
    A9()
    basic.pause(100)
    A10()
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function A3 () {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.plot(4, 1)
    led.unplot(0, 2)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
}
function Suprized_Emoji () {
	
}
function A8 () {
    basic.showLeds(`
        # # # # #
        # # . # #
        . . . . .
        . . . . #
        . # # # .
        `)
}
function A9 () {
    basic.showLeds(`
        # # # # #
        # # . # #
        . . . . .
        . . . . .
        . . . . #
        `)
}
function A4 () {
    led.unplot(4, 1)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.plot(4, 2)
    led.plot(1, 3)
    led.plot(2, 3)
    led.plot(3, 3)
}
function A12 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # . # #
        `)
}
function A7 () {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
    led.plot(2, 1)
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(4, 1)
}
function A2 () {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.plot(4, 0)
    led.unplot(0, 1)
    led.plot(1, 1)
    led.plot(2, 1)
    led.plot(3, 1)
    led.unplot(4, 1)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
}
function A11 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # . # #
        . . . . .
        `)
}
function A5 () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.unplot(4, 2)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.plot(4, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
}
function Ok_Emoji () {
	
}
if (false) {
    basic.showString("First I was like")
}
Sunglasses_Emoji()
if (false) {
    basic.showString("Then I was like")
}
Suprized_Emoji()
if (false) {
    basic.showString("And then I was like")
}
Ok_Emoji()
