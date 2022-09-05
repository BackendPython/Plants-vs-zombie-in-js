let ground_parent = document.querySelector('.grounds')
let plants_shop = document.querySelectorAll('.box')
let grounds = document.querySelectorAll('.ground')
let pointsBox = document.querySelector('.points')



// game informations and main settings
let game_components = {
    points: 40,
    gameStart: true,
    select_plant: null,
    line_1_zombies: 0,
    line_2_zombies: 0,
    line_3_zombies: 0,
    line_4_zombies: 0,
    line_5_zombies: 0,
}

let peo = {
    heal: 10,
    power: 100,
    power_attack: 10,
    idle: "url('/images/plants/peo/idle/peo-idle.gif')",
    attack: "url('/images/plants/peo/attack/peo-attack.gif')",
}

let sun = {
    heal: 5,
    power: 50,
    useful: 25,
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

let plants_put = setInterval(() => {
    
    let sun_points = document.querySelectorAll('.sun-point')

    // sun-point collect 
    sun_points.forEach(function(point){
        point.addEventListener('click', function(){
            if (point.classList=='sun-point') {
                point.classList.add('collect')
                setTimeout(() => {
                    point.remove()
                    game_components.points = game_components.points + sun.useful
                }, 700);
            }
        })
    })

    // plants put ground
    grounds.forEach(function(ground){
        ground.addEventListener('click', function(){
            if (game_components.select_plant!=null&&ground.classList=='ground open') {
                if (game_components.select_plant=='sun') {
                    ground.style.backgroundImage = sun.idle
                    ground.setAttribute('class', 'ground close sun')
                    game_components.points = game_components.points - sun.power
                }
                if (game_components.select_plant=='peo') {
                    ground.style.backgroundImage = peo.idle
                    ground.setAttribute('class', 'ground close peo')
                    game_components.points = game_components.points - peo.power
                }
                plants_shop.forEach(function(down){
                    down.classList.remove('top')
                    game_components.select_plant = null;
                })
            }
        })
    })
    
    
    // plants_shop select cards
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

    // sun_points collect
     

}, 10);


setInterval(() => {
    game_components.points = game_components.points + 10
}, 1000);


// point set
function sun_flower(){
    let flowers = ground_parent.querySelectorAll('.sun')
    
        flowers.forEach(function(flower){
            if (flower.id=='') {
                flower.id = 'sun-1'
            }
            else if(flower.id=='sun-1'){
                flower.id = 'sun-2'
            }
            else if(flower.id=='sun-2'){
                flower.id = 'sun-3'
            }
            setTimeout(() => {
                if (flower.id=='sun-3') {
                   let point = document.createElement('img')
                   point.setAttribute('class', 'sun-point')
                   flower.appendChild(point)
                   flower.id = ''
                }
            }, 100);

        })

    setTimeout(() => {
        sun_flower()
    }, sun.recover_time);
}
sun_flower()

