document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const imagens = document.querySelectorAll(".produto img");
    const imagemModal = document.getElementById("imagem-modal");

    imagens.forEach(imagem => {
        imagem.addEventListener("click", function() {
            modal.style.display = "block";
            imagemModal.src = this.src;
        });
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal || event.target.className === "fechar") {
            modal.style.display = "none";
        }
    });
});
