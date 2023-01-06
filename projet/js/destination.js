const moonBtn = document.getElementById('moon-select'); 
const marsBtn = document.getElementById('mars-select'); 
const europaBtn = document.getElementById('europa-select'); 
const titanBtn = document.getElementById('titan-select'); 

const container = document.getElementById('container'); 


window.onload = function() {
    showPlanet('moon'); 
}

function showPlanet(planetTemplateId) {
    const template = document.getElementById(planetTemplateId); 
    const clone = template.content.cloneNode(true); 

    container.appendChild(clone); 
}


moonBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    showPlanet('moon'); 
}); 

marsBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    showPlanet('mars'); 
}); 

europaBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    showPlanet('europa'); 
}); 

titanBtn.addEventListener('click', () => {
    container.innerHTML = ""; 
    showPlanet('titan'); 
}); 