let plants_shop = document.querySelectorAll('.box')
let grounds = document.querySelectorAll('.ground')
let pointsBox = document.querySelector('.points')


// game informations and main settings
let game_components = {
    points: 40,
    gameStart: true,
    select_plant: null,
}

let peo = {
    heal: 10,
    power: 100,
    power_attack: 10,
}

let sun = {
    heal: 5,
    power: 50,
    recover_time: 3000,
}


let mainChecking = setInterval(() => {
    plants_shop.forEach(function(plant){
    if (game_components.gameStart==true) {
        pointsBox.textContent = game_components.points
        if (game_components.points>peo.power-10) {
                if (plant.classList=='box peo') {
                    plant.classList.add('open')
                }
        }
        if (game_components.points>sun.power-10) {
                if (plant.classList=='box sun') {
                    plant.classList.add('open')
                }
        }
    }
    })
}, 10);

let putChecking = setInterval(() => {
    grounds.forEach(function(ground){
        grounds.addEventListener('click')
    })
}, 10);

plants_shop.forEach(function(plant){
    plant.addEventListener('click', function(){
        plants_shop.forEach(function(down){
            down.classList.remove('top')
        })
        plant.classList.add('top')
        game_components.select_plant = plant.classList
        console.log(game_components.select_plant);
    })
})




// point set
setTimeout( function points() {
    game_components.points = game_components.points + 10
    setTimeout(() => {
        points()
    }, 1000);
},1000);