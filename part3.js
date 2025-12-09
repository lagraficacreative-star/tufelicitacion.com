
// Router & State Management
const router = {
    currentPage: 'home',
    params: {},

    navigate(page, params = {}) {
        this.currentPage = page;
        this.params = params;
        this.render();
        window.scrollTo(0, 0);
    },

    render() {
        const main = document.getElementById('main-content');
        main.innerHTML = ''; // Clear content

        switch (this.currentPage) {
            case 'home':
                this.renderHome(main);
                break;
            case 'postcards':
                this.renderCatalog(main, 'postcard');
                break;
            case 'videos':
                this.renderCatalog(main, 'video');
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
            default:
                this.renderHome(main);
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
        // Hero Section
        const hero = document.createElement('section');
        hero.className = 'hero fade-in';
        hero.style.backgroundImage = "url('sectores/hero_slider.jpg')";
        hero.innerHTML = `
        <div class="hero-overlay"></div>
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
            <p style="font-size: 1.2rem; line-height: 1.8; color: var(--text-color);">
                Nuestra plataforma permite a cualquier empresa crear contenidos totalmente personalizados de forma rápida, intuitiva y profesional.
                <br><br>
                Transforma tus ideas en piezas visuales únicas y adapta cada imagen, mensaje o vídeo a tu identidad corporativa sin necesidad de conocimientos técnicos.
            </p>
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

        // Features Section (What you can do)
        const featuresSection = document.createElement('section');
        featuresSection.className = 'section-container fade-in';
        featuresSection.innerHTML = `
            <h2 class="section-title centered">🔧 ¿Qué puedes hacer en la web?</h2>
            <div class="grid-4" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                <!-- Feature 1 -->
                <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-color);">Personalizar imágenes</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                        Añade tu logo, colores corporativos, textos o elementos gráficos a plantillas diseñadas para destacar en redes sociales, campañas publicitarias y comunicación interna.
                    </p>
                </div>

                <!-- Feature 2 -->
                <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">✍️</div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-color);">Crear textos adaptados</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                        Genera mensajes comerciales, descripciones de producto, copys publicitarios o textos corporativos ajustados al tono, estilo y objetivos de tu empresa.
                    </p>
                </div>

                <!-- Feature 3 -->
                <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; border: 1px solid var(--border-color);">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎬</div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-color);">Editar vídeos fácilmente</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                        Actualiza títulos, inserta tu identidad visual, añade música, adapta formatos y crea versiones específicas para cada canal (Instagram, TikTok, YouTube…).
                    </p>
                </div>

                <!-- Feature 4 -->
                <div style="background: #fff0f0; padding: 2rem; border-radius: 1rem; border: 1px solid #ffe4e4;">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">💼</div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.2rem; margin-bottom: 1rem; color: var(--secondary-color);">Ideal para empresas</h3>
                    <ul style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; list-style-type: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">✓ Profesionalizar su imagen</li>
                        <li style="margin-bottom: 0.5rem;">✓ Ahorrar tiempo en creación</li>
                        <li style="margin-bottom: 0.5rem;">✓ Identidad visual coherente</li>
                        <li style="margin-bottom: 0.5rem;">✓ Materiales para campañas</li>
                        <li>✓ Contenidos dinámicos</li>
                    </ul>
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
                
                <!-- Sector Submenu -->
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

        if (!product) {
            container.innerHTML = '<div class="fade-in"><p style="text-align:center; padding: 2rem;">Producto no encontrado</p></div>';
            return;
        }

        container.innerHTML = `
            <div class="section-container fade-in">
                <div class="customizer-container">
                    <div class="preview-area" id="preview-area">
                        <img src="${product.image}" alt="${product.title}" class="preview-image-bg">
                        <div class="preview-overlay" id="preview-overlay">
                            <h2 id="preview-title" class="preview-text-title draggable" data-type="title"></h2>
                            <h3 id="preview-subtitle" class="preview-text-subtitle draggable" data-type="subtitle"></h3>
                            <div id="preview-logo-container" class="preview-logo-container draggable" data-type="logo" style="display: none;">
                                <img id="preview-logo" class="preview-logo-img" src="" alt="Logo">
                            </div>
                        </div>
                    </div>
                    <div class="controls-area" style="max-height: 800px; overflow-y: auto;">
                        <h2 class="card-title" style="font-size: 2rem;">${product.title}</h2>
                        <span class="card-category">Formato Reel (9:16)</span>
                        <p class="card-price">${product.price.toFixed(2)}€</p>
                        
                        <p style="margin-top: 1rem; margin-bottom: 2rem; color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; border-left: 3px solid var(--secondary-color); padding-left: 1rem;">
                            Ya has escogido tu imagen. Ahora personaliza el texto, ajusta su tamaño, añade tu logotipo y utiliza nuestra herramienta para quitarle el fondo automáticamente.
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
                            <div style="display: grid; grid-template-columns: 1fr auto auto; gap: 0.5rem; margin-top: 0.5rem; align-items: center;">
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
                             <div style="display: flex; gap: 1rem; margin-top: 0.5rem; justify-content: flex-end;">
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

                        <!-- Face Swap Controls -->
                        <div class="form-group" style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 1.5rem;">
                            <label style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fa-solid fa-face-smile" style="color: var(--secondary-color);"></i> 
                                Pon tu cara (IA)
                            </label>
                            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">
                                Sube una foto tuya y la IA la integrará en el personaje de la postal.
                            </p>
                            <input type="file" id="input-face-swap" class="form-control" accept="image/*">
                            <button class="btn-outline" onclick="router.handleFaceSwap()" style="width: 100%; margin-top: 0.5rem; border-color: var(--secondary-color); color: var(--secondary-color);">
                                ✨ Intercambiar Cara
                            </button>
                        </div>

                        <button class="cta-button" onclick="router.handlePurchase()" style="width: 100%; border: none; cursor: pointer; margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                            <i class="fa-solid fa-cart-shopping"></i> Comprar y Descargar
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.setupDraggable();
        this.updatePreview();
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
        link.download = `postal-navidad-${Date.now()}.png`;
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

            activeElement.style.left = `${leftPercent}%`;
            activeElement.style.top = `${topPercent}%`;

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
        const font = document.getElementById('select-font').value;

        const subtitle = document.getElementById('input-subtitle').value;
        const subtitleTop = document.getElementById('input-subtitle-top').value;
        const subtitleSize = document.getElementById('input-subtitle-size').value;
        const subtitleBold = document.getElementById('input-subtitle-bold').checked;
        const subtitleItalic = document.getElementById('input-subtitle-italic').checked;

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

            if (document.activeElement !== previewTitle) {
                previewTitle.style.top = titleTop + '%';
            }
        }

        if (previewSubtitle) {
            previewSubtitle.textContent = subtitle;
            previewSubtitle.style.fontSize = subtitleSize + 'px';
            previewSubtitle.style.fontWeight = subtitleBold ? 'bold' : 'normal';
            previewSubtitle.style.fontStyle = subtitleItalic ? 'italic' : 'normal';

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
            <div class="section-container fade-in">
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
            </div>
        `;
    },

    renderAccountOrders(container) {
        container.innerHTML = `
            <div class="section-container fade-in">
                <h2 class="section-title">Historial de Pedidos</h2>
                <div style="background: var(--card-bg); border: var(--glass-border); border-radius: 1rem; padding: 2rem; text-align: center;">
                    <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <p>Aún no has realizado ningún pedido.</p>
                    <a href="#" onclick="router.navigate('home')" class="btn-outline" style="display: inline-block; width: auto; margin-top: 1rem; padding: 0.5rem 2rem;">Ir a comprar</a>
                </div>
            </div>
        `;
    },

    createProductCard(product) {
        const sectorName = SECTORS.find(s => s.id === product.sector)?.name || product.sector;
        return `
            <div class="card" onclick="router.navigate('product', {productId: ${product.id}})">
                <div class="card-image-container">
                    <img src="${product.image}" alt="${product.title}" class="card-image">
                </div>
                <div class="card-content">
                    <span class="card-category" style="font-size: 0.7rem; color: var(--secondary-color); text-transform: uppercase;">${sectorName}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <span class="card-price">${product.price.toFixed(2)}€</span>
                </div>
            </div>
        `;
    }
};

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

    // Start Router
    router.render();
});
