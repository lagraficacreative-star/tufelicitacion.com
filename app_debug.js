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
            case 'search':
                this.renderSearch(main);
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
            default:
                this.renderHome(mainContent);
        }
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
            <h1 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Felicitaciones personalizadas para tu empresa</h1>
            <button class="cta-button" onclick="router.navigate('christmas-home')">Empieza a personalizar</button>
        </div>
    `;
            container.appendChild(hero);
            console.log('Hero section appended');

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
                < h2 class="section-title centered" > Elige tu sector</h2 >
                    <div class="grid-4" id="home-sectors-grid">
                        <!-- Sectors will be populated here -->
                    </div>
            `;
            container.appendChild(sectorsSection);

            // Populate Sectors Grid
            const sectorsGrid = sectorsSection.querySelector('#home-sectors-grid');
            SECTORS.forEach(sector => {
                const card = document.createElement('div');
                card.className = 'card';
                card.onclick = () => router.navigate('sector-detail', { sectorId: sector.id });
                card.innerHTML = `
                < div class="card-image-container" style = "aspect-ratio: 1/1; border-radius: 50%;" >
                <img src="${sector.image}" alt="${sector.name}" class="card-image">
            </div>
            <div class="card-content" style="text-align: center;">
                <h3 class="card-title">${sector.name}</h3>
            </div>
            `;
                sectorsGrid.appendChild(card);
            });

            // 4. AI Demo Section
            const aiSection = document.createElement('section');
            aiSection.className = 'section-container fade-in';
            aiSection.style.background = '#f8fafc';
            aiSection.style.padding = '4rem 2rem';
            aiSection.style.borderRadius = '1rem';
            aiSection.style.marginTop = '4rem';
            aiSection.innerHTML = `
                < div style = "display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;" >
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
    < h2 class="section-title centered" > Lo que dicen nuestros clientes</h2 >
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
        },

        renderChristmasHome(container) {
            // Hero Section
            const hero = document.createElement('section');
            hero.className = 'hero fade-in';
            hero.style.backgroundImage = "url('sectores/hero_slider.jpg')";
            hero.style.height = "85vh"; // Restore full height for this section
            hero.style.backgroundPosition = "center";
            hero.innerHTML = `
    < div class="hero-overlay" ></div >
        <div class="hero-content">
            <h1>Tu Postal de Navidad personalizada</h1>
        </div>
`;
            container.appendChild(hero);

            // Intro Text Section
            const introSection = document.createElement('section');
            introSection.className = 'section-container fade-in';
            introSection.style.textAlign = 'center';
            introSection.style.maxWidth = '800px';
            introSection.style.marginTop = '4rem';
            introSection.style.marginBottom = '2rem';
            introSection.innerHTML = `
    < p style = "font-size: 1.2rem; line-height: 1.8; color: var(--text-color);" >
        Nuestra plataforma permite a cualquier empresa crear contenidos totalmente personalizados de forma rápida, intuitiva y profesional.
                < br > <br>
                Transforma tus ideas en piezas visuales únicas y adapta cada imagen, mensaje o vídeo a tu identidad corporativa sin necesidad de conocimientos técnicos.
            </p>
`;
            container.appendChild(introSection);

            // Main Categories Section (Top)
            const categoriesSection = document.createElement('section');
            categoriesSection.className = 'section-container fade-in';
            categoriesSection.innerHTML = `
    < h2 class="section-title" > Selecciona el formato y sector</h2 >
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

            // Features Section
            const featuresSection = document.createElement('section');
            featuresSection.className = 'section-container fade-in';
            featuresSection.innerHTML = `
    < h2 class="section-title centered" >✨ Herramientas de Personalización</h2 >
        <div class="grid-3" style="gap: 2rem;">
            <!-- Feature 1: Design -->
            <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-color);">🎨</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">Diseño a tu medida</h3>
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
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">Estudio Magic AI</h3>
                <ul style="text-align: left; color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; list-style: none; padding: 0;">
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Cambio de Cara</strong>: ¡Sé el protagonista!</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fa-solid fa-image" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Cambio de Fondo</strong>: Elige escenario o sube el tuyo.</li>
                    <li><i class="fa-solid fa-film" style="color: #ff4081; margin-right: 0.5rem;"></i> <strong>Animación</strong>: Da vida y movimiento a la foto.</li>
                </ul>
            </div>

            <!-- Feature 3: Business -->
            <div style="background: #fff; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                <div style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--secondary-color);">💼</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 0.5rem;">Ideal Empresas</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">
                    ¿Necesitas felicitar a clientes o empleados?<br><br>
                        Crea postales profesionales con tu identidad corporativa en segundos. Descarga el resultado en alta calidad lista para compartir por WhatsApp o Redes.
                    </p>
                    </div>
            </div>
            `;
            container.appendChild(featuresSection);

            // Banner Section
            const banner = document.createElement('section');
            banner.className = 'banner-section fade-in';
            banner.style.backgroundImage = "url('sectores/inmobiliaria imagenes/ciudadestrella.png')";
            banner.innerHTML = `
            <div class="hero-overlay"></div>
            <h2 class="banner-text">Personaliza tu postal de navidad con fotografia o video</h2>
            `;
            container.appendChild(banner);

            // Featured Products Section (General)
            const productsSection = document.createElement('section');
            productsSection.className = 'section-container fade-in';
            productsSection.innerHTML = `
            <h2 class="section-title centered">Destacados</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => [58, 59, 60, 61].includes(p.id)).map(p => this.createProductCard(p)).join('')}
            </div>
            `;
            container.appendChild(productsSection);

            // Featured Postcards Section
            const postcardsSection = document.createElement('section');
            postcardsSection.className = 'section-container fade-in';
            postcardsSection.innerHTML = `
            <h2 class="section-title">Postales Navideñas</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => p.type === 'postcard').slice(0, 4).map(p => this.createProductCard(p)).join('')}
            </div>
            `;
            container.appendChild(postcardsSection);

            // Featured Videos Section
            const videosSection = document.createElement('section');
            videosSection.className = 'section-container fade-in';
            videosSection.innerHTML = `
            <h2 class="section-title">Vídeos Navideños</h2>
            <div class="grid-4">
                ${PRODUCTS.filter(p => p.type === 'video').slice(0, 4).map(p => this.createProductCard(p)).join('')}
            </div>
            `;
            container.appendChild(videosSection);

            // All Sectors Section (Icons)
            const allSectorsSection = document.createElement('section');
            allSectorsSection.className = 'section-container fade-in';
            allSectorsSection.innerHTML = `
            <h2 class="section-title">Todos los Sectores</h2>
            <div class="grid-4" style="text-align: center;">
                ${SECTORS.map(s => `
                        <div class="card" onclick="router.navigate('sector-detail', {sectorId: '${s.id}'})" style="padding: 2rem; border: 1px solid var(--border-color); border-radius: 1rem; transition: all 0.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
                            <i class="fa-solid ${s.icon}" style="font-size: 3rem; color: var(--text-color);"></i>
                            <h3 class="card-title" style="margin: 0; font-family: var(--font-heading); font-size: 1.2rem;">${s.name}</h3>
                        </div>
                `).join('')}
            </div>
            `;
            container.appendChild(allSectorsSection);
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
            const tabContent = document.getElementById(`ai - tab - ${tabName} `);
            const tabBtn = document.getElementById(`tab - btn - ${tabName} `);

            if (tabContent) tabContent.style.display = 'block';
            if (tabBtn) tabBtn.classList.add('active');
        },

    async handleAIAction(action) {
            // Common setup
            const statusDiv = document.getElementById('ai-status-msg');
            statusDiv.style.display = 'block';
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

                let modelVersion = '';
                let inputData = {};

                if (action === 'faceswap') {
                    const input = document.getElementById('input-face-swap');
                    if (!input) throw new Error('Input de archivo no encontrado');
                    if (!input.files || !input.files[0]) throw new Error('Sube una foto tuya primero.');

                    const userFile = input.files[0];
                    const userImageBase64 = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = () => reject(reader.error);
                        reader.readAsDataURL(userFile);
                    });
                    console.log('User Image Base64 generated');

                    // lucataco/faceswap (InsightFace)
                    modelVersion = "9a4298548422074c3f57258c5d544497314ae4112df80d116f0d2109e843d20d";
                    inputData = {
                        target_image: targetImageBase64,
                        swap_image: userImageBase64,
                        enhance_face: false
                    };
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
                            'Content-Type': 'application/json',
                            'Authorization': `Token ${cleanToken} `
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
                            const res = await fetch(`/ api / poll ? id = ${id} `);
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

                } else {
                    throw new Error("No se recibió salida de la IA. Inténtalo de nuevo.");
                }

            } catch (error) {
                console.error('HandleAIAction Error:', error);
                statusDiv.innerHTML = `< span style = "color: red;" > Error: ${error.message || error}</span > `;
            }
        },

    async handlePurchase() {
            const btn = document.querySelector('.cta-button');
            const originalText = btn.innerHTML;

            // 1. Simulate Payment Processing
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Procesando pago...';

            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds

            // 2. Payment Success
            btn.style.backgroundColor = '#4CAF50';
            btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Pago Correcto!';

            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

            // 3. Start Download
            btn.innerHTML = '<i class="fa-solid fa-download"></i> Generando archivo...';

            try {
                await this.downloadComposition();

                // Reset button after success
                setTimeout(() => {
                    btn.disabled = false;
                    btn.style.backgroundColor = ''; // Reset to default
                    btn.innerHTML = originalText;
                    alert('¡Gracias por tu compra! Tu postal se ha descargado.');
                }, 1000);

            } catch (error) {
                console.error('Error generating image:', error);
                btn.innerHTML = 'Error al descargar';
                btn.disabled = false;
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
                const btn = document.getElementById(`btn - format - ${b} `);
                if (btn) btn.classList.remove('active');
            });
            document.getElementById(`btn - format - ${format} `).classList.add('active');

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
    < div class="section-container fade-in" >
                <h2 class="section-title">Mi Tienda - Colecciones</h2>
                <div class="grid-4">
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Mis Favoritos</h3>
                            <p>0 artículos</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <h3 class="card-title">Descargas Disponibles</h3>
                            <p>No tienes descargas pendientes.</p>
                        </div>
                    </div>
                </div>
            </div >
    `;
        },

        renderAccountOrders(container) {
            container.innerHTML = `
    < div class="section-container fade-in" >
                <h2 class="section-title">Historial de Pedidos</h2>
                <div style="background: var(--card-bg); border: var(--glass-border); border-radius: 1rem; padding: 2rem; text-align: center;">
                    <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p>Aún no has realizado ningún pedido.</p>
                    <a href="#" onclick="router.navigate('home')" class="btn-outline" style="display: inline-block; width: auto; margin-top: 1rem; padding: 0.5rem 2rem;">Ir a comprar</a>
                </div>
            </div >
    `;
        },

        createProductCard(product) {
            const sectorName = SECTORS.find(s => s.id === product.sector)?.name || product.sector;
            // Encode the URL to handle spaces and special characters
            const encodedImage = encodeURI(product.image);

            let mediaHtml;
            if (product.type === 'video') {
                // Render video tag for video products
                mediaHtml = `
    < video
src = "${encodedImage}"
class="card-image"
muted
loop
playsinline
preload = "metadata"
onmouseover = "this.play()"
onmouseout = "this.pause(); this.currentTime = 0;"
style = "object-fit: cover; width: 100%; height: 100%;"
    ></video >
        <div style="position: absolute; top: 0.5rem; right: 0.5rem; background: rgba(0,0,0,0.6); color: white; padding: 0.2rem 0.5rem; border-radius: 0.25rem; font-size: 0.7rem; pointer-events: none;">
            <i class="fa-solid fa-video"></i>
        </div>
`;
            } else {
                // Render img tag for standard products
                mediaHtml = `< img src = "${encodedImage}" alt = "${product.title}" class="card-image" > `;
            }

            return `
    < div class="card" onclick = "router.navigate('product', {productId: ${product.id}})" >
                <div class="card-image-container" style="position: relative;">
                    ${mediaHtml}
                </div>
                <div class="card-content">
                    <span class="card-category" style="font-size: 0.7rem; color: var(--secondary-color); text-transform: uppercase;">${sectorName}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <span class="card-price">${product.price.toFixed(2)}€</span>
                </div>
            </div >
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
