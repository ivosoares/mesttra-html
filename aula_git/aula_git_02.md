# **Aula 02: Git em Equipe - Colaboração, Merge, Rebase e GitHub**

---

## **Objetivos da Aula:**
1. Entender fluxos de trabalho colaborativos com Git e GitHub.
2. Dominar os conceitos de **merge** e **rebase**.
3. Aprender a resolver conflitos em cenários de múltiplos desenvolvedores.
4. Praticar colaboração em um repositório compartilhado.

---

## **Duração da Aula:**
- 2 horas (teoria + prática).

---

## **Estrutura da Aula:**

### **1. Revisão Rápida da Aula 01 (10 minutos)**
- O que é Git? Controle de versão, commits, branches.
- Comandos básicos: `git add`, `git commit`, `git push`, `git pull`.
- Conceito de repositório local vs. remoto (GitHub).

---

### **2. Fluxos de Trabalho em Equipe (20 minutos)**

#### **a) Centralized Workflow (Fluxo Centralizado)**
- Todos os desenvolvedores trabalham diretamente na branch `main`.
- **Passos:**
  1. `git pull origin main` (sincroniza com o repositório remoto).
  2. Faz as alterações e commita.
  3. `git push origin main` (envia as alterações).
- **Problema:** Risco de conflitos frequentes.

#### **b) Feature Branch Workflow (Fluxo de Branches por Funcionalidade)**
- Cada funcionalidade/correção é desenvolvida em uma branch separada.
- **Passos:**
  1. `git checkout -b feature/login` (cria uma branch para a funcionalidade).
  2. Desenvolve e commita na branch.
  3. Faz merge da branch `feature/login` em `main` via **pull request** (GitHub).
- **Vantagem:** Isola mudanças e facilita revisão de código.

#### **c) GitHub Flow**
- Baseado em branches e pull requests.
- **Regras:**
  - A branch `main` sempre está pronta para produção.
  - Novas funcionalidades são feitas em branches.
  - Pull requests são usados para discussão e revisão.
  - Após aprovação, o merge é feito em `main`.

#### **d) Git Flow (Para Projetos Complexos)**
- Branches fixas: `main` (produção), `develop` (desenvolvimento), `feature/*`, `release/*`, `hotfix/*`.
- **Exemplo:**
  - `git checkout -b feature/nova-api develop` (cria uma branch a partir de `develop`).
  - Após testes, merge em `develop` e depois em `main`.

---

### **3. Merge vs. Rebase (20 minutos)**

#### **a) Merge**
- Combina duas branches preservando o histórico completo.
- **Comando:**
  ```bash
  git checkout main
  git merge feature/login
  ```
- **Resultado:** Cria um novo commit de merge no histórico.
- **Usar quando:** Trabalho em equipe com branches públicas (evitar reescrever histórico).

#### **b) Rebase**
- Reaplica os commits de uma branch em cima de outra, "reescrevendo" o histórico.
- **Comando:**
  ```bash
  git checkout feature/login
  git rebase main
  ```
- **Resultado:** Histórico linear e limpo.
- **Usar quando:** Trabalho individual ou em branches privadas (evitar em branches compartilhadas).
- **Cuidado:** Nunca faça rebase em branches públicas (pode causar conflitos para outros desenvolvedores).

#### **c) Exemplo Prático: Merge vs. Rebase**
- **Cenário:**
  - Branch `main` tem o commit **A**.
  - Branch `feature` tem os commits **B** e **C**.
- **Merge:**
  ```
  Histórico: A -> B -> C -> Merge Commit (D)
  ```
- **Rebase:**
  ```
  Histórico: A -> B' -> C' (histórico linear)
  ```

---

### **4. Trabalhando com Múltiplos Desenvolvedores (30 minutos)**

#### **a) Resolução de Conflitos**
- **Como ocorrem:** Dois desenvolvedores alteram o mesmo arquivo na mesma linha.
- **Passos para resolver:**
  1. `git pull origin main` (atualiza o repositório local).
  2. Git alerta sobre conflitos.
  3. Abra o arquivo conflitante:
     ```
     <<<<<<< HEAD
     Seu código
     =======
     Código do colega
     >>>>>>> 1234567
     ```
  4. Edite o arquivo, mantendo o código desejado.
  5. `git add .` e `git commit -m "Resolve conflito"`.

#### **b) Pull Requests (GitHub)**
- **O que é:** Solicitação para integrar uma branch em outra, com revisão de código.
- **Passos:**
  1. Crie uma branch (`git checkout -b feature/header`).
  2. Faça commits e envie para o GitHub (`git push origin feature/header`).
  3. No GitHub, abra um **pull request** (PR) de `feature/header` para `main`.
  4. Colegas revisam o código e aprovam o merge.
  5. Merge via GitHub (botão "Merge pull request").

#### **c) Fork e Contribuição em Projetos Externos**
- **Passos:**
  1. Faça um **fork** do repositório original no GitHub (cria uma cópia em sua conta).
  2. Clone o seu fork:
     ```bash
     git clone https://github.com/seu-usuario/repositorio.git
     ```
  3. Crie uma branch, faça alterações e envie para seu fork.
  4. Abra um **pull request** do seu fork para o repositório original.

---

### **5. Atividade Prática (40 minutos)**

#### **Cenário: Simulação de Trabalho em Equipe**
- **Objetivo:** Dois "desenvolvedores" (alunos A e B) colaboram em um mesmo repositório.
- **Passos:**
  1. **Desenvolvedor A:**
     - Cria um repositório no GitHub com um arquivo `index.html`.
     - Adiciona o conteúdo `<h1>Bem-vindo</h1>` e faz commit em `main`.
  2. **Desenvolvedor B:**
     - Faz um fork do repositório de A.
     - Clona o fork localmente.
     - Cria uma branch `feature/footer` e adiciona `<footer>Copyright 2023</footer>`.
     - Envia para seu fork e abre um **pull request**.
  3. **Desenvolvedor A:**
     - Revisa o PR, comenta e aprova o merge.
  4. **Conflito Simulado:**
     - Ambos alteram a mesma linha em `index.html` e tentam fazer merge.
     - Resolvem o conflito juntos.

---

### **6. Boas Práticas para Trabalho em Equipe (10 minutos)**
- **Comunicação:** Avise a equipe antes de fazer rebase ou force push.
- **Commits Pequenos:** Facilita revisão e resolução de conflitos.
- **Pull Requests Descritivos:** Explique o que foi feito e por quê.
- **Sincronização Frequente:** Sempre faça `git pull` antes de começar a trabalhar.

---

### **7. Ferramentas Úteis no GitHub (10 minutos)**
- **GitHub Issues:** Para gerenciar tarefas e bugs.
- **GitHub Projects:** Quadros Kanban para organização.
- **Actions:** Automação de testes e deploys.
- **Code Review:** Comentários em PRs e sugestões de código.

---

### **8. Encerramento e Dúvidas (10 minutos)**
- Revisão dos tópicos:
  - Merge vs. Rebase.
  - Pull Requests.
  - Resolução de conflitos.
- **Material Complementar:**
  - GitHub Docs: [https://docs.github.com/](https://docs.github.com/)
  - Livro "Pro Git": Capítulos sobre workflows avançados.

---

### **Materiais Necessários:**
- Computador com Git instalado.
- Contas no GitHub para todos os alunos.
- Acesso à internet para clonar e enviar repositórios.

---

### **Dicas para a Aula:**
- Use um repositório de exemplo no GitHub para demonstrações ao vivo.
- Encoraje os alunos a praticarem em duplas.
- Mostre exemplos reais de pull requests em projetos open-source (ex: GitHub Trending).

---

Com essa aula, os alunos entenderão como colaborar efetivamente em projetos usando Git e GitHub, resolvendo conflitos e aplicando boas práticas de trabalho em equipe. 😊