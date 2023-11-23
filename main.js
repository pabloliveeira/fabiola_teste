const form = document.getElementById('form-js')

function compara(n) {
 if document.getElementById('campo-a') <= document.getElementById('campo-b')
    alert("formulário inválido")
}


form.addEventListener('submit', function(e){
    e.preventDefault();
})

console.log(form);