const form = document.getElementById('form-js');

function compara(campoA, campoB){
    if (parseFloat(campoB.value) > parseFloat(campoA.value)) {
        return false;
    } else {
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
})

let campoA = document.getElementById('campo-a');
let campoB = document.getElementById('campo-b');

let formvalid = compara(campoA.value, campoB.value);

console.log(form);