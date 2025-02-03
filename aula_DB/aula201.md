# Aula 2: Aprofundamento em SQL

## 1. Revisão Rápida
- Recapitulação dos conceitos da aula anterior
- Comandos básicos: CREATE, INSERT, SELECT
- Estrutura de tabelas e tipos de dados

## 2. Comandos de Filtro e Seleção Avançados

### 2.1 Operadores de Comparação
```sql
-- Operadores básicos
SELECT * FROM alunos WHERE idade > 18;
SELECT * FROM alunos WHERE idade BETWEEN 18 AND 25;
SELECT * FROM alunos WHERE nome LIKE 'M%';  -- Começa com M
SELECT * FROM alunos WHERE email IS NOT NULL;
```

### 2.2 Operadores Lógicos
```sql
-- Combinando condições
SELECT * FROM alunos 
WHERE (idade >= 18) AND (cidade = 'São Paulo');

SELECT * FROM alunos 
WHERE idade < 20 OR cidade = 'Rio de Janeiro';

SELECT * FROM alunos 
WHERE NOT (cidade = 'Curitiba');
```

## 3. Agrupamento e Agregação

### 3.1 Funções de Agregação
```sql
-- Funções principais
SELECT COUNT(*) AS total_alunos FROM alunos;
SELECT AVG(idade) AS media_idade FROM alunos;
SELECT MAX(idade) AS idade_maxima FROM alunos;
SELECT MIN(idade) AS idade_minima FROM alunos;
SELECT SUM(valor_mensalidade) AS total_receita FROM matriculas;
```

### 3.2 GROUP BY
```sql
-- Agrupamento
SELECT cidade, COUNT(*) AS total_alunos 
FROM alunos 
GROUP BY cidade;

SELECT curso, AVG(idade) AS media_idade 
FROM alunos 
GROUP BY curso;

-- Combinando GROUP BY com filtros
SELECT curso, AVG(idade) AS media_idade 
FROM alunos 
GROUP BY curso 
HAVING media_idade > 20;
```

## 4. Relacionamentos entre Tabelas

### 4.1 Chaves Estrangeiras
```sql
-- Criando tabelas relacionadas
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100),
    duracao INT
);

CREATE TABLE matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);
```

### 4.2 JOINs
```sql
-- INNER JOIN (junção padrão)
SELECT alunos.nome, cursos.nome_curso
FROM matriculas
INNER JOIN alunos ON matriculas.aluno_id = alunos.id
INNER JOIN cursos ON matriculas.curso_id = cursos.id;

-- LEFT JOIN
SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN matriculas ON alunos.id = matriculas.aluno_id
LEFT JOIN cursos ON matriculas.curso_id = cursos.id;

-- RIGHT JOIN
SELECT alunos.nome, cursos.nome_curso
FROM alunos
RIGHT JOIN matriculas ON alunos.id = matriculas.aluno_id
RIGHT JOIN cursos ON matriculas.curso_id = cursos.id;
```

## 5. Subconsultas

### 5.1 Subconsultas Simples
```sql
-- Encontrar alunos com idade maior que a média
SELECT nome, idade 
FROM alunos 
WHERE idade > (SELECT AVG(idade) FROM alunos);

-- Encontrar cursos com mais de 5 alunos
SELECT nome_curso 
FROM cursos 
WHERE id IN (
    SELECT curso_id 
    FROM matriculas 
    GROUP BY curso_id 
    HAVING COUNT(aluno_id) > 5
);
```

## 6. Exercício Prático Completo

### Contexto: Sistema de Gestão Acadêmica

1. **Criar Banco de Dados**
```sql
CREATE DATABASE gestao_academica;
USE gestao_academica;
```

2. **Criar Tabelas**
```sql
-- Tabela de Alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    idade INT,
    cidade VARCHAR(50)
);

-- Tabela de Cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100),
    area VARCHAR(50),
    duracao_meses INT
);

-- Tabela de Matrículas
CREATE TABLE matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    curso_id INT,
    data_matricula DATE,
    valor_mensalidade DECIMAL(10,2),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);
```

3. **Inserir Dados de Exemplo**
```sql
-- Inserir alunos
INSERT INTO alunos (nome, email, idade, cidade) VALUES
('João Silva', 'joao@email.com', 22, 'São Paulo'),
('Maria Souza', 'maria@email.com', 25, 'Rio de Janeiro'),
('Pedro Santos', 'pedro@email.com', 20, 'Belo Horizonte');

-- Inserir cursos
INSERT INTO cursos (nome_curso, area, duracao_meses) VALUES
('Sistemas de Informação', 'TI', 48),
('Engenharia de Software', 'TI', 60),
('Ciência de Dados', 'TI', 36);

-- Inserir matrículas
INSERT INTO matriculas (aluno_id, curso_id, data_matricula, valor_mensalidade) VALUES
(1, 1, '2024-02-01', 1200.00),
(2, 2, '2024-02-15', 1500.00),
(3, 3, '2024-03-01', 1300.00);
```

4. **Consultas Práticas**
```sql
-- Relatório completo de matrículas
SELECT 
    a.nome AS nome_aluno, 
    c.nome_curso, 
    m.data_matricula,
    m.valor_mensalidade
FROM matriculas m
JOIN alunos a ON m.aluno_id = a.id
JOIN cursos c ON m.curso_id = c.id;

-- Cursos por área e média de idade
SELECT 
    c.area, 
    c.nome_curso, 
    AVG(a.idade) AS media_idade,
    COUNT(m.id) AS total_alunos
FROM cursos c
LEFT JOIN matriculas m ON c.id = m.curso_id
LEFT JOIN alunos a ON m.aluno_id = a.id
GROUP BY c.area, c.nome_curso
ORDER BY total_alunos DESC;
```

## 7. Desafios para Casa
1. Criar consultas complexas usando JOINs
2. Fazer relatórios com subconsultas
3. Praticar agrupamentos e funções de agregação

## 8. Recursos Complementares
- MySQL Documentation
- Plataformas de prática online (SQLZoo, HackerRank)
- Canais do YouTube especializados em SQL