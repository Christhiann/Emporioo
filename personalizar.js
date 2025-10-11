document.addEventListener("DOMContentLoaded", function () {
    console.log("Carrinho no localStorage ao carregar a página:", localStorage.getItem("carrinho"));
    mostrarCarrinho(); // Atualiza a exibição do carrinho ao carregar a página
});

// Função para adicionar um complemento ao Açaí no carrinho
function addToCart(complementoNome) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Por favor, selecione um Açaí antes de adicionar complementos.");
        return;
    }

    // Verifica se o complemento já está no carrinho
    if (carrinho[0].complementos.includes(complementoNome)) {
        alert(`O complemento "${complementoNome}" já foi adicionado. Remova antes de adicioná-lo novamente.`);
        return;
    }

    // Adiciona o complemento ao primeiro Açaí do carrinho
    carrinho[0].complementos.push(complementoNome);

    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Atualiza o carrinho no localStorage
    mostrarCarrinho(); // Atualiza a exibição do carrinho
}


function mostrarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log("Carrinho recuperado:", carrinho);

    const cartItems = document.getElementById("cart-items");

    if (!cartItems) {
        console.error("Elemento do carrinho não encontrado.");
        return;
    }

    cartItems.innerHTML = ""; // Limpa os itens do carrinho

    if (carrinho.length > 0) {
        let acai = carrinho[0]; // Considerando apenas um Açaí no carrinho
        let complementosHTML = acai.complementos.length > 0 ? acai.complementos.join(", ") : "Nenhum";

        let acaiHTML = `
            <li>
                <strong>${acai.tipo} - ${acai.tamanho}ml</strong><br>
                <span>Complementos: ${complementosHTML}</span>
                ${acai.complementos.length > 0 ? 
                  `<br><button onclick="removerUltimoComplemento()">Remover complemento</button>` 
                  : ""}
            </li>
        `;
        cartItems.innerHTML += acaiHTML;
    } else {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
}

// Função para remover o último complemento adicionado
function removerUltimoComplemento() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length > 0 && carrinho[0].complementos.length > 0) {
        carrinho[0].complementos.pop(); // Remove o último complemento da lista
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        mostrarCarrinho(); // Atualiza a exibição do carrinho
    }
}

// Função para confirmar o pedido
function confirmarPedido() {
    alert("Pedido confirmado!");
    window.location.href = "finalizado.html"; // Redireciona para a página de finalização
}
