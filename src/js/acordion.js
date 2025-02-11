document.addEventListener("DOMContentLoaded", function () {
    let activeContent = null;

    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Fecha a aba aberta antes de abrir outra
            if (activeContent && activeContent !== content) {
                activeContent.style.maxHeight = "0px";
                activeContent.style.opacity = "0";
                activeContent.style.transform = "translateY(-10px)";
                activeContent.previousElementSibling.classList.remove("active");
                activeContent = null;
            }

            // Alterna entre abrir e fechar com delay
            if (content.style.maxHeight === "0px" || !content.style.maxHeight) {
                content.style.display = "block"; // Garante que está visível
                setTimeout(() => {
                    content.style.maxHeight = "200px"; // Ajuste para o tamanho do conteúdo
                    content.style.opacity = "1";
                    content.style.transform = "translateY(0px)";
                }, 500);  // Aqui você pode ajustar o delay (300ms de delay antes de começar a animação)

                this.classList.add("active");
                activeContent = content;
            } else { 
                content.style.maxHeight = "0px";
                content.style.opacity = "0";
                content.style.transform = "translateY(-10px)";

                setTimeout(() => {
                    content.style.display = "none"; // Esconde após a animação
                }, 500);  // Mesmo delay para o fechamento

                this.classList.remove("active");
                activeContent = null;
            }
        });
    });
});
