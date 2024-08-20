window.addEventListener('scroll', function() {
    const image = document.getElementById('scroll-img');
    const scrollY = window.scrollY;

    // Imposta un limite massimo di spostamento e blur
    const maxScroll = 300; // Cambia questo valore in base a quanto vuoi far muovere e sfocare l'immagine

    // Calcola la percentuale di scroll rispetto al massimo
    const scrollPercentage = Math.min(scrollY / maxScroll, 1);

    // Calcola la nuova posizione e il blur
    // const translateX = scrollPercentage * 300; // Sposta l'immagine di 200px (puoi cambiare questo valore)
    // const translateY = scrollPercentage2 * 5000; // Sposta l'immagine di 200px (puoi cambiare questo valore)
    const newTop = 50 + scrollPercentage * 380; // Spostamento verticale
    const newLeft = 50 + scrollPercentage * 500; // Spostamento orizzontale
    const blurValue = scrollPercentage * 10; // Sfoca fino a 10px (puoi cambiare questo valore)

    // Applica le trasformazioni
    image.style.top = `calc(10% + ${newTop}px)`;
    image.style.left = `calc(50% + ${newLeft}px)`;
    image.style.filter = `blur(${blurValue}px)`;
});