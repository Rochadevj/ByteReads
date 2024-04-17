document.addEventListener('DOMContentLoaded', function() {
    const inputEmail = document.querySelector('.contato__email');
    const mensagem = document.querySelector('.mensagem');

    mensagem.classList.add('hidden'); 

    inputEmail.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) { 
            event.preventDefault(); 
            mensagem.classList.remove('hidden'); 
            inputEmail.style.display = 'none'; 
            inputEmail.value = ''; 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const favoritosIcon1 = document.getElementById('favoritosIcon1');

    favoritosIcon1.addEventListener('click', function() {
        favoritosIcon1.classList.toggle('preenchido');
        if (favoritosIcon1.classList.contains('preenchido')) {
            favoritosIcon1.querySelector('path').setAttribute('fill', 'red');
        } else {
            favoritosIcon1.querySelector('path').removeAttribute('fill');
        }
    });
});

favoritosIcon2.addEventListener('click', function() {
    favoritosIcon2.classList.toggle('preenchido');
    if (favoritosIcon2.classList.contains('preenchido')) {
        favoritosIcon2.querySelector('path').setAttribute('fill', 'red');
    } else {
        favoritosIcon2.querySelector('path').removeAttribute('fill');
    }
});
