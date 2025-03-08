// Troca de imagens no slideshow
const imagens = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
let index = 0;
function mudarImagem() {
    index = (index + 1) % imagens.length;
    document.getElementById("slide").src = imagens[index];
}
setInterval(mudarImagem, 3000); // Troca a imagem a cada 3 segundos

// Contador de tempo juntos
const dataInicio = new Date("2023-07-09T13:13:00"); // Altere para a data de quando começaram
function atualizarTempoJuntos() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("tempoJuntos").innerText = 
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarTempoJuntos, 1000);
atualizarTempoJuntos();


window.addEventListener('load', function() {
    const audio = document.getElementById("musica");
    audio.volume = 0.5; // Ajusta o volume (0 a 1)
    
    // Tentativa de autoplay
    audio.play().catch(() => {
        console.log("Autoplay bloqueado, esperando interação do usuário...");
    });

    // Se o navegador bloquear, pede para o usuário clicar na tela
    document.body.addEventListener("click", function() {
        audio.play();
    }, { once: true }); // Só precisa clicar uma vez
});
