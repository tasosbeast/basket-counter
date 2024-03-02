// This is to get the id for the home score
let homeScore = document.getElementById("home-score-text");
// This is to get the id for the guest score
let guestScore = document.getElementById("guest-score-text");
// This is to set the home score to 0
let homeOne = 0;
// This is to set the guest score to 0
let varTwo = 0;
// This is to add 1 to the home score when the 1 point button is pressed
function one() {
  homeOne += 1;
  homeScore.textContent = homeOne;
}
// This is to add 2 to the home score when the 2 point button is pressed
function two() {
  homeOne += 2;
  homeScore.textContent = homeOne;
}
// This is to add 3 to the home score when the 3 point button is pressed
function three() {
  homeOne += 3;
  homeScore.textContent = homeOne;
}
// This is to add 1 to the guest score when the 1 point button is pressed
function guestOne() {
  varTwo += 1;
  guestScore.textContent = varTwo;
}
// This is to add 2 to the guest score when the 2 point button is pressed
function guestTwo() {
  varTwo += 2;
  guestScore.textContent = varTwo;
}
// This is to add 3 to the guest score when the 3 point button is pressed
function guestThree() {
  vartwo += 3;
  guestScore.textContent = varTwo;
}
// This is to reset the scores to 0
function newGame() {
  varTwo = 0;
  homeOne = 0;
  guestScore.textContent = varTwo;
  homeScore.textContent = homeOne;
}
