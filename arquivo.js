document.addEventListener('DOMContentLoaded', function() {
    const inputEmail = document.querySelector('.contato__email');
    const mensagem = document.querySelector('.mensagem');

    // Remove a mensagem do DOM inicialmente
    mensagem.classList.add('hidden'); // Adicionei a classe 'hidden' para ocultar a mensagem

    inputEmail.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter
            event.preventDefault(); // Impede o envio do formulário
            mensagem.classList.remove('hidden'); // Exibe a mensagem
            inputEmail.style.display = 'none'; // Oculta o campo de e-mail
            inputEmail.value = ''; // Limpa o campo de e-mail
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
