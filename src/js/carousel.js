document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    let currentIndex = 0;
    let slideInterval;
    let userInteracted = false; // Controle para saber se o usuário interagiu

    function nextSlide() {
        if (!userInteracted) { // Só avança se o usuário não tiver interagido
            currentIndex = (currentIndex + 1) % radios.length; // Loop infinito
            radios[currentIndex].checked = true;
        }
    }

    // Inicia o autoplay
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Troca de imagem a cada 5 segundos
    }

    startAutoSlide(); // Começa o autoplay ao carregar a página

    // Para o autoplay quando o usuário interagir e reinicia depois de 20s
    radios.forEach((radio, index) => {
        radio.addEventListener("change", function () {
            clearInterval(slideInterval); // Para o autoplay
            userInteracted = true; // Marca que o usuário interagiu

            // Retoma o autoplay após 20 segundos
            setTimeout(() => {
                userInteracted = false;
                startAutoSlide();
            }, 20000);
        });
    });
});
