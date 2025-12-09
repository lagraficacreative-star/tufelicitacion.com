import os
import json

# Define the root directory
root_dir = 'sectores'

# Map folder names to sector IDs
sector_map = {
    'alimentacionimagenes': 'alimentacion',
    'restauracionimagenes': 'restauracion',
    'automocion imagenes': 'automocion',
    'formacion imagenes': 'formacion',
    'moda imagenes': 'moda',
    'comercio imagenes': 'comercio'
}

# Existing products to preserve metadata (simplified for this script, 
# in reality I'd parse the existing JS but for now I'll just generate clean new ones 
# or try to match filenames if I had the full list in memory. 
# Since I want to be fast, I'll generate a fresh list but try to use nice titles).

products = []
id_counter = 1

# Walk the directory
for root, dirs, files in os.walk(root_dir):
    parent_folder = os.path.basename(root)
    if parent_folder in sector_map:
        sector = sector_map[parent_folder]
        
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                # Construct image path
                image_path = os.path.join(root, file)
                
                # Generate a title from filename
                # Remove extension
                name_no_ext = os.path.splitext(file)[0]
                # Replace hyphens/underscores with spaces
                clean_name = name_no_ext.replace('-', ' ').replace('_', ' ').replace('.', ' ')
                # Capitalize
                title = clean_name.title()
                
                # Clean up some common messy patterns if needed
                title = title.replace('Unnamed', 'Diseño').replace('Copia', '').strip()
                if title == "Diseño":
                    title = f"Diseño {sector.capitalize()} {id_counter}"
                
                # Create product entry
                product = {
                    "id": id_counter,
                    "title": title,
                    "type": "postcard", # Default to postcard for images
                    "sector": sector,
                    "price": 15.00,
                    "image": image_path,
                    "description": f"Felicitación navideña exclusiva para el sector {sector}."
                }
                
                products.append(product)
                id_counter += 1

# Print the JS array
print("const PRODUCTS = [")
for p in products:
    print(f"    {{")
    print(f"        id: {p['id']},")
    print(f"        title: \"{p['title']}\",")
    print(f"        type: \"{p['type']}\",")
    print(f"        sector: \"{p['sector']}\",")
    print(f"        price: {p['price']:.2f},")
    print(f"        image: \"{p['image']}\",")
    print(f"        description: \"{p['description']}\"")
    print(f"    }},")
print("];")
