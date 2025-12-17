console.log("DEBUG: app.js loaded!");
// Data Models
// Data is loaded from products_data.js

// Router & State Management
const router = {
    currentPage: 'home',
    params: {},

    routes: {
        '/': { page: 'home' },
        '/navidad': { page: 'christmas-home' },
        '/ano-nuevo': { page: 'new-year' },
        '/reyes-magos': { page: 'kings-day' },
        '/postales-navidad': { page: 'postcards' },
        '/videos-navidad': { page: 'videos' },
        '/sectores': { page: 'sectors' },
        '/otros-eventos': { page: 'other-events' },

        '/buscar': { page: 'search' },
        '/nosotros': { page: 'about' },
        '/contacto': { page: 'contact' },
        '/cookies': { page: 'cookies' },
        '/aviso-legal': { page: 'legal-notice' },
        '/terminos': { page: 'terms' },
        '/privacidad': { page: 'privacy' },
        '/cuenta': { page: 'account-shop' },
        '/pedidos': { page: 'account-orders' }
    },

    init() {
        // Handle back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleLocation();
        });

        // Initialize from current URL
        this.handleLocation();
    },

    navigate(page, params = {}, event = null) {
        if (event) event.preventDefault();
        this.currentPage = page;
        this.params = params;

        // Construct URL based on page
        let url = '/';
        const reverseRoutes = Object.entries(this.routes).find(([, val]) => val.page === page);

        if (reverseRoutes) {
            url = reverseRoutes[0];
            // Append params if needed (e.g., sector filters for catalogs)
            if (params.sectorFilter && params.sectorFilter !== 'all') {
                url += `?sector=${params.sectorFilter}`;
            }
        } else if (page === 'sector-detail' && params.sectorId) {
            url = `/${params.sectorId}`; // e.g., /peluqueria
        } else if (page === 'product' && params.productId) {
            url = `/producto/${params.productId}`;
        }

        window.history.pushState({}, '', url);

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        // Google Analytics (SPA Tracking)
        if (typeof gtag !== 'undefined') {
            gtag('config', 'G-BSRLEM3WSL', {
                'page_path': url,
                'page_title': document.title
            });
        }

        this.render();
        window.scrollTo(0, 0);
    },

    updateMeta(title, description) {
        document.title = title || "Tu Felicitación - Personalizada con IA";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description || "Crea y personaliza tus postales de Navidad, vídeos y felicitaciones con Inteligencia Artificial.";
    },

    handleLocation() {
        const path = window.location.pathname;
        const searchParams = new URLSearchParams(window.location.search);

        // 1. Check Static Routes
        if (this.routes[path]) {
            this.currentPage = this.routes[path].page;
            this.params = {};

            // Handle query params for catalogs
            if (searchParams.has('sector')) {
                this.params.sectorFilter = searchParams.get('sector');
            }
        }
        // 2. Check Product Route (/producto/123)
        else if (path.startsWith('/producto/')) {
            const productId = path.split('/')[2];
            this.currentPage = 'product';
            this.params = { productId: productId };
        }
        // 3. Check Sector Route (treat root paths as sectors if they match a known sector ID)
        else {
            // Remove leading slash
            const potentialSector = path.substring(1).toLowerCase();
            const sectorExists = SECTORS.some(s => s.id === potentialSector);

            if (sectorExists) {
                this.currentPage = 'sector-detail';
                this.params = { sectorId: potentialSector };
            } else {
                // Default to Home if not found
                this.currentPage = 'home';
                // Check Domain Redirect if at Root
                if (path === '/' && (window.location.hostname === 'felicitaciondenavidad.com' || window.location.hostname === 'www.felicitaciondenavidad.com')) {
                    this.currentPage = 'christmas-home';
                }
                this.params = {};
            }
        }

        this.render();
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

            case 'search':
                this.renderSearch(main);
                break;
            case 'new-year':
                this.renderNewYear(mainContent);
                break;
            case 'kings-day':
                this.renderKingsDay(mainContent);
                break;
            case 'birthday':
                this.renderBirthday(mainContent);
                break;
            case 'weddings':
                this.renderWeddings(mainContent);
                break;
            case 'anniversaries':
                this.renderAnniversaries(mainContent);
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
        this.updateMeta(
            "Otros Eventos - Tu Felicitación",
            "Felicitaciones para cumpleaños, bodas, aniversarios y momentos especiales."
        );
        container.innerHTML = `
            <div class="section-container fade-in" style="text-align: center; padding: 4rem 2rem;">
                <h1 class="section-title">Otros Eventos</h1>
                <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 3rem;">
                    Celebra cada momento especial con nuestras felicitaciones personalizadas.
                </p>
                
                <div class="grid-3">
                    <div class="card" onclick="router.navigate('birthday')" style="cursor: pointer;">
                    <div class="card-image-container">
                        <img src="sectores/estetica imagenes/chicamaquillajenav.jpg" class="card-image">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Cumpleaños</h3>
                        <p style="font-size: 0.8rem; color: var(--text-muted);"></p>
                    </div>
                </div>
                <div class="card" onclick="router.navigate('weddings')" style="cursor: pointer;">
                    <div class="card-image-container">
                        <img src="sectores/moda imagenes/moda.png" class="card-image">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Bodas</h3>
                        <p style="font-size: 0.8rem; color: var(--text-muted);"></p>
                    </div>
                </div>
                <div class="card" onclick="router.navigate('anniversaries')" style="cursor: pointer;">
                    <div class="card-image-container">
                        <img src="sectores/restauracionimagenes/restaurantenavidad4.png" class="card-image">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Aniversarios</h3>
                        <p style="font-size: 0.8rem; color: var(--text-muted);"></p>
                    </div>
                </div>
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
        this.updateMeta(
            "Sobre Nosotros - Tu Felicitación",
            "Estudio de diseño gráfico especializado en Inteligencia Artificial. Innovación y creatividad."
        );
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
                        <h4 style="font-weight: 600;'>Tecnología IA</h4>
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
        this.updateMeta(
            "Contacto - Tu Felicitación",
            "Contacta con nosotros por WhatsApp para pedidos personalizados o soporte."
        );
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
                    <p>Para cualquier duda legal, puedes contactarnos en: tufelicitacion@gmail.com</p>
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
                    <p>El responsable de los datos es Montse Torrelles (Tu Felicitación).<br>Correo de contacto: tufelicitacion@gmail.com</p>
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
                    <p>Tienes derecho a acceder, rectificar y suprimir tus datos. Para ejercer estos derechos, envíanos un email a tufelicitacion@gmail.com.</p>
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
                    <p><strong>Correo electrónico:</strong> tufelicitacion@gmail.com</p>
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
        this.updateMeta(
            "Tu Felicitación - Personalizada con IA",
            "Crea felicitaciones de Navidad únicas con IA. Postales, vídeos y Face Swap personalizados."
        );
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
            <button class="cta-button app-btn-success" onclick="router.navigate('postcards')">Empieza a personalizar</button>
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

                <!-- Año Nuevo (Active) -->
                <div class="card" onclick="router.navigate('new-year')" style="background: #fff; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; cursor: pointer; transition: transform 0.2s; height: 100%; display: flex; flex-direction: column;">
                    <div class="card-image-container" style="height: 250px; width: 100%; padding: 0;">
                        <img src="2026 home.jpg" alt="Año Nuevo" class="card-image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-content" style="padding: 1.5rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-color);">Año Nuevo</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Celebra el 2026 con estilo.</p>
                    </div>
                </div>

                <!-- Reyes Magos (Active) -->
                <div class="card" onclick="router.navigate('kings-day')" style="background: #fff; border: 1px solid var(--border-color); border-radius: 1rem; overflow: hidden; cursor: pointer; transition: transform 0.2s; height: 100%; display: flex; flex-direction: column;">
                    <div class="card-image-container" style="height: 250px; width: 100%; padding: 0;">
                        <img src="reyesmagos.jpg" alt="Reyes Magos" class="card-image" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-content" style="padding: 1.5rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                        <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-color);">Reyes Magos</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">La magia de los Reyes.</p>
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
        this.updateMeta(
            "Felicitaciones de Navidad - Tu Felicitación",
            "Las mejores felicitaciones de Navidad personalizadas para empresas y particulares."
        );
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
            <button class="cta-button app-btn-success" onclick="router.navigate('postcards')">Empieza a personalizar</button>
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
    <h2 class="section-title centered">Herramientas de Personalización</h2>
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

    renderNewYear(container) {
        // Hero Section
        const hero = document.createElement('section');
        hero.className = 'hero fade-in';
        hero.style.backgroundImage = "url('2026 home.jpg')";
        hero.style.height = "85vh";
        hero.style.backgroundPosition = "center";
        hero.innerHTML = `
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Feliz 2026<br><span style="font-size: 1.5rem; font-weight: normal;">Crea tus felicitaciones de Año Nuevo</span></h1>
                <button class="cta-button app-btn-success" onclick="document.getElementById('newyear-content').scrollIntoView({behavior: 'smooth'})">Empezar</button>
            </div>
        `;
        container.appendChild(hero);

        // Content Section
        const contentSection = document.createElement('section');
        contentSection.id = 'newyear-content';
        contentSection.className = 'section-container fade-in';
        contentSection.innerHTML = `
            <h2 class="section-title centered">Colección de Año Nuevo</h2>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 2rem;">
                Próximamente añadiremos más diseños exclusivos para celebrar la llegada del nuevo año.
            </p>
            <div class="grid-4">
                ${PRODUCTS.filter(p => (p.sector === 'fiesta' || p.sector === 'negocios' || p.tags?.includes('newyear'))).map(p => this.createProductCard(p)).join('')}
            </div>
            ${PRODUCTS.filter(p => (p.sector === 'fiesta' || p.sector === 'negocios' || p.tags?.includes('newyear'))).length === 0 ?
                '<p style="text-align: center; padding: 2rem;">Estamos preparando los diseños de Año Nuevo. ¡Vuelve pronto!</p>' : ''}
        `;
        container.appendChild(contentSection);
    },

    renderKingsDay(container) {
        // Hero Section
        const hero = document.createElement('section');
        hero.className = 'hero fade-in';
        hero.style.backgroundImage = "url('reyesmagos.jpg')";
        hero.style.height = "85vh";
        hero.style.backgroundPosition = "center";
        hero.innerHTML = `
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Ya Vienen los Reyes Magos<br><span style="font-size: 1.5rem; font-weight: normal;">Sorprende con una carta o felicitación mágica</span></h1>
                <button class="cta-button app-btn-success" onclick="document.getElementById('kings-content').scrollIntoView({behavior: 'smooth'})">Empezar</button>
            </div>
        `;
        container.appendChild(hero);

        // Content Section
        const contentSection = document.createElement('section');
        contentSection.id = 'kings-content';
        contentSection.className = 'section-container fade-in';
        contentSection.innerHTML = `
            <h2 class="section-title centered">Especial Reyes Magos</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => (p.sector === 'infantil' || p.tags?.includes('reyes'))).map(p => this.createProductCard(p)).join('')}
            </div>
             ${PRODUCTS.filter(p => (p.sector === 'infantil' || p.tags?.includes('reyes'))).length === 0 ?
                '<p style="text-align: center; padding: 2rem;">Diseños de Reyes Magos en camino...</p>' : ''}
        `;
        container.appendChild(contentSection);
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

        if (sector) {
            this.updateMeta(
                `${sector.name} - Tu Felicitación`,
                `Descubre nuestra colección de felicitaciones para ${sector.name}. Personalizables y originales.`
            );
        }

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

        console.log("DEBUG: Render Product Detail Start");
        // alert("Debug: Iniciando render v25"); // Commented out to avoid spam, uncomment if needed

        // Use loose equality to handle both string and number inputs for ID
        const product = PRODUCTS.find(p => p.id == this.params.productId);
        const hasPaid = localStorage.getItem('hasPaid') === 'true';

        if (!product) {
            console.error("Product not found for ID:", this.params.productId);
            container.innerHTML = '<div class="fade-in"><p style="text-align:center; padding: 2rem;">Producto no encontrado (ID inválido)</p></div>';
            return;
        }

        this.updateMeta(
            `${product.title} - Tu Felicitación`,
            "Personaliza este diseño con tus fotos y textos. Crea una felicitación única en segundos."
        );

        console.log("DEBUG: Rendering Product Detail v2 with Fixed Layout");
        // Force scroll to top
        window.scrollTo(0, 0);

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
                    <!-- Left Column: Customizer & Preview -->
                    <div id="preview-column-wrapper">
                        <div class="preview-area format-reel" id="preview-area" style="position: relative;">
                            <!-- Background Layer -->
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
                            <div class="preview-overlay" id="preview-overlay" style="z-index: 120;">
                                <div id="preview-title" class="preview-text-title draggable" data-type="title">
                                    <div class="resize-handle"></div>
                                </div>
                                <div id="preview-subtitle" class="preview-text-subtitle draggable" data-type="subtitle">
                                    <div class="resize-handle"></div>
                                </div>
                                <div id="preview-logo-container" class="preview-logo-container draggable" data-type="logo" style="display: none;">
                                    <img id="preview-logo" class="preview-logo-img" src="" alt="Logo">
                                    <div class="resize-handle"></div>
                                </div>
                            </div>
                            <!-- ... -->
                            
                            <!-- Protection Layer -->
                            <div class="protection-layer" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; opacity: 0;" onclick="router.clearSelection(event)"></div>
                        </div>
                    </div>
                    <!-- Right Column: Controls Panel -->
                    <div class="controls-area">
                        <!-- Scrollable Content -->
                        <div class="controls-content">
                            <h2 class="card-title" style="font-size: 1.5rem; margin-bottom: 1.5rem;">${product.title}</h2>

                            <!-- 1. Format Selector -->
                            <div style="margin-bottom: 2rem;">
                                <label style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); display: block; margin-bottom: 0.75rem;">Formato</label>
                                <div style="display: flex; gap: 0.5rem;">
                                    <button class="filter-btn active" id="btn-format-reel" onclick="router.updateFormat('reel')" style="flex: 1; justify-content: center; font-size: 0.85rem; padding: 0.6rem;">
                                        <i class="fa-brands fa-instagram"></i> Reel (9:16)
                                    </button>
                                    <button class="filter-btn" id="btn-format-post" onclick="router.updateFormat('post')" style="flex: 1; justify-content: center; font-size: 0.85rem; padding: 0.6rem;">
                                        <i class="fa-regular fa-square"></i> Post (1:1)
                                    </button>
                                </div>
                            </div>

                            <!-- 2. Main Text -->
                            <div class="accordion-item active" style="margin-bottom: 1rem;">
                                <button class="accordion-header" onclick="router.toggleAccordion(this)">
                                    <span><i class="fa-solid fa-heading"></i> Texto Principal</span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                                <div class="accordion-content">
                                    <div class="form-group" style="margin-bottom:0;">
                                        <input type="text" id="input-title" class="form-control" value="Felices Fiestas" placeholder="Ej: Felices Fiestas" oninput="router.updatePreview()">
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.75rem;">
                                            <div>
                                                <label style="font-size: 0.75rem;">Posición Y</label>
                                                <input type="number" id="input-title-top" class="form-control" value="20" min="0" max="100" oninput="router.updatePreview()">
                                            </div>
                                            <div>
                                                <label style="font-size: 0.75rem;">Tamaño</label>
                                                <input type="number" id="input-title-size" class="form-control" value="32" min="16" max="120" oninput="router.updatePreview()">
                                            </div>
                                        </div>
                                        
                                        <div style="margin-top: 0.75rem;">
                                             <label style="font-size: 0.75rem;">Tipografía</label>
                                            <select id="select-font" class="form-control" onchange="router.updatePreview()">
                                                <option value="'Playfair Display', serif">Playfair Display</option>
                                                <option value="'Inter', sans-serif">Inter</option>
                                                <option value="'Cinzel', serif">Cinzel</option>
                                                <option value="'Great Vibes', cursive">Great Vibes</option>
                                                <option value="'Montserrat', sans-serif">Montserrat</option>
                                                <option value="'Dancing Script', cursive">Dancing Script</option>
                                                <option value="'Lato', sans-serif">Lato</option>
                                                <option value="'Pacifico', cursive">Pacifico</option>
                                                <option value="'Caveat', cursive">Caveat</option>
                                            </select>
                                        </div>

                                        <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; align-items: center; justify-content: space-between;">
                                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                 <input type="color" id="input-title-color" value="#ffffff" oninput="router.updatePreview()" style="width: 36px; height: 36px; padding: 0; border: none; background: none; cursor: pointer;">
                                            </div>
                                            <div style="display: flex; gap: 0.5rem;">
                                                <label class="btn-outline" style="margin:0; padding: 0.4rem 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.3rem;">
                                                    <input type="checkbox" id="input-title-bold" onchange="router.updatePreview()" style="display: none;"> <span id="span-bold">B</span>
                                                </label>
                                                <label class="btn-outline" style="margin:0; padding: 0.4rem 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 0.3rem;">
                                                    <input type="checkbox" id="input-title-italic" onchange="router.updatePreview()" style="display: none;"> <span id="span-italic">I</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 3. Secondary Text -->
                            <div class="accordion-item" style="margin-bottom: 1rem;">
                                <button class="accordion-header" onclick="router.toggleAccordion(this)">
                                    <span><i class="fa-solid fa-align-left"></i> Texto Secundario</span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                                <div class="accordion-content">
                                    <div class="form-group" style="margin-bottom:0;">
                                        <textarea id="input-subtitle" class="form-control" rows="2" placeholder="Mensaje..." oninput="router.updatePreview()">Te deseamos lo mejor</textarea>
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.75rem;">
                                            <div>
                                                <label style="font-size: 0.75rem;">Posición Y</label>
                                                <input type="number" id="input-subtitle-top" class="form-control" value="40" min="0" max="100" oninput="router.updatePreview()">
                                            </div>
                                            <div>
                                                <label style="font-size: 0.75rem;">Tamaño</label>
                                                <input type="number" id="input-subtitle-size" class="form-control" value="19" min="10" max="80" oninput="router.updatePreview()">
                                            </div>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem;">
                                             <input type="color" id="input-subtitle-color" value="#ffffff" oninput="router.updatePreview()" style="width: 36px; height: 36px; padding: 0; border: none; background: none; cursor: pointer;">
                                             <div style="display: flex; gap: 0.5rem;">
                                                <label class="btn-outline" style="margin:0; padding: 0.4rem 0.8rem; cursor: pointer;">
                                                    <input type="checkbox" id="input-subtitle-bold" onchange="router.updatePreview()" style="display: none;"> B
                                                </label>
                                                <label class="btn-outline" style="margin:0; padding: 0.4rem 0.8rem; cursor: pointer;">
                                                    <input type="checkbox" id="input-subtitle-italic" onchange="router.updatePreview()" style="display: none;"> I
                                                </label>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 4. Logo/Image -->
                            <div class="accordion-item">
                                <button class="accordion-header" onclick="router.toggleAccordion(this)">
                                    <span><i class="fa-solid fa-image"></i> Logo / Imagen</span>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                                <div class="accordion-content">
                                    <div class="form-group">
                                        <label>Subir Archivo</label>
                                        <input type="file" id="input-logo" class="form-control" accept="image/*" onchange="router.handleLogoUpload(this)">
                                    </div>
                                    <div id="logo-controls" style="display: none;">
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                                            <div>
                                                <label style="font-size: 0.75rem;">Posición Y</label>
                                                <input type="number" id="input-logo-top" class="form-control" value="80" min="0" max="100" oninput="router.updatePreview()">
                                            </div>
                                            <div>
                                                <label style="font-size: 0.75rem;">Tamaño</label>
                                                <input type="number" id="input-logo-size" class="form-control" value="100" min="20" max="400" oninput="router.updatePreview()">
                                            </div>
                                        </div>
                                        <button class="btn-outline" onclick="router.handleLogoRemoveBg()" style="width: 100%; text-align: center; justify-content: center; display: flex; gap: 0.5rem; align-items: center;">
                                            <i class="fa-solid fa-wand-magic-sparkles"></i> Quitar Fondo (IA)
                                        </button>
                                        <div id="logo-ai-status" style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center; display: none;"></div>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- End controls-content -->

                            <div style="display: flex; gap: 0.5rem; align-items: center;">
                                <!-- Single Free Download Button -->
                                <button id="btn-main-action" class="cta-button" onclick="router.downloadComposite()" style="width: 100%; border: none; background: var(--success-color, #25D366); color: #fff; padding: 1rem; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                                    <i class="fa-solid fa-download"></i> Descargar GRATIS
                                </button>
                            </div>
                        </div>
                    </div>
                </div> <!-- End of customizer-container -->
            </div>

            <!-- MAGIC AI SECTION REMOVED/HIDDEN AS PER USER REQUEST (DEC 2025) -->
            <!-- To restore, uncomment the block previously here or check git history -->
        `;


        this.setupDraggable();
        this.updatePreview();
        this.updateFormat('reel');

    },

    clearSelection(e) {
        // Only clear if clicking the protection layer (background)
        if (e.target.classList.contains('protection-layer') || e.target.classList.contains('preview-area')) {
            document.querySelectorAll('.draggable').forEach(el => el.classList.remove('active-selection'));
        }
    },

    setupDraggable() {
        const overlay = document.getElementById('preview-overlay');
        let activeElement = null;
        let isResizing = false;

        let initialX, initialY;
        let initialLeft, initialTop;
        let initialSize = 0; // fontSize or width
        let startX, startY; // needed for resizing calc

        // helper
        const getEventPos = (e) => {
            if (e.touches && e.touches.length > 0) {
                return { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
            return { x: e.clientX, y: e.clientY };
        };

        const updateInputs = (element) => {
            const rect = element.getBoundingClientRect();
            const parentRect = overlay.getBoundingClientRect();

            // Pos
            const topPercent = ((element.offsetTop) / parentRect.height) * 100;
            const type = element.dataset.type;

            if (type === 'title') {
                const inputTop = document.getElementById('input-title-top');
                if (inputTop) inputTop.value = Math.round(topPercent);

                const inputSize = document.getElementById('input-title-size');
                const size = parseFloat(element.style.fontSize);
                if (inputSize && size) inputSize.value = Math.round(size);

            } else if (type === 'subtitle') {
                const inputTop = document.getElementById('input-subtitle-top');
                if (inputTop) inputTop.value = Math.round(topPercent);

                const inputSize = document.getElementById('input-subtitle-size');
                const size = parseFloat(element.style.fontSize);
                if (inputSize && size) inputSize.value = Math.round(size);

            } else if (type === 'logo') {
                const inputTop = document.getElementById('input-logo-top');
                if (inputTop) inputTop.value = Math.round(topPercent);

                const inputSize = document.getElementById('input-logo-size');
                const size = parseFloat(element.style.width);
                if (inputSize && size) inputSize.value = Math.round(size);
            }
        };

        const handleStart = (e) => {
            const handle = e.target.closest('.resize-handle');
            const draggable = e.target.closest('.draggable');

            if (handle) {
                // RESIZE START
                e.preventDefault();
                e.stopPropagation(); // prevent drag start
                isResizing = true;
                activeElement = handle.parentElement; // The draggable div

                const pos = getEventPos(e);
                startX = pos.x;
                startY = pos.y;

                if (activeElement.dataset.type === 'logo') {
                    initialSize = activeElement.offsetWidth;
                } else {
                    initialSize = parseFloat(window.getComputedStyle(activeElement).fontSize);
                }

                return;
            }

            if (draggable) {
                // DRAG START + SELECTION
                e.preventDefault();

                // Handle Selection
                document.querySelectorAll('.draggable').forEach(el => el.classList.remove('active-selection'));
                draggable.classList.add('active-selection');

                activeElement = draggable;
                const pos = getEventPos(e);
                initialX = pos.x;
                initialY = pos.y;
                initialLeft = activeElement.offsetLeft;
                initialTop = activeElement.offsetTop;
                activeElement.style.cursor = 'grabbing';
            }
        };

        const handleMove = (e) => {
            if (!activeElement) return;
            e.preventDefault();
            const pos = getEventPos(e);

            if (isResizing) {
                // RESIZING LOGIC
                // Calculate diagonal movement for intuitive feel, or max of x/y
                const deltaX = pos.x - startX;
                const deltaY = pos.y - startY;

                // Use the larger delta to drive resize
                const delta = (Math.abs(deltaX) > Math.abs(deltaY)) ? deltaX : deltaY;

                let newSize = initialSize + delta;

                if (activeElement.dataset.type === 'logo') {
                    newSize = Math.max(20, Math.min(500, newSize));
                    activeElement.style.width = `${newSize}px`;
                    activeElement.style.height = `${newSize}px`;
                } else {
                    newSize = Math.max(10, Math.min(150, newSize)); // scale down sensitivity for text?
                    // For text, pixels map 1:1 roughly to font size updates, might need scaling factor
                    // Let's try 0.5 factor for smoother text resize
                    newSize = initialSize + (delta * 0.5);
                    activeElement.style.fontSize = `${newSize}px`;
                }

                updateInputs(activeElement);

            } else {
                // DRAGGING LOGIC
                const dx = pos.x - initialX;
                const dy = pos.y - initialY;
                const parentRect = overlay.getBoundingClientRect();

                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;

                let leftPercent = (newLeft / parentRect.width) * 100;
                let topPercent = (newTop / parentRect.height) * 100;

                activeElement.style.left = `${leftPercent}%`;
                activeElement.style.top = `${topPercent}%`;

                updateInputs(activeElement);
            }
        };

        const handleEnd = () => {
            if (activeElement) {
                activeElement.style.cursor = 'move';
            }
            activeElement = null;
            isResizing = false;
        };

        // Attach Events
        overlay.addEventListener('mousedown', handleStart);
        overlay.addEventListener('touchstart', handleStart, { passive: false });

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove, { passive: false });

        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
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
                <div style="margin-bottom: 1.5rem; border: 1px solid #eee; padding: 1rem; border-radius: 0.5rem; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--primary-color)'" onmouseout="this.style.borderColor='#eee'" onclick="router.handlePurchase(this, '${productId}')">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                        <div style="font-size: 1.5rem; color: #6772e5;"><i class="fa-brands fa-stripe"></i></div>
                        <h3 style="margin: 0; font-size: 1.1rem;">Tarjeta / Bizum Automático</h3>
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Pago seguro inmediato. <strong>Incluye Bizum y Apple Pay.</strong> Descarga al momento.</p>
                </div>

                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    showBizumInstructions() {
        const el = document.getElementById('bizum-instructions');
        if (el) el.style.display = 'block';
    },

    async handlePurchase(btnElement, productIdOverride) {
        const targetId = productIdOverride || this.params.productId;

        // Initialize Stripe with the Live Public Key
        const stripe = Stripe('pk_live_51Scgi9JJut2I3vTZYWiuKIMdQRifeY2G4xNMCi9cEzvbRKD7fD3YLRRZQM9h6mGWG0sU53Osv3D8ljLUwK5yAilG00lY7TLDCQ');

        let originalContent = '';
        if (btnElement) {
            btnElement.style.pointerEvents = 'none';
            btnElement.style.opacity = '0.7';
            originalContent = btnElement.innerHTML;
            btnElement.innerHTML = '<div style="text-align:center; padding: 1rem;"><i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary-color);"></i><p style="margin-top:0.5rem;">Conectando con Stripe...</p></div>';
        }

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: targetId
                }),
            });

            const session = await response.json();

            if (session.error) {
                alert('Error al iniciar pago: ' + session.error);
                if (btnElement) {
                    btnElement.style.pointerEvents = 'auto';
                    btnElement.style.opacity = '1';
                    btnElement.innerHTML = originalContent;
                }
                return;
            }

            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                alert(result.error.message);
                if (btnElement) {
                    btnElement.style.pointerEvents = 'auto';
                    btnElement.style.opacity = '1';
                    btnElement.innerHTML = originalContent;
                }
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error de conexión.');
            if (btnElement) {
                btnElement.style.pointerEvents = 'auto';
                btnElement.style.opacity = '1';
                btnElement.innerHTML = originalContent;
            }
        }
    },

    toggleAccordion(header) {
        console.log("Toggle Accordion Clicked", header);
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Optional: Close others (True Accordion)
        document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    },

    async downloadComposition() {
        // Notify Server
        try {
            this.notifyDownload();
        } catch (e) {
            console.error("Tracking error:", e);
        }

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
        const container = document.getElementById('preview-column-wrapper'); // Or the specific container

        let activeElement = null;
        let initialX, initialY;
        let initialLeft, initialTop;

        // --- TOUCH PINCH VARIABLES ---
        let initialPinchDistance = null;
        let initialElementSize = null; // fontSize (px) or width (px)
        let isPinching = false;

        // --- HELPER: UPDATE INPUTS ---
        const updatePosInputs = (element, topPercent) => {
            const type = element.dataset.type;
            let inputId = '';
            if (type === 'title') inputId = 'input-title-top';
            else if (type === 'subtitle') inputId = 'input-subtitle-top';
            else if (type === 'logo') inputId = 'input-logo-top';

            if (inputId) {
                const input = document.getElementById(inputId);
                if (input) input.value = Math.round(topPercent);
            }
        };

        const updateSizeInputs = (element, sizeVal) => {
            const type = element.dataset.type;
            let inputId = '';
            if (type === 'title') inputId = 'input-title-size';
            else if (type === 'subtitle') inputId = 'input-subtitle-size';
            else if (type === 'logo') inputId = 'input-logo-size';

            if (inputId) {
                const input = document.getElementById(inputId);
                if (input) input.value = Math.round(sizeVal);
            }
        };

        // --- MOUSE DRAG ---
        overlay.addEventListener('mousedown', (e) => {
            const draggableElement = e.target.closest('.draggable');
            if (draggableElement) {
                e.preventDefault();
                activeElement = draggableElement;
                initialX = e.clientX;
                initialY = e.clientY;
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

            let newLeft = initialLeft + dx;
            let newTop = initialTop + dy;

            // Clamp / percentages
            let leftPercent = (newLeft / parentRect.width) * 100;
            let topPercent = (newTop / parentRect.height) * 100;

            activeElement.style.left = `${leftPercent}%`;
            activeElement.style.top = `${topPercent}%`;

            updatePosInputs(activeElement, topPercent);
        });

        window.addEventListener('mouseup', () => {
            if (activeElement) {
                activeElement.style.cursor = 'move';
                activeElement = null;
            }
        });

        // --- MOUSE WHEEL RESIZE ---
        overlay.addEventListener('wheel', (e) => {
            const target = e.target.closest('.draggable');
            if (target) {
                e.preventDefault();
                const type = target.dataset.type;
                // Determine direction
                const delta = Math.sign(e.deltaY) * -1; // Up = +1 (Zoom In), Down = -1 (Zoom Out)
                const step = 2; // px per tick

                if (type === 'title' || type === 'subtitle') {
                    let currentSize = parseFloat(window.getComputedStyle(target).fontSize);
                    let newSize = Math.max(10, Math.min(150, currentSize + (delta * step)));
                    target.style.fontSize = `${newSize}px`;
                    updateSizeInputs(target, newSize);
                } else if (type === 'logo') {
                    // Logo container width
                    let currentSize = parseFloat(window.getComputedStyle(target).width);
                    let newSize = Math.max(20, Math.min(500, currentSize + (delta * step * 2)));
                    target.style.width = `${newSize}px`;
                    target.style.height = `${newSize}px`;
                    updateSizeInputs(target, newSize);
                }
            }
        }, { passive: false });

        // --- TOUCH SUPPORT (DRAG + PINCH) ---
        overlay.addEventListener('touchstart', (e) => {
            const target = e.target.closest('.draggable');
            if (!target) return;

            // e.preventDefault(); // Stop scroll ONLY if we are interacting

            if (e.touches.length === 1) {
                // Drag Start
                activeElement = target;
                initialX = e.touches[0].clientX;
                initialY = e.touches[0].clientY;
                initialLeft = activeElement.offsetLeft;
                initialTop = activeElement.offsetTop;
                isPinching = false;
            } else if (e.touches.length === 2) {
                // Pinch Start
                isPinching = true;
                activeElement = target;
                // Calculate initial distance
                initialPinchDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );

                // Get initial size
                if (target.dataset.type === 'logo') {
                    initialElementSize = parseFloat(window.getComputedStyle(target).width);
                } else {
                    initialElementSize = parseFloat(window.getComputedStyle(target).fontSize);
                }
            }
        }, { passive: false });

        overlay.addEventListener('touchmove', (e) => {
            if (!activeElement) return;
            // Prevent scrolling page while manipulating
            if (e.cancelable) e.preventDefault();

            if (e.touches.length === 1 && !isPinching) {
                // DRAG LOGIC
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const dx = currentX - initialX;
                const dy = currentY - initialY;
                const parentRect = overlay.getBoundingClientRect();

                let newLeft = initialLeft + dx;
                let newTop = initialTop + dy;

                let leftPercent = (newLeft / parentRect.width) * 100;
                let topPercent = (newTop / parentRect.height) * 100;

                activeElement.style.left = `${leftPercent}%`;
                activeElement.style.top = `${topPercent}%`;
                updatePosInputs(activeElement, topPercent);

            } else if (e.touches.length === 2 && isPinching) {
                // PINCH LOGIC
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );

                if (initialPinchDistance > 0) {
                    const scaleFactor = currentDistance / initialPinchDistance;
                    let newSize = initialElementSize * scaleFactor;
                    const type = activeElement.dataset.type;

                    if (type === 'logo') {
                        newSize = Math.max(20, Math.min(500, newSize));
                        activeElement.style.width = `${newSize}px`;
                        activeElement.style.height = `${newSize}px`;
                        updateSizeInputs(activeElement, newSize);
                    } else {
                        // Text
                        newSize = Math.max(10, Math.min(150, newSize));
                        activeElement.style.fontSize = `${newSize}px`;
                        updateSizeInputs(activeElement, newSize);
                    }
                }
            }
        }, { passive: false });

        overlay.addEventListener('touchend', (e) => {
            // Reset
            if (e.touches.length === 0) {
                activeElement = null;
                isPinching = false;
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

        const previewTitle = document.getElementById('preview-title');
        const previewSubtitle = document.getElementById('preview-subtitle');
        const previewLogoContainer = document.getElementById('preview-logo-container');
        const previewLogo = document.getElementById('preview-logo');

        if (previewTitle) {
            // Use firstChild check or similar to preserve the handle which is a div
            // Actually simplest way is to update textContent BUT that wipes children.
            // So we need to set the text NODE specifically.
            if (previewTitle.firstChild && previewTitle.firstChild.nodeType === 3) {
                previewTitle.firstChild.textContent = title;
            } else {
                // If structure is complex, rebuild or find text node
                // Resetting innerHTML wipes the handle.
                // Let's assume structure: TextNode + <div handle>
                // We can just recreate the handle if needed or use previousSibling of handle?

                // Better approach:
                // Clear text nodes only?
                // Let's iterate childNodes.
                let textNodeFound = false;
                previewTitle.childNodes.forEach(node => {
                    if (node.nodeType === 3) {
                        node.textContent = title;
                        textNodeFound = true;
                    }
                });

                if (!textNodeFound) {
                    // Prepend text node
                    const tx = document.createTextNode(title);
                    previewTitle.insertBefore(tx, previewTitle.firstChild);
                }
            }

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
            let textNodeFound = false;
            previewSubtitle.childNodes.forEach(node => {
                if (node.nodeType === 3) {
                    node.textContent = subtitle;
                    textNodeFound = true;
                }
            });

            if (!textNodeFound) {
                const tx = document.createTextNode(subtitle);
                previewSubtitle.insertBefore(tx, previewSubtitle.firstChild);
            }

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
            previewLogo.style.mixBlendMode = 'normal';
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

    async handleLogoRemoveBg() {
        const logoImg = document.getElementById('preview-logo');
        const statusDiv = document.getElementById('logo-ai-status');

        if (!logoImg || !logoImg.src) {
            alert("Primero sube un logo.");
            return;
        }

        statusDiv.style.display = 'block';
        statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Procesando...';

        try {
            // Get Base64 from Image Element
            const getBase64FromElement = (imgElement) => {
                return new Promise((resolve, reject) => {
                    try {
                        const canvas = document.createElement('canvas');
                        // Use original size for logos to preserve quality, or limit if too huge
                        let width = imgElement.naturalWidth || imgElement.width;
                        let height = imgElement.naturalHeight || imgElement.height;

                        // Limit to moderate size for API speed
                        const MAX_SIZE = 1024;
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
                        ctx.drawImage(imgElement, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/png'));
                    } catch (e) {
                        reject(e);
                    }
                });
            };

            const logoBase64 = await getBase64FromElement(logoImg);

            // Using rembg model
            const modelVersion = "fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003";
            const inputData = {
                image: logoBase64
            };

            const res = await fetch('/api/replicate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ version: modelVersion, input: inputData })
            });

            if (!res.ok) throw new Error('Error al conectar con el servidor.');

            let data = await res.json();

            // Polling if needed
            if (data.id && !data.output) {
                statusDiv.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Eliminando fondo...';

                const pollPrediction = async (id) => {
                    while (true) {
                        const pollRes = await fetch(`/api/poll?id=${id}`);
                        const pollData = await pollRes.json();
                        if (pollData.status === 'succeeded') return pollData;
                        if (pollData.status === 'failed') throw new Error('Falló la generación.');
                        await new Promise(r => setTimeout(r, 1000));
                    }
                };

                data = await pollPrediction(data.id);
            }

            if (data.output) {
                // Update Logo with result
                logoImg.src = data.output;
                statusDiv.innerHTML = '<i class="fa-solid fa-check"></i> Fondo eliminado';
            } else {
                throw new Error('No se recibió imagen.');
            }

        } catch (e) {
            console.error(e);
            statusDiv.innerHTML = `<span style="color:red">Error: ${e.message}</span>`;
        }
    },

    async notifyDownload(isPaid = false) {
        // Collect basic info
        const title = document.getElementById('preview-title')?.textContent || 'Postal Sin Título';
        const productId = this.params.productId || 'custom';

        // In a real app, we might ask for email first or get it from auth
        // Use a prompt for now if we want to capture it, or just notify "Anónimo" if that's acceptable
        // The user asked: "se me envie el mail donde tambien pone que acepta"
        // Implicitly, by clicking download they accept. But we need their email.

        // Let's prompt for email if we don't have it? 
        // Or assume the user just wants to know "someone" downloaded?
        // "se me envie el mail ... donde pone que acepta" -> suggests we need user data.
        // Let's Try to get it from local storage or ask? 
        // For a quick implementation without blocking flow too much, let's just send "Usuario Web" if we don't have login.
        // BUT, since the requirement implies a "contract/acceptance", usually you capture email first.

        // Ideally we would show a modal "Ingresa tu email para descargar".
        // Use prompt for simplicity as a first step or if auth handles it.
        // Given existing code doesn't seem to have auth, prompt is safest.

        let email = localStorage.getItem('user_email');
        if (!email) {
            // Optional: prompt or just send 'Anonymous'
            // If we really want to capture it:
            // email = prompt("Ingresa tu email para recibir tu descarga y aceptar los términos:");
            // if (email) localStorage.setItem('user_email', email);
            email = "Usuario Visitante (Email no capturado)";
        }

        const payload = {
            email: email,
            product_info: `${title} (ID: ${productId})`,
            is_paid: isPaid
        };

        fetch('/api/notify-download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error("Notification failed", err));
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

    promptEmail() {
        const existingModal = document.getElementById('email-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.id = 'email-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);';

        modal.innerHTML = `
            <div class="fade-in" style="background: white; padding: 2rem; border-radius: 1rem; max-width: 400px; width: 90%; position: relative;">
                <button onclick="document.getElementById('email-modal').remove()" style="position: absolute; top: 1rem; right: 1rem; border: none; background: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
                
                <h3 style="text-align: center; margin-bottom: 1rem;">¡Casi listo!</h3>
                <p style="text-align: center; color: var(--text-muted); margin-bottom: 1.5rem;">Introduce tu email para descargar tu felicitación gratis.</p>
                
                <form onsubmit="event.preventDefault(); router.saveEmailAndContinue();">
                    <div class="form-group">
                        <input type="email" id="input-email-collect" class="form-control" placeholder="tu@email.com" required>
                    </div>

                    <div style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8rem; color: var(--text-muted);">
                        <input type="checkbox" id="check-legal-accept" onchange="router.toggleEmailButton()" required style="margin-top: 0.2rem;">
                        <label for="check-legal-accept" style="line-height: 1.4;">
                            He leído y acepto la <a href="#" onclick="router.navigate('cookies'); return false;" style="text-decoration: underline;">Política de Privacidad</a> y el <a href="#" onclick="router.navigate('legal'); return false;" style="text-decoration: underline;">Aviso Legal</a>.
                        </label>
                    </div>

                    <button type="submit" id="btn-submit-email" class="cta-button" style="width: 100%; opacity: 0.5; pointer-events: none;">Continuar</button>
                    <p style="font-size: 0.7rem; color: #999; text-align: center; margin-top: 1rem;">
                        No te enviaremos spam. Solo novedades importantes.
                    </p>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    },

    toggleEmailButton() {
        const check = document.getElementById('check-legal-accept');
        const btn = document.getElementById('btn-submit-email');
        if (check && btn) {
            if (check.checked) {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            } else {
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
            }
        }
    },

    saveEmailAndContinue() {
        const emailInput = document.getElementById('input-email-collect');
        if (emailInput && emailInput.value) {
            localStorage.setItem('user_email', emailInput.value);
            document.getElementById('email-modal').remove();

            // Retry download
            router.downloadComposite();
        }
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
        // Enforce Email Collection
        const userEmail = localStorage.getItem('user_email');
        if (!userEmail) {
            router.promptEmail();
            return;
        }

        const previewArea = document.getElementById('preview-area');
        if (!previewArea) return;

        // Visual feedback
        // Visual feedback
        const btn = document.getElementById('btn-download-composite') || document.getElementById('btn-main-action');
        let originalText = '';
        if (btn) {
            originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando...';
            btn.disabled = true;
        }

        html2canvas(previewArea, { scale: 2, useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'mi_postal_navidad.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            // Notify server to send emails
            router.notifyDownload(false);

            if (btn) {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        }).catch(err => {
            console.error('Error al generar imagen:', err);
            alert('Error detallado: ' + (err.message || err));
            if (btn) {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }
};

// Make router globally available for inline onclick handlers
window.router = router;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check for payment success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment_success') === 'true') {
        localStorage.setItem('hasPaid', 'true');

        // Google Ads Conversion Tracking
        if (typeof gtag !== 'undefined') {
            const paidProductId = urlParams.get('product_id') || 'unknown';
            gtag('event', 'purchase', {
                'transaction_id': 'tx_' + Date.now(), // Unique ID per transaction
                'value': 2.00,
                'currency': 'EUR',
                'items': [{
                    'item_id': paidProductId,
                    'item_name': 'Magic AI Download'
                }]
            });
            // Specific Ads Conversion Event (Optional/Backup if 'purchase' isn't auto-linked)
            // gtag('event', 'conversion', {'send_to': 'AW-17808951951/label_if_provided', ...});
            console.log("Ads Conversion Tracked: Purchase 2.00 EUR");
        }

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

    // Start Router
    console.log('App initialized. SECTORS:', typeof SECTORS, 'PRODUCTS:', typeof PRODUCTS);
    router.init();

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
