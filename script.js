

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function mostrarSecao(secao) {
    // Esconde todas as seções
    document.querySelectorAll('.conteudo').forEach(el => el.style.display = 'none');

    // Mostra apenas a seção clicada
    document.getElementById(secao).style.display = 'block';

    // Fechar o menu ao clicar em um item
    document.getElementById("menu").classList.remove("active");
}
