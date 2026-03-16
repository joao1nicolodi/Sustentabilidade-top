// 1. Rastro de folhas ao mover o mouse
document.addEventListener('mousemove', (e) => {
    const leaf = document.createElement('span');
    leaf.innerHTML = '🍃';
    leaf.className = 'mouse-leaf';
    leaf.style.left = e.pageX + 'px';
    leaf.style.top = e.pageY + 'px';
    
    document.body.appendChild(leaf);
    
    // Remove a folha depois de 0.5s
    setTimeout(() => leaf.remove(), 500);
});

// 2. Árvore que aparece ao clicar e some após 1 segundo
document.addEventListener('click', (e) => {
    const tree = document.createElement('img');
    
    // IMPORTANTE: O nome deve ser IDÊNTICO ao ficheiro na pasta
    tree.src = 'realistic-isolated-green-tree-free-png.webp'; 
    
    tree.className = 'click-tree';
    tree.style.left = e.pageX + 'px';
    tree.style.top = e.pageY + 'px';
    
    // Se a imagem não carregar, este alerta vai avisar-te no console do navegador (F12)
    tree.onerror = () => console.error("Erro: Não encontrei a imagem da árvore. Verifica o nome do ficheiro!");
    
    document.body.appendChild(tree);
    
    setTimeout(() => tree.remove(), 1000);
});

// 3. Arbustos que nascem nos cantos a cada 10 segundos
let lastShrub = null;

function spawnShrub() {
    // Se já existe um arbusto anterior, ele desaparece suavemente
    if (lastShrub) {
        lastShrub.style.opacity = '0';
        setTimeout(() => lastShrub.remove(), 1000);
    }

    const shrub = document.createElement('img');
    
    // IMPORTANTE: Verifica se o seu ficheiro termina em .jpg ou .png
    shrub.src = 'Shrub-PNG-Pic.png'; 
    
    shrub.className = 'shrub';
    shrub.onerror = () => console.error("Erro: Não encontrei a imagem do arbusto.");
    
    // Alterna entre aparecer na esquerda ou direita
    const side = Math.random() > 0.5 ? 'left' : 'right';
    shrub.style[side] = '20px';
    shrub.style.opacity = '1';
    
    document.body.appendChild(shrub);
    lastShrub = shrub;
}

// Inicia o ciclo dos arbustos
setInterval(spawnShrub, 10000);
spawnShrub();