console.log("DEBUG: app.js loaded!");
// Data Models
// Data is loaded from products_data.js

// Router & State Management
const router = {
    currentPage: 'home',
    params: {},

    navigate(page, params = {}) {
        this.currentPage = page;
        this.params = params;

        // Persist state
        localStorage.setItem('christmas_app_page', page);
        localStorage.setItem('christmas_app_params', JSON.stringify(params));

        this.render();
        window.scrollTo(0, 0);
    },

    render() {
        const main = document.getElementById('main-content');
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = ''; // Clear content

        switch (this.currentPage) {
            case 'home':
                this.renderHome(mainContent);
                break;
            case 'christmas-home':
                this.renderChristmasHome(mainContent);
                break;
            case 'postcards':
                this.renderCatalog(mainContent, 'postcard');
                break;
            case 'videos':
                this.renderCatalog(mainContent, 'video');
                break;
            case 'sectors':
                this.renderSectorsList(main);
                break;
            case 'sector-detail':
                this.renderSectorDetail(main);
                break;
            case 'product':
                this.renderProductDetail(main);
                break;
            case 'account-shop':
                this.renderAccountShop(main);
                break;
            case 'account-orders':
                this.renderAccountOrders(main);
                break;
            case 'other-events':
                this.renderOtherEvents(mainContent);
                break;
            case 'ai-creativity':
                this.renderAiCreativity(mainContent);
                break;
            case 'search':
                this.renderSearch(main);
                break;
            case 'cookies':
                this.renderCookies(mainContent);
                break;
            case 'legal-notice':
                this.renderLegalNotice(mainContent);
                break;
            case 'coming-soon':
                this.renderComingSoon(mainContent, this.params.title);
                break;
            case 'about':
                this.renderAbout(mainContent);
                break;
            case 'contact':
                this.renderContact(mainContent);
                break;
            case 'terms':
                this.renderTerms(mainContent);
                break;
            case 'privacy':
                this.renderPrivacy(mainContent);
                break;
            default:
                this.renderHome(mainContent);
        }
    },

    renderOtherEvents(container) {
        container.innerHTML = `
            <div class="section-container fade-in" style="text-align: center; padding: 4rem 2rem;">
                <h1 class="section-title">Otros Eventos</h1>
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 3rem;">
                    Celebra cada momento especial con nuestras felicitaciones personalizadas.
                </p>
                
                <div class="grid-3">
                    <div class="card">
                        <div class="card-image-container">
                            <img src="sectores/estetica imagenes/chicamaquillajenav.jpg" class="card-image" style="filter: grayscale(100%);">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">Cumpleaños</h3>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Próximamente</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image-container">
                            <img src="sectores/moda imagenes/moda.png" class="card-image" style="filter: grayscale(100%);">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">Bodas</h3>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Próximamente</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image-container">
                            <img src="sectores/restauracionimagenes/restaurantenavidad4.png" class="card-image" style="filter: grayscale(100%);">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">Aniversarios</h3>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Próximamente</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderAiCreativity(container) {
        container.innerHTML = `
            <div class="section-container fade-in">
                <div style="text-align: center; max-width: 800px; margin: 0 auto 4rem;">
                    <h1 class="section-title">Potencia tu Creatividad con IA</h1>
                    <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-color);">
                        Descubre cómo nuestra tecnología de Inteligencia Artificial puede transformar tus ideas en realidad. 
                        Sin complicaciones, sin software caro, directo desde tu navegador.
                    </p>
                </div>

                <div class="grid-3" style="gap: 2rem;">
                    <!-- Feature 1 -->
                    <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1.5rem; color: #FF4081;">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <h3 style="margin-bottom: 1rem;">Eliminación de Fondo</h3>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                            Sube cualquier foto y extrae el sujeto principal automáticamente. Perfecto para integrar productos o personas en nuevos escenarios.
                        </p>
                        <button class="btn-outline" onclick="router.navigate('postcards')">Probar ahora</button>
                    </div>

                    <!-- Feature 2 -->
                    <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1.5rem; color: var(--primary-color);">
                            <i class="fa-regular fa-face-smile"></i>
                        </div>
                        <h3 style="margin-bottom: 1rem;">Face Swap (Cambio de Cara)</h3>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                            ¿Quieres ser Santa Claus o un Elfo? Nuestra IA intercambia las caras manteniendo la iluminación y expresión original.
                        </p>
                        <button class="btn-outline" onclick="router.navigate('sector-detail', {sectorId: 'faceswap_special'})">Ver ejemplos</button>
                    </div>

                    <!-- Feature 3 -->
                    <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1.5rem; color: #9C27B0;">
                            <i class="fa-solid fa-film"></i>
                        </div>
                        <h3 style="margin-bottom: 1rem;">Imagen a Vídeo</h3>
                        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
                            Haz que la nieve caiga, que las luces parpadeen o que los personajes cobren vida. Convierte lo estático en dinámico.
                        </p>
                        <button class="btn-outline" onclick="router.navigate('videos')">Crear vídeo</button>
                    </div>
                </div>

                <div style="margin-top: 4rem; background: #f8fafc; padding: 3rem; border-radius: 1rem; text-align: center;">
                    <h2 style="margin-bottom: 1.5rem;">¿Eres una empresa?</h2>
                    <p style="max-width: 600px; margin: 0 auto 2rem; color: var(--text-muted);">
                        Podemos integrar estas herramientas en tu flujo de trabajo o crear campañas masivas personalizadas para tus clientes.
                    </p>
                    <button class="cta-button" onclick="router.navigate('contact')">Contactar para Business</button>
                </div>
            </div>
        `;
    },

    renderSearch(container) {
        container.innerHTML = `
            <div class="fade-in section-container">
                <h2 class="section-title">Búsqueda</h2>
                <div style="margin-bottom: 2rem; display: flex; gap: 1rem;">
                    <input type="text" id="search-input" class="form-control" placeholder="Buscar productos..." style="flex: 1;">
                    <button class="cta-button" onclick="router.performSearch()">Buscar</button>
                </div>
                <div id="search-results" class="grid-4">
                    <!-- Results will appear here -->
                </div>
            </div>
        `;
    },

    renderComingSoon(container) {
        const title = this.params.title || 'Próximamente';
        container.innerHTML = `
            <div class="fade-in section-container" style="text-align: center; padding: 4rem 2rem;">
                <h1 class="section-title" style="margin-bottom: 1rem;">${title}</h1>
                <div style="font-size: 4rem; margin: 2rem 0;">🚀</div>
                <p style="font-size: 1.5rem; color: var(--text-muted); margin-bottom: 2rem;">
                    Estamos trabajando en esta sección. <br>
                    ¡Estará disponible muy pronto!
                </p>
                <button class="cta-button" onclick="router.navigate('home')">Volver al Inicio</button>
            </div>
        `;
    },

    renderAbout(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 800px; margin: 0 auto; padding: 4rem 2rem;">
                <h1 class="section-title centered" style="margin-bottom: 3rem;">Sobre Nosotros</h1>
                
                <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 3rem;">
                    <h3 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 1.5rem;">Innovación y Diseño</h3>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-color); margin-bottom: 1.5rem;">
                        Somos un <strong>estudio de diseño gráfico especializado en Inteligencia Artificial</strong>. 
                        Nuestra misión es fusionar la creatividad artística tradicional con las herramientas tecnológicas más avanzadas para crear experiencias visuales únicas.
                    </p>
                    <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-color);">
                        No solo creamos imágenes; diseñamos soluciones personalizadas que permiten a empresas y particulares comunicar sus mensajes de una forma impactante, moderna y eficiente. 
                        Creemos que la IA es el pincel del futuro, y nosotros somos los artistas que saben cómo usarlo.
                    </p>
                </div>

                <div class="grid-3" style="gap: 2rem;">
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"><i class="fa-solid fa-palette"></i></div>
                        <h4 style="font-weight: 600;">Diseño Creativo</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Arte visual cuidado al detalle.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"><i class="fa-solid fa-brain"></i></div>
                        <h4 style="font-weight: 600;">Tecnología IA</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Generación y edición avanzada.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--primary-color); margin-bottom: 1rem;"><i class="fa-solid fa-rocket"></i></div>
                        <h4 style="font-weight: 600;">Innovación</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">Siempre a la vanguardia.</p>
                    </div>
                </div>
            </div>
        `;
    },

    renderContact(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 600px; margin: 0 auto; padding: 4rem 2rem; text-align: center;">
                <h1 class="section-title centered" style="margin-bottom: 2rem;">Hablemos</h1>
                
                <p style="font-size: 1.2rem; color: var(--text-color); margin-bottom: 3rem;">
                    ¿Tienes una idea o necesitas ayuda con tu pedido? <br>
                    Contáctanos directamente por WhatsApp Business.
                </p>

                <div style="background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 4rem; color: #25D366; margin-bottom: 1.5rem;">
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>
                    <h3 style="margin-bottom: 1rem;">WhatsApp Business</h3>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">+34 639 087 024</p>
                    
                    <a href="https://wa.me/34639087024" target="_blank" class="cta-button" style="background-color: #25D366; border-color: #25D366; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; padding: 1rem 2rem;">
                        <i class="fa-brands fa-whatsapp"></i> Iniciar Chat
                    </a>
                </div>
            </div>
        `;
    },

    renderTerms(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 800px; margin: 0 auto; padding: 4rem 2rem;">
                <h1 class="section-title centered" style="margin-bottom: 3rem;">Términos y Condiciones</h1>
                
                <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <h3>1. Introducción</h3>
                    <p>Bienvenido a <strong>Tu Felicitación</strong>. Al acceder y utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte, no debes usar nuestros servicios.</p>
                    <br>
                    <h3>2. Servicios</h3>
                    <p>Ofrecemos un servicio de generación de imágenes y vídeos personalizados mediante Inteligencia Artificial (IA) para felicitaciones navideñas y otros eventos.</p>
                    <br>
                    <h3>3. Pagos y Precios</h3>
                    <p>Los precios de nuestros productos se indican claramente en la web (normalmente 2.00€ por descarga de alta calidad). Los pagos se procesan de forma segura a través de <strong>Stripe</strong>. Nos reservamos el derecho de modificar los precios en cualquier momento.</p>
                    <br>
                    <h3>4. Política de Reembolso</h3>
                    <p>Dado que vendemos productos digitales personalizados que se entregan de forma inmediata (descarga o visualización), <strong>no ofrecemos reembolsos</strong> una vez que el servicio de IA ha sido ejecutado y el resultado entregado, salvo en casos de fallo técnico demostrable.</p>
                    <br>
                    <h3>5. Propiedad Intelectual</h3>
                    <p>Al subir tus fotos, declaras que tienes los derechos necesarios sobre ellas. Las imágenes generadas por nuestra IA son para tu uso personal y no comercial, a menos que se acuerde lo contrario.</p>
                    <br>
                    <h3>6. Limitación de Responsabilidad</h3>
                    <p>No nos hacemos responsables del mal uso de las imágenes generadas ni de la calidad de la imagen si la foto original proporcionada por el usuario es de baja calidad.</p>
                    <br>
                    <h3>7. Contacto</h3>
                    <p>Para cualquier duda legal, puedes contactarnos en: info@tufelicitacion.com</p>
                </div>
            </div>
        `;
    },

    renderPrivacy(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 800px; margin: 0 auto; padding: 4rem 2rem;">
                <h1 class="section-title centered" style="margin-bottom: 3rem;">Política de Privacidad</h1>
                
                <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <h3>1. Responsable del Tratamiento</h3>
                    <p>El responsable de los datos es Montse Torrelles (Tu Felicitación).<br>Correo de contacto: info@tufelicitacion.com</p>
                    <br>
                    <h3>2. Datos que Recopilamos</h3>
                    <p>Recopilamos la siguiente información:</p>
                    <ul>
                        <li>Imágenes que subes para la personalización (se eliminan periódicamente).</li>
                        <li>Datos de pago (gestionados íntegramente por Stripe, nosotros no guardamos tu tarjeta).</li>
                        <li>Datos de navegación (cookies de Google Analytics) para mejorar el servicio.</li>
                    </ul>
                    <br>
                    <h3>3. Uso de las Imágenes</h3>
                    <p>Las fotos que subes se utilizan <strong>exclusivamente</strong> para generar tu felicitación mediante IA. No las usamos para entrenar modelos públicos ni las compartimos con terceros excepto con nuestro proveedor de IA (Replicate) estrictamente para la generación.</p>
                    <br>
                    <h3>4. Cookies</h3>
                    <p>Utilizamos cookies de Google Analytics para analizar el tráfico. Puedes desactivarlas en la configuración de tu navegador.</p>
                    <br>
                    <h3>5. Tus Derechos</h3>
                    <p>Tienes derecho a acceder, rectificar y suprimir tus datos. Para ejercer estos derechos, envíanos un email a info@tufelicitacion.com.</p>
                </div>
            </div>
        `;
    },

    renderCookies(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 800px; margin: 0 auto; padding: 4rem 2rem;">
                <h1 class="section-title centered">Política de Cookies</h1>
                <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                    <p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios y analizar sus hábitos de navegación.</p>
                    <h3>¿Qué son las cookies?</h3>
                    <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web.</p>
                    <h3>Tipos de cookies utilizadas</h3>
                    <ul>
                        <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico. (Google Analytics).</li>
                        <li><strong>Cookies técnicas:</strong> Permiten la navegación a través de la web y la utilización de las diferentes opciones o servicios.</li>
                    </ul>
                </div>
            </div>
        `;
    },

    renderLegalNotice(container) {
        container.innerHTML = `
            <div class="fade-in section-container" style="max-width: 800px; margin: 0 auto; padding: 4rem 2rem;">
                <h1 class="section-title centered">Aviso Legal</h1>
                <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                    <h3>Datos Identificativos</h3>
                    <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, se reflejan los siguientes datos:</p>
                    <p><strong>Titular:</strong> Montse Torrelles (Tu Felicitación)</p>
                    <p><strong>Correo electrónico:</strong> info@tufelicitacion.com</p>
                    <p><strong>Actividad:</strong> Diseño gráfico y servicios digitales.</p>
                </div>
            </div>
        `;
    },

    performSearch() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const results = PRODUCTS.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );

        const resultsContainer = document.getElementById('search-results');
        if (results.length > 0) {
            resultsContainer.innerHTML = results.map(p => this.createProductCard(p)).join('');
        } else {
            resultsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No se encontraron productos.</p>';
        }
    },

    renderHome(container) {
        console.log('Rendering Home...');
        try {
            // 1. Hero Section
            const hero = document.createElement('section');
            hero.className = 'hero fade-in';
            hero.style.backgroundImage = "url('moda-navidad-home.jpg')";
            hero.style.height = "60vh"; // Reduced height
            hero.style.backgroundPosition = "center"; // Show middle of image (mouth)
            hero.innerHTML = `
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Felicitaciones personalizadas GRATIS<br><span style="font-size: 1.5rem; font-weight: normal;">Paga solo por la IA (2€)</span></h1>
            <button class="cta-button app-btn-success" onclick="router.navigate('christmas-home')">Empieza a personalizar</button>
        </div>
    `;
            container.appendChild(hero);
            console.log('Hero section appended');

            // 1.5 Intro Text Block
            const introBlock = document.createElement('section');
            introBlock.className = 'fade-in';
            // Styling to make it full width and beautiful
            introBlock.style.background = 'linear-gradient(to right, #fdfbfb, #ebedee)'; // Subtle gradient
            introBlock.style.width = '100%';
            introBlock.style.padding = '3rem 1rem';
            introBlock.style.textAlign = 'center';
            introBlock.style.borderBottom = '1px solid #e1e4e8';
            introBlock.style.marginBottom = '3rem';
            introBlock.innerHTML = `
                <div style="max-width: 1200px; margin: 0 auto;">
                    <h2 style="font-family: var(--font-heading); color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;">
                        ¡Diseña tu Felicitación Única!
                    </h2>
                    <p style="font-size: 1.25rem; line-height: 1.8; color: var(--text-color); margin-bottom: 0;">
                        Escoge si prefieres <strong>FOTOGRAFÍA</strong>, <strong>VÍDEO</strong> o usar nuestra <strong>IA Mágica</strong>.
                        <br>
                        Selecciona tu sector y obtén una postal profesional <span style="background: #25D366; color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.9em;">GRATIS</span> para sorprender a quien tú quieras.
                    </p>
                </div>
            `;
            container.appendChild(introBlock);

            // 2. Main Categories (Events)
            const eventsSection = document.createElement('section');
            eventsSection.className = 'section-container fade-in';
            eventsSection.innerHTML = `
            <div class="grid-3" style="gap: 2rem;">
                <!-- Navidad (Active) -->
                <div class="card" onclick="router.navigate('christmas-home')" style="background: #fff; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; cursor: pointer; transition: transform 0.2s; height: 100%; display: flex; flex-direction: column;">
                    <div class="card-image-container" style="height: 250px; width: 100%; padding: 0;">
                        <img src="sectores/particular imagenes/pastanavidad.png" alt="Navidad" class="card-image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-content" style="padding: 1.5rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--primary-color);">Navidad</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Personaliza tus postales y vídeos navideños.</p>
                    </div>
                </div>

                <!-- Año Nuevo (Inactive) -->
                <div class="card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; opacity: 0.9; cursor: not-allowed; height: 100%; display: flex; flex-direction: column;">
                    <div class="card-image-container" style="height: 250px; width: 100%; padding: 0;">
                        <img src="2026 home.jpg" alt="Año Nuevo" class="card-image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-content" style="padding: 1.5rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-color);">Año Nuevo</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Próximamente disponible</p>
                    </div>
                </div>

                <!-- Reyes Magos (Inactive) -->
                <div class="card" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; opacity: 0.9; cursor: not-allowed; height: 100%; display: flex; flex-direction: column;">
                    <div class="card-image-container" style="height: 250px; width: 100%; padding: 0;">
                        <img src="reyesmagos.jpg" alt="Reyes Magos" class="card-image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-content" style="padding: 1.5rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-color);">Reyes Magos</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Próximamente disponible</p>
                    </div>
                </div>
            </div>
            `;
            container.appendChild(eventsSection);

            // 3. Sector Selector
            const sectorsSection = document.createElement('section');
            sectorsSection.className = 'section-container fade-in';
            sectorsSection.innerHTML = `
                <h2 class="section-title centered">Elige tu sector</h2>
                <div class="grid-6" style="text-align: center;">
                    ${SECTORS.map(s => `
                            <div class="sector-card" onclick="router.navigate('sector-detail', {sectorId: '${s.id}'})" style="cursor: pointer;">
                                <div class="card-image-container">
                                    <img src="${s.image}" class="card-image" style="object-fit:cover;">
                                </div>
                                <h3 class="card-title">${s.name}</h3>
                            </div>
                    `).join('')}
                </div>
            `;
            container.appendChild(sectorsSection);

            // 3.5 Face Swap Special Section (Cambia tu cara)
            const faceSwapProducts = PRODUCTS.filter(p => (p.sector === 'faceswap_special' || p.sector === 'moda') && p.type !== 'video').slice(0, 4);
            if (faceSwapProducts.length > 0) {
                const faceSwapSection = document.createElement('section');
                faceSwapSection.className = 'section-container fade-in';
                faceSwapSection.innerHTML = `
                    <h2 class="section-title centered" style="margin-top: 4rem;">Cambia tu cara</h2>
                    <p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;">
                        Sube tu foto y conviértete en el protagonista de la navidad.
                    </p>
                    <div class="grid-4">
                        ${faceSwapProducts.map(p => this.createProductCard(p)).join('')}
                    </div>
                `;
                container.appendChild(faceSwapSection);
            }

            // 4. AI Demo Section
            const aiSection = document.createElement('section');
            aiSection.className = 'section-container fade-in';
            aiSection.style.background = '#f8fafc';
            aiSection.style.padding = '4rem 2rem';
            aiSection.style.borderRadius = '1rem';
            aiSection.style.marginTop = '4rem';
            aiSection.innerHTML = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
            <div>
                <h2 class="section-title" style="margin-bottom: 1.5rem;">Potencia tu creatividad con IA</h2>
                <ul style="list-style: none;">
                    <li style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                        <div style="background: var(--primary-color); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Eliminar fondo automáticamente</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Integra tu logo perfectamente en cualquier postal.</p>
                        </div>
                    </li>
                    <li style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                        <div style="background: var(--primary-color); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fa-regular fa-face-smile"></i>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Cambiar caras en fotos</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Sube tu foto y conviértete en el protagonista de la felicitación.</p>
                        </div>
                    </li>
                    <li style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
                        <div style="background: var(--primary-color); color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="fa-solid fa-video"></i>
                        </div>
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Generar vídeos animados</h4>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">Da vida a tus imágenes estáticas con un solo clic.</p>
                        </div>
                    </li>
                </ul>
                <button class="cta-button" onclick="router.navigate('postcards')" style="margin-top: 1rem;">Probar ahora</button>
            </div>
            <div style="position: relative;">
                <img src="sectores/particular imagenes/pastanavidad.png" style="width: 100%; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);" alt="Demo IA">
                <div style="position: absolute; bottom: -20px; right: -20px; background: white; padding: 1rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); display: flex; align-items: center; gap: 0.5rem;">
                    <div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%;"></div>
                    <span style="font-weight: 600; font-size: 0.8rem;">IA Activa</span>
                </div>
            </div>
        </div >
    `;
            container.appendChild(aiSection);

            // 5. Testimonials
            const testimonialsSection = document.createElement('section');
            testimonialsSection.className = 'section-container fade-in';
            testimonialsSection.style.textAlign = 'center';
            testimonialsSection.innerHTML = `
    <h2 class="section-title centered">Lo que dicen nuestros clientes</h2>
        <div class="grid-3">
            <div style="padding: 2rem; background: #fff; border: 1px solid var(--border-color); border-radius: 1rem;">
                <div style="color: #FFD700; margin-bottom: 1rem;">★★★★★</div>
                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1rem;">"Increíble lo fácil que fue crear el vídeo para mi peluquería. A mis clientes les encantó."</p>
                <p style="font-weight: 600;">- María, Estética Glamour</p>
            </div>
            <div style="padding: 2rem; background: #fff; border: 1px solid var(--border-color); border-radius: 1rem;">
                <div style="color: #FFD700; margin-bottom: 1rem;">★★★★★</div>
                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1rem;">"La herramienta de cambio de cara es muy divertida y profesional. 100% recomendado."</p>
                <p style="font-weight: 600;">- Carlos, Inmobiliaria Norte</p>
            </div>
            <div style="padding: 2rem; background: #fff; border: 1px solid var(--border-color); border-radius: 1rem;">
                <div style="color: #FFD700; margin-bottom: 1rem;">★★★★★</div>
                <p style="font-style: italic; color: var(--text-muted); margin-bottom: 1rem;">"Pude poner mi logo en segundos y descargar la postal lista para enviar."</p>
                <p style="font-weight: 600;">- Laura, Restaurante El Puerto</p>
            </div>
        </div>
`;
            container.appendChild(testimonialsSection);
        } catch (e) {
            console.error('Error in renderHome:', e);
        }
    },

    renderChristmasHome(container) {
        // Hero Section
        const hero = document.createElement('section');
        hero.className = 'hero fade-in';
        hero.style.backgroundImage = "url('sectores/hero_slider.jpg')";
        hero.style.height = "85vh"; // Restore full height for this section
        hero.style.backgroundPosition = "center";
        hero.innerHTML = `
    <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Felicitaciones de Navidad personalizadas GRATIS<br><span style="font-size: 1.5rem; font-weight: normal;">Paga solo por la IA (2€)</span></h1>
            <button class="cta-button app-btn-success" onclick="document.getElementById('postcards-sectors-menu').scrollIntoView({behavior: 'smooth'})">Empieza a personalizar</button>
        </div>
`;
        container.appendChild(hero);

        // Intro Text Section (Styled Full Width)
        const introSection = document.createElement('section');
        introSection.className = 'fade-in';
        introSection.style.background = 'linear-gradient(to right, #fdfbfb, #ebedee)';
        introSection.style.width = '100%';
        introSection.style.padding = '3rem 1rem';
        introSection.style.textAlign = 'center';
        introSection.style.borderBottom = '1px solid #e1e4e8';
        introSection.style.marginBottom = '3rem';
        introSection.innerHTML = `
            <div style="max-width: 1200px; margin: 0 auto;">
                <h2 style="font-family: var(--font-heading); color: var(--primary-color); font-size: 1.8rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px;">
                    Personalización sin Límites
                </h2>
                <p style="font-size: 1.25rem; line-height: 1.8; color: var(--text-color); margin-bottom: 1.5rem;">
                     Escoge si prefieres <strong>FOTOGRAFÍA</strong>, <strong>VÍDEO</strong> o usar nuestra <strong>IA</strong>.
                    <br>
                    Selecciona tu sector y obtén una postal profesional <span style="background: #25D366; color: white; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: bold; font-size: 0.9em;">GRATIS</span> para enviar a tus clientes, amigos o equipo.
                </p>
                <p style="font-size: 1rem; line-height: 1.8; color: var(--text-muted); max-width: 900px; margin: 0 auto;">
                    Nuestra plataforma permite a cualquier empresa crear contenidos totalmente personalizados de forma rápida, intuitiva y profesional.
                    Transforma tus ideas en piezas visuales únicas y adapta cada imagen a tu identidad corporativa.
                </p>
            </div>
        `;
        container.appendChild(introSection);

        // Main Categories Section (Top)
        const categoriesSection = document.createElement('section');
        categoriesSection.className = 'section-container fade-in';
        categoriesSection.innerHTML = `
    <h2 class="section-title">Selecciona el formato y sector</h2>
        <div class="grid-3">
            <div class="card" onclick="router.navigate('postcards')">
                <div class="card-image-container">
                    <img src="sectores/particular imagenes/pastanavidad.png" alt="Postales Navideñas" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">Postales Navideñas</h3>
                </div>
            </div>
            <div class="card" onclick="router.navigate('videos')">
                <div class="card-image-container">
                    <img src="sectores/deporte imagenes/gimansio Santa Claus .jpg" alt="Vídeos Navideños" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">Vídeos Navideños</h3>
                </div>
            </div>
            <div class="card" onclick="router.navigate('sectors')">
                <div class="card-image-container">
                    <img src="sectores/industriales/bombillanavidad.jpg" alt="Sectores" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">Sectores</h3>
                </div>
            </div>
        </div>
`;
        container.appendChild(categoriesSection);

        // Features Section (MOVED UP)
        const featuresSection = document.createElement('section');
        featuresSection.className = 'section-container fade-in';
        featuresSection.innerHTML = `
    <h2 class="section-title centered">✨ Herramientas de Personalización</h2>
        <div class="grid-3" style="gap: 2rem;">
            <!-- Feature 1: Design -->
            <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-color);">🎨</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">DISEÑO A TU MEDIDA</h3>
                <ul style="text-align: left; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> Edita Títulos y Subtítulos</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> Elige entre +10 tipografías</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> Sube tu <strong>Logo o Imagen</strong></li>
                    <li><i class="fa-solid fa-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i> Elige formato Reel (9:16) o Post (1:1)</li>
                </ul>
            </div>

            <!-- Feature 2: AI Magic -->
            <div style="background: linear-gradient(135deg, #fff5f5 0%, #fff 100%); padding: 2rem; border-radius: 1rem; border: 1px solid #ffd7d7; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; margin-bottom: 1rem; color: #ff4081;">🪄</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">Estudio Magic AI (Compra créditos)</h3>
                <ul style="text-align: left; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Cambio de Cara</strong>: ¡Sé el protagonista!</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-image" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Cambio de Fondo</strong>: Elige escenario o sube el tuyo.</li>
                    <li><i class="fa-solid fa-film" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Animación</strong>: Da vida y movimiento a la foto.</li>
                </ul>
            </div>

            <!-- Feature 3: Business -->
            <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--secondary-color);">💼</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">Ideal para empresas GRATIS</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">
                    ¿Necesitas felicitar a clientes o empleados?<br><br>
                        Crea postales profesionales con tu identidad corporativa en segundos. Descarga el resultado en alta calidad lista para compartir por WhatsApp o Redes.
                    </p>
                    </div>
            </div>
            `;
        container.appendChild(featuresSection);

        // All Sectors Section (Moved Up + Grid-6 Layout)
        const allSectorsSection = document.createElement('section');
        allSectorsSection.className = 'section-container fade-in';
        allSectorsSection.innerHTML = `
            <h2 class="section-title centered">Todos los Sectores</h2>
            <div class="grid-6" style="text-align: center;">
                ${SECTORS.map(s => `
                        <div class="sector-card" onclick="router.navigate('sector-detail', {sectorId: '${s.id}'})" style="cursor: pointer;">
                            <div class="card-image-container">
                                <img src="${s.image}" class="card-image" style="object-fit:cover;">
                            </div>
                            <h3 class="card-title">${s.name}</h3>
                        </div>
                `).join('')}
            </div>
            `;
        container.appendChild(allSectorsSection);

        // Featured Postcards Section (Cambia tu cara - Limited to 4)
        const faceSwapProducts = PRODUCTS.filter(p => p.sector === 'faceswap_special' || p.sector === 'moda').slice(0, 4);
        if (faceSwapProducts.length > 0) {
            const faceSwapSection = document.createElement('section');
            faceSwapSection.className = 'section-container fade-in';
            faceSwapSection.innerHTML = `
                <h2 class="section-title centered">Cambia tu cara</h2>
                <div class="grid-4">
                    ${faceSwapProducts.map(p => this.createProductCard(p, false)).join('')} 
                </div> 
                <!-- Passed false to hide price -->
            `;
            container.appendChild(faceSwapSection);
        }

        // Banner Section
        const banner = document.createElement('section');
        banner.className = 'banner-section fade-in';
        banner.style.backgroundImage = "url('sectores/inmobiliaria imagenes/ciudadestrella.png')";
        banner.innerHTML = `
            <div class="hero-overlay"></div>
            <h2 class="banner-text">Personaliza tu postal de navidad con fotografia o video</h2>
            `;
        container.appendChild(banner);

        // Featured Videos Section
        const videosSection = document.createElement('section');
        videosSection.className = 'section-container fade-in';
        videosSection.innerHTML = `
            <h2 class="section-title">Vídeos Navideños</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => p.type === 'video').slice(0, 4).map(p => this.createProductCard(p, false)).join('')}
            </div>
        `;
        container.appendChild(videosSection);

        // More Products Section
        const moreProductsSection = document.createElement('section');
        moreProductsSection.className = 'section-container fade-in';
        moreProductsSection.innerHTML = `
            <h2 class="section-title centered">Coleccion 2025</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => p.type === 'postcard' && p.sector !== 'faceswap_special').slice(0, 8).map(p => this.createProductCard(p, false)).join('')}
            </div>
        `;
        container.appendChild(moreProductsSection);
    },

    renderCatalog(container, type) {
        const title = type === 'postcard' ? 'Postales Navideñas' : 'Vídeos Navideños';
        const currentSector = this.params.sectorFilter || 'all';

        // Filter products by type AND sector (if selected)
        let filteredProducts = PRODUCTS.filter(p => p.type === type);
        if (currentSector !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.sector === currentSector);
        }

        // Generate Sector Filter HTML
        const sectorsHtml = SECTORS.map(s => `
            <button
                class="filter-btn ${currentSector === s.id ? 'active' : ''}"
                onclick="router.navigate('${type === 'postcard' ? 'postcards' : 'videos'}', { sectorFilter: '${s.id}' })"
            >
                <i class="fa-solid ${s.icon}"></i> ${s.name}
            </button>
            `).join('');

        container.innerHTML = `
            <div class="section-container fade-in">
                <h2 class="section-title">${title}</h2>

                <!--Sector Submenu-->
                <div class="filter-menu" style="margin-bottom: 2rem; display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                    <button
                        class="filter-btn ${currentSector === 'all' ? 'active' : ''}"
                        onclick="router.navigate('${type === 'postcard' ? 'postcards' : 'videos'}', { sectorFilter: 'all' })"
                    >
                        Todos
                    </button>
                    ${sectorsHtml}
                </div>

                ${filteredProducts.length > 0 ? `
                    <div class="grid-4">
                        ${filteredProducts.map(p => this.createProductCard(p)).join('')}
                    </div>
                ` : `
                    <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                        <i class="fa-regular fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>No hay ${title.toLowerCase()} disponibles para este sector.</p>
                        <button class="btn-outline" onclick="router.navigate('${type === 'postcard' ? 'postcards' : 'videos'}', { sectorFilter: 'all' })" style="margin-top: 1rem;">
                            Ver todos
                        </button>
                    </div>
                `}
            </div>
            `;
    },

    renderSectorsList(container) {
        container.innerHTML = `
    <div class="section-container fade-in">
                <h2 class="section-title">Nuestros Sectores</h2>
                <div class="grid-4" style="text-align: center;">
                    ${SECTORS.map(s => `
                        <div class="card" onclick="router.navigate('sector-detail', {sectorId: '${s.id}'})" style="padding: 2rem; border: 1px solid var(--border-color); border-radius: 1rem; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
                            <i class="fa-solid ${s.icon}" style="font-size: 3rem; color: var(--text-color);"></i>
                            <h3 class="card-title" style="margin: 0; font-family: var(--font-heading); font-size: 1.2rem;">${s.name}</h3>
                        </div>
                    `).join('')}
                </div>
            </div>
    `;
    },

    renderSectorDetail(container) {
        const sectorId = this.params.sectorId;
        const sector = SECTORS.find(s => s.id === sectorId);
        const sectorProducts = PRODUCTS.filter(p => p.sector === sectorId);

        container.innerHTML = `
            <div class="section-container fade-in">
                <h2 class="section-title">Colección: ${sector.name}</h2>
                ${sectorProducts.length > 0 ? `
                    <div class="grid-4">
                        ${sectorProducts.map(p => this.createProductCard(p)).join('')}
                    </div>
                ` : `
                    <p style="text-align: center; font-size: 1.2rem; color: var(--text-muted);">
                        Próximamente más productos para este sector.
                    </p>
                `}
            </div>
            `;
    },

    renderProductDetail(container) {
        // Use loose equality to handle both string and number inputs for ID
        const product = PRODUCTS.find(p => p.id == this.params.productId);
        const hasPaid = localStorage.getItem('hasPaid') === 'true';

        if (!product) {
            container.innerHTML = '<div class="fade-in"><p style="text-align:center; padding: 2rem;">Producto no encontrado</p></div>';
            return;
        }

        // Determine which AI tabs to show
        const faceCount = product.faceCount || 0;
        const showFaceTab = faceCount > 0;
        const defaultTab = showFaceTab ? 'face' : 'bg';
        const isMagic = showFaceTab || product.is_face_swap;

        // Generate Face Inputs HTML based on count
        let faceInputsHtml = '';
        if (showFaceTab) {
            for (let i = 1; i <= faceCount; i++) {
                const label = faceCount > 1 ? `Rostro ${i}` : 'Tu Foto';
                faceInputsHtml += `
                        <div style="margin-bottom: 1rem;">
                            <label style="font-size: 0.8rem; font-weight: 500; display: block; margin-bottom: 0.25rem;">${label}</label>
                            <input type="file" id="input-face-swap-${i}" class="face-input form-control" accept="image/*" data-index="${i}">
                        </div>
                    `;
            }
        }

        container.innerHTML = `
            <div class="section-container fade-in">
                <div class="customizer-container">
                    <div class="left-column">
                        <div class="preview-area" id="preview-area">
                            <!-- Custom Background Layer -->
                            <!-- Used for preset background or uploaded background -->
                            <div id="preview-bg-layer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; z-index: 0;"></div>

                            <!-- Main Product Image (Foreground/Subject) -->
                            ${product.type === 'video' ? `
                            <video 
                                src="${encodeURI(product.image)}" 
                                class="preview-image-bg" 
                                id="main-preview-image" 
                                loop 
                                playsinline 
                                muted 
                                autoplay 
                                oncontextmenu="return false;"
                                style="position: relative; z-index: 1; object-fit: cover; width: 100%; height: 100%; pointer-events: none; user-select: none; -webkit-user-select: none;"
                            ></video>
                        ` : `
                            <img src="${encodeURI(product.image)}" alt="${product.title}" class="preview-image-bg" id="main-preview-image" style="position: relative; z-index: 1; pointer-events: none; user-select: none; -webkit-user-select: none;" crossorigin="anonymous" oncontextmenu="return false;">
                        `}

                            <div id="video-container" style="display:none; width:100%; height:100%; position:absolute; top:0; left:0; z-index: 2;">
                                <video id="main-preview-video" loop playsinline muted autoplay style="width:100%; height:100%; object-fit:cover;"></video>
                            </div>
                            <div class="preview-overlay" id="preview-overlay" style="z-index: 3;">
                                <h2 id="preview-title" class="preview-text-title draggable" data-type="title"></h2>
                                <h3 id="preview-subtitle" class="preview-text-subtitle draggable" data-type="subtitle"></h3>
                                <div id="preview-logo-container" class="preview-logo-container draggable" data-type="logo" style="display: none;">
                                    <img id="preview-logo" class="preview-logo-img" src="" alt="Logo">
                                </div>
                            </div>
                            ${(isMagic && !hasPaid) ? `
                            <div class="watermark-overlay" id="watermark-layer">
                                <div class="watermark-pattern">
                                    ${Array(100).fill('<div class="watermark-text">Tu Felicitación</div>').join('')}
                                </div>
                            </div>
                            ` : ''}
                            
                            <!-- Protection Layer to prevent drag/drop/save -->
                            <div class="protection-layer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; opacity: 0;"></div>
                        </div>


                        <!-- AI Studio Section (Tabs: Face, BG, Motion) - Hidden for Videos -->
                        ${product.type !== 'video' ? `
                        <div class="form-group" style="background: #ffffff; padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border-color); margin-top: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                            <h3 style="font-family: var(--font-heading); color: var(--secondary-color); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fa-solid fa-wand-magic-sparkles"></i> Estudio Magic AI
                            </h3>

                            <div style="margin-bottom: 1rem; padding: 0.5rem; background: #e8f5e9; border-radius: 0.5rem; color: #2e7d32; font-size: 0.8rem; text-align: center;">
                                <i class="fa-solid fa-check-circle"></i> IA Activada y lista para usar.
                            </div>

                            <div class="ai-tabs" style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color);">
                                ${showFaceTab ? `
                                <button class="filter-btn ${defaultTab === 'face' ? 'active' : ''}" id="tab-btn-face" onclick="router.switchAITab('face')" style="flex: 1; font-size: 0.8rem; padding: 0.5rem;">👤 Rostro${faceCount > 1 ? 's' : ''}</button>
                                ` : ''}
                                <button class="filter-btn ${defaultTab === 'bg' ? 'active' : ''}" id="tab-btn-bg" onclick="router.switchAITab('bg')" style="flex: 1; font-size: 0.8rem; padding: 0.5rem;">🖼️ Fondo</button>
                                <button class="filter-btn ${defaultTab === 'motion' ? 'active' : ''}" id="tab-btn-motion" onclick="router.switchAITab('motion')" style="flex: 1; font-size: 0.8rem; padding: 0.5rem;">🎥 Animación</button>
                            </div>

                            <!-- Tab: Face Swap -->
                            <div id="ai-tab-face" class="ai-tab-content" style="display: ${defaultTab === 'face' ? 'block' : 'none'};">
                                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                                    ${faceCount > 1 ? `Sube las ${faceCount} fotos en orden para integrarlas.` : 'Sube una foto tuya y la IA la integrará en el personaje.'}
                                </p>
                                
                                ${faceInputsHtml}

                                <button type="button" class="btn-outline" onclick="router.handleAIAction('faceswap')" style="width: 100%; margin-top: 0.5rem; border-color: var(--secondary-color); color: var(--secondary-color);">
                                    ✨ Generar (Intercambiar Cara)
                                </button>
                                <p style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem;">Crea una vista previa. Podrás comprar el resultado final por 2.00€.</p>
                            </div>

                            <!-- Tab 2: Fondo (Background Swap) -->
                            <div id="ai-tab-bg" class="ai-tab-content" style="display: ${defaultTab === 'bg' ? 'block' : 'none'};">
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                                    Sube tu foto, quítale el fondo y elige un escenario mágico.
                                </p>

                                <!-- 1. Upload Subject -->
                                <div class="form-group">
                                    <label style="font-size: 0.8rem;">1. Foto Principal (Sujeto)</label>
                                    <input type="file" class="form-control" accept="image/*" onchange="router.handleMainImageUpload(this)">
                                </div>

                                <!-- 2. Remove BG Action -->
                                <button type="button" class="btn-outline" onclick="router.handleAIAction('removebg')" style="width: 100%; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <i class="fa-solid fa-wand-magic-sparkles"></i> 2. Quitar Fondo (IA)
                                </button>
                                <p style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: -1rem; margin-bottom: 1.5rem;">Crea una vista previa. Podrás comprar el resultado final por 2.00€.</p>

                                <!-- 3. Preset Gallery -->
                                <label style="font-size: 0.8rem; font-weight: 600; margin-bottom: 0.5rem; display: block;">3. Elige Escenario</label>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; max-height: 200px; overflow-y: auto; padding-right: 0.25rem;">
                                    <!-- Dynamic Presets -->
                                    ${typeof PRESETS !== 'undefined' ? PRESETS.map(p => `
                                <div onclick="router.applyPresetBackground('${p.url}')" style="aspect-ratio: 1/1; background: url('${p.url}') center/cover; border-radius: 0.5rem; cursor: pointer; border: 2px solid transparent; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='transparent'"></div>
                             `).join('') : '<p>Cargando fondos...</p>'}
                                </div>

                                <!-- Custom BG Upload (Legacy/Advanced) -->
                                <div style="margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 1rem;">
                                    <label style="font-size: 0.8rem;">O sube tu propio fondo:</label>
                                    <input type="file" class="form-control" accept="image/*" onchange="router.handleBackgroundUpload(this)">
                                </div>

                                <!-- 4. Download Result -->
                                <button id="btn-download-composite" type="button" class="btn-outline" onclick="router.downloadComposite()" style="width: 100%; margin-top: 1.5rem; border-color: #2e7d32; color: #2e7d32; font-weight: bold;">
                                    <i class="fa-solid fa-download"></i> Descargar Postal
                                </button>
                            </div>

                            <!-- Tab: Motion -->
                            <div id="ai-tab-motion" class="ai-tab-content" style="display: ${defaultTab === 'motion' ? 'block' : 'none'};">
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
                                Convierte esta imagen estática en un vídeo corto y dinámico.
                            </p>
                            <textarea id="input-animate-prompt" class="form-control" rows="2" placeholder="Describe el movimiento (ej: nieve cayendo, luces parpadeando...)" style="margin-bottom: 0.5rem;"></textarea>
                            <button type="button" class="btn-outline" onclick="router.handleAIAction('animate')" style="width: 100%; border-color: #9C27B0; color: #9C27B0;">
                                <i class="fa-solid fa-film"></i> Generar Animación
                            </button>
                            <p style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem;">Crea una vista previa. Podrás comprar el resultado final por 2.00€.</p>
                        </div>

                        <div id="ai-status-msg" style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted); display: none;"></div>
                    </div>

                    <!-- Independent Generate Section -->
                    <div class="form-group" style="background: linear-gradient(to right, #fdfbf7, #fff); padding: 1.5rem; border-radius: 1rem; border: 1px solid #e2e8f0; margin-top: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                        <h3 style="font-family: var(--font-heading); color: #B76E79; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-paintbrush"></i> Crea desde cero
                        </h3>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem; font-weight: 500;">
                            ¿Prefieres algo único? Describe tu idea y la IA generará una imagen nueva para ti.
                        </p>
                        <textarea id="input-generate-prompt" class="form-control" rows="3" placeholder="Ej: Un paisaje nevado con un árbol de navidad gigante..." style="margin-bottom: 0.5rem; border-color: #B76E79;"></textarea>
                        <button type="button" class="btn-outline" onclick="router.handleAIAction('generate')" style="width: 100%; border-color: #B76E79; color: #B76E79;">
                            🎨 Generar Nueva Imagen
                        </button>
                        <p style="font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem;">Crea una vista previa. Podrás comprar el resultado final por 2.00€.</p>
                    </div>
                    ` : ''}
                </div>

                <div class="controls-area">
                    <h2 class="card-title" style="font-size: 2rem;">${product.title}</h2>

                    <!-- Format Selector -->
                    <div style="margin-bottom: 1.5rem;">
                        <label style="font-size: 0.9rem; font-weight: 500; display: block; margin-bottom: 0.5rem;">Formato:</label>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="filter-btn active" id="btn-format-reel" onclick="router.updateFormat('reel')" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                                <i class="fa-brands fa-instagram"></i> Reel (9:16)
                            </button>
                            <button class="filter-btn" id="btn-format-post" onclick="router.updateFormat('post')" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                                <i class="fa-regular fa-square"></i> Post (1:1)
                            </button>
                        </div>
                    </div>

                    <p class="card-price">${product.price.toFixed(2)}€</p>

                    <p style="margin-top: 1rem; margin-bottom: 2rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; border-left: 3px solid var(--secondary-color); padding-left: 1rem;">
                        Personaliza tu postal con nuestras herramientas de diseño y el nuevo <strong>Estudio Magic AI</strong>.
                    </p>

                    <!-- Title Controls -->
                    <div class="form-group">
                        <label>Texto Principal</label>
                        <input type="text" id="input-title" class="form-control" value="Felices Fiestas" placeholder="Ej: Felices Fiestas" oninput="router.updatePreview()">

                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
                                <div>
                                    <label style="font-size: 0.8rem;">Posición Vertical %</label>
                                    <input type="number" id="input-title-top" class="form-control" value="20" min="0" max="100" oninput="router.updatePreview()">
                                </div>
                                <div>
                                    <label style="font-size: 0.8rem;">Tamaño (px)</label>
                                    <input type="range" id="input-title-size" class="form-control" value="32" min="16" max="80" oninput="router.updatePreview()">
                                </div>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr auto auto auto; gap: 0.5rem; margin-top: 0.5rem; align-items: center;">
                                <div>
                                    <label style="font-size: 0.8rem;">Tipografía</label>
                                    <select id="select-font" class="form-control" onchange="router.updatePreview()">
                                        <option value="'Playfair Display', serif">Playfair</option>
                                        <option value="'Inter', sans-serif">Inter</option>
                                        <option value="'Cinzel', serif">Cinzel</option>
                                        <option value="'Great Vibes', cursive">Great Vibes</option>
                                        <option value="'Montserrat', sans-serif">Montserrat</option>
                                        <option value="'Dancing Script', cursive">Dancing Script</option>
                                        <option value="'Lato', sans-serif">Lato</option>
                                        <option value="'Merriweather', serif">Merriweather</option>
                                        <option value="'Pacifico', cursive">Pacifico</option>
                                        <option value="'Satisfy', cursive">Satisfy</option>
                                        <option value="'Oswald', sans-serif">Oswald</option>
                                        <option value="'Lobster', cursive">Lobster</option>
                                        <option value="'Caveat', cursive">Caveat</option>
                                    </select>
                                </div>
                                <div style="text-align: center;">
                                    <label style="font-size: 0.8rem;">Color</label>
                                    <input type="color" id="input-title-color" value="#ffffff" oninput="router.updatePreview()" style="width: 40px; height: 38px; padding: 0; border: none; background: none;">
                                </div>
                                <div style="text-align: center;">
                                    <label style="font-size: 0.8rem;">B</label>
                                    <input type="checkbox" id="input-title-bold" onchange="router.updatePreview()">
                                </div>
                                <div style="text-align: center;">
                                    <label style="font-size: 0.8rem;">I</label>
                                    <input type="checkbox" id="input-title-italic" onchange="router.updatePreview()">
                                </div>
                            </div>
                    </div>

                    <!-- Subtitle Controls -->
                    <div class="form-group">
                        <label>Texto Secundario</label>
                        <textarea id="input-subtitle" class="form-control" rows="2" placeholder="Mensaje personalizado..." oninput="router.updatePreview()">Te deseamos lo mejor</textarea>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
                            <div>
                                <label style="font-size: 0.8rem;">Posición Vertical %</label>
                                <input type="number" id="input-subtitle-top" class="form-control" value="40" min="0" max="100" oninput="router.updatePreview()">
                            </div>
                            <div>
                                <label style="font-size: 0.8rem;">Tamaño (px)</label>
                                <input type="range" id="input-subtitle-size" class="form-control" value="19" min="12" max="60" oninput="router.updatePreview()">
                            </div>
                        </div>
                        <div style="display: flex; gap: 1rem; margin-top: 0.5rem; justify-content: flex-end; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <label style="font-size: 0.8rem; margin: 0;">Color:</label>
                                <input type="color" id="input-subtitle-color" value="#ffffff" oninput="router.updatePreview()" style="width: 30px; height: 30px; padding: 0; border: none; background: none;">
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <input type="checkbox" id="input-subtitle-bold" onchange="router.updatePreview()">
                                    <label for="input-subtitle-bold" style="margin:0; font-size: 0.8rem;">Negrita</label>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.25rem;">
                                <input type="checkbox" id="input-subtitle-italic" onchange="router.updatePreview()">
                                    <label for="input-subtitle-italic" style="margin:0; font-size: 0.8rem;">Cursiva</label>
                            </div>
                        </div>
                    </div>

                    <!-- Logo/Image Controls -->
                    <div class="form-group">
                        <label>Añadir Foto/Logo</label>
                        <input type="file" id="input-logo" class="form-control" accept="image/*" onchange="router.handleLogoUpload(this)">
                    </div>

                    <div class="form-group" id="logo-controls" style="display: none;">
                        <label>Opciones de Imagen</label>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                            <div>
                                <label style="font-size: 0.8rem;">Posición Vertical %</label>
                                <input type="number" id="input-logo-top" class="form-control" value="80" min="0" max="100" oninput="router.updatePreview()">
                            </div>
                            <div>
                                <label style="font-size: 0.8rem;">Tamaño (px)</label>
                                <input type="number" id="input-logo-size" class="form-control" value="100" min="50" max="300" oninput="router.updatePreview()">
                            </div>
                        </div>

                        <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 0.5rem;">
                            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                                <input type="checkbox" id="input-logo-remove-bg" onchange="router.updatePreview()">
                                    <label for="input-logo-remove-bg" style="margin: 0; font-size: 0.9rem; color: var(--secondary-color); cursor: pointer;">✨ Quitar Fondo (IA)</label>
                            </div>
                            <p style="font-size: 0.7rem; color: var(--text-muted);">Elimina automáticamente el fondo de tu imagen.</p>
                        </div>
                    </div>

                    <div id="action-buttons-container" style="margin-top: 1rem;">
                        ${isMagic ? (`
                            ${!hasPaid ? `
                            <button class="cta-button" onclick="router.renderPaymentSelection('${product.id}')" style="width: 100%; margin-bottom: 1rem; border: none; background: #FFD700; color: #000;">
                                <i class="fa-solid fa-star"></i> Pagar 2€ por descarga
                            </button>
                            <button class="btn-outline" onclick="router.downloadComposition()" style="width: 100%; border-color: var(--text-muted); color: var(--text-muted);">
                                <i class="fa-solid fa-download"></i> Descargar (con marca de agua)
                            </button>
                            ` : `
                            <button id="btn-main-action" class="cta-button" onclick="router.downloadComposition()" style="width: 100%; border: none;">
                                <i class="fa-solid fa-download"></i> Descargar Original
                            </button>
                            `}
                        `) : (`
                            <button id="btn-main-action" class="cta-button" onclick="router.downloadComposition()" style="width: 100%; margin-bottom: 1rem; border: none; background: var(--success-color, #28a745); color: #fff;">
                                <i class="fa-solid fa-download"></i> Descargar GRATIS
                            </button>
                        `)}
                    </div>
                </div>
            </div>
        </div>
`;

        this.setupDraggable();
        this.updatePreview();
        // Initialize with Reel format
        this.updateFormat('reel');
    },

    handleMainImageUpload(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById('main-preview-image');
                img.src = e.target.result;
                // Reset background layer to show the product image is now the subject
                // Also reset any preset background
                const previewBg = document.getElementById('preview-bg-layer');
                previewBg.style.backgroundImage = 'none';
            };
            reader.readAsDataURL(input.files[0]);
        }
    },

    applyPresetBackground(url) {
        const previewBg = document.getElementById('preview-bg-layer');
        previewBg.style.backgroundImage = `url('${url}')`;
    },

    handleBackgroundUpload(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const previewBg = document.getElementById('preview-bg-layer');
                previewBg.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(input.files[0]);
        }
    },

    switchAITab(tabName) {
        // Hide all contents
        document.querySelectorAll('.ai-tab-content').forEach(el => el.style.display = 'none');
        // Deactivate all buttons
        document.querySelectorAll('.ai-tabs button').forEach(el => el.classList.remove('active'));

        // Show selected
        const tabContent = document.getElementById(`ai-tab-${tabName}`);
        const tabBtn = document.getElementById(`tab-btn-${tabName}`);

        if (tabContent) tabContent.style.display = 'block';
        if (tabBtn) tabBtn.classList.add('active');
    },

    async handleAIAction(action) {
        // Common setup
        const statusDiv = document.getElementById('ai-status-msg');
        statusDiv.style.display = 'block';

        // 1. Simulate Processing
        statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Iniciando IA...';
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5s delay

        statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Procesando... esto puede tardar unos minutos.';

        // Token is now managed by server
        let cleanToken = "SERVER_MANAGED";

        try {
            console.log('Starting AI Action:', action);
            const productImg = document.getElementById('main-preview-image');
            if (!productImg) throw new Error('No se encontró la imagen del producto');

            // Handle Video vs Image source
            let productImageUrl = productImg.src;
            if (productImg.tagName.toLowerCase() === 'video' && action !== 'generate') {
                // If it is a video, and we are not doing generate (which replaces it), we might want to warn
                // But let's try to get the poster or current frame? 
                // For now, assume src is valid or use current frame if possible (too complex for now)
                console.warn("Using video source for AI action");
            }

            console.log('Product Image URL:', productImageUrl);

            // Helper to get Base64 from Image Element directly (No Fetch needed)
            const getBase64FromElement = (imgElement) => {
                return new Promise((resolve, reject) => {
                    try {
                        const canvas = document.createElement('canvas');
                        const MAX_SIZE = 1024;
                        let width = imgElement.naturalWidth || imgElement.width;
                        let height = imgElement.naturalHeight || imgElement.height;

                        if (width > MAX_SIZE || height > MAX_SIZE) {
                            if (width > height) {
                                height *= MAX_SIZE / width;
                                width = MAX_SIZE;
                            } else {
                                width *= MAX_SIZE / height;
                                height = MAX_SIZE;
                            }
                        }

                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext('2d');

                        // Handle crossOrigin if needed (though usually fine for local unless file://)
                        // If src is data: URL, it's always fine.
                        // If src is relative, it's fine.

                        ctx.drawImage(imgElement, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/jpeg', 0.85));
                    } catch (e) {
                        console.error("Canvas error:", e);
                        if (e.name === 'SecurityError') {
                            reject(new Error("Seguridad del navegador: No se puede acceder a la imagen. Si estás abriendo el archivo localmente (file://), por favor usa un servidor local (http://localhost)."));
                        } else {
                            reject(new Error(`Error al procesar la imagen: ${e.message} `));
                        }
                    }
                });
            };

            const targetImageBase64 = await getBase64FromElement(productImg);
            console.log('Target Image Base64 generated, length:', targetImageBase64.length);

            if (action === 'faceswap') {
                // Find all active face inputs
                const inputs = Array.from(document.querySelectorAll('input[type="file"].face-input'));
                // Filter those that have files
                const filledInputs = inputs.filter(inp => inp.files && inp.files[0]);

                if (filledInputs.length === 0) throw new Error('Sube al menos una foto primero.');

                let currentTargetBase64 = targetImageBase64;

                // Sequential Processing Loop
                for (let i = 0; i < filledInputs.length; i++) {
                    const input = filledInputs[i];
                    const userFile = input.files[0];
                    console.log(`Processing face swap ${i + 1}/${filledInputs.length}...`);

                    if (filledInputs.length > 1) {
                        statusDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Procesando cara ${i + 1} de ${filledInputs.length}...`;
                    }

                    const userImageBase64 = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = () => reject(reader.error);
                        reader.readAsDataURL(userFile);
                    });

                    // lucataco/faceswap (InsightFace)
                    modelVersion = "9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d";
                    inputData = {
                        target_image: currentTargetBase64,
                        swap_image: userImageBase64,
                        enhance_face: false
                    };

                    // Execute Request
                    const res = await performRequest({ version: modelVersion, input: inputData });
                    if (!res.ok) {
                        const errText = await res.text();
                        throw new Error(`Error en el servidor: ${res.status} ${errText}`);
                    }
                    const prediction = await res.json();

                    if (prediction.error) throw new Error(prediction.error);

                    // Poll for result
                    const finalResult = await pollPrediction(prediction.id);

                    // Update currentTargetBase64 for next iteration (chaining)
                    // The result from Replicate is a URL, we need to fetch it to get base64 for next step? 
                    // Or usually we can pass URL to Replicate? YES, Replicate accepts URLs.
                    currentTargetBase64 = finalResult.output;
                }

                // Final Update to UI
                const finalImgUrl = currentTargetBase64; // It's a URL now
                const img = document.getElementById('main-preview-image');
                img.src = finalImgUrl;
                // Also update the hidden background layer mechanism if needed
                const previewBg = document.getElementById('preview-bg-layer');
                previewBg.style.backgroundImage = 'none'; // Clear any preset-bg since result is full composite

                statusDiv.innerHTML = '<i class="fa-solid fa-check-circle"></i> ¡Intercambio completado!';
                setTimeout(() => { statusDiv.style.display = 'none'; }, 3000);

                return; // Exit function as we handled everything manually in loop

            } else if (action === 'removebg') {
                // cjwbw/rembg
                modelVersion = "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003";
                inputData = {
                    image: targetImageBase64
                };

            } else if (action === 'animate') {
                // Using ali-vilab/i2vgen-xl (Image-to-Video)
                modelVersion = "5821a338d00033abaaba89080a17eb8783d9a17ed710a6b4246a18e0900ccad4";

                const prompt = document.getElementById('input-animate-prompt').value || "high quality, moving, cinematic";

                inputData = {
                    image: targetImageBase64,
                    prompt: prompt,
                    max_frames: 16
                };
            } else if (action === 'generate') {
                const prompt = document.getElementById('input-generate-prompt').value;
                if (!prompt) throw new Error('Escribe una descripción para generar la imagen.');

                // stability-ai/sdxl (Updated Version)
                modelVersion = "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc";
                inputData = {
                    prompt: prompt,
                    image: targetImageBase64, // Attempt Img2Img first
                    prompt_strength: 0.45,
                    width: 768,
                    height: 1024,
                    refine: "expert_ensemble_refiner"
                };
            }

            console.log('Sending request to server...');

            // Function to perform the fetch
            const performRequest = async (dataPayload) => {
                const res = await fetch('/api/replicate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataPayload)
                });
                return res;
            };

            const pollPrediction = async (id) => {
                const maxAttempts = 600; // 10 minutes max (600 * 1s)
                let attempts = 0;

                while (attempts < maxAttempts) {
                    attempts++;
                    try {
                        const res = await fetch(`/api/poll?id=${id}`);
                        if (!res.ok) throw new Error('Polling error');
                        const data = await res.json();

                        console.log(`Poll attempt ${attempts}: ${data.status} `);

                        if (data.status === 'succeeded') {
                            return data;
                        } else if (data.status === 'failed' || data.status === 'canceled') {
                            throw new Error(data.error || 'Prediction failed');
                        }

                        // Wait 1 second before next poll
                        await new Promise(r => setTimeout(r, 1000));

                    } catch (e) {
                        console.error("Polling error:", e);
                        // If network error, maybe wait and retry?
                        await new Promise(r => setTimeout(r, 2000));
                    }
                }
                throw new Error('Timeout: La generación tardó demasiado.');
            };

            let apiResponse = await performRequest({
                version: modelVersion,
                input: inputData
            });

            // Retry Logic for Generate (Img2Img -> Txt2Img fallback)
            if (!apiResponse.ok && action === 'generate' && inputData.image) {
                console.warn("Img2Img generation failed. Retrying with Text-to-Image only...");
                statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Reintentando modo creativo...';

                const fallbackInput = { ...inputData };
                delete fallbackInput.image;
                delete fallbackInput.prompt_strength;

                apiResponse = await performRequest({
                    version: modelVersion,
                    input: fallbackInput
                });
            }

            console.log('Response status:', apiResponse.status);

            if (!apiResponse.ok) {
                const errText = await apiResponse.text();
                console.error('API Error Body:', errText);

                if (apiResponse.status === 401) {
                    throw new Error('Token de API inválido.');
                }

                let err;
                try {
                    err = JSON.parse(errText);
                } catch (e) {
                    err = { error: errText };
                }

                // Customize error message for common issues
                let msg = err.details || err.error || 'Error en la petición';
                if (msg.includes('width must be > 0')) msg = 'La imagen original es demasiado pequeña o incompatible. Intenta generar sin imagen base.';

                throw new Error(msg);
            }

            let data = await apiResponse.json();
            console.log('Initial API Response:', data);

            // If we have an ID but no output, start polling
            if (data.id && !data.output) {
                console.log("Prediction started, polling for results...", data.id);
                statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando resultado...';
                data = await pollPrediction(data.id);
            }

            console.log('Final Data:', data);

            if (data.output) {
                statusDiv.innerHTML = '<i class="fa-solid fa-check"></i> ¡Listo!';

                if (action === 'animate') {
                    // Output is a URL to mp4
                    const videoUrl = data.output;
                    const videoEl = document.getElementById('main-preview-video');
                    const videoContainer = document.getElementById('video-container');

                    videoEl.src = videoUrl;
                    videoContainer.style.display = 'block';

                } else {
                    // Output is an image URL (or array of URLs)
                    const imgEl = document.getElementById('main-preview-image');

                    if (Array.isArray(data.output)) {
                        imgEl.src = data.output[0];
                    } else {
                        imgEl.src = data.output;
                    }

                    // If video was showing, hide it
                    document.getElementById('video-container').style.display = 'none';
                }

                // UPDATE MAIN BUTTON TO PAID MODE
                const mainBtn = document.getElementById('btn-main-action');
                if (mainBtn) {
                    mainBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Pagar 2€ por descarga';
                    mainBtn.onclick = () => router.renderPaymentSelection(this.params.productId);
                    mainBtn.classList.add('pulse-animation'); // Optional: Add a CSS animation to highlight it
                }

            } else {
                throw new Error("No se recibió salida de la IA. Inténtalo de nuevo.");
            }

        } catch (error) {
            console.error('HandleAIAction Error:', error);
            statusDiv.innerHTML = `<span style="color: red;">Error: ${error.message || error}</span>`;
        }
    },

    renderPaymentSelection(productId) {
        // Create Modal Overlay
        const existingModal = document.getElementById('payment-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.id = 'payment-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);';

        modal.innerHTML = `
            <div class="fade-in" style="background: white; padding: 2rem; border-radius: 1rem; max-width: 500px; width: 90%; position: relative; max-height: 90vh; overflow-y: auto;">
                <button onclick="document.getElementById('payment-modal').remove()" style="position: absolute; top: 1rem; right: 1rem; border: none; background: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
                
                <h2 style="text-align: center; margin-bottom: 2rem; color: var(--text-color);">Elige tu método de pago</h2>
                
                <!-- Method 1: Card/Stripe -->
                <div style="margin-bottom: 1.5rem; border: 1px solid #eee; padding: 1rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='#eee'" onclick="router.handlePurchase()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                        <div style="font-size: 1.5rem; color: #6772e5;"><i class="fa-brands fa-stripe"></i></div>
                        <h3 style="margin: 0; font-size: 1.1rem;">Tarjeta de Crédito / Débito</h3>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Pago seguro inmediato. Descarga automática.</p>
                </div>

                <!-- Method 2: Bizum -->
                <div style="border: 1px solid #eee; padding: 1rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='#00D1D6'" onmouseout="this.style.borderColor='#eee'" onclick="router.showBizumInstructions()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                        <div style="font-size: 1.5rem; color: #00D1D6;"><i class="fa-solid fa-mobile-screen-button"></i></div>
                        <h3 style="margin: 0; font-size: 1.1rem;">Bizum</h3>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Pago manual. Requiere verificación.</p>
                </div>

                <div id="bizum-instructions" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: #fff; border-radius: 0.5rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Datos para el Bizum:</h4>
                    
                    <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                        <p style="margin-bottom: 0.5rem;"><strong>Número:</strong> <span style="font-size: 1.2rem;">639 087 024</span></p>
                        <p style="margin-bottom: 0.5rem;"><strong>Importe:</strong> <span style="font-size: 1.2rem;">2,00€</span></p>
                        <p style="margin: 0;"><strong>Concepto:</strong> Navidad IA</p>
                    </div>

                    <ol style="padding-left: 1.2rem; font-size: 0.95rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
                        <li>Realiza el pago con los datos de arriba.</li>
                        <li>Haz una captura de pantalla del justificante.</li>
                        <li>Envíanos la captura por WhatsApp y recibirás tu felicitación sin marca de agua al instante.</li>
                    </ol>

                    <a href="https://wa.me/34639087024" target="_blank" class="cta-button" style="display: block; text-align: center; margin-top: 1rem; background: #25D366; color: white; border: none; text-decoration: none;">
                        <i class="fa-brands fa-whatsapp"></i> Enviar Comprobante Ahora
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    showBizumInstructions() {
        const el = document.getElementById('bizum-instructions');
        if (el) el.style.display = 'block';
    },

    async handlePurchase() {
        // Keep button finding logic for safety
        const btn = document.querySelector('#payment-modal .cta-button') || document.querySelector('.cta-button');
        if (!btn) {
            console.error("Button not found");
            return;
        }
        const originalText = btn.innerHTML;

        // Initialize Stripe with the Live Public Key
        const stripe = Stripe('pk_live_51Scgi9JJut2I3vTZYWiuKIMdQRifeY2G4xNMCi9cEzvbRKD7fD3YLRRZQM9h6mGWG0sU53Osv3D8ljLUwK5yAilG00lY7TLDCQ');

        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Conectando con Stripe...';

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: this.params.productId
                }),
            });

            const session = await response.json();

            if (session.error) {
                alert('Error al iniciar pago: ' + session.error);
                btn.disabled = false;
                btn.innerHTML = originalText;
                return;
            }

            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                alert(result.error.message);
                btn.disabled = false;
                btn.innerHTML = originalText;
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error de conexión.');
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    },

    async downloadComposition() {
        const element = document.getElementById('preview-area');

        // Use html2canvas to create an image from the DOM element
        const canvas = await html2canvas(element, {
            scale: 2, // Higher resolution
            useCORS: true, // Allow loading cross-origin images (like the background)
            backgroundColor: null // Transparent background if needed
        });

        // Convert canvas to blob/url
        const image = canvas.toDataURL("image/png");

        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = image;
        link.download = `postal - navidad - ${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    setupDraggable() {
        const overlay = document.getElementById('preview-overlay');
        let activeElement = null;
        let initialX, initialY;
        let initialLeft, initialTop;

        overlay.addEventListener('mousedown', (e) => {
            const draggableElement = e.target.closest('.draggable');

            if (draggableElement) {
                e.preventDefault(); // Prevent default drag behavior (especially for images)
                activeElement = draggableElement;
                initialX = e.clientX;
                initialY = e.clientY;

                // Get current percentage positions
                const rect = activeElement.getBoundingClientRect();
                const parentRect = overlay.getBoundingClientRect();

                // Calculate current left/top relative to parent
                initialLeft = activeElement.offsetLeft;
                initialTop = activeElement.offsetTop;

                activeElement.style.cursor = 'grabbing';
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!activeElement) return;
            e.preventDefault();

            const currentX = e.clientX;
            const currentY = e.clientY;
            const dx = currentX - initialX;
            const dy = currentY - initialY;

            const parentRect = overlay.getBoundingClientRect();

            // Calculate new position in pixels
            let newLeft = initialLeft + dx;
            let newTop = initialTop + dy;

            // Convert to percentage for responsiveness
            let leftPercent = (newLeft / parentRect.width) * 100;
            let topPercent = (newTop / parentRect.height) * 100;

            // Clamp values to keep inside container (optional, but good for UX)
            // leftPercent = Math.max(0, Math.min(100, leftPercent));
            // topPercent = Math.max(0, Math.min(100, topPercent));

            activeElement.style.left = `${leftPercent}% `;
            activeElement.style.top = `${topPercent}% `;

            // Update inputs if they exist
            const type = activeElement.dataset.type;
            if (type === 'title') {
                const input = document.getElementById('input-title-top');
                if (input) input.value = Math.round(topPercent);
            } else if (type === 'subtitle') {
                const input = document.getElementById('input-subtitle-top');
                if (input) input.value = Math.round(topPercent);
            } else if (type === 'logo') {
                const input = document.getElementById('input-logo-top');
                if (input) input.value = Math.round(topPercent);
            }
        });

        window.addEventListener('mouseup', () => {
            if (activeElement) {
                activeElement.style.cursor = 'move';
                activeElement = null;
            }
        });
    },

    updatePreview() {
        const title = document.getElementById('input-title').value;
        const titleTop = document.getElementById('input-title-top').value;
        const titleSize = document.getElementById('input-title-size').value;
        const titleBold = document.getElementById('input-title-bold').checked;
        const titleItalic = document.getElementById('input-title-italic').checked;
        const titleColor = document.getElementById('input-title-color').value;
        const font = document.getElementById('select-font').value;

        const subtitle = document.getElementById('input-subtitle').value;
        const subtitleTop = document.getElementById('input-subtitle-top').value;
        const subtitleSize = document.getElementById('input-subtitle-size').value;
        const subtitleBold = document.getElementById('input-subtitle-bold').checked;
        const subtitleItalic = document.getElementById('input-subtitle-italic').checked;
        const subtitleColor = document.getElementById('input-subtitle-color').value;

        const logoTop = document.getElementById('input-logo-top')?.value;
        const logoSize = document.getElementById('input-logo-size')?.value;
        const removeBg = document.getElementById('input-logo-remove-bg')?.checked;

        const previewTitle = document.getElementById('preview-title');
        const previewSubtitle = document.getElementById('preview-subtitle');
        const previewLogoContainer = document.getElementById('preview-logo-container');
        const previewLogo = document.getElementById('preview-logo');

        // Only update styles from inputs if we are NOT currently dragging (to avoid fighting)
        // Or simply update. Since drag updates inputs, this is fine.

        if (previewTitle) {
            previewTitle.textContent = title;
            previewTitle.style.fontFamily = font;
            previewTitle.style.fontSize = titleSize + 'px';
            previewTitle.style.fontWeight = titleBold ? 'bold' : 'normal';
            previewTitle.style.fontStyle = titleItalic ? 'italic' : 'normal';
            previewTitle.style.color = titleColor;

            if (document.activeElement !== previewTitle) {
                previewTitle.style.top = titleTop + '%';
            }
        }

        if (previewSubtitle) {
            previewSubtitle.textContent = subtitle;
            previewSubtitle.style.fontSize = subtitleSize + 'px';
            previewSubtitle.style.fontWeight = subtitleBold ? 'bold' : 'normal';
            previewSubtitle.style.fontStyle = subtitleItalic ? 'italic' : 'normal';
            previewSubtitle.style.color = subtitleColor;

            if (document.activeElement !== previewSubtitle) {
                previewSubtitle.style.top = subtitleTop + '%';
            }
        }

        if (previewLogoContainer && previewLogo) {
            if (logoTop && document.activeElement !== previewLogoContainer) {
                previewLogoContainer.style.top = logoTop + '%';
            }
            if (logoSize) {
                previewLogoContainer.style.width = logoSize + 'px';
                previewLogoContainer.style.height = logoSize + 'px';
            }

            if (removeBg) {
                // Simulate AI background removal
                previewLogo.style.mixBlendMode = 'multiply';
            } else {
                previewLogo.style.mixBlendMode = 'normal';
            }
        }
    },

    updateFormat(format) {
        const previewArea = document.getElementById('preview-area');
        const btns = ['reel', 'post'];

        // Update Buttons
        btns.forEach(b => {
            const btn = document.getElementById(`btn-format-${b}`);
            if (btn) btn.classList.remove('active');
        });
        document.getElementById(`btn-format-${format}`).classList.add('active');

        // Force Inline Styles (Most robust way)
        previewArea.style.width = '100%';
        previewArea.style.transition = 'all 0.3s ease';

        if (format === 'reel') {
            previewArea.style.aspectRatio = '9 / 16';
            previewArea.style.maxWidth = '360px';
        } else if (format === 'post') {
            previewArea.style.aspectRatio = '1 / 1';
            previewArea.style.maxWidth = '500px';
        }
    },

    handleLogoUpload(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const previewLogo = document.getElementById('preview-logo');
                const container = document.getElementById('preview-logo-container');
                const controls = document.getElementById('logo-controls');

                previewLogo.src = e.target.result;
                container.style.display = 'block';
                controls.style.display = 'block';

                // Trigger preview update to set initial values
                router.updatePreview();
            }
            reader.readAsDataURL(input.files[0]);
        }
    },

    renderAccountShop(container) {
        container.innerHTML = `
            <div class="section-container fade-in" style="max-width: 900px; margin: 0 auto; padding: 2rem;">
                <h1 class="section-title centered" style="margin-bottom: 2rem;">Tu Cuenta</h1>
                
                <div class="grid-2" style="gap: 2rem;">
                    <!-- Profile Section -->
                    <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div style="text-align: center; margin-bottom: 1.5rem;">
                            <div style="width: 80px; height: 80px; background: #f0f0f0; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                                <i class="fa-solid fa-user" style="font-size: 2rem; color: #ccc;"></i>
                            </div>
                            <h3 style="margin: 0;">Usuario Invitado</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem;">user@example.com</p>
                        </div>

                        <div style="border-top: 1px solid #eee; padding-top: 1.5rem;">
                            <h4 style="margin-bottom: 1rem; font-size: 1rem; color: var(--primary-color);">Mis Datos</h4>
                            <form onclick="event.preventDefault()">
                                <div class="form-group">
                                    <label style="font-size: 0.8rem;">Nombre</label>
                                    <input type="text" class="form-control" value="Visitante" readonly style="background: #f9f9f9;">
                                </div>
                                <div class="form-group">
                                    <label style="font-size: 0.8rem;">Email</label>
                                    <input type="email" class="form-control" value="guest@tufelicitacion.com" readonly style="background: #f9f9f9;">
                                </div>
                                <button class="btn-outline" style="width: 100%; font-size: 0.9rem;">Editar Perfil (Próximamente)</button>
                            </form>
                        </div>
                    </div>

                    <!-- Orders Section -->
                    <div style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fa-solid fa-box-open" style="color: var(--primary-color);"></i> Mis Pedidos
                        </h3>
                        
                        <div style="text-align: center; padding: 2rem 0; color: var(--text-muted);">
                            <p style="margin-bottom: 1.5rem;">No tienes pedidos recientes.</p>
                            <button onclick="router.navigate('home')" class="cta-button" style="font-size: 0.9rem;">Empezar a crear</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderAccountOrders(container) {
        // Redirect to Account Shop main view
        this.renderAccountShop(container);
    },

    createProductCard(product, showPrice = true) {
        // Encode the URL to handle spaces and special characters in filenames
        const encodedImage = encodeURI(product.image);

        return `
            <div class="card ${showPrice ? '' : 'home-product-card'}" onclick="router.navigate('product', {productId: ${product.id}})">
                <div class="card-image-container">
                    ${product.type === 'video' ? `
                        <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 0.2rem 0.5rem; border-radius: 0.2rem; font-size: 0.7rem; z-index: 2;">
                            <i class="fa-solid fa-video"></i>
                        </div>
                        <video src="${encodedImage}" class="card-image" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
                    ` : `
                        <img src="${encodedImage}" loading="lazy" alt="${product.title}" class="card-image">
                    `}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${product.title}</h3>
                </div>
            </div>
    `;
    },
    downloadComposite() {
        const previewArea = document.getElementById('preview-area');
        if (!previewArea) return;

        // Visual feedback
        const btn = document.getElementById('btn-download-composite');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando...';
        btn.disabled = true;

        html2canvas(previewArea, { scale: 2, useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'mi_postal_navidad.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            btn.innerHTML = originalText;
            btn.disabled = false;
        }).catch(err => {
            console.error('Error al generar imagen:', err);
            alert('Error detallado: ' + (err.message || err));
            btn.innerHTML = originalText;
            btn.disabled = false;
        });
    }
};

// Expose router globally
window.router = router;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for payment success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment_success') === 'true') {
        localStorage.setItem('hasPaid', 'true');
        alert("¡Pago realizado con éxito! La marca de agua ha sido eliminada.");
        // Clean URL without reloading
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Populate Navigation Menus
    const populateMenu = (elementId, filterType) => {
        const menu = document.getElementById(elementId);
        if (!menu) return;

        SECTORS.forEach(sector => {
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = sector.name;
            a.onclick = (e) => {
                e.preventDefault();
                // If filtering by type, we might want to filter by both sector and type in the future
                // For now, just go to sector detail
                router.navigate('sector-detail', { sectorId: sector.id });
            };
            menu.appendChild(a);
        });
    };

    populateMenu('postcards-sectors-menu');
    populateMenu('videos-sectors-menu');
    populateMenu('all-sectors-menu');

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Initialize Cookie Banner
    initCookieBanner();

    // Start Router with persisted state if available
    const savedPage = localStorage.getItem('christmas_app_page');
    const savedParams = localStorage.getItem('christmas_app_params');

    if (savedPage) {
        router.currentPage = savedPage;
        if (savedParams) {
            try {
                router.params = JSON.parse(savedParams);
            } catch (e) {
                console.error("Error loading router params", e);
            }
        }
    }

    // Start Router
    console.log('App initialized. SECTORS:', typeof SECTORS, 'PRODUCTS:', typeof PRODUCTS);
    try {
        router.render();
    } catch (e) {
        console.error('Error rendering app:', e);
    }

    // Check protocol
    if (window.location.protocol === 'file:') {
        const warning = document.createElement('div');
        warning.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; background: #d32f2f; color: white; padding: 1rem; text-align: center; z-index: 9999; font-weight: bold; box-shadow: 0 2px 10px rgba(0,0,0,0.3);';
        warning.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Estás abriendo la web como archivo (file://). Las funciones de IA no funcionarán por seguridad.<br>Por favor, usa el servidor local: <u>http://localhost:8080</u>';
        document.body.appendChild(warning);
    }
});

function initCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-content">
            <p>
                Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, analizando la navegación en nuestro sitio web. 
                Si continua navegando, consideramos que acepta su uso. Puede obtener más información en nuestra 
                <a href="#" onclick="router.navigate('cookies'); return false;" style="text-decoration: underline; color: var(--primary-color);">Política de Cookies</a>.
            </p>
            <div class="cookie-actions">
                <button class="btn-accept" onclick="acceptCookies()">Aceptar</button>
            </div>
        </div>
    `;
    document.body.appendChild(banner);

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            banner.style.display = 'block';
        }, 1000);
    }
}

window.acceptCookies = function () {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
};
