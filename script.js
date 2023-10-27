const button = document.querySelector('button');
const funDiv = document.querySelector('.fun');
button.addEventListener('click', function(){
        funDiv.classList.toggle("color")
        funDiv.innerHTML = "Bullbe on"
    })