input.onButtonPressed(Button.A, function () {
    p1 += 1
    rounds += 1
    updateScores()
})
input.onButtonPressed(Button.AB, function () {
    ties += 1
    rounds += 1
    updateScores()
})
input.onButtonPressed(Button.B, function () {
    p2 += 1
    rounds += 1
    updateScores()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Initializing")
    rounds = 0
    p1 = 0
    p2 = 0
    ties = 0
    basic.pause(2000)
    updateScores()
}
function updateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1:" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2:" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
let p2 = 0
let ties = 0
let rounds = 0
let p1 = 0
Reset()
