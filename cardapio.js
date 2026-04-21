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

// Clique nos itens
function handclick(tamanho, tipo) {
    console.log('Item selecionado:', tamanho, tipo);

    let preco = 0;

    // MILKSHAKE (preço fixo aqui)
    if (tipo === 'Milkshake') {
        if (tamanho === '300') preco = 18.00;
        if (tamanho === '500') preco = 24.00;
    }

    // BATIDINHA (preço só será definido depois)
    if (tipo === 'Batidinha') {
        preco = 0;
    }

    const carrinho = [{
        tamanho: tamanho,
        tipo: tipo,
        preco: preco,
        sabor: "",
        complementos: []
    }];

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    console.log('Carrinho atualizado:', carrinho);

    // Redirecionamento
    if (tipo.toLowerCase() === "milkshake") {
        window.location.href = "milk/PersonalizarMilk.html";
    } 
    else if (tipo.toLowerCase() === "batidinha") {
        window.location.href = "batidinha/personalizarBatidinha.html";
    } 
    else {
        window.location.href = "personalizar.html";
    }
}

