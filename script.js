let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let jogoAtivo = true;

document.getElementById("tentativas").textContent =
    `Tentativas restantes: ${tentativasRestantes}`;

document.getElementById("botaoChutar").addEventListener("click", chutar);

function chutar() {
    if (!jogoAtivo) return;

    let palpite = parseInt(document.getElementById("palpite").value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").textContent =
            "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent =
            `🎉 Você acertou! O número era ${numeroSecreto}.`;
        jogoAtivo = false;
    } else if (tentativasRestantes === 0) {
        document.getElementById("mensagem").textContent =
            `❌ Você perdeu! O número era ${numeroSecreto}.`;
        jogoAtivo = false;
    } else if (palpite < numeroSecreto) {
        document.getElementById("mensagem").textContent =
            "O número secreto é MAIOR.";
    } else {
        document.getElementById("mensagem").textContent =
            "O número secreto é MENOR.";
    }

    document.getElementById("tentativas").textContent =
        `Tentativas restantes: ${tentativasRestantes}`;
}


