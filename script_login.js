$('#iemail').click((e) => {
    e.preventDefault()
    $('#line01').addClass('linha_destaque')
})

$('#iemail').blur((e) => {
    e.preventDefault()
    $('#line01').removeClass('linha_destaque')
})

/* ******************************************************* */

$('#isenha').click((e) => {
    e.preventDefault()
    $('#line02').addClass('linha_destaque')
})

$('#isenha').blur((e) => {
    e.preventDefault()
    $('#line02').removeClass('linha_destaque')
})
