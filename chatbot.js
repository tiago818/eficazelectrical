document.addEventListener("DOMContentLoaded", function() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotBody = document.getElementById('chatbot-body');

    function toggleChatbot() {
        chatbot.style.display = (chatbot.style.display === 'none' || chatbot.style.display === '') ? 'block' : 'none';
    }

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessageToChat('Você', message);
            getBotResponse(message);
            chatbotInput.value = '';
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    function getBotResponse(message) {
        let response = '';

        // Perguntas e respostas sobre instalações elétricas
        if (message.includes('instalação') && message.includes('residencial')) {
            response = 'Para instalações elétricas residenciais, oferecemos serviços como instalação de tomadas, iluminação, chuveiros elétricos e mais.';
        } else if (message.includes('manutenção') && message.includes('residencial')) {
            response = 'Para manutenção elétrica residencial, realizamos reparos em fiação, quadros de distribuição, troca de disjuntores e mais.';
        } else if (message.includes('reforma') && message.includes('residencial')) {
            response = 'Em reformas elétricas residenciais, atualizamos toda a infraestrutura elétrica para garantir segurança e eficiência.';
        } else if (message.includes('instalação') && message.includes('comercial')) {
            response = 'Nas instalações elétricas comerciais, cuidamos da iluminação, tomadas de alta capacidade, sistemas de segurança e mais.';
        } else if (message.includes('manutenção') && message.includes('comercial')) {
            response = 'Oferecemos manutenção elétrica comercial, incluindo verificação de sistemas, reparos e otimização de energia.';
        } else if (message.includes('reforma') && message.includes('comercial')) {
            response = 'Nas reformas elétricas comerciais, garantimos que a instalação elétrica atenda aos requisitos normativos e de segurança.';
        } else if (message.includes('instalação') && message.includes('industrial')) {
            response = 'Nas instalações elétricas industriais, trabalhamos com a instalação de máquinas, painéis de controle, sistemas de iluminação e mais.';
        } else if (message.includes('manutenção') && message.includes('industrial')) {
            response = 'Nossa manutenção elétrica industrial abrange desde a substituição de componentes até a manutenção preventiva de sistemas.';
        } else if (message.includes('reforma') && message.includes('industrial')) {
            response = 'Em reformas elétricas industriais, atualizamos sistemas para melhorar a eficiência e a segurança no ambiente de trabalho.';
        } else {
            response = 'Desculpe, não entendi sua pergunta. Você pode reformular ou ser mais específico?';
        }

        setTimeout(() => addMessageToChat('Bot', response), 1000);
    }

    chatbotToggle.addEventListener('click', toggleChatbot);
    chatbotInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Iniciando o chatbot oculto
    chatbot.style.display = 'none';
});
