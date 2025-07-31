// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});

// Countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const endOfMonth = new Date();
    endOfMonth.setMonth(endOfMonth.getMonth() + 1);
    endOfMonth.setDate(0);
    endOfMonth.setHours(23, 59, 59, 999);
    
    const distance = endOfMonth.getTime() - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

setInterval(updateCountdown, 60000);
updateCountdown();

// WhatsApp function
function openWhatsApp() {
    window.open('https://wa.me/524771427981?text=¡Hola Alejandra! Me interesa información sobre tus entrenamientos elite. ¡Quiero una transformación VIP!');
}

// Chatbot functionality
let chatOpen = false;

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatWindow.classList.remove('hidden');
        chatWindow.style.animation = 'fadeInScale 0.3s ease-out';
    } else {
        chatWindow.classList.add('hidden');
    }
}

// Aquí deberías pegar el resto de tu JS relacionado con el chatbot si lo tienes en el bloque JS del index.html original
