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
                chatWindow.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    chatWindow.classList.add('hidden');
                }, 300);
            }
        }

        function addMessage(message, isBot = true) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'flex items-start';
            
            if (isBot) {
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 gradient-pink rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <span class="text-white text-sm">👑</span>
                    </div>
                    <div class="bg-pink-100 rounded-2xl p-3 max-w-xs">
                        <p class="text-sm">${message}</p>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="flex justify-end w-full">
                        <div class="bg-gray-200 rounded-2xl p-3 max-w-xs">
                            <p class="text-sm">${message}</p>
                        </div>
                    </div>
                `;
            }
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function getBotResponse(question) {
            const responses = {
                'precios': '💰 **PRECIOS ELITE:**\n\n🌟 **1 PERSONA:**\n• 1 Semana: $600\n• 4 Semanas: $2,000\n\n💕 **PAREJAS:**\n• 1 Semana: $900\n• 4 Semanas: $3,000\n\n¡Incluye plan nutricional GRATIS! ¿Te interesa algún paquete?',
                
                'horarios': '⏰ **HORARIOS VIP:**\n\n• 1 hora diaria\n• 5 días por semana (L-V)\n• Horarios flexibles para profesionales\n• Sesiones matutinas y vespertinas disponibles\n• Adaptable a tu agenda\n\n¿Prefieres entrenar en la mañana o tarde?',
                
                'ubicacion': '📍 **UBICACIÓN PREMIUM:**\n\n• SmartFit León Campestre\n• León, Guanajuato\n• Gimnasio equipado con tecnología de punta\n• Ambiente exclusivo y profesional\n• Fácil acceso y estacionamiento\n• Instalaciones de primera clase\n\n¿Te gustaría conocer las instalaciones?',
                
                'whatsapp': '📱 **CONTACTO DIRECTO:**\n\n• WhatsApp: 477 142 7981\n• Respuesta inmediata\n• Asesoría personalizada 24/7\n• Seguimiento constante\n• Consultas sin compromiso\n\n¡Hablemos por WhatsApp para tu transformación!',
                
                'nutricion': '🥗 **NUTRICIÓN ELITE:**\n\n• Plan personalizado incluido\n• Basado en ciencia deportiva\n• Adaptado a tu metabolismo\n• Recetas fáciles y deliciosas\n• Seguimiento nutricional\n• Macros calculados específicamente\n\n¿Tienes alguna restricción alimentaria?',
                
                'resultados': '🏆 **RESULTADOS GARANTIZADOS:**\n\n• Pérdida de grasa visible en 2 semanas\n• Aumento de masa muscular\n• Mejora en resistencia y fuerza\n• Transformación corporal completa\n• Más de 500 personas transformadas\n• Cambios medibles y fotografiables\n\n¿Cuál es tu objetivo principal?',
                
                'certificaciones': '🎓 **MIS CERTIFICACIONES:**\n\n• Licenciada en Educación Física\n• NSCA Certified (Internacional)\n• SPAIN Certified (Europa)\n• INAF - Nutrición Deportiva\n• ACAFFEM - Especialista por Género\n• Farmacología Deportiva\n\n¡Estás en las mejores manos profesionales!',
                
                'diferencia': '✨ **¿POR QUÉ SOY DIFERENTE?**\n\n• Método científico comprobado\n• Certificaciones internacionales\n• Seguimiento personalizado 24/7\n• Resultados visibles en 2 semanas\n• Más de 500 transformaciones exitosas\n• Enfoque integral: ejercicio + nutrición\n\n¿Listo/a para ser el/la próximo/a?',
                
                'experiencia': '💪 **MI EXPERIENCIA:**\n\n• +8 años entrenando personas\n• +500 transformaciones exitosas\n• Especialista en fisicoculturismo\n• Experta en nutrición deportiva\n• Preparación para competencias\n• Casos de éxito documentados\n\n¿Quieres ver algunos testimonios?',
                
                'equipamiento': '🏋️ **EQUIPAMIENTO PROFESIONAL:**\n\n• Máquinas de última generación\n• Pesas libres completas\n• Equipo cardiovascular premium\n• Zona funcional especializada\n• Implementos deportivos variados\n• Ambiente climatizado\n\n¡Todo lo necesario para tu éxito!',
                
                'planes': '📋 **PLANES DISPONIBLES:**\n\n• **ELITE STARTER:** 1 semana - $600\n• **REINA FITNESS:** 4 semanas - $2,000\n• **POWER COUPLE:** Parejas - $3,000\n• **PERSONALIZADO:** Según objetivos\n• **COMPETENCIA:** Preparación específica\n\n¿Cuál se adapta mejor a ti?',
                
                'testimonios': '⭐ **TESTIMONIOS REALES:**\n\n• María: "Perdí 15kg en 4 semanas"\n• Carlos: "Gané masa muscular increíble"\n• Ana: "Mi mejor inversión en salud"\n• Luis: "Resultados que nunca imaginé"\n• Carmen: "Profesionalismo total"\n\n¡Únete a los casos de éxito!'
            };

            // Búsqueda inteligente por palabras clave
            const lowerQuestion = question.toLowerCase();
            
            if (lowerQuestion.includes('precio') || lowerQuestion.includes('costo') || lowerQuestion.includes('cuanto')) {
                return responses.precios;
            } else if (lowerQuestion.includes('horario') || lowerQuestion.includes('hora') || lowerQuestion.includes('cuando')) {
                return responses.horarios;
            } else if (lowerQuestion.includes('donde') || lowerQuestion.includes('ubicacion') || lowerQuestion.includes('direccion')) {
                return responses.ubicacion;
            } else if (lowerQuestion.includes('whatsapp') || lowerQuestion.includes('telefono') || lowerQuestion.includes('contacto')) {
                return responses.whatsapp;
            } else if (lowerQuestion.includes('nutricion') || lowerQuestion.includes('dieta') || lowerQuestion.includes('alimentacion')) {
                return responses.nutricion;
            } else if (lowerQuestion.includes('resultado') || lowerQuestion.includes('cuanto tiempo') || lowerQuestion.includes('funciona')) {
                return responses.resultados;
            } else if (lowerQuestion.includes('certificacion') || lowerQuestion.includes('titulo') || lowerQuestion.includes('estudio')) {
                return responses.certificaciones;
            } else if (lowerQuestion.includes('diferente') || lowerQuestion.includes('mejor') || lowerQuestion.includes('por que')) {
                return responses.diferencia;
            } else if (lowerQuestion.includes('experiencia') || lowerQuestion.includes('años') || lowerQuestion.includes('trayectoria')) {
                return responses.experiencia;
            } else if (lowerQuestion.includes('equipo') || lowerQuestion.includes('maquina') || lowerQuestion.includes('gimnasio')) {
                return responses.equipamiento;
            } else if (lowerQuestion.includes('plan') || lowerQuestion.includes('paquete') || lowerQuestion.includes('programa')) {
                return responses.planes;
            } else if (lowerQuestion.includes('testimonio') || lowerQuestion.includes('opinion') || lowerQuestion.includes('reseña')) {
                return responses.testimonios;
            } else if (lowerQuestion.includes('hola') || lowerQuestion.includes('buenos') || lowerQuestion.includes('buenas')) {
                return '¡Hola! 👑 Soy el asistente de Alejandra. Estoy aquí para resolver todas tus dudas sobre nuestros entrenamientos elite. ¿Qué te gustaría saber? 💪✨';
            } else if (lowerQuestion.includes('gracias') || lowerQuestion.includes('perfecto') || lowerQuestion.includes('genial')) {
                return '¡De nada! 👑 ¿Hay algo más en lo que pueda ayudarte? Recuerda que Alejandra está esperándote para tu transformación elite. ¡Hablemos por WhatsApp! 💕';
            } else {
                return `Excelente pregunta! 🤔 Te puedo ayudar con:\n\n💰 Precios y paquetes\n⏰ Horarios disponibles\n📍 Ubicación del gimnasio\n🥗 Planes nutricionales\n🏆 Resultados esperados\n💪 Mi experiencia\n🏋️ Equipamiento\n📋 Planes específicos\n⭐ Testimonios reales\n🎓 Certificaciones\n📱 Contacto directo\n\n¿Sobre qué te gustaría saber más? O mejor aún, ¡hablemos por WhatsApp para una asesoría personalizada!`;
            }
        }

        function askQuestion(type) {
            const response = getBotResponse(type);
            setTimeout(() => {
                addMessage(response, true);
            }, 500);
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                addMessage(message, false);
                input.value = '';
                
                // Simular typing
                setTimeout(() => {
                    const response = getBotResponse(message);
                    addMessage(response, true);
                    
                    // Agregar botón de WhatsApp después de respuestas importantes
                    if (message.toLowerCase().includes('precio') || message.toLowerCase().includes('interesa') || message.toLowerCase().includes('quiero')) {
                        setTimeout(() => {
                            addMessage('¿Lista para comenzar tu transformación? 🚀', true);
                            setTimeout(() => {
                                const chatMessages = document.getElementById('chatMessages');
                                const buttonDiv = document.createElement('div');
                                buttonDiv.className = 'flex justify-center mt-3';
                                buttonDiv.innerHTML = `
                                    <button onclick="window.open('https://wa.me/524771427981?text=¡Hola Alejandra! Vengo del chatbot de tu página. Estoy interesada en tus entrenamientos elite. ¡Quiero mi transformación!')" class="gradient-pink text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
                                        📱 ¡Hablar con Alejandra!
                                    </button>
                                `;
                                chatMessages.appendChild(buttonDiv);
                                chatMessages.scrollTop = chatMessages.scrollHeight;
                            }, 1000);
                        }, 2000);
                    }
                }, 1000);
            }
        }

        function handleEnter(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        // Add premium interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to cards
            const cards = document.querySelectorAll('.card-luxury');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) scale(1.03)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Add sparkle effect on scroll
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelectorAll('.decoration-circle');
                
                parallax.forEach(element => {
                    const speed = 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        });
    </script>

// Aquí deberías pegar el resto de tu JS relacionado con el chatbot si lo tienes en el bloque JS del index.html original
