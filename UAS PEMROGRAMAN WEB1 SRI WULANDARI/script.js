document.addEventListener("DOMContentLoaded", () => {
    // Animasi muncul (fade in) saat halaman dimuat
    const content = document.querySelector('.content-box');
    if (content) {
        content.style.opacity = "0";
        content.style.transform = "translateY(20px)";
        content.style.transition = "all 0.6s ease-out";
        
        setTimeout(() => {
            content.style.opacity = "1";
            content.style.transform = "translateY(0)";
        }, 100);
    }
});