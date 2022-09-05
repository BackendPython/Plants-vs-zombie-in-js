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
    idle: '/images/plants/peo/idle/peo-idle.gif',
    attack: '/images/plants/peo/attack/peo-attack.gif',
}

let sun = {
    heal: 5,
    power: 50,
    recover_time: 3000,
    idle: "url('/images/plants/sun/idle/sun-idle.gif')"
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
        else{
            plant.classList.remove('open')
        }
    }
    })
}, 10);


grounds.forEach(function(ground){
    ground.addEventListener('click', function(){
        if (game_components.select_plant!=null&&ground.classList=='ground open') {
            if (game_components.select_plant=='sun') {
                ground.style.backgroundImage = sun.idle
                game_components.points = game_components.points - sun.power
                ground.setAttribute('class', 'ground close sun')
            }
            if (game_components.select_plant=='peo') {
                ground.style.backgroundImage = peo.idle
                ground.setAttribute('class', 'ground close peo')
            }
        }
    })
})


plants_shop.forEach(function(plant){
    plant.addEventListener('click', function(){
        if (plant.classList[2]=='open') {
            plants_shop.forEach(function(down){
                down.classList.remove('top')
            })
            plant.classList.add('top')
            game_components.select_plant = plant.classList[1]
        }
        else{
            plants_shop.forEach(function(down){
                down.classList.remove('top')
            })
            game_components.select_plant = null;
        }
    })
})




// point set
setTimeout( function points() {
    game_components.points = game_components.points + 10
    setTimeout(() => {
        points()
    }, 1000);
},1000);