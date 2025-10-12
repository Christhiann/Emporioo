document.addEventListener("DOMContentLoaded", function () {
    console.log("Carrinho no localStorage ao carregar a página:", localStorage.getItem("carrinho"));
    mostrarCarrinho(); // Atualiza a exibição do carrinho ao carregar a página
});

// Seleciona o sabor do milkshake (apenas um permitido)
function addToCart(saborNome) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Por favor, selecione um Milkshake antes de escolher o sabor.");
        return;
    }

    // Define o sabor (substitui se já houver)
    carrinho[0].sabor = saborNome;

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho(); // Atualiza a exibição
}

// Exibe o carrinho sem mostrar complementos para Milkshake
function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const cartItems = document.getElementById("cart-items");

    if (!cartItems) return;
    cartItems.innerHTML = ""; // limpa itens

    if (carrinho.length > 0) {
        let milk = carrinho[0];
        let saborHTML = milk.sabor ? milk.sabor : "Nenhum sabor escolhido";
        let precoHTML = milk.preco ? ` - R$ ${milk.preco.toFixed(2)}` : "";

        // Só mostra tipo, tamanho, preço e sabor (sem complementos)
        cartItems.innerHTML = `
            <li>
                <strong>${milk.tipo} - ${milk.tamanho}ml${precoHTML}</strong><br>
                <span><b>Seu sabor:</b> ${saborHTML}</span>
            </li>
        `;

        // Mostra total se houver container
        const totalContainer = document.getElementById("cart-total");
        if (totalContainer) {
            totalContainer.innerHTML = `<strong>Total: R$ ${milk.preco.toFixed(2)}</strong>`;
        }
    } else {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
}

// Confirma o pedido
function confirmarPedido() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0 || !carrinho[0].sabor) {
        alert("Escolha um sabor antes de confirmar o pedido!");
        return;
    }

    alert(`Pedido confirmado!\n${carrinho[0].tipo} ${carrinho[0].tamanho}ml - ${carrinho[0].sabor}\nValor: R$ ${carrinho[0].preco.toFixed(2)}`);

    // Redireciona para finalizado.html
    window.location.href = "../finalizado.html";
}
