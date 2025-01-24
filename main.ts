let min = 1
let max = 100
let attempts = 0
let guess = 0

basic.showString("Think of a number!")
guess = Math.floor((min + max) / 2)
basic.showNumber(guess)

input.onButtonPressed(Button.A, function () {
    max = guess - 1
    guess = Math.floor((min + max) / 2)
    attempts += 1
    basic.showNumber(guess)
})

input.onButtonPressed(Button.B, function () {
    min = guess + 1
    guess = Math.floor((min + max) / 2)
    attempts += 1
    basic.showNumber(guess)
})

input.onGesture(Gesture.Shake, function () {
    attempts += 1
    basic.showString("Guessed!")
    basic.showString("Attempts:")
    basic.showNumber(attempts)
    control.reset()
})


