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

