window.addEventListener("load", function() {
  
  // Função para esconder todas as seções
  function hideSections() {
      const sections = document.querySelectorAll("section");
      sections.forEach(function(section) {
          section.style.display = "none";
      });
  }

  // Função para exibir a seção correspondente
  function showSection(sectionId) {
      hideSections(); // Esconde todas as seções
      document.getElementById(sectionId).style.display = "block"; // Exibe a seção selecionada
  }

  // Eventos para os botões de navegação
  document.getElementById("btnSobre").addEventListener("click", function() {
      showSection("sobre");
  });

  document.getElementById("btnAgenda").addEventListener("click", function() {
      showSection("Agenda");
  });

  document.getElementById("btnGaleria").addEventListener("click", function() {
      showSection("galeria");
  });

  document.getElementById("btnHome").addEventListener("click", function() {
      showSection("home");
  });

  // Exibe a seção Home por padrão
  showSection("home");

  // Modal de Imagens
const images = document.querySelectorAll(".image-content");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Função para abrir o modal com a imagem ampliada
images.forEach((image) => {
    image.addEventListener('click', () => {
        openModal(image.src);
    });
});
// Função para abrir o modal com a imagem ampliada
images.forEach((image) => {
    image.addEventListener('click', () => {
        openModal(image.src);
    });
});

// Função para abrir o modal
function openModal(imageSrc) {
    modal.style.display = 'flex'; // Exibe o modal
    modalImage.src = imageSrc; // Define o src da imagem
    modalImage.onload = function() {
        modalImage.style.display = 'block'; // Exibe a imagem
    };
}

// Função para fechar o modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Quando a imagem do modal for clicada, mover para fora do modal
modalImage.addEventListener('click', () => {
    moveImageOutside();
});

// Função para mover a imagem para fora do modal
function moveImageOutside() {
    // Ocultar o modal para que a imagem possa "sair"
    modal.style.display = 'none';

    // Criar um novo elemento de imagem fora do modal
    const imageOutside = document.createElement('img');
    imageOutside.src = modalImage.src;
    imageOutside.style.position = 'absolute';
    imageOutside.style.top = '50%';
    imageOutside.style.left = '50%';
    imageOutside.style.transform = 'translate(-50%, -50%)';
    imageOutside.style.cursor = 'zoom-out'; // Indica que a imagem pode ser fechada
    imageOutside.style.transition = 'all 0.5s ease'; // Transição suave

    // Adiciona a imagem ao corpo
    document.body.appendChild(imageOutside);

    // Define o tamanho original da imagem fora do modal
    const originalWidth = modalImage.naturalWidth;  // Tamanho real da imagem
    const originalHeight = modalImage.naturalHeight;  // Tamanho real da imagem
    imageOutside.style.maxWidth = originalWidth + 'px';
    imageOutside.style.maxHeight = originalHeight + 'px';

    // Ao clicar na imagem fora do modal, fechar e retornar ao estado normal
    imageOutside.addEventListener('click', () => {
        document.body.removeChild(imageOutside); // Remove a imagem
    });
}

});
