window.onload = function() {
    const fullScreen = document.querySelector('.full-screen');
    const logoInicial = document.querySelector('.logo-inicial');
    const conteudo = document.querySelector('.conteudo');

    // Primeiro fade-in
    setTimeout(() => {
        fullScreen.style.display = 'none';
        logoInicial.style.display = 'block';
    }, 2000);

    // Fade-out da logo inicial e fade-in do conteúdo principal
    setTimeout(() => {
        logoInicial.style.animation = 'fade-out 2s';
        setTimeout(() => {
            logoInicial.style.display = 'none';
            conteudo.style.display = 'block';
        }, 2000);
    }, 2000);

    // Função de alternância para alternar visibilidade
    const toggleSection = (section) => {
        const isDisplayed = section.style.display === 'block';
        section.style.display = isDisplayed ? 'none' : 'block';
    };

    const chatGPTButton = document.querySelector('.chatGPT-button');
    chatGPTButton.onclick = function() {
        window.open('https://chat.openai.com', '_blank', 'width=1280, height=720');
    };

    const aboutChatGPTButton = document.querySelector('.about-chatGPT-button');
    const sobreChatGPT = document.querySelector('.sobre-chatGPT');

    const aboutUsButton = document.querySelector('.about-us-button');
    const sobreNos = document.querySelector('.sobre-nos');

    // Eventos de clique para alternar seções
    aboutChatGPTButton.onclick = function() {
        toggleSection(sobreChatGPT); // Alterna entre visível e invisível
    };

    aboutUsButton.onclick = function() {
        toggleSection(sobreNos); // Alterna entre visível e invisível
    };
};
