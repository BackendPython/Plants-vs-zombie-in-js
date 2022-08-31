let plants = document.querySelectorAll('.plants')
let pointsBox = document.querySelector('.points')

let game_components = {
    points: 80,
    gameStart: true,
}

let plants_1_details = {
    heal: 10,
    power_attack: 10,
    open_class: "plants-1-open",
    close_class: "plants-1-close",
}

let plants_2_details = {
    heal: 5,
    power: 70,
    recover_time: 3000,
    open_class: "plants-1-open",
    close_class: "plants-1-close",
}


let mainChecking = setInterval(() => {
    if (game_components.gameStart==true) {
        pointsBox.textContent = game_components.points
    }
}, 10);