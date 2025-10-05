document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navResponsive = document.querySelector('.nav-responsive');
  
    // Esconde o menu responsivo ao carregar a página
    navResponsive.style.display = 'none';
  
    // Alterna a visibilidade do menu ao clicar no ícone
    menuHamburguer.addEventListener('click', function () {
      if (navResponsive.style.display === 'none') {
        navResponsive.style.display = 'block';
      } else {
        navResponsive.style.display = 'none';
      }
  
      // Alterna a animação das barras do menu hambúrguer
      menuHamburguer.classList.toggle('change');
    });
  });


  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
          // Rolando para baixo
          header.classList.add('header-hidden');
      } else {
          // Rolando para cima
          header.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para Mobile or negative scrolling
  });
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
   const file = document.getElementById('file-upload');


    // Cria um FormData para enviar o arquivo
    const params = {
        email: email,
       file: file, // O arquivo pode não ser enviado diretamente; considere armazená-lo em um servidor.
    };
    // Envia o e-mail com EmailJS
    emailjs.send('service_qlpkx8w', 'template_u2cn6x5', params)
    .then(function(response) {
        console.log("E-mail enviado com sucesso!", response);
        document.getElementById('status').innerText = "E-mail enviado com sucesso!";
    }, function(error) {
        console.error("Erro ao enviar e-mail:", error); // Log do erro no console
        document.getElementById('status').innerText = "Ocorreu um erro: " + error.text;
    });

 
});

























