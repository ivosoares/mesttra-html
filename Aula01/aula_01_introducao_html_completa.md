
# Aula 01: Introdução ao HTML

## 1. O que é HTML?

HTML (HyperText Markup Language) é a linguagem de marcação usada para criar páginas web. Através de **tags**, definimos a estrutura e o conteúdo de uma página.

Um documento HTML tem uma estrutura padrão, e o navegador interpreta essas marcações para exibir a página.

### Exemplo de Estrutura Básica de um Documento HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página HTML</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <p>Essa é minha primeira página em HTML.</p>
  </body>
</html>
```

### Explicação:

1. **`<!DOCTYPE html>`**: Indica ao navegador que o documento usa HTML5.
2. **`<html>`**: Tag raiz que envolve todo o conteúdo da página.
3. **`<head>`**: Contém metadados sobre o documento (ex: codificação, título).
4. **`<meta charset="UTF-8">`**: Define a codificação de caracteres (UTF-8).
5. **`<title>`**: Define o título da página exibido na aba do navegador.
6. **`<body>`**: Contém o conteúdo visível da página.

---

## 2. O que são Tags?

As **tags** são usadas para delimitar o início e o fim de um elemento HTML. A maioria das tags tem uma abertura e um fechamento.

### Exemplo:

```html
<h1>Este é um título</h1>
<p>Este é um parágrafo.</p>
```

---

## 3. Atributos em HTML

Os **atributos** fornecem informações adicionais sobre os elementos HTML. Eles são colocados dentro da tag de abertura.

### Exemplo:

```html
<a href="https://www.exemplo.com" target="_blank">Visite o site</a>
<img src="imagem.jpg" alt="Descrição da imagem">
```

- **`href`**: Indica o destino de um link.
- **`src`**: Especifica a fonte de uma imagem.
- **`alt`**: Fornece um texto alternativo para a imagem.

---

## 4. HTML Semântico

O **HTML semântico** utiliza tags que descrevem melhor o significado do conteúdo, facilitando a leitura do código para humanos e motores de busca (SEO).

### Exemplos de tags semânticas:

```html
<header>
  <h1>Bem-vindo ao Meu Site</h1>
</header>

<nav>
  <ul>
    <li><a href="#home">Início</a></li>
    <li><a href="#sobre">Sobre</a></li>
  </ul>
</nav>

<article>
  <h2>Artigo Principal</h2>
  <p>Este é o conteúdo principal do artigo.</p>
</article>

<footer>
  <p>Copyright 2024 - Meu Site</p>
</footer>
```

### Benefícios do HTML Semântico:

- **SEO (Search Engine Optimization)**: Melhor classificação nos motores de busca.
- **Acessibilidade**: Facilita o uso de tecnologias assistivas, como leitores de tela.
- **Organização**: Deixa o código mais legível e estruturado.

---

## 5. Formulários em HTML

Os **formulários** são usados para coletar dados do usuário. Um formulário HTML é criado com a tag `<form>` e contém diferentes tipos de entradas.

### Estrutura básica de um formulário:

```html
<form action="/enviar" method="POST">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <label for="mensagem">Mensagem:</label>
  <textarea id="mensagem" name="mensagem"></textarea>
  
  <input type="submit" value="Enviar">
</form>
```

### Principais elementos de um formulário:

- **`<form>`**: Define o formulário e seus atributos, como `action` (URL de destino) e `method` (GET ou POST).
- **`<label>`**: Fornece uma descrição para os campos do formulário.
- **`<input>`**: Cria campos de entrada de texto, email, senha, entre outros.
- **`<textarea>`**: Cria uma área de texto para mensagens mais longas.
- **`<button>` ou `<input type="submit">`**: Cria um botão para enviar os dados.

### Exemplos de Campos:

```html
<input type="text" name="nome" placeholder="Digite seu nome">
<input type="password" name="senha" placeholder="Digite sua senha">
<input type="email" name="email" placeholder="Digite seu email">
<input type="radio" name="genero" value="masculino"> Masculino
<input type="radio" name="genero" value="feminino"> Feminino
<select name="pais">
  <option value="brasil">Brasil</option>
  <option value="portugal">Portugal</option>
</select>
```

### Atributos importantes:

- **`type`**: Define o tipo de entrada (text, password, email, submit, etc.).
- **`placeholder`**: Texto sugestivo dentro do campo.
- **`name`**: Nome usado para identificar o campo quando os dados forem enviados.
- **`value`**: Valor padrão ou selecionado.

---

## 6. Metadados

Os **metadados** fornecem informações sobre o documento que não são exibidas diretamente. Eles são colocados dentro da tag `<head>`.

### Exemplos:

```html
<meta charset="UTF-8">
<meta name="description" content="Descrição da minha página">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Seu Nome">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **`charset`**: Define a codificação de caracteres.
- **`description`**: Descreve a página para os motores de busca.
- **`keywords`**: Define palavras-chave relacionadas ao conteúdo da página.
- **`author`**: Identifica o autor do documento.
- **`viewport`**: Faz a página ser responsiva em dispositivos móveis.

---

### O que você aprendeu nesta aula:

- Estrutura básica de um documento HTML.
- O que são tags e atributos.
- O conceito de HTML semântico e seus benefícios.
- Como criar formulários simples.
- A importância dos metadados.

---

Na próxima aula, vamos explorar **CSS** e como aplicar estilos ao conteúdo HTML.
