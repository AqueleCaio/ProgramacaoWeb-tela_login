$(document).ready(() => {
    $('input').click((e) => {
        e.preventDefault();
        let dataLinha = $(e.target).data('linha'); // Pega o valor do respectivo data-linha
        $('#' + dataLinha).addClass('linha_destaque'); // Transforma o valor do data-linha no id da tag <hr> e adiciona o estilo
    });

    $('input').blur((e) => {
        e.preventDefault();
        let dataLinha = $(e.target).data('linha'); 
        $('#' + dataLinha).removeClass('linha_destaque'); 
    });
});