const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class ='font-1-l' style='grid-column:1/-1;  padding:1rem; border-radius:4px; background: #f7f7f7'><spam style='#317a00'>Mensagem enviada</spam>, em breve entraremos em contato. Geralmente respondemos em 24h</p>";
  } else {
    formulario.innerHTML =
      "<p class ='font-1-l' style='grid-column:1/-1;  padding:1rem; border-radius:4px; background: #f7f7f7'><spam style='color:#e00000'>Erro no envio</spam>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);

console.log(formulario);
