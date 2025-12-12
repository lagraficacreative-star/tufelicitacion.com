
import os

file_path = "products_data.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replacements for Image Paths (ñ -> n)
# We must capture the exact sequences found in the file which likely match the filenames before rename
# But safer is to just replace any 'ñ' or 'ñ' in lines starting with 'image:'
lines = content.split('\n')
new_lines = []

for line in lines:
    if 'image:' in line:
        # Replace ñ in image paths
        line = line.replace('ñ', 'n').replace('ñ', 'n')
        
    # Replacements for Titles (Fixing the weird formatting user reported)
    if 'title:' in line:
        # Map specific weird titles to nice ones
        replacements = {
            "ManzanamontañA": "Manzana Montaña",
            "PeluqueriamuñEca": "Peluquería Muñeca",
            "PestañAnavidad": "Pestaña Navidad", 
            "PerronavideñO": "Perro Navideño",
            "Oso NavideñO": "Oso Navideño",
            "Gato NavideñO": "Gato Navideño",
            "UñAsnavidad": "Uñas Navidad",
            "UñAsadvientonavidad": "Uñas Adviento",
            "SantaclausniñOs": "Santa Claus Niños",
            "EstrellaniñOs": "Estrella Niños",
            "SantaclausyniñOs": "Santa Claus y Niños",
            "Vestido Chocolate NiñO": "Vestido Chocolate Niño",
            "ConstruccionmuñEcos": "Construcción Muñecos"
        }
        for bad, good in replacements.items():
            if bad in line:
                line = line.replace(bad, good)
                
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))
