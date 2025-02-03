// função para buscar o conteudo html de uma parte especifica
async function fetchHTML(part) {
    const response = await fetch(part);
    return await response.text();
}

// função para injetar o html dentro de um componente alvo
function injectHtml(target, html) {
    document.getElementById(target).innerHTML = html;
}

// Função principal para buscar o conteudo e injetar no html
async function loadHtml(part, target) {
    const data = await fetchHTML(part);
    injectHtml(target, data);
}

//Função para carregar o menu;
loadHtml('./componentes/menu.html', "menu")