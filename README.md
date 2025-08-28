# To-Do List App

Este é um aplicativo de lista de tarefas desenvolvido com **React**, **Vite** e **Tailwind CSS**. Ele permite que você gerencie suas tarefas de forma eficiente, com funcionalidades de adicionar, editar, excluir, marcar como concluída e filtrar.

![Imagem de demonstração do aplicativo](https://i.imgur.com/uR2N8mC.png)

## Funcionalidades

- **Adicionar Tarefa:** Insira uma nova tarefa no campo de texto e clique no botão de inclusão.
- **Editar Tarefa:** Clique no ícone de edição para modificar uma tarefa. O texto da tarefa volta para o campo de digitação, o botão de inclusão é substituído por um botão de confirmação e um botão de cancelamento.
- **Cancelar Edição:** Clique em "Cancelar" para descartar as alterações e manter o estado original da tarefa.
- **Excluir Tarefa:** Clique no ícone de lixeira para remover uma tarefa da lista.
- **Concluir Tarefa:** Clique no ícone de conclusão para marcar uma tarefa como finalizada. A borda da tarefa ficará verde para indicar que está concluída.
- **Status da Tarefa:**
  - Borda **vermelha:** Tarefa pendente.
  - Borda **verde:** Tarefa concluída.
- **Validação de Campo:** Um aviso de "campo vazio" é exibido caso você tente adicionar uma tarefa sem texto.
- **Mensagens Toast:** Utiliza a biblioteca **react-toastify** para mostrar mensagens estilizadas e informativas sobre o status das ações (ex: tarefa adicionada, excluída, etc.).
- **Pesquisa Dinâmica:** Pesquise tarefas em tempo real digitando no campo de busca. A lista é atualizada dinamicamente conforme você digita.
- **Filtros:**
  - **Todas:** Exibe todas as tarefas e a contagem total.
  - **Concluídas:** Mostra apenas as tarefas concluídas e a contagem delas.
  - **Pendentes:** Exibe somente as tarefas pendentes e a contagem delas.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construir a interface de usuário.
- **Vite:** Ferramenta de build frontend que oferece uma experiência de desenvolvimento rápida.
- **Tailwind CSS:** Framework CSS de utilitários que permite estilizar a aplicação rapidamente.
- **React-Toastify:** Biblioteca para notificações "toast" estilizadas.
- **React-Icons:** Biblioteca de ícones populares para React.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O aplicativo estará disponível em `http://localhost:5173`.

## Contribuição

Contribuições são bem-vindas! Se você encontrou um bug ou tem uma ideia para uma nova funcionalidade, sinta-se à vontade para abrir uma issue ou enviar um pull request.