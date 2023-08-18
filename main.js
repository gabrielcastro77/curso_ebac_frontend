let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault
    let campoA = document.querySelector('#idcampo-a').value
    let campoB = document.querySelector('#idcampo-b').value

    if (campoB > campoA) {
        alert('sucesso!')
    } else {
        alert('O campo B precisa ser maior que o campo A')
    }
})