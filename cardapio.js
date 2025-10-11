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

function handclick(tamanho, tipo) {
    console.log('Açaí selecionado: ', tamanho, tipo);
    
    // Cria um NOVO carrinho com apenas este item (substitui qualquer anterior)
    const carrinho = [{
        tamanho: tamanho,
        tipo: tipo,
        complementos: []
    }];
    
    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
    console.log('Carrinho atualizado:', carrinho);
    
    // Redireciona sem necessidade de timeout
    window.location.href = "personalizar.html";
}