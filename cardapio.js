// Animação ao scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => {
    observer.observe(card);
});

// Função chamada ao clicar em um item do cardápio
function handclick(tamanho, tipo) {
    console.log('Milkshake selecionado:', tamanho, tipo);

    let preco = 0;
    if (tipo === 'Milkshake') {
        if (tamanho === '300') preco = 13.00;
        if (tamanho === '500') preco = 19.00;
    }

    // Cria o carrinho com o item selecionado
    const carrinho = [{
        tamanho: tamanho,
        tipo: tipo,
        preco: preco,
        sabor: "", // ainda não escolhido
        complementos: []
    }];

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    console.log('Carrinho atualizado:', carrinho);

    // Redireciona para a página correta
    if (tipo.toLowerCase() === "milkshake") {
        window.location.href = "milk/personalizarMilk.html"; // milkshake vai para página de sabores
    } else {
        window.location.href = "personalizar.html"; // outros produtos
    }
}
