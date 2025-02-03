# Exercício: Crie seu Portfólio de Desenvolvedor

## Objetivo
Aplicar os conceitos de HTML semântico, tabelas, formulários e estilização CSS para criar um portfólio pessoal de desenvolvedor.

## Instruções

1. Estrutura HTML:
   - Use a estrutura básica do HTML5 (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
   - Inclua tags semânticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, e `<footer>`.

2. Conteúdo:
   - Crie uma seção "Sobre Mim" com uma breve introdução pessoal.
   - Adicione uma seção "Habilidades" usando uma tabela HTML.
   - Inclua uma seção "Projetos" com pelo menos dois projetos que você realizou ou gostaria de realizar.
   - Crie um formulário de contato.

3. Tabela de Habilidades:
   - Use `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, e `<td>`.
   - Inclua colunas para: Habilidade, Nível (usando estrelas), e Experiência.
   - Utilize ícones de estrela para representar o nível (1 a 5 estrelas).

4. Formulário de Contato:
   - Use a tag `<form>` com os atributos adequados.
   - Inclua campos para Nome, E-mail, e Mensagem.
   - Utilize `<label>` para cada campo e associe-os corretamente.
   - exemplo X

5. Estilização CSS:
   - Crie um arquivo CSS separado e vincule-o ao seu HTML.
   - Estilize seu portfólio para torná-lo atraente e profissional.
   - Certifique-se de que o design seja responsivo.

6. Ícones e Imagens:
   - Inclua ícones para redes sociais (LinkedIn, GitHub, etc.).
   - Adicione uma foto sua ou um avatar na seção "Sobre Mim".

7. Extras (Opcional):
   - Adicione uma barra de navegação funcional.
   - Implemente um design de página única (single-page) com links de navegação suaves.
   - Inclua animações CSS simples para melhorar a interatividade.

## Exemplo Visual

Aqui está um exemplo de como seu portfólio pode ficar:

<antArtifact identifier="exemplo-portfolio" type="image/svg+xml" title="Exemplo de Portfólio de Desenvolvedor">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <!-- Fundo -->
  <rect width="800" height="600" fill="#f0f0f0"/>
  
  <!-- Header -->
  <rect width="800" height="80" fill="#333333"/>
  <text x="40" y="50" font-family="Arial" font-size="24" fill="white">Seu Nome</text>
  <text x="650" y="50" font-family="Arial" font-size="18" fill="white">Menu</text>
  
  <!-- Sobre Mim -->
  <rect x="40" y="100" width="720" height="100" fill="white" rx="10"/>
  <circle cx="90" cy="150" r="30" fill="#ddd"/>
  <text x="140" y="140" font-family="Arial" font-size="18" fill="#333">Sobre Mim</text>
  <text x="140" y="170" font-family="Arial" font-size="14" fill="#666">Breve descrição sobre você e suas metas...</text>
  
  <!-- Habilidades -->
  <rect x="40" y="220" width="720" height="150" fill="white" rx="10"/>
  <text x="60" y="250" font-family="Arial" font-size="18" fill="#333">Habilidades</text>
  <line x1="60" y1="270" x2="740" y2="270" stroke="#ddd" stroke-width="2"/>
  <text x="60" y="300" font-family="Arial" font-size="14" fill="#666">HTML</text>
  <text x="200" y="300" font-family="Arial" font-size="14" fill="#ffd700">★★★★☆</text>
  <text x="60" y="330" font-family="Arial" font-size="14" fill="#666">CSS</text>
  <text x="200" y="330" font-family="Arial" font-size="14" fill="#ffd700">★★★★★</text>
  <text x="60" y="360" font-family="Arial" font-size="14" fill="#666">JavaScript</text>
  <text x="200" y="360" font-family="Arial" font-size="14" fill="#ffd700">★★★☆☆</text>
  
  <!-- Projetos -->
  <rect x="40" y="390" width="350" height="150" fill="white" rx="10"/>
  <rect x="410" y="390" width="350" height="150" fill="white" rx="10"/>
  <text x="60" y="420" font-family="Arial" font-size="18" fill="#333">Projeto 1</text>
  <text x="60" y="450" font-family="Arial" font-size="14" fill="#666">Descrição do projeto...</text>
  <text x="430" y="420" font-family="Arial" font-size="18" fill="#333">Projeto 2</text>
  <text x="430" y="450" font-family="Arial" font-size="14" fill="#666">Descrição do projeto...</text>
  
  <!-- Footer -->
  <rect y="560" width="800" height="40" fill="#333333"/>
  <text x="300" y="585" font-family="Arial" font-size="14" fill="white">© 2024 Seu Nome. Todos os direitos reservados.</text>
</svg>