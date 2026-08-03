document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // PEGAR OS DADOS DOS CAMPOS
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const tipoPlano = document.getElementById('tipoPlano').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;

    // PEGAR CAMPOS OPCIONAIS (caso existam no seu HTML)
    const vidasInput = document.getElementById('vidas');
    const idadesInput = document.getElementById('idades');
    const vidas = vidasInput ? vidasInput.value : 'Não informado';
    const idades = idadesInput ? idadesInput.value : 'Não informado';

    // PEGAR AS OPERADORAS MARCADAS (se houver checkboxes)
    const checkboxes = document.querySelectorAll('input[name="operadora"]:checked');
    const operadorasSelecionadas = Array.from(checkboxes).map(cb => cb.value);
    const operadorasTexto = operadorasSelecionadas.length > 0 ? operadorasSelecionadas.join(', ') : 'Não informado';

    // MENSAGEM FORMATADA PARA O WHATSAPP
    const mensagem = `*NOVO LEAD - BRASILSEGUROS*%0A%0A` +
                     `*Nome:* ${encodeURIComponent(nome)}%0A` +
                     `*WhatsApp:* ${encodeURIComponent(telefone)}%0A` +
                     `*Localização:* ${encodeURIComponent(cidade)} - ${encodeURIComponent(estado)}%0A` +
                     `*Plano:* ${encodeURIComponent(tipoPlano)}%0A` +
                     `*Quantidade de Vidas:* ${encodeURIComponent(vidas)}%0A` +
                     `*Idades:* ${encodeURIComponent(idades)}%0A` +
                     `*Operadoras:* ${encodeURIComponent(operadorasTexto)}`;

    // SEU NÚMERO DE ATENDIMENTO
    const numeroCorretor = "551134125912";

    // ABRIR WHATSAPP
    window.open(`https://wa.me/${numeroCorretor}?text=${mensagem}`, '_blank');
});
