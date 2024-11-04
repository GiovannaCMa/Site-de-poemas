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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletar os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const tema = document.getElementById("tema").value;
    const historia = document.getElementById("historia").value;

    // Defina os parâmetros do serviço
    var params = {
      name: name,
      email: email,
      phone: phone,
      tema: tema,
      historia: historia,
    };

    // Envie o e-mail
    emailjs.send("service_qlpkx8w", "template_pjtvf82", params).then(
      function (response) {
        document.getElementById("status").innerText =
          "E-mail enviado com sucesso!";
      },
      function (error) {
        document.getElementById("status").innerText =
          "Ocorreu um erro: " + error.text;
      }
    );
  });

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    header.classList.add("header-hidden");
  } else {
    // Rolando para cima
    header.classList.remove("header-hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para Mobile or negative scrolling
});
