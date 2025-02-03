# Aula Avançada de SQL: Comandos, Alterações e Relacionamentos

## 1. Alteração de Estrutura de Tabelas (ALTER TABLE)

### 1.1 Conceito Teórico
ALTER TABLE é um comando fundamental para modificar a estrutura de uma tabela existente. Permite adicionar, modificar ou remover colunas, definir/alterar restrições, chaves primárias e estrangeiras após a criação inicial da tabela.

### 1.2 Exemplos Práticos

```sql
-- Adicionar nova coluna
ALTER TABLE alunos 
ADD COLUMN telefone VARCHAR(15);

-- Modificar tipo de coluna existente
ALTER TABLE alunos 
MODIFY COLUMN nome VARCHAR(200);

-- Renomear coluna
ALTER TABLE alunos 
CHANGE COLUMN telefone celular VARCHAR(15);

-- Adicionar restrição UNIQUE
ALTER TABLE alunos 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Adicionar chave estrangeira
ALTER TABLE matriculas 
ADD CONSTRAINT fk_curso 
FOREIGN KEY (curso_id) REFERENCES cursos(id);

-- Remover coluna
ALTER TABLE alunos 
DROP COLUMN celular;
```

## 2. Comandos DELETE 

### 2.1 Conceito Teórico
O comando DELETE remove registros específicos de uma tabela. É uma operação irreversível que deve ser usada com cautela, sempre utilizando cláusulas WHERE para evitar exclusões indesejadas.

### 2.2 Exemplos Práticos

```sql
-- Deletar registro específico
DELETE FROM alunos 
WHERE id = 5;

-- Deletar múltiplos registros com condição
DELETE FROM alunos 
WHERE idade < 18;

-- Deletar todos os registros de uma tabela
DELETE FROM matriculas;

-- Deletar com múltiplas condições
DELETE FROM alunos 
WHERE cidade = 'São Paulo' AND idade > 30;
```

## 3. JOINs: Fundamentos Teóricos Detalhados

### 3.1 O que são JOINs?
JOINs são operações que permitem combinar registros de duas ou mais tabelas com base em uma relação entre elas. São essenciais para recuperar dados relacionados em bancos de dados relacionais.

### 3.2 Tipos de JOINs

#### 3.2.1 INNER JOIN
- Une apenas registros que têm correspondência em ambas as tabelas
- Retorna apenas os registros com relacionamento direto
- Exemplo prático:

```sql
-- Listar alunos e seus cursos
SELECT alunos.nome, cursos.nome_curso
FROM alunos
INNER JOIN matriculas ON alunos.id = matriculas.aluno_id
INNER JOIN cursos ON matriculas.curso_id = cursos.id;
```

#### 3.2.2 LEFT JOIN
- Retorna todos os registros da tabela da esquerda
- Registros sem correspondência recebem valores NULL na tabela da direita
- Exemplo:

```sql
-- Listar todos os alunos, com ou sem matrícula
SELECT alunos.nome, matriculas.curso_id
FROM alunos
LEFT JOIN matriculas ON alunos.id = matriculas.aluno_id;
```

#### 3.2.3 RIGHT JOIN
- Simétrico ao LEFT JOIN
- Retorna todos os registros da tabela da direita
- Registros sem correspondência recebem valores NULL

```sql
-- Listar todos os cursos, com ou sem alunos
SELECT cursos.nome_curso, alunos.nome
FROM cursos
RIGHT JOIN matriculas ON cursos.id = matriculas.curso_id
RIGHT JOIN alunos ON matriculas.aluno_id = alunos.id;
```

#### 3.2.4 FULL JOIN (Simulado no MySQL)
- Combina resultados de LEFT e RIGHT JOINs
- No MySQL não existe nativamente, pode ser simulado

```sql
-- Simulação de FULL JOIN
SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN matriculas ON alunos.id = matriculas.aluno_id
LEFT JOIN cursos ON matriculas.curso_id = cursos.id

UNION

SELECT alunos.nome, cursos.nome_curso
FROM alunos
RIGHT JOIN matriculas ON alunos.id = matriculas.aluno_id
RIGHT JOIN cursos ON matriculas.curso_id = cursos.id;
```

## 4. Exemplos Práticos Completos

### 4.1 Cenário: Sistema Acadêmico

```sql
-- Criar banco de dados
CREATE DATABASE universidade;
USE universidade;

-- Tabela de Departamentos
CREATE TABLE departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    localizacao VARCHAR(100)
);

-- Tabela de Professores
CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    departamento_id INT,
    salario DECIMAL(10,2),
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

-- Tabela de Cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

-- Inserir dados de exemplo
INSERT INTO departamentos (nome, localizacao) VALUES 
('Computação', 'Bloco A'),
('Matemática', 'Bloco B');

INSERT INTO professores (nome, departamento_id, salario) VALUES
('João Silva', 1, 5500.00),
('Maria Souza', 2, 6000.00);

INSERT INTO cursos (nome, departamento_id) VALUES
('Sistemas de Informação', 1),
('Ciência da Computação', 1),
('Matemática Aplicada', 2);

-- Consulta complexa com múltiplos JOINs
SELECT 
    p.nome AS professor,
    d.nome AS departamento,
    c.nome AS curso
FROM professores p
JOIN departamentos d ON p.departamento_id = d.id
JOIN cursos c ON d.id = c.departamento_id;
```

### 5. Desafios e Exercícios

1. Criar consultas que utilizem diferentes tipos de JOIN
2. Implementar ALTER TABLE em um cenário real
3. Desenvolver estratégias de DELETE seguras
4. Criar relatórios complexos usando subconsultas

### 6. Boas Práticas

1. Sempre use WHERE em DELETE e UPDATE
2. Teste consultas complexas em ambiente de desenvolvimento
3. Use transações para operações críticas
4. Mantenha integridade referencial
5. Crie backups antes de alterações estruturais