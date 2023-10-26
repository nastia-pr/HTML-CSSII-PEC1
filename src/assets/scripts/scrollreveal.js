import ScrollReveal from 'scrollreveal';

ScrollReveal({ 
    reset: false,
    distance: "60px",
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.title_container', {
    delay: 500,
    origin: "left",
    opacity: 0.1,
    distance: '20px',
    scale: 0.8 
  });

  ScrollReveal().reveal('.navbar_menu a', {
    delay: 100, 
    origin: 'top', 
    distance: '80px', 
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.content_container_text_h3', {
    origin: 'left',
    opacity: 0.1,
    distance: '20px',
    duration: 1000, // Adjust the duration as needed
    easing: 'ease-in-out' 
});