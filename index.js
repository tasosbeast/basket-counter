

let homeScore = document.getElementById("home-score-text")
let guestScore = document.getElementById('guest-score-text')
let homeone = 0
let vartwo = 0





function one(){
    homeone += 1
   homeScore.textContent = homeone

}

function two(){
    homeone += 2
   homeScore.textContent = homeone

}

function three(){
    homeone += 3
    
   homeScore.textContent = homeone

}


function guestone(){
    vartwo += 1
   guestScore.textContent = vartwo

}

function guesttwo(){
    vartwo += 2
   guestScore.textContent = vartwo

}

function guestthree(){
    vartwo += 3
   guestScore.textContent = vartwo

}


function newgame(){
   vartwo = 0
   homeone = 0
   guestScore.textContent = vartwo
   homeScore.textContent = homeone

}



