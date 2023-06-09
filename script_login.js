const botao_entrar = document.getElementById('entrar')

const input_email = document.getElementById('iemail')
const input_senha = document.getElementById('isenha')

const linha1 = document.getElementById('line01')
const linha2 = document.getElementById('line02')

/* ******************************************************* */

input_email.addEventListener('click', function(e){
    e.preventDefault()
    linha1.classList.add('linha_destaque')
    
})

input_email.addEventListener('blur', function(e){
    e.preventDefault()
    linha1.classList.remove('linha_destaque')
    
})

/* ******************************************************* */


input_senha.addEventListener('click', function(e){
    e.preventDefault()
    linha2.classList.add('linha_destaque')
    
})

input_senha.addEventListener('blur', function(e){
    e.preventDefault()
    linha2.classList.remove('linha_destaque')
    
})

/* ******************************************************* */

/*
botao_entrar.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = "#"; //link para página principal.
});
*/
