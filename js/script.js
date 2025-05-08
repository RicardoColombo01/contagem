// Função para calcular a contagem regressiva
function updateCountdown() {
    // Data alvo: 13 de maio de 2025 às 00:00:00
    const targetDate = new Date("2025-05-13T00:00:00");

    // Data atual
    const currentDate = new Date();

    // Calculando a diferença em milissegundos
    const timeDifference = targetDate - currentDate;

    // Se o evento já passou ou é a hora certa, exiba "Chegou!" com um efeito fofo
    if (timeDifference <= 0) {
        document.getElementById("texto").style.visibility = "hidden";
        document.getElementById("countdown").innerText = "Mais um ano de nós Eu te amo muitoooo vidinha❤️🤞🏼!";
        document.body.style.backgroundColor = "rgb(116, 176, 255)"; // Cor rosa (fundo fofo)
        document.getElementById("countdown").classList.add("fofo");
        document.getElementById("date").style.visibility = "hidden";
        document.getElementById("mudar").style.visibility = "visible";
        
window.onload = function() {
    confetti({
        particleCount: 500,
        spread: 360,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.5 }
      });
      confetti({
        particleCount: 400,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 400,
        angle: 120,
        spread: 55,
        origin: { x: 1}
      });
  };


        return;
    }

    // Calcular dias totais restantes
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Calcular meses (aproximadamente) com base em 30 dias por mês
    const months = Math.floor(totalDays / 30);  // Aproximadamente
    const days = totalDays % 30;  // Restantes depois de calcular os meses

    // Calcular horas, minutos e segundos
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva
    document.getElementById("countdown").innerText = `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Exibir a data atual
    const date = currentDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    document.getElementById("date").innerText = `Data atual: ${date}`;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

let tocando = false;

function toggleMusica() {
  const audio = document.getElementById('audio');
  const botao = document.getElementById('botaoMusica');

  if (!tocando) {
    audio.play();
    botao.textContent = "⏸️ Pausar Música";
  } else {
    audio.pause();
    botao.textContent = "🎵 Tocar Música";
  }

  tocando = !tocando;
}

// Tocar música após o primeiro clique em qualquer lugar
window.addEventListener('DOMContentLoaded', function primeiraInteracao() {
    const audio = document.getElementById('audio');
    if (!tocando) {
      audio.play();
      document.getElementById('botaoMusica').textContent = "⏸️ Pausar Música";
      tocando = true;
    }
    // Remove o listener após o primeiro clique
    window.removeEventListener('DOMContentLoaded', primeiraInteracao);
  });

  