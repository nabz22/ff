// Color palette untuk bunga
const colorPalettes = [
  { primary: '#FF69B4', light: '#FFB6D9', accent: '#FF1493' }, // Pink
  { primary: '#FF6347', light: '#FFB6A3', accent: '#FF4500' }, // Tomato
  { primary: '#FFD700', light: '#FFED4E', accent: '#FFA500' }, // Gold
  { primary: '#FF8C00', light: '#FFB84D', accent: '#FF6347' }, // Orange
  { primary: '#FF00FF', light: '#FF69FF', accent: '#FF1493' }, // Magenta
  { primary: '#00CED1', light: '#7FFFD4', accent: '#00BFFF' }, // Cyan
  { primary: '#32CD32', light: '#90EE90', accent: '#228B22' }, // Lime
];

let currentPaletteIndex = 0;

onload = () => {
  document.body.classList.remove("container");
  setupFlowerInteraction();
};

function setupFlowerInteraction() {
  const flowers = document.querySelectorAll('.flower');
  
  flowers.forEach((flower, index) => {
    flower.style.cursor = 'pointer';
    flower.addEventListener('click', (e) => {
      e.stopPropagation();
      changeFlowerColor(flower, index);
    });
    
    // Hover effect
    flower.addEventListener('mouseenter', () => {
      flower.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))';
    });
    
    flower.addEventListener('mouseleave', () => {
      flower.style.filter = 'brightness(1)';
    });
  });
  
  // Double click untuk random color semua bunga
  document.addEventListener('dblclick', randomizeAllFlowers);
}

function changeFlowerColor(flower, index) {
  const palette = colorPalettes[currentPaletteIndex % colorPalettes.length];
  currentPaletteIndex++;
  
  const lights = flower.querySelectorAll('.flower__light');
  lights.forEach(light => {
    light.style.backgroundColor = palette.light;
    light.style.boxShadow = `0 0 20px ${palette.primary}`;
  });
  
  const whiteCircle = flower.querySelector('.flower__white-circle');
  if (whiteCircle) {
    whiteCircle.style.backgroundColor = palette.primary;
  }
  
  // Add animation
  flower.style.animation = 'none';
  setTimeout(() => {
    flower.style.animation = '';
  }, 50);
}

function randomizeAllFlowers() {
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach(flower => {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
    const lights = flower.querySelectorAll('.flower__light');
    lights.forEach(light => {
      light.style.backgroundColor = randomPalette.light;
      light.style.boxShadow = `0 0 20px ${randomPalette.primary}`;
    });
    
    const whiteCircle = flower.querySelector('.flower__white-circle');
    if (whiteCircle) {
      whiteCircle.style.backgroundColor = randomPalette.primary;
    }
  });
}
