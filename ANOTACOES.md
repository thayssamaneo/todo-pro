# Anotações

Esse arquivo servirá como bloco de notas para o estudo de React e elaboração de um To-Do List, conterá os exercícios, erros e dúvidas.

## 1. Dúvidas

Principais dúvidas:

> **O que é binding?** \
> No contexto de frameworks: Sincronização de dados entre a interface visual (FrontEnd) e a lógica do programa (BackEnd). Quando o dado muda na tela, muda no código e vice-versa.

> **O que é injeção de dependência?** \
> Uma técnica de programação onde um objeto recebe os outros objetos de que precisa (suas dependências) de fora, em vez de criá-los por conta própria. A classe declara somente o que precisa e quem chama a classe passa o objeto pronto.

> **O que é JSX?** \
> Uma extensão de sintaxe para JavaScript que permite escrever códigos parecidos com HTML diretamente no arquivo de scripts. Ferramenta criada pela equipe do React.

## 2. Exercícios

### Exercício 1:

Não entendi o que deveria ser feito.

---

### Exercício 2:

1. Exibir o título de uma tarefa --> **FrontEnd**
2. Validar se uma tarefa possui título antes de salvá-la --> **BackEnd**
3. Armazenar a data de criação de uma tarefa --> **Banco de dados**
4. Alterar a cor de um botão ao passar o mouse --> **FrontEnd**
5. Verificar se o usuário tem autorização para excluir uma tarefa --> **BackEnd**

---

### Exercício 3:

Texto alterado, o navegador atualizou a página logo em seguida com a frase "Olá mundo".

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teste</title>
</head>
<body>
  <h1>Olá mundo</h1>
</body>
</html>
```

---

### Exercício 4:

> **1. Qual arquivo contém os scripts do npm?** \
> No `package.json`

> **2. Por que node_modules não deve ser enviado ao Git?** \
> Pois ele pode ser recriado com o `npm install`e não precisa de versionamento.

> **3. Onde ficará o código principal?** \
> No `src`

> **4. Qual é o papel do main.jsx?** \
> Inicializar ou renderizar a aplicação React.

> **5. Qual comando cria uma versão de produção?** \
> `npm run build`

### Exercício 9:

Foi adicionado observações para esclarecer como e onde cada comando deveria ser executado.

## 3. Checklist do ambiente

- [x] VS Code instalado;
- [x] Node.js funcionando;
- [x] npm funcionando;
- [x] Git funcionando;
- [x] Navegador atualizado;
- [x] Terminal integrado funcionando;

## 4. AutoAvaliação

| Afirmação | Ainda não | Com ajuda | Sozinho |
|-|-|-|-|
|Consigo verificar Node.js, npm e Git | | | x |
|Consigo criar um projeto React com Vite | | x | |
|Consigo iniciar e encerrar o servidor local | | | x |
|Consigo explicar src, package.json e node_modules. | | | x |
|Consigo criar um componente com JSX. | | x | |
|Consigo registrar alterações com Git. | | | x |
|Consigo escrever um README de execução | | | x |
|Consigo investigar um erro simples. | | | x |

1. Qual foi o erro mais difícil da semana? \
Listar as tarefas na tela.

2. Como você investigou esse erro? \
Procurei entender onde havia errado e corrigir testando soluções que funcionassem e pesquisando.

3. Qual parte da entrega ainda pode melhorar? \
As tarefas permanecerem salvas mesmo quando você fecha o navegador e encaixar melhor no layout textos muito longos.

4. O que você espera aprender na próxima semana? \
Quero entender melhor como funcionam os componentes do react e sua lógica de funcionamento.