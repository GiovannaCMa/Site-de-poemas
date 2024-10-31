const menuhamburguer = document.querySelector('.menu-hamburguer');
menuhamburguer.addEventListener('click', toggleMenu);

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuhamburguer.classList.toggle('change');
    
    if (menuhamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário


// Coletar os dados do formulário
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const tema = document.getElementById('tema').value;
const historia = document.getElementById('historia').value;

// Defina os parâmetros do serviço
var params = {
    name: name,
    email: email,
    phone: phone,
    tema: tema,
    historia: historia
};

// Envie o e-mail
emailjs .send( 'service_qlpkx8w', 'template_pjtvf82', params)
.then(function(response) {
    document.getElementById('status').innerText = "E-mail enviado com sucesso!";
}, function(error) {
    document.getElementById('status').innerText = "Ocorreu um erro: " + error.text;
});

});