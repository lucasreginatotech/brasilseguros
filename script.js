document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // PEGAR OS DADOS DOS CAMPOS
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tipoPlano = document.getElementById('tipoPlano').value;
    const vidas = document.getElementById('vidas').value;
    const idades = document.getElementById('idades').value;

    // PEGAR AS OPERADORAS SELECIONADAS
    const selectOperadoras = document.getElementById('operadoras');
    const operadorasSelecionadas = Array.from(selectOperadoras.selectedOptions).map(option => option.value);
    const operadorasTexto = operadorasSelecionadas.length > 0 ? operadorasSelecionadas.join(', ') : 'Não especificado';

    // MENSAGEM FORMATADA PARA O WHATSAPP
    const mensagem = `*NOVO LEAD - BRASILSEGUROS*%0A%0A` +
                     `*Nome:* ${encodeURIComponent(nome)}%0A` +
                     `*WhatsApp:* ${encodeURIComponent(telefone)}%0A` +
                     `*Plano:* ${encodeURIComponent(tipoPlano)}%0A` +
                     `*Quantidade de Vidas:* ${encodeURIComponent(vidas)}%0A` +
                     `*Idades:* ${encodeURIComponent(idades)}%0A` +
                     `*Operadoras:* ${encodeURIComponent(operadorasTexto)}`;

    // SEU NÚMERO DE ATENDIMENTO
    const numeroCorretor = "551134125912";

    // ABRIR WHATSAPP COM OS DADOS PRONTOS
    window.open(`https://wa.me/${numeroCorretor}?text=${mensagem}`, '_blank');
});
