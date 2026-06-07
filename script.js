// script.js

document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // PEGAR OS DADOS
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tipoPlano = document.getElementById('tipoPlano').value;

    // MENSAGEM FORMATADA
    const mensagem = `*NOVO LEAD - BRASILSEGUROS*%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*WhatsApp:* ${encodeURIComponent(telefone)}%0A*Plano:* ${encodeURIComponent(tipoPlano)}`;

    // TROQUE PELO SEU NÚMERO (formato: 5511999999999)
    const numeroCorretor = "551134125912'";

    // ABRIR WHATSAPP
    window.open(`https://wa.me/${numeroCorretor}?text=${mensagem}`, '_blank');
});