const form = document.getElementById('form-js');

function compara(campoA, campoB){
    if (parseFloat(campoB) > parseFloat(campoA)) {
    return alert("O FORMULÁRIO É INVÁLIDO");
    } else {
    return alert("O FORMULÁRIO É VÁLIDO");
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let campoA = document.getElementById('campo-a');
    let campoB = document.getElementById('campo-b');

    let formvalid = compara(campoA, campoB);
})

console.log(form);