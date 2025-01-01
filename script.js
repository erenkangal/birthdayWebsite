const photos = document.querySelectorAll('.photo');

window.addEventListener('scroll', () => {
  photos.forEach(photo => {
    const photoPosition = photo.getBoundingClientRect().top;

    if (photoPosition < window.innerHeight) {
      photo.classList.add('show');
    }
  });
});

const createStar = () => {
    const star = document.createElement('div');
    star.classList.add('star');
  
    star.style.left = Math.random() * 100 + 'vw'; 
    star.style.top = Math.random() * 100 + 'vh'; 
  
    const size = Math.random() * 3 + 2; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = Math.random() * 5 + 3 + 's'; 
    star.style.opacity = Math.random(); 
  
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
    }, 8000);
  };
  
  setInterval(createStar, 150);
  
  