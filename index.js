var button = document.querySelector("#random");
var para = document.querySelector("#display");

function generateRandom(){
    var randomNumber = Math.floor(Math.random() * 1000);
    para.innerHTML =  randomNumber;
}