# Snake Game

## Descrição

Este é um jogo clássico da cobrinha, desenvolvido em HTML, CSS e JavaScript. O objetivo do jogo é controlar a cobra, comer as frutas para crescer e acumular pontos, enquanto evita colidir com as paredes ou com o próprio corpo. Conforme a cobra cresce, a dificuldade aumenta, com a velocidade da cobra ficando mais rápida.

## Funcionalidades

- **Controle básico**: Movimente a cobra usando as setas do teclado.
- **Crescimento**: A cobra aumenta de tamanho ao comer frutas.
- **Pontuação**: A pontuação aumenta a cada fruta comida.
- **Dificuldade progressiva**: A velocidade da cobra aumenta conforme a pontuação cresce.
- **Fim de jogo**: O jogo termina se a cobra colidir com as paredes ou consigo mesma.
- **Reiniciar jogo**: Capacidade de reiniciar o jogo após perder.
- **Design responsivo**: Adaptado para diferentes tamanhos de tela.

## Como Executar

### Pré-requisitos

Para executar este projeto, você precisará de um navegador moderno que suporte HTML5.

### Passo a Passo

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/carobaMestre/snake-game.git
    ```

2. **Acesse o diretório do projeto:**
    ```bash
    cd snake-game
    ```
3. **Abra o arquivo index.html no seu navegador:**

Você pode fazer isso diretamente clicando no arquivo ou usando um servidor local, como `Live Server` no Visual Studio Code.


    ```bash
    # Se estiver usando Python, por exemplo, você pode executar:
    python -m http.server
    ```
4. **Jogue:**

Use as setas do teclado para controlar a cobra e divirta-se!

## Personalização

### Modificando a Velocidade Inicial

Para alterar a velocidade inicial da cobra, modifique a variável `speed` no arquivo `script.js`:

```javascript
let speed = 200; // Velocidade inicial (ms por movimento)
``` 

## Alterando o Tamanho do Mapa

Para ajustar o tamanho do mapa, você pode alterar as variáveis `width` e `height` no `script`.js e garantir que o canvas seja atualizado:

## Mudando as Cores

As cores da cobra e da comida podem ser ajustadas diretamente no método `drawGame()` em `script.js`:

```javascript
// Desenha a cobra
ctx.fillStyle = index === 0 ? 'lightgreen' : 'green';

// Desenha a comida
ctx.fillStyle = 'red';

``` 

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum bug, tiver uma sugestão de melhoria ou quiser adicionar novas funcionalidades, siga as etapas abaixo:

1. **Faça um fork** do repositório.
2. **Crie uma branch** para sua feature ou correção (`git checkout -b feature/nova-feature`).
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. **Envie** para o branch (`git push origin feature/nova-feature`).
5. **Abra um Pull Request**.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```