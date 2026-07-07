const textarea = document.getElementById("texto");
const contador = document.getElementById("contador");
const botao = document.getElementById("btnPublicar");

const LIMITE = 280;

textarea.addEventListener("input", () => {

    const quantidade = textarea.value.length;

    contador.textContent = `${quantidade} / ${LIMITE} caracteres`;

    contador.classList.remove("alerta");
    contador.classList.remove("erro");

    if (quantidade >= 250 && quantidade <= LIMITE) {
        contador.classList.add("alerta");
    }

    if (quantidade > LIMITE) {
        contador.classList.add("erro");
        botao.disabled = true;
    } else {
        botao.disabled = false;
    }

});