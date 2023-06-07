// This is to get the id for the home score
let homeScore = document.getElementById("home-score-text");
// This is to get the id for the guest score
let guestScore = document.getElementById("guest-score-text");
// This is to set the home score to 0
let homeone = 0;
// This is to set the guest score to 0
let vartwo = 0;
// This is to add 1 to the home score when the 1 point button is pressed
function one() {
  homeone += 1;
  homeScore.textContent = homeone;
}
// This is to add 2 to the home score when the 2 point button is pressed
function two() {
  homeone += 2;
  homeScore.textContent = homeone;
}
// This is to add 3 to the home score when the 3 point button is pressed
function three() {
  homeone += 3;
  homeScore.textContent = homeone;
}
// This is to add 1 to the guest score when the 1 point button is pressed
function guestone() {
  vartwo += 1;
  guestScore.textContent = vartwo;
}
// This is to add 2 to the guest score when the 2 point button is pressed
function guesttwo() {
  vartwo += 2;
  guestScore.textContent = vartwo;
}
// This is to add 3 to the guest score when the 3 point button is pressed
function guestthree() {
  vartwo += 3;
  guestScore.textContent = vartwo;
}
// This is to reset the scores to 0
function newgame() {
  vartwo = 0;
  homeone = 0;
  guestScore.textContent = vartwo;
  homeScore.textContent = homeone;
}
