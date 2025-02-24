document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1); // Remove o #
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' // Faz a rolagem suave
                });
            }
        });
    });
});
