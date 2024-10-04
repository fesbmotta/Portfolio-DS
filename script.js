// script.js

// Seleciona todos os blocos
const blocks = document.querySelectorAll('.block');

// Adiciona evento de mouseover e mouseout a cada bloco
blocks.forEach((block) => {
  block.addEventListener('mouseover', () => {
    // Aumenta o tamanho do bloco
    block.style.transform = 'scale(1.1)';
    block.style.transition = 'transform 0.3s';
    block.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  });

  block.addEventListener('mouseout', () => {
    // Volta ao tamanho original do bloco
    block.style.transform = 'scale(1)';
    block.style.transition = 'transform 0.3s';
    block.style.boxShadow = 'none';
  });
});