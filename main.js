$(document).ready(function() {


    $('form').on('submit', function(e) {
    e.preventDefault();
    const nomeTarefa = $('#nova-tarefa').val();
    const novaTarefa = $('<li></li>');
    $(`<ul>${nomeTarefa}</ul>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $('#nova-tarefa').val('')

    })
})


