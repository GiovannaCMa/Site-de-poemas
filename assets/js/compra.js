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

     // Redireciona após 2 segundos
     setTimeout(function() {
        window.location.href = "comprafeita.html"; // Altere para a URL da página desejada
    }, 2000);
}, function(error) {
    document.getElementById('status').innerText = "Ocorreu um erro: " + error.text;
});
