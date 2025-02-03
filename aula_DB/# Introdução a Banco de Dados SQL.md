# Introdução a Banco de Dados SQL
**Material Completo para Aula e Estudo**

## 1. Conceitos Fundamentais

### 1.1 O que é um Banco de Dados?

Um banco de dados é uma coleção organizada de informações (dados) relacionadas que podem ser facilmente acessadas, gerenciadas e atualizadas. Pense em um banco de dados como uma versão digital e mais sofisticada de um sistema de arquivamento.

**Exemplos do Dia a Dia:**
1. **Agenda de Contatos do Celular:**
   - Cada contato é um registro
   - Cada registro possui campos como: nome, telefone, email, endereço
   - Os dados são organizados de forma padronizada
   - Permite buscas rápidas

2. **Catálogo de E-commerce:**
   - Produtos são registros
   - Cada produto tem: código, nome, preço, descrição, estoque
   - Relacionamento entre produtos, categorias e fornecedores
   - Atualização em tempo real

3. **Sistema de Biblioteca:**
   - Livros são registros principais
   - Informações como: título, autor, ISBN, localização
   - Controle de empréstimos e devoluções
   - Relacionamento com cadastro de usuários

### 1.2 Por que usar Bancos de Dados?

**1. Organização dos Dados**
- Estrutura padronizada
- Dados relacionados ficam juntos
- Fácil manutenção
- Evita duplicidade de informações

**2. Acesso Rápido à Informação**
- Buscas eficientes
- Filtros precisos
- Resultados instantâneos
- Múltiplos critérios de busca

**3. Consistência dos Dados**
- Regras de validação
- Formato padronizado
- Integridade das informações
- Controle de qualidade dos dados

**4. Compartilhamento Seguro**
- Múltiplos usuários simultâneos
- Controle de acesso
- Diferentes níveis de permissão
- Registro de alterações

**5. Redundância Controlada**
- Backup automático
- Recuperação de dados
- Histórico de alterações
- Prevenção de perda de informações

### 1.3 Conceitos Iniciais Importantes

**1. SGBD (Sistema Gerenciador de Banco de Dados)**
- É o software que gerencia o banco de dados
- Exemplos: MySQL, PostgreSQL, SQL Server, Oracle
- Controla acesso, segurança e integridade
- Gerencia as operações no banco

**2. Banco de Dados Relacional**
- Dados organizados em tabelas
- Relacionamentos entre tabelas
- Uso de chaves para conexões
- Linguagem SQL para operações

**3. Estruturas Básicas**
- **Tabelas**: Estruturas que armazenam dados de forma organizada
- **Registros**: Cada linha de uma tabela (um conjunto de dados)
- **Campos**: Colunas da tabela (características dos dados)
- **Relacionamentos**: Conexões entre tabelas

**4. Chaves**
- **Chave Primária**: Identificador único de cada registro
- **Chave Estrangeira**: Campo que referencia chave primária de outra tabela

## 2. MySQL: Visão Geral

### 2.1 Por que MySQL?

**1. Popularidade e Mercado**
- Um dos SGBDs mais utilizados no mundo
- Grande demanda no mercado de trabalho
- Usado por empresas de todos os portes
- Forte comunidade de desenvolvedores

**2. Vantagens Técnicas**
- Código aberto (open source)
- Alto desempenho
- Fácil de aprender
- Multiplataforma (Windows, Linux, Mac)
- Suporta grandes volumes de dados

**3. Empresas que Usam MySQL**
- Facebook
- Twitter
- YouTube
- Netflix
- Muitas outras grandes empresas

### 2.2 Estrutura Hierárquica do MySQL

1. **Servidor MySQL**
   - É o serviço principal que gerencia tudo
   - Pode conter vários bancos de dados
   - Gerencia usuários e permissões
   - Controla conexões e recursos

2. **Banco de Dados**
   - Conjunto de tabelas relacionadas
   - Agrupa dados de um mesmo sistema
   - Possui configurações próprias
   - Exemplo: banco de dados 'escola'

3. **Tabelas**
   - Armazenam os dados específicos
   - Estrutura definida por colunas
   - Dados organizados em linhas
   - Exemplo: tabela 'alunos'

4. **Registros**
   - São as linhas das tabelas
   - Contêm os dados propriamente ditos
   - Cada registro é único
   - Exemplo: dados de um aluno específico

## 3. Comandos Básicos SQL

### 3.1 Criando e Usando Banco de Dados

```sql
-- Criar novo banco de dados
CREATE DATABASE escola;

-- Selecionar o banco para uso
USE escola;
```

**Explicação:**
- `CREATE DATABASE`: Cria um novo banco de dados
- Nome deve ser único no servidor
- `USE`: Define qual banco de dados será usado
- Todos os comandos seguintes serão executados neste banco

### 3.2 Criando Tabelas

```sql
-- Tabela de alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    idade INT,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Explicação dos Campos:**
- `id`: Número único para cada aluno (chave primária)
- `nome`: Texto com até 100 caracteres, obrigatório
- `email`: Texto único para cada aluno
- `idade`: Número inteiro
- `data_cadastro`: Data e hora automática do cadastro

**Tipos de Dados Comuns:**
1. **Números**
   - `INT`: Números inteiros
   - `DECIMAL(10,2)`: Números decimais
   - `FLOAT`: Números decimais

2. **Texto**
   - `VARCHAR(n)`: Texto de tamanho variável
   - `TEXT`: Texto longo
   - `CHAR(n)`: Texto de tamanho fixo

3. **Data/Hora**
   - `DATE`: Apenas data
   - `TIME`: Apenas hora
   - `DATETIME`: Data e hora
   - `TIMESTAMP`: Data e hora com fuso horário

### 3.3 Inserindo Dados

```sql
-- Inserir um único registro
INSERT INTO alunos (nome, email, idade) 
VALUES ('Maria Silva', 'maria@email.com', 20);

-- Inserir múltiplos registros
INSERT INTO alunos (nome, email, idade) VALUES 
('João Santos', 'joao@email.com', 22),
('Ana Oliveira', 'ana@email.com', 19);
```

**Explicação:**
- `INSERT INTO`: Comando para inserir dados
- Pode-se inserir um ou vários registros
- Campos não obrigatórios podem ser omitidos
- Valores devem corresponder aos tipos definidos

### 3.4 Consultas Básicas

```sql
-- Selecionar todos os campos de todos os alunos
SELECT * FROM alunos;

-- Selecionar campos específicos
SELECT nome, idade FROM alunos;

-- Selecionar com condição
SELECT * FROM alunos WHERE idade > 20;

-- Ordenar resultados
SELECT * FROM alunos ORDER BY nome;

-- Limitar número de resultados
SELECT * FROM alunos LIMIT 5;
```

**Explicação das Consultas:**
1. `SELECT *`: Seleciona todos os campos
2. `FROM`: Indica a tabela fonte dos dados
3. `WHERE`: Filtra registros por condição
4. `ORDER BY`: Ordena resultados
5. `LIMIT`: Limita quantidade de registros

## 4. Exercício Prático: Sistema de Livraria

### Objetivo:
Criar um sistema básico para gerenciar livros de uma livraria.

### Passo a Passo:

1. **Criar o Banco de Dados**
```sql
CREATE DATABASE livraria;
USE livraria;
```

2. **Criar Tabela de Livros**
```sql
CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(100),
    ano_publicacao INT,
    preco DECIMAL(10,2)
);
```

3. **Inserir Dados de Exemplo**
```sql
INSERT INTO livros (titulo, autor, ano_publicacao, preco) VALUES 
('Dom Casmurro', 'Machado de Assis', 1899, 45.90),
('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 89.90),
('1984', 'George Orwell', 1949, 39.90);
```

4. **Consultas para Praticar**
```sql
-- Listar todos os livros
SELECT * FROM livros;

-- Listar livros por ordem alfabética
SELECT * FROM livros ORDER BY titulo;

-- Encontrar livros mais caros que R$ 50
SELECT * FROM livros WHERE preco > 50.00;

-- Contar número total de livros
SELECT COUNT(*) as total_livros FROM livros;
```

## 5. Boas Práticas em Banco de Dados

1. **Nomenclatura**
   - Use nomes claros e significativos
   - Evite caracteres especiais
   - Mantenha um padrão consistente
   - Use singular para nomes de tabelas

2. **Tipos de Dados**
   - Escolha tipos adequados para cada dado
   - Não exagere no tamanho dos campos
   - Use `INT` para números inteiros
   - Use `DECIMAL` para valores monetários

3. **Chaves Primárias**
   - Sempre defina uma chave primária
   - Prefira usar `AUTO_INCREMENT`
   - Evite usar dados mutáveis como chave
   - Mantenha as chaves simples

4. **Relacionamentos**
   - Planeje bem as relações entre tabelas
   - Use chaves estrangeiras apropriadamente
   - Mantenha a integridade referencial
   - Documente as relações

## 6. Recursos para Estudo Adicional 

1. **Documentação Oficial**
   - MySQL Documentation: https://dev.mysql.com/doc/
   - Referência completa dos comandos
   - Tutoriais e exemplos
   - Melhores práticas

2. **Tutoriais Online**
   - W3Schools SQL: https://www.w3schools.com/sql/
   - SQLZoo: https://sqlzoo.net/
   - Codecademy SQL: https://www.codecademy.com/learn/learn-sql

3. **Ferramentas Recomendadas**
   - MySQL Workbench (IDE oficial)
   - phpMyAdmin (interface web)
   - DBeaver (multiplataforma)
   - HeidiSQL (Windows)