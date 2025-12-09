import os
import json
import re

root_dir = 'sectores'
extra_dir = 'canvia tu cara' # New directory for Face Swap Special

# 1. Define Sectors (ID, Name, Icon)
# We will fill 'image' dynamically
sectors_config = [
    { 'id': 'restauracion', 'name': 'Restauración', 'icon': 'fa-utensils' },
    { 'id': 'comercio', 'name': 'Comercio', 'icon': 'fa-store' },
    { 'id': 'estetica', 'name': 'Estética', 'icon': 'fa-spa' },
    { 'id': 'servicios', 'name': 'Servicios', 'icon': 'fa-handshake' },
    { 'id': 'salud', 'name': 'Salud', 'icon': 'fa-heart-pulse' },
    { 'id': 'negocios', 'name': 'Negocios', 'icon': 'fa-briefcase' },
    { 'id': 'opticas', 'name': 'Ópticas', 'icon': 'fa-glasses' },
    { 'id': 'construccion', 'name': 'Construcción', 'icon': 'fa-helmet-safety' },
    { 'id': 'inmobiliaria', 'name': 'Inmobiliaria', 'icon': 'fa-house' },
    { 'id': 'arte', 'name': 'Arte', 'icon': 'fa-palette' },
    { 'id': 'particulares', 'name': 'Particulares', 'icon': 'fa-user' },
    { 'id': 'automocion', 'name': 'Automoción', 'icon': 'fa-car' },
    { 'id': 'formacion', 'name': 'Formación', 'icon': 'fa-graduation-cap' },
    { 'id': 'peluqueria', 'name': 'Peluquería', 'icon': 'fa-scissors' },
    { 'id': 'industria', 'name': 'Industria', 'icon': 'fa-industry' },
    { 'id': 'limpieza', 'name': 'Limpieza', 'icon': 'fa-broom' },
    { 'id': 'ferreteria', 'name': 'Ferretería', 'icon': 'fa-tools' },
    { 'id': 'deporte', 'name': 'Deporte', 'icon': 'fa-dumbbell' },
    { 'id': 'alimentacion', 'name': 'Alimentación', 'icon': 'fa-apple-whole' },
    { 'id': 'moda', 'name': 'Moda', 'icon': 'fa-shirt' },
    { 'id': 'humor', 'name': 'Humor', 'icon': 'fa-face-laugh-beam' },
    { 'id': 'faceswap_special', 'name': 'Cambia tu cara', 'icon': 'fa-user-astronaut' } # New Sector
]

# Map folder names to Sector IDs
folder_map = {
    'alimentacion video': 'alimentacion',
    'alimentacionimagenes': 'alimentacion',
    'arte imagenes': 'arte',
    'automocion imagenes': 'automocion',
    'ciudades imagenes': 'servicios',
    'comercio imagenes': 'comercio',
    'comercio videos': 'comercio',
    'construccion imagenes': 'construccion',
    'contrucion videos': 'construccion',
    'deporte imagenes': 'deporte',
    'estetica imagenes': 'estetica',
    'estetica videos': 'estetica',
    'ferreteria imagenes': 'ferreteria',
    'formacion imagenes': 'formacion',
    'humor imagenes': 'humor',
    'industriales': 'industria',
    'inmobiliaria imagenes': 'inmobiliaria',
    'inmobiliaria videos': 'inmobiliaria',
    'limpieza imagenes': 'limpieza',
    'moda imagenes': 'moda',
    'moda videos': 'moda',
    'negocios imagenes': 'negocios',
    'opticaimagenes': 'opticas',
    'particular imagenes': 'particulares',
    'peluqueria imagenes': 'peluqueria',
    'peluqueria videos': 'peluqueria',
    'restauracionimagenes': 'restauracion',
    'salud imagenes': 'salud',
    'salud videos': 'salud',
    'canvia tu cara': 'faceswap_special' # Direct mapping if needed, but we handle this separate folder
}

products = []
sector_images = {} 
id_counter = 1

def process_file(root, file, sector_id):
    global id_counter
    file_lower = file.lower()
    if file_lower.startswith('.'): return

    # Determine Type
    p_type = None
    if file_lower.endswith(('.png', '.jpg', '.jpeg', '.webp')):
        p_type = 'postcard'
    elif file_lower.endswith(('.mp4', '.mov', '.webm')):
        p_type = 'video'
    
    if p_type:
        rel_path = os.path.join(root, file)
        
        # Title
        name_no_ext = os.path.splitext(file)[0]
        clean_name = name_no_ext.replace('-', ' ').replace('_', ' ').replace('.', ' ')
        title = clean_name.title()
        title = title.replace('Unnamed', 'Diseño').replace('Copia', '').strip()
        if title == "Diseño":
            title = f"Diseño {sector_id.capitalize()} {id_counter}"
        
        # Price
        price = 15.00 if p_type == 'postcard' else 25.00
        
        # Description
        desc_type = "Felicitación navideña" if p_type == 'postcard' else "Vídeo navideño"
        description = f"{desc_type} exclusiva para el sector {sector_id}."

        # Detect Face Count
        face_count = 0
        
        # 1. By Sector
        if sector_id in ['faceswap_special', 'moda']:
            face_count = 1 # Default to 1
        
        # 2. By Filename (override if specific number mentioned)
        # Look for "X Personas", "X amigos", "Pareja" (2)
        match_num = re.search(r'(\d+)\s*(personas|amigos|caras)', title, re.IGNORECASE)
        if match_num:
            face_count = int(match_num.group(1))
        elif 'pareja' in title.lower():
            face_count = 2
            
        product = {
            "id": id_counter,
            "title": title,
            "type": p_type,
            "sector": sector_id,
            "price": price,
            "image": rel_path,
            "description": description,
            "faceCount": face_count
        }
        products.append(product)
        id_counter += 1
        
        if p_type == 'postcard' and sector_id not in sector_images:
            sector_images[sector_id] = rel_path

print("Scanning 'sectores'...")
# Main Scan
for root, dirs, files in os.walk(root_dir):
    parent_folder = os.path.basename(root)
    sector_id = folder_map.get(parent_folder)
    
    if not sector_id:
        lower_folder = parent_folder.lower()
        if 'alimentacion' in lower_folder: sector_id = 'alimentacion'
        elif 'restauracion' in lower_folder: sector_id = 'restauracion'
        elif 'construccion' in lower_folder or 'contrucion' in lower_folder: sector_id = 'construccion'
        elif 'comercio' in lower_folder: sector_id = 'comercio'
        elif 'estetica' in lower_folder: sector_id = 'estetica'
        elif 'peluqueria' in lower_folder: sector_id = 'peluqueria'
        elif 'salud' in lower_folder: sector_id = 'salud'
        elif 'inmobiliaria' in lower_folder: sector_id = 'inmobiliaria'
        elif 'moda' in lower_folder: sector_id = 'moda'
    
    if sector_id:
        for file in files:
            process_file(root, file, sector_id)

print("Scanning 'canvia tu cara'...")
# Extra Scan for 'canvia tu cara' in root
if os.path.exists(extra_dir):
    for file in os.listdir(extra_dir):
        process_file(extra_dir, file, 'faceswap_special')


# Generate JS Content
js_content = "// Data Models\n"

# SECTORS
js_content += "const SECTORS = [\n"
for s in sectors_config:
    img = sector_images.get(s['id'], 'sectores/hero_slider.jpg')
    js_content += f"    {{ id: '{s['id']}', name: '{s['name']}', icon: '{s['icon']}', image: '{img}' }},\n"
js_content += "];\n\n"

# PRODUCTS
js_content += "const PRODUCTS = [\n"
for p in products:
    js_content += "    {\n"
    js_content += f"        id: {p['id']},\n"
    js_content += f"        title: \"{p['title']}\",\n"
    js_content += f"        type: \"{p['type']}\",\n"
    js_content += f"        sector: \"{p['sector']}\",\n"
    js_content += f"        price: {p['price']:.2f},\n"
    js_content += f"        image: \"{p['image']}\",\n"
    js_content += f"        description: \"{p['description']}\",\n"
    js_content += f"        faceCount: {p['faceCount']}\n"
    js_content += "    },\n"
js_content += "];\n"

with open('products_data.js', 'w') as f:
    f.write(js_content)

print(f"Generated {len(products)} products and {len(sectors_config)} sectors.")
print("Saved to products_data.js")
