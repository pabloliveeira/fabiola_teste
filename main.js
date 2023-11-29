const form = document.getElementById('form-js');


function compara(campoA, campoB){
    const mensagemInvalido = "<b>O FORMULÁRIO É INVÁLIDO, POIS O CAMPO B É MAIOR QUE O CAMPO A</B"
    const mensagemOk = "<b>O FORMULÁRIO É VÁLIDO</b"
    if (parseFloat(campoB) > parseFloat(campoA)) {
        const containerMensagemInvalido =  document.querySelector('.mensagem');
         containerMensagemInvalido.innerHTML = mensagemInvalido
         containerMensagemInvalido.style.display = 'block';
    
        } else {
        const containerMensagemOk = document.querySelector('.mensagem');
        containerMensagemOk.innerHTML = mensagemOk
        containerMensagemOk.style.display = 'block';
        
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let campoA = document.getElementById('campo-a');
    let campoB = document.getElementById('campo-b');

    let formvalid = compara(campoA.value, campoB.value);
    campoA.value = '';
        campoB.value = '';
})

console.log(form);