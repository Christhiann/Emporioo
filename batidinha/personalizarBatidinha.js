document.addEventListener("DOMContentLoaded", function () {
    mostrarCarrinho();
});

// 🔥 TABELA DE PREÇOS (PROFISSIONAL)
const precos = {
    "Tradicional": { 300: 16, 500: 25 },
    "Paçoca": { 300: 16, 500: 25 },
    "Morango": { 300: 17, 500: 26 },
    "Ninho": { 300: 18, 500: 27 },
    "Avelã": { 300: 18, 500: 27 },
    "Maracujá": { 300: 18, 500: 27 }
};

// Adiciona sabor ao carrinho
function addToCart(saborNome) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Selecione uma batidinha primeiro.");
        return;
    }

    let item = carrinho[0];
    let tamanho = item.tamanho;

    // Define sabor
    item.sabor = saborNome;

    // Define preço automaticamente
    if (precos[saborNome]) {
        item.preco = precos[saborNome][tamanho];
    } else {
        item.preco = 0;
    }

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

// Mostra o carrinho
function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (carrinho.length > 0) {
        let item = carrinho[0];

        let sabor = item.sabor || "Nenhum sabor escolhido";
        let preco = item.preco
            ? `R$ ${item.preco.toFixed(2)}`
            : "Preço não definido";

        cartItems.innerHTML = `
            <li>
                <strong>${item.tipo} - ${item.tamanho}ml - ${preco}</strong><br>
                <span><b>Sabor:</b> ${sabor}</span>
            </li>
        `;
    } else {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
}

// Confirma o pedido
function confirmarPedido() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0 || !carrinho[0].sabor) {
        alert("Escolha um sabor antes de confirmar!");
        return;
    }

    let item = carrinho[0];

    alert(`Pedido confirmado!
${item.tipo} ${item.tamanho}ml - ${item.sabor}
Valor: R$ ${item.preco.toFixed(2)}`);

    window.location.href = "../finalizado.html";
}