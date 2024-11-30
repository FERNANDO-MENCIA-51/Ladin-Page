AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Tema oscuro/claro
function toggleTheme() {
    document.body.classList.toggle('neon-mode');
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
    
    // Guardar preferencia en localStorage
    const isDarkMode = document.body.classList.contains('neon-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('neon-mode');
        document.querySelector('.theme-toggle i').classList.replace('fa-moon', 'fa-sun');
    }
    
    // Cargar eventos existentes al cargar la página
    cargarEventos();
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    // Animación del menú
    if(navLinks.classList.contains('active')) {
        navLinks.style.animation = 'slideIn 0.3s forwards';
    } else {
        navLinks.style.animation = 'slideOut 0.3s forwards';
    }
}

// Función para cargar eventos existentes
async function cargarEventos() {
    try {
        const response = await fetch('/module/php/eventos.php');
        if (!response.ok) {
            throw new Error('Error al cargar los eventos');
        }
        const responseText = await response.text();
        
        // Buscar y extraer solo el JSON de la respuesta
        const jsonMatch = responseText.match(/\{.*\}|\[.*\]/s);
        if (!jsonMatch) {
            throw new Error('No se encontró JSON válido en la respuesta');
        }
        
        const eventos = JSON.parse(jsonMatch[0]);
        mostrarEventos(eventos);
    } catch (error) {
        mostrarNotificacion('Error al cargar los eventos: ' + error.message, 'error');
    }
}

// Manejar el formulario
document.getElementById('eventoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Mostrar indicador de carga
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(this);
        
        // Validaciones
        const titulo = formData.get('titulo');
        const fecha = formData.get('fecha');
        const imagen = formData.get('imagen');
        
        if(titulo.length < 3) {
            throw new Error('El título debe tener al menos 3 caracteres');
        }
        
        // Validación de fecha: solo permitir fechas desde hoy en adelante
        const fechaSeleccionada = new Date(fecha);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0); // Resetear la hora a medianoche
        
        if(fechaSeleccionada < hoy) {
            throw new Error('Solo puedes seleccionar fechas desde hoy en adelante');
        }
        
        if(imagen.size > 5000000) {
            throw new Error('La imagen no debe superar los 5MB');
        }

        // Enviar datos
        const response = await fetch('/module/php/eventos.php', {
            method: 'POST',
            body: formData
        });

        // Primero obtener el texto de la respuesta
        const responseText = await response.text();
        
        // Extraer solo la parte JSON de la respuesta
        const jsonMatch = responseText.match(/\{.*\}/s);
        if (!jsonMatch) {
            throw new Error('No se encontró JSON válido en la respuesta');
        }
        
        // Intentar parsear el JSON extraído
        let jsonData;
        try {
            jsonData = JSON.parse(jsonMatch[0]);
        } catch (e) {
            console.error('Respuesta del servidor:', responseText);
            throw new Error('Error al procesar la respuesta del servidor');
        }

        if (!response.ok) {
            throw new Error(`Error en el servidor: ${jsonData.error || responseText}`);
        }

        if (jsonData.error) {
            throw new Error(jsonData.error);
        }

        // Limpiar el contenedor antes de mostrar el nuevo evento
        document.getElementById('eventos-container').innerHTML = '';
        // Recargar todos los eventos
        await cargarEventos();
        
        this.reset();
        mostrarNotificacion('¡Evento agregado con éxito!', 'success');
        
    } catch(error) {
        console.error('Error completo:', error);
        mostrarNotificacion(error.message, 'error');
    } finally {
        // Restaurar el botón
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Función para mostrar eventos
function mostrarEventos(eventos) {
    const container = document.getElementById('eventos-container');
    
    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.aos = 'fade-up';
        
        const fecha = new Date(evento.fecha).toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Construir la ruta completa de la imagen
        const imagenUrl = evento.imagen ? `/${evento.imagen}` : '/assets/img/default-event.jpg';
        
        card.innerHTML = `
            <h3>${evento.titulo}</h3>
            <p class="descripcion">${evento.descripcion || 'Sin descripción'}</p>
            <p class="fecha">${fecha}</p>
            <img src="${imagenUrl}" alt="${evento.titulo}" 
                 onerror="this.src='/assets/img/default-event.jpg'"
                 style="max-width: 100%; height: auto;">
        `;
        container.appendChild(card);
    });
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    // Añadir clase para posición fija
    notificacion.style.position = 'fixed';
    notificacion.style.top = '20px';
    notificacion.style.right = '20px';
    notificacion.style.zIndex = '1000';
    
    setTimeout(() => {
        notificacion.classList.add('fadeOut');
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}