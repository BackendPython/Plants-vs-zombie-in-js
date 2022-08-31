let plants_shop = document.querySelectorAll('.box')
let grounds = document.querySelectorAll('.ground')
let pointsBox = document.querySelector('.points')

console.log(plants_shop);

// game informations and main settings
let game_components = {
    points: 80,
    gameStart: true,
}

let plants_1_details = {
    heal: 10,
    power: 100,
    power_attack: 10,
}

let plants_2_details = {
    heal: 5,
    power: 70,
    recover_time: 3000,
    open_class: "plants-2-open",
    close_class: "plants-2-close",
}


let mainChecking = setInterval(() => {
    if (game_components.gameStart==true) {
        pointsBox.textContent = game_components.points
        if (game_components.points>plants_1_details.power-10) {
            plants_shop.forEach(function(plant){
                if (plant.classList=='box plants-1') {
                    plant.classList.add('open')
                }
            })
        }
    }
}, 10);
setTimeout( function points() {
    game_components.points = game_components.points + 10
    setTimeout(() => {
        points()
    }, 1000);
},1000);