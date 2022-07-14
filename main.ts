input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showNumber(elapsed / 1000)
})
let elapsed = 0
let start = 0
start = 0
basic.forever(function () {
	
})
