# **Apostila de Git: Controle de Versão para Iniciantes**

---

## **Sumário**
1. Introdução ao Git
2. Instalação e Configuração
3. Conceitos Fundamentais
4. Comandos Básicos do Git
5. Trabalhando com Branches
6. Repositórios Remotos (GitHub, GitLab, Bitbucket)
7. Boas Práticas
8. Exercícios Práticos
9. Referências e Materiais Complementares

---

## **1. Introdução ao Git**

### **O que é Git?**
Git é um sistema de controle de versão distribuído, usado para rastrear mudanças em arquivos ao longo do tempo. Ele é amplamente utilizado no desenvolvimento de software para gerenciar o código-fonte de projetos, permitindo que várias pessoas trabalhem juntas de forma organizada.

### **Por que usar Git?**
- **Histórico de Alterações:** Você pode ver todas as mudanças feitas no projeto, quem as fez e quando.
- **Colaboração:** Facilita o trabalho em equipe, permitindo que várias pessoas trabalhem no mesmo projeto sem se atrapalhar.
- **Segurança:** Se algo der errado, você pode voltar para uma versão anterior do projeto.
- **Organização:** Permite criar "ramificações" (branches) para desenvolver novas funcionalidades sem afetar o código principal.

### **Git vs. GitHub/GitLab/Bitbucket**
- **Git:** É a ferramenta de controle de versão que você instala no seu computador.
- **GitHub/GitLab/Bitbucket:** São plataformas online que hospedam repositórios Git e oferecem funcionalidades extras, como gerenciamento de projetos e colaboração.

---

## **2. Instalação e Configuração**

### **Instalando o Git**
- **Windows:**
  1. Acesse o site oficial do Git: [https://git-scm.com/](https://git-scm.com/).
  2. Baixe o instalador e siga as instruções.
- **macOS:**
  1. Abra o Terminal e digite:
     ```bash
     brew install git
     ```
  2. Se você não tiver o Homebrew instalado, siga as instruções em [https://brew.sh/](https://brew.sh/).
- **Linux:**
  1. No Terminal, digite:
     ```bash
     sudo apt-get install git
     ```

### **Configurando o Git**
Após a instalação, configure seu nome e e-mail (essas informações serão usadas nos commits):
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Para verificar as configurações:
```bash
git config --list
```

---

## **3. Conceitos Fundamentais**

### **Repositório (Repository)**
Um repositório é um local onde o histórico do projeto é armazenado. Ele pode ser:
- **Local:** No seu computador.
- **Remoto:** Em um servidor, como GitHub, GitLab ou Bitbucket.

### **Commit**
Um commit é um "snapshot" das alterações no repositório. Cada commit tem um identificador único (hash) e uma mensagem que descreve as mudanças.

### **Branch (Ramificação)**
Uma branch é uma linha de desenvolvimento independente. Você pode criar branches para desenvolver novas funcionalidades sem afetar o código principal.

### **Merge (Fusão)**
Merge é o processo de combinar as alterações de duas branches.

### **Clone**
Clone é o comando que cria uma cópia local de um repositório remoto.

### **Pull e Push**
- **Pull:** Atualiza o repositório local com as alterações do remoto.
- **Push:** Envia as alterações locais para o repositório remoto.

---

## **4. Comandos Básicos do Git**

### **Inicializando um Repositório**
Para começar a usar Git em um projeto, você precisa inicializar um repositório:
```bash
git init
```

### **Verificando o Status**
Para ver o estado atual do repositório (arquivos modificados, em stage, etc.):
```bash
git status
```

### **Adicionando Arquivos ao Stage**
Antes de fazer um commit, você precisa adicionar os arquivos ao stage:
```bash
git add <arquivo>
git add .  # Adiciona todos os arquivos modificados
```

### **Realizando um Commit**
Para salvar as alterações no repositório:
```bash
git commit -m "Mensagem descritiva do commit"
```

### **Visualizando o Histórico de Commits**
Para ver todos os commits feitos no repositório:
```bash
git log
```

### **Criando e Trocando de Branch**
Para criar uma nova branch:
```bash
git branch <nome-da-branch>
```

Para trocar para uma branch:
```bash
git checkout <nome-da-branch>
```

Para criar e trocar para uma branch em um único comando:
```bash
git checkout -b <nome-da-branch>
```

### **Fazendo Merge de Branches**
Para combinar as alterações de uma branch com a branch atual:
```bash
git merge <nome-da-branch>
```

### **Clonando um Repositório Remoto**
Para criar uma cópia local de um repositório remoto:
```bash
git clone <url-do-repositorio>
```

### **Enviando Alterações para o Repositório Remoto**
Para enviar as alterações locais para o repositório remoto:
```bash
git push origin <nome-da-branch>
```

### **Atualizando o Repositório Local**
Para atualizar o repositório local com as alterações do remoto:
```bash
git pull origin <nome-da-branch>
```

---

## **5. Trabalhando com Branches**

### **Por que usar Branches?**
Branches permitem que você trabalhe em novas funcionalidades ou correções sem afetar o código principal. Isso é especialmente útil em projetos com várias pessoas trabalhando ao mesmo tempo.

### **Fluxo de Trabalho com Branches**
1. Crie uma nova branch para a funcionalidade ou correção:
   ```bash
   git checkout -b nova-funcionalidade
   ```
2. Faça as alterações necessárias e faça commits:
   ```bash
   git add .
   git commit -m "Adiciona nova funcionalidade"
   ```
3. Volte para a branch principal e faça o merge:
   ```bash
   git checkout main
   git merge nova-funcionalidade
   ```

---

## **6. Repositórios Remotos (GitHub, GitLab, Bitbucket)**

### **O que são Repositórios Remotos?**
Repositórios remotos são versões do seu projeto hospedadas em servidores online, como GitHub, GitLab ou Bitbucket. Eles permitem que várias pessoas colaborem no mesmo projeto.

### **Adicionando um Repositório Remoto**
Para adicionar um repositório remoto ao seu projeto local:
```bash
git remote add origin <url-do-repositorio>
```

### **Enviando Alterações para o Repositório Remoto**
Para enviar as alterações locais para o repositório remoto:
```bash
git push origin <nome-da-branch>
```

### **Clonando um Repositório Remoto**
Para criar uma cópia local de um repositório remoto:
```bash
git clone <url-do-repositorio>
```

---

## **7. Boas Práticas**

### **Mensagens de Commit Descritivas**
Escreva mensagens de commit claras e objetivas. Exemplo:
- "Corrige bug na validação de formulário" (bom).
- "Correção" (ruim).

### **Trabalho com Branches**
- Use branches para funcionalidades novas ou correções.
- Evite trabalhar diretamente na branch `main` ou `master`.

### **Frequência de Commits**
- Faça commits pequenos e frequentes, com foco em uma única alteração.

### **Resolução de Conflitos**
- Conflitos ocorrem quando duas pessoas alteram o mesmo arquivo. Para resolver:
  1. Abra o arquivo com conflitos.
  2. Escolha qual versão manter ou combine as alterações.
  3. Adicione o arquivo ao stage e faça o commit.

---

## **8. Exercícios Práticos**

### **Exercício 1: Criando um Repositório Local**
1. Crie uma pasta no seu computador.
2. Inicialize um repositório Git dentro da pasta.
3. Crie um arquivo `README.md` e adicione conteúdo.
4. Adicione o arquivo ao stage e faça um commit.

### **Exercício 2: Trabalhando com Branches**
1. Crie uma nova branch chamada `nova-funcionalidade`.
2. Faça alterações no arquivo `README.md` e faça um commit.
3. Volte para a branch principal e faça o merge da nova branch.

### **Exercício 3: Clonando um Repositório Remoto**
1. Crie um repositório no GitHub.
2. Clone o repositório para o seu computador.
3. Faça alterações e envie para o repositório remoto.

---

## **9. Referências e Materiais Complementares**
- Documentação oficial do Git: [https://git-scm.com/doc](https://git-scm.com/doc)
- Livro "Pro Git" (gratuito): [https://git-scm.com/book/pt-br/v2](https://git-scm.com/book/pt-br/v2)
- GitHub Guides: [https://guides.github.com/](https://guides.github.com/)

---

### **Conclusão**
Com essa apostila, você aprendeu os conceitos básicos do Git e como usá-lo para gerenciar projetos de software. Pratique os comandos e explore as funcionalidades avançadas para se tornar um expert em controle de versão!

---

Espero que essa apostila seja útil para seus alunos! Se precisar de mais ajustes ou detalhes, é só me avisar. 😊