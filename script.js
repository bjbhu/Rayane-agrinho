document.addEventListener("DOMContentLoaded", function() {
    // Dados fictícios de jogos
    const games = [
        { id: 1, title: "The Legend of Zelda: Breath of the Wild", description: "Uma aventura épica em um vasto mundo aberto cheio de mistérios e inimigos." },
        { id: 2, title: "Minecraft", description: "Um jogo de construção e sobrevivência onde você pode criar e explorar mundos gerados aleatoriamente." },
        { id: 3, title: "Among Us", description: "Um jogo de dedução social onde você e seus amigos tentam completar tarefas enquanto desmascaram um impostor." },
        { id: 4, title: "Fortnite", description: "Um jogo de batalha real com construção e combate rápido em uma ilha cheia de desafios." }
    ];

    const gameList = document.getElementById('game-list');
    const gameDetails = document.getElementById('game-details');

    // Função para criar a lista de jogos
    function createGameList() {
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `<span class="game-title">${game.title}</span>`;
            gameItem.addEventListener('click', () => showGameDetails(game));
            gameList.appendChild(gameItem);
        });
    }

    // Função para exibir os detalhes do jogo
    function showGameDetails(game) {
        gameDetails.innerHTML = `
            <h2>${game.title}</h2>
            <p class="game-description">${game.description}</p>
        `;
    }

    // Inicializar a lista de jogos
    createGameList();
});
